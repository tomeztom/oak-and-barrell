#!/usr/bin/env bash
set -euo pipefail

# Image to WebP converter
# Usage: convert.sh <url> <width> [height] [filename] [quality]

URL="${1:?Usage: convert.sh <url> <width> [height] [filename] [quality]}"
WIDTH="${2:?Width is required}"
HEIGHT="${3:-auto}"
FILENAME="${4:-}"
QUALITY="${5:-80}"

# Determine project root (find nearest package.json going up)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR" && while [ ! -f package.json ] && [ "$PWD" != "/" ]; do cd ..; done; pwd)"

OUTPUT_DIR="$PROJECT_ROOT/public/images"
mkdir -p "$OUTPUT_DIR"

# Derive filename from URL if not provided
if [ -z "$FILENAME" ]; then
  FILENAME=$(basename "$URL" | sed 's/\?.*//; s/\.[^.]*$//; s/[^a-zA-Z0-9_-]/-/g')
fi

# Create temp directory for intermediate files
TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

DOWNLOADED="$TMPDIR/original"
RESIZED="$TMPDIR/resized.png"
OUTPUT="$OUTPUT_DIR/${FILENAME}.webp"

echo "Downloading image from: $URL"
curl -fsSL -o "$DOWNLOADED" "$URL"

# Detect the downloaded file type
FILE_TYPE=$(file --brief --mime-type "$DOWNLOADED")
echo "Detected file type: $FILE_TYPE"

# Build ffmpeg scale filter
if [ "$HEIGHT" = "auto" ] || [ "$HEIGHT" = "" ]; then
  SCALE="scale=${WIDTH}:-2"
else
  SCALE="scale=${WIDTH}:${HEIGHT}"
fi

echo "Resizing to ${WIDTH}x${HEIGHT:-auto}..."
ffmpeg -y -i "$DOWNLOADED" -vf "$SCALE" -frames:v 1 "$RESIZED" -loglevel error

echo "Converting to WebP (quality: $QUALITY)..."
cwebp -q "$QUALITY" "$RESIZED" -o "$OUTPUT" -quiet

# Report results
FILESIZE=$(stat -f%z "$OUTPUT" 2>/dev/null || stat -c%s "$OUTPUT" 2>/dev/null)
FILESIZE_KB=$((FILESIZE / 1024))

echo ""
echo "Done!"
echo "  Output: $OUTPUT"
echo "  Size:   ${FILESIZE_KB} KB"
echo "  Path:   public/images/${FILENAME}.webp"

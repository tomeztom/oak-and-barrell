---
name: image-to-webp
description: Download an image from a URL, resize it, and convert it to WebP format. Use when the user wants to download stock photos (e.g. from Pexels, Unsplash) and prepare them for web use. Stores optimized WebP files in the public folder.
argument-hint: <url> <width> [height] [filename]
disable-model-invocation: false
allowed-tools: Bash(bash *), Bash(curl *), Read
---

# Image to WebP Converter

Download an image from a URL, resize it, and convert it to optimized WebP for use in the project.

## How to use

Run the bundled conversion script:

```bash
bash ${CLAUDE_SKILL_DIR}/scripts/convert.sh <url> <width> [height] [filename] [quality]
```

### Parameters

| Parameter  | Required | Description                                              |
|------------|----------|----------------------------------------------------------|
| `url`      | Yes      | The image URL to download                                |
| `width`    | Yes      | Target width in pixels                                   |
| `height`   | No       | Target height in pixels (default: auto / proportional)   |
| `filename` | No       | Output filename without extension (default: derived from URL) |
| `quality`  | No       | WebP quality 1-100 (default: 80)                         |

### Examples

```bash
# Download and resize to 1200px wide, auto height
bash ${CLAUDE_SKILL_DIR}/scripts/convert.sh "https://images.pexels.com/photos/12345/pexels-photo-12345.jpeg" 1200

# Download, resize to exact dimensions, custom name
bash ${CLAUDE_SKILL_DIR}/scripts/convert.sh "https://images.pexels.com/photos/12345/pexels-photo-12345.jpeg" 800 600 hero-banner

# With custom quality
bash ${CLAUDE_SKILL_DIR}/scripts/convert.sh "https://images.pexels.com/photos/12345/pexels-photo-12345.jpeg" 1200 auto hero-banner 90
```

## Workflow

1. Parse the user's arguments: extract the URL, desired dimensions, optional filename, and quality
2. Run the script with the appropriate parameters
3. Report the output path and final file size to the user

## Important notes

- The output file is saved to `public/images/` in the project root
- If the `public/images/` directory doesn't exist, the script creates it
- Height set to `auto` or omitted means proportional scaling
- Uses `ffmpeg` for resizing and `cwebp` for WebP conversion
- Temporary files are cleaned up automatically

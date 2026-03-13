export type BadgeType =
  | "chefsPick"
  | "signature"
  | "popular"
  | "vegetarian"
  | "premium"
  | "bestSeller"
  | "houseFavorite"
  | "dailySpecial"
  | "forTwo"
  | "local"
  | "byTheGlass"
  | "sommelierPick"
  | "nonAlcoholic";

export type Category =
  | "Appetizers"
  | "Sushi & Sashimi"
  | "Prime Steaks"
  | "Burgers & Grills"
  | "Craft Beverages"
  | "Desserts"
  | "Sides";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  badge?: BadgeType;
  image: string;
}

export const CATEGORIES: Category[] = [
  "Appetizers",
  "Sushi & Sashimi",
  "Prime Steaks",
  "Burgers & Grills",
  "Craft Beverages",
  "Desserts",
  "Sides",
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "truffle-burrata",
    name: "Truffle Burrata",
    description: "Creamy burrata, black truffle, arugula, aged balsamic",
    price: 22,
    category: "Appetizers",
    badge: "chefsPick",
    image: "/images/menu/truffle-burrata.webp",
  },
  {
    id: "wagyu-tartare",
    name: "Wagyu Tartare",
    description: "Hand-cut wagyu, quail egg, capers, cornichons, grilled sourdough",
    price: 28,
    category: "Appetizers",
    badge: "premium",
    image: "/images/menu/wagyu.webp",
  },
  {
    id: "hamachi-crudo",
    name: "Hamachi Crudo",
    description: "Yellowtail, yuzu vinaigrette, jalapeño, cilantro oil",
    price: 24,
    category: "Appetizers",
    badge: "signature",
    image: "/images/menu/hamachi.webp",
  },
  {
    id: "truffle-edamame",
    name: "Truffle Edamame",
    description: "Steamed edamame, truffle salt, shichimi togarashi",
    price: 12,
    category: "Appetizers",
    badge: "vegetarian",
    image: "/images/menu/edamame.webp",
  },
  {
    id: "aged-tuna-tataki",
    name: "Aged Tuna Tataki",
    description: "Seared bluefin tuna, ponzu, garlic chips, micro shiso",
    price: 26,
    category: "Appetizers",
    image: "/images/menu/aged-tuna.webp",
  },
  {
    id: "shrimp-tempura",
    name: "Shrimp Tempura",
    description: "Tiger shrimp, light batter, tentsuyu dipping sauce, grated daikon",
    price: 18,
    category: "Appetizers",
    badge: "popular",
    image: "/images/menu/shrimp-tempura.webp",
  },
  {
    id: "beef-carpaccio",
    name: "Beef Carpaccio",
    description: "Thinly sliced beef, arugula, shaved parmesan, truffle aioli",
    price: 20,
    category: "Appetizers",
    image: "/images/menu/beef-carpaccio.webp",
  },
  // Sushi & Sashimi
  {
    id: "dragon-roll",
    name: "Dragon Roll",
    description: "Eel, avocado, cucumber, unagi sauce, sesame",
    price: 24,
    category: "Sushi & Sashimi",
    badge: "bestSeller",
    image: "/images/menu/dragon-roll.webp",
  },
  {
    id: "toro-sashimi",
    name: "Toro Sashimi",
    description: "Buttery bluefin toro, chef garnish, ponzu pearls",
    price: 38,
    category: "Sushi & Sashimi",
    badge: "premium",
    image: "/images/menu/toro-sashimi.webp",
  },
  {
    id: "salmon-nigiri",
    name: "Salmon Nigiri Set",
    description: "6-piece Atlantic salmon nigiri, wasabi, pickled ginger",
    price: 22,
    category: "Sushi & Sashimi",
    badge: "popular",
    image: "/images/menu/salmon-nigiri.webp",
  },
  {
    id: "spicy-tuna-roll",
    name: "Spicy Tuna Roll",
    description: "Fresh tuna, spicy mayo, cucumber, sriracha drizzle",
    price: 18,
    category: "Sushi & Sashimi",
    image: "/images/menu/spicy-tuna-roll.webp",
  },
  {
    id: "omakase-platter",
    name: "Chef's Omakase",
    description: "12-piece chef's selection, seasonal fish, premium cuts",
    price: 85,
    category: "Sushi & Sashimi",
    badge: "chefsPick",
    image: "/images/menu/omakase.webp",
  },
  {
    id: "rainbow-roll",
    name: "Rainbow Roll",
    description: "California roll topped with assorted sashimi, avocado",
    price: 22,
    category: "Sushi & Sashimi",
    badge: "houseFavorite",
    image: "/images/menu/rainbow-roll.webp",
  },
  {
    id: "unagi-nigiri",
    name: "Unagi Nigiri Set",
    description: "4-piece freshwater eel nigiri, sweet soy glaze",
    price: 20,
    category: "Sushi & Sashimi",
    image: "/images/menu/aged-tuna.webp",
  },
  {
    id: "yellowtail-jalapeno",
    name: "Yellowtail Jalapeño",
    description: "Thin-sliced yellowtail, jalapeño, ponzu, yuzu kosho",
    price: 26,
    category: "Sushi & Sashimi",
    badge: "signature",
    image: "/images/menu/hamachi.webp",
  },
  // Prime Steaks
  {
    id: "prime-ribeye",
    name: "Prime Ribeye",
    description: "16oz bone-in ribeye, herb butter, roasted garlic, seasonal vegetables",
    price: 62,
    category: "Prime Steaks",
    badge: "signature",
    image: "/images/menu/prime-ribeye.webp",
  },
  {
    id: "filet-mignon",
    name: "Filet Mignon",
    description: "8oz center-cut filet, truffle demi-glace, potato purée",
    price: 58,
    category: "Prime Steaks",
    badge: "popular",
    image: "/images/menu/filet-mignon.webp",
  },
  {
    id: "ny-strip",
    name: "New York Strip",
    description: "14oz dry-aged strip, peppercorn crust, cognac cream sauce",
    price: 54,
    category: "Prime Steaks",
    image: "/images/menu/ny-strip.webp",
  },
  {
    id: "t-bone",
    name: "T-Bone Steak",
    description: "24oz T-bone, chimichurri, grilled onions, bone marrow butter",
    price: 68,
    category: "Prime Steaks",
    badge: "forTwo",
    image: "/images/menu/t-bone.webp",
  },
  {
    id: "wagyu-a5",
    name: "Japanese A5 Wagyu",
    description: "6oz Miyazaki wagyu, sea salt, wasabi, soy reduction",
    price: 145,
    category: "Prime Steaks",
    badge: "premium",
    image: "/images/menu/wagyu.webp",
  },
  {
    id: "tomahawk",
    name: "Tomahawk Ribeye",
    description: "36oz long-bone ribeye, roasted shallots, red wine jus",
    price: 95,
    category: "Prime Steaks",
    badge: "forTwo",
    image: "/images/menu/tomahawk.webp",
  },
  // Burgers & Grills
  {
    id: "wagyu-smash-burger",
    name: "Wagyu Smash Burger",
    description: "Double smash patty, American cheese, caramelized onions, secret sauce",
    price: 24,
    category: "Burgers & Grills",
    badge: "bestSeller",
    image: "/images/menu/wagyu-smash-burger.webp",
  },
  {
    id: "oak-barrell-burger",
    name: "The Oak & Barrell Burger",
    description: "Dry-aged beef, brie, fig jam, arugula, brioche bun",
    price: 26,
    category: "Burgers & Grills",
    badge: "houseFavorite",
    image: "/images/menu/oak-barrell-burger.webp",
  },
  {
    id: "grilled-chicken",
    name: "Miso-Glazed Chicken",
    description: "Free-range chicken breast, white miso glaze, charred broccolini",
    price: 28,
    category: "Burgers & Grills",
    image: "/images/menu/grilled-chicken.webp",
  },
  {
    id: "lamb-chops",
    name: "Herb-Crusted Lamb Chops",
    description: "New Zealand lamb, rosemary crust, mint chimichurri, roasted roots",
    price: 42,
    category: "Burgers & Grills",
    badge: "chefsPick",
    image: "/images/menu/filet-mignon.webp",
  },
  {
    id: "truffle-burger",
    name: "Truffle Mushroom Burger",
    description: "Angus beef, sautéed mushrooms, truffle aioli, gruyère, pretzel bun",
    price: 28,
    category: "Burgers & Grills",
    badge: "popular",
    image: "/images/menu/truffle-burger.webp",
  },
  {
    id: "bbq-brisket",
    name: "Smoked BBQ Brisket",
    description: "12-hour smoked brisket, bourbon BBQ glaze, pickled slaw, cornbread",
    price: 32,
    category: "Burgers & Grills",
    badge: "dailySpecial",
    image: "/images/menu/bbq-brisket.webp",
  },
  {
    id: "mushroom-burger",
    name: "Portobello Burger",
    description: "Grilled portobello, goat cheese, roasted peppers, basil pesto",
    price: 20,
    category: "Burgers & Grills",
    badge: "vegetarian",
    image: "/images/menu/mushroom-burger.webp",
  },
  // Craft Beverages
  {
    id: "oak-old-fashioned",
    name: "Oak-Aged Old Fashioned",
    description: "Barrel-aged bourbon, demerara, Angostura bitters, smoked orange peel",
    price: 18,
    category: "Craft Beverages",
    badge: "signature",
    image: "/images/menu/old-fashioned.webp",
  },
  {
    id: "sake-flight",
    name: "Premium Sake Flight",
    description: "Three curated sakes: Junmai, Ginjo, Daiginjo — served chilled",
    price: 28,
    category: "Craft Beverages",
    badge: "sommelierPick",
    image: "/images/menu/sake-flight.webp",
  },
  {
    id: "ipa-flight",
    name: "Local IPA Flight",
    description: "Four rotating local craft IPAs, served with tasting notes",
    price: 16,
    category: "Craft Beverages",
    badge: "local",
    image: "/images/menu/ipa-flight.webp",
  },
  {
    id: "matcha-highball",
    name: "Matcha Whisky Highball",
    description: "Japanese whisky, ceremonial matcha, sparkling water, honey",
    price: 16,
    category: "Craft Beverages",
    badge: "houseFavorite",
    image: "/images/menu/matcha-highball.webp",
  },
  {
    id: "red-wine-selection",
    name: "Sommelier's Red",
    description: "Rotating selection — ask your server for tonight's pour",
    price: 18,
    category: "Craft Beverages",
    badge: "byTheGlass",
    image: "/images/menu/red-wine.webp",
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, coffee liqueur, vanilla bean",
    price: 17,
    category: "Craft Beverages",
    badge: "popular",
    image: "/images/menu/espresso-martini.webp",
  },
  {
    id: "yuzu-spritz",
    name: "Yuzu Honey Spritz",
    description: "Yuzu juice, honey syrup, prosecco, fresh mint",
    price: 15,
    category: "Craft Beverages",
    badge: "nonAlcoholic",
    image: "/images/menu/yuzu-spritz.webp",
  },
  {
    id: "craft-lager",
    name: "Brooklyn Craft Lager",
    description: "Crisp, clean local lager — perfect with our burgers",
    price: 9,
    category: "Craft Beverages",
    badge: "local",
    image: "/images/menu/craft-lager.webp",
  },
  // Desserts
  {
    id: "chocolate-lava",
    name: "Chocolate Lava Cake",
    description: "Valrhona dark chocolate, molten center, vanilla bean ice cream",
    price: 16,
    category: "Desserts",
    badge: "bestSeller",
    image: "/images/menu/chocolate-lava.webp",
  },
  {
    id: "matcha-tiramisu",
    name: "Matcha Tiramisu",
    description: "Ceremonial matcha, mascarpone, ladyfingers, white chocolate dust",
    price: 14,
    category: "Desserts",
    badge: "signature",
    image: "/images/menu/matcha-tiramisu.webp",
  },
  {
    id: "yuzu-cheesecake",
    name: "Yuzu Cheesecake",
    description: "Japanese-style soufflé cheesecake, yuzu curd, berry compote",
    price: 15,
    category: "Desserts",
    badge: "chefsPick",
    image: "/images/menu/yuzu-cheesecake.webp",
  },
  {
    id: "mochi-assortment",
    name: "Mochi Ice Cream Trio",
    description: "Matcha, black sesame, mango — handmade daily",
    price: 12,
    category: "Desserts",
    badge: "popular",
    image: "/images/menu/mochi.webp",
  },
  {
    id: "creme-brulee",
    name: "Vanilla Crème Brûlée",
    description: "Madagascar vanilla, caramelized sugar crust, fresh berries",
    price: 14,
    category: "Desserts",
    image: "/images/menu/creme-brulee.webp",
  },
  // Sides
  {
    id: "truffle-fries",
    name: "Truffle Parmesan Fries",
    description: "Crispy fries, truffle oil, parmesan, fresh herbs",
    price: 12,
    category: "Sides",
    badge: "bestSeller",
    image: "/images/menu/truffle-fries.webp",
  },
  {
    id: "grilled-asparagus",
    name: "Grilled Asparagus",
    description: "Charred asparagus, hollandaise, toasted almonds",
    price: 11,
    category: "Sides",
    badge: "vegetarian",
    image: "/images/menu/grilled-asparagus.webp",
  },
  {
    id: "miso-soup",
    name: "House Miso Soup",
    description: "White miso, silken tofu, wakame, scallions",
    price: 8,
    category: "Sides",
    badge: "vegetarian",
    image: "/images/menu/miso-soup.webp",
  },
  {
    id: "creamed-spinach",
    name: "Creamed Spinach",
    description: "Baby spinach, nutmeg cream, parmesan crust",
    price: 10,
    category: "Sides",
    image: "/images/menu/shrimp-tempura.webp",
  },
  {
    id: "japanese-slaw",
    name: "Japanese Sesame Slaw",
    description: "Napa cabbage, carrot, edamame, sesame-ginger dressing",
    price: 9,
    category: "Sides",
    badge: "vegetarian",
    image: "/images/menu/japanese-slaw.webp",
  },
  {
    id: "loaded-potato",
    name: "Loaded Baked Potato",
    description: "Twice-baked, cheddar, bacon, sour cream, chives",
    price: 11,
    category: "Sides",
    badge: "popular",
    image: "/images/menu/loaded-potato.webp",
  },
];

export function getItemsByCategory(category: Category): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export function getItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}

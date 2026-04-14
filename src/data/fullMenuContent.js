export const menuPageHero = {
  eyebrow: 'Curated menu highlights',
  title: "Aiden's Cafe Menu",
  description:
    'A warm, easy-to-scan menu page inspired by refined cafe editorials. Browse our featured categories, then jump to WhatsApp for the complete menu and live availability.',
  backgroundImage:
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80',
};

export const menuPageNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Order on WhatsApp', href: 'WHATSAPP_LINK', external: true },
  { label: 'Contact Us', href: '/#contact' },
];

export const menuPageNotice = {
  label: 'Important note',
  title: 'This is not the entire menu.',
  description:
    'These are featured picks from the current cafe menu. For the complete list of dishes, add-ons, and availability, connect with us directly on WhatsApp.',
  buttonLabel: 'Explore full menu on WhatsApp',
};

export const menuPageCategoryLinks = [
  { label: 'Soup Bowls', href: '#soup-bowls' },
  { label: 'Salads', href: '#salads' },
  { label: 'Mocktails', href: '#mocktails' },
  { label: 'Mojitos', href: '#mojitos' },
  { label: 'Quesadillas', href: '#quesadillas' },
  { label: 'Pizza', href: '#pizza' },
];

export const fullMenuSections = [
  {
    id: 'soup-bowls',
    title: 'Soup Bowls',
    summary: 'Five warming bowls from the menu for slow evenings and rainy-day cravings.',
    accent: 'Comfort-first',
    tileLabel: 'SB',
    tileBackground:
      'linear-gradient(180deg, rgba(202,147,93,0.28), rgba(243,233,220,0.78)), radial-gradient(circle at top, rgba(112,63,35,0.16), transparent 55%)',
    items: [
      {
        name: 'Vegetable Clear Soup',
        price: 'Rs. 149',
        description: 'A light vegetable broth with clean seasoning and an easy, soothing finish.',
      },
      {
        name: 'Tomato Basil Soup',
        price: 'Rs. 169',
        description: 'Smooth tomato soup lifted with basil and balanced for gentle comfort.',
      },
      {
        name: 'Creamy Mushroom Soup',
        price: 'Rs. 189',
        description: 'Earthy mushroom notes in a silky, richer bowl made for cooler evenings.',
      },
      {
        name: 'Tom Yum Soup',
        price: 'Rs. 199',
        description: 'A bold, tangy-spiced broth with a brighter finish and more punch.',
      },
      {
        name: 'Creamy Broccoli Soup',
        price: 'Rs. 209',
        description: 'Velvety broccoli soup with mellow seasoning and a fuller texture.',
      },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    summary: 'Fresh, cafe-style salads that stay light but still feel like a proper meal.',
    accent: 'Fresh plates',
    tileLabel: 'SA',
    tileBackground:
      'linear-gradient(180deg, rgba(146,170,108,0.22), rgba(245,241,232,0.82)), radial-gradient(circle at top right, rgba(88,119,55,0.16), transparent 60%)',
    items: [
      {
        name: 'Water Melon Salad',
        price: 'Rs. 129',
        description: 'A bright salad with sweet watermelon character and a refreshing finish.',
      },
      {
        name: 'Veg Mayo Salad',
        price: 'Rs. 149',
        description: 'A creamy cafe classic with vegetables tossed in a smooth mayo dressing.',
      },
      {
        name: 'Veg Greek Salad',
        price: 'Rs. 169',
        description: 'A crisp mix of vegetables with a Mediterranean-style, savory balance.',
      },
      {
        name: 'Caesar Salad',
        price: 'Rs. 189',
        description: 'Fresh lettuce, crunchy texture, and a richer dressing-led finish.',
      },
      {
        name: 'Grilled Paneer Vegetables Salad',
        price: 'Rs. 199',
        description: 'A heartier salad with grilled paneer and vegetables for a fuller plate.',
      },
    ],
  },
  {
    id: 'mocktails',
    title: 'Mocktails',
    summary: 'Bright, colorful pours with fruit-forward flavor and a relaxed cafe energy.',
    accent: 'Fruit & sparkle',
    tileLabel: 'MK',
    tileBackground:
      'linear-gradient(180deg, rgba(240,169,96,0.24), rgba(246,239,230,0.82)), radial-gradient(circle at top left, rgba(255,114,61,0.16), transparent 58%)',
    items: [
      {
        name: 'Topical Sunrise',
        price: 'Rs. 129',
        description: 'A tropical cooler with a mellow citrus lift and an easy, sunny finish.',
      },
      {
        name: 'Blue Pacific',
        price: 'Rs. 139',
        description: 'A vibrant mocktail with a clean, chilled profile and a crisp visual appeal.',
      },
      {
        name: 'Orange Lime Cooler',
        price: 'Rs. 149',
        description: 'Zesty orange and lime notes designed for a refreshing first sip.',
      },
      {
        name: 'Cranberry Delight',
        price: 'Rs. 159',
        description: 'A slightly sharper fruit profile with a sweeter finish through the glass.',
      },
      {
        name: 'Mango Spicy Punch',
        price: 'Rs. 169',
        description: 'Ripe mango flavor with a playful kick that lands warmer and bolder.',
      },
    ],
  },
  {
    id: 'mojitos',
    title: 'Mojitos',
    summary: 'Five of the most-ordered mojitos from the menu, kept cold and bright.',
    accent: 'Minty & cold',
    tileLabel: 'MJ',
    tileBackground:
      'linear-gradient(180deg, rgba(178,198,122,0.22), rgba(245,242,233,0.82)), radial-gradient(circle at bottom right, rgba(71,122,64,0.18), transparent 58%)',
    items: [
      {
        name: 'Virgin Mojito',
        price: 'Rs. 89',
        description: 'The classic mint-and-lime cooler with a clean, refreshing profile.',
      },
      {
        name: 'Water Melon Mojito',
        price: 'Rs. 99',
        description: 'A softer, fruitier mojito with chilled watermelon sweetness.',
      },
      {
        name: 'Strawberry Mojito',
        price: 'Rs. 109',
        description: 'A berry-led version with bright color and a sweeter finish.',
      },
      {
        name: 'Blue Curacao Mojito',
        price: 'Rs. 119',
        description: 'A more vibrant, citrus-leaning pour with a cool-toned edge.',
      },
      {
        name: 'Mango Mojito',
        price: 'Rs. 129',
        description: 'A tropical take on the mojito with fuller fruit flavor in every sip.',
      },
    ],
  },
  {
    id: 'quesadillas',
    title: 'Quesadillas',
    summary: 'Five savory quesadilla picks that work perfectly for lunch or sharing.',
    accent: 'Toasted & savory',
    tileLabel: 'QD',
    tileBackground:
      'linear-gradient(180deg, rgba(214,171,102,0.24), rgba(244,238,226,0.82)), radial-gradient(circle at center, rgba(132,84,48,0.14), transparent 65%)',
    items: [
      {
        name: 'Chipotle Corn Quesadillas',
        price: 'Rs. 179',
        description: 'A smoky corn filling with a gentle kick and a golden toasted finish.',
      },
      {
        name: 'Corn Salsa Quesadillas',
        price: 'Rs. 189',
        description: 'A brighter corn-and-salsa combination with a fresher overall bite.',
      },
      {
        name: 'Veggie & Cheese Quesadillas',
        price: 'Rs. 189',
        description: 'A cafe comfort pick with vegetables and melted cheese in balance.',
      },
      {
        name: 'Grilled Paneer Quesadillas',
        price: 'Rs. 199',
        description: 'Paneer-forward, savory, and satisfying enough to feel like a full plate.',
      },
      {
        name: 'Veg Fungi Quesadillas',
        price: 'Rs. 209',
        description: 'An earthy mushroom-led option with a richer, more layered bite.',
      },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    summary: 'Five of the most tempting pizzas from the menu, from classic to richer paneer-led picks.',
    accent: 'Cheesy favorites',
    tileLabel: 'PZ',
    tileBackground:
      'linear-gradient(180deg, rgba(213,113,70,0.24), rgba(247,240,233,0.82)), radial-gradient(circle at top right, rgba(130,51,30,0.16), transparent 58%)',
    items: [
      {
        name: 'Veg Margherita Pizza',
        price: 'Rs. 249',
        description: 'A familiar classic with a clean cheese-forward profile and simple comfort.',
      },
      {
        name: 'Mushroom Cheese Pizza',
        price: 'Rs. 279',
        description: 'Earthy mushrooms and cheese together in a richer, more savory bite.',
      },
      {
        name: 'Sweet Corn Delight Pizza',
        price: 'Rs. 289',
        description: 'A softer, sweeter veg pizza that stays light and easy to enjoy.',
      },
      {
        name: 'Tandoori Cottage Cheese Pizza',
        price: 'Rs. 309',
        description: 'A spiced paneer-style pizza with warmer flavor and a fuller finish.',
      },
      {
        name: 'Paneer Makhani Cheese Pizza',
        price: 'Rs. 329',
        description: 'A richer paneer pizza with makhani-inspired flavor and added indulgence.',
      },
    ],
  },
];

export const menuPageClosingNote = {
  title: 'Want the complete cafe menu?',
  description:
    'Cold coffee, burgers, basket fries, iced teas, and more are available beyond this featured page. Message us on WhatsApp and we will share the full menu instantly.',
  buttonLabel: 'Get the full menu on WhatsApp',
};

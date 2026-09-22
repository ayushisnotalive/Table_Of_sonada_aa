import { MenuItem, ReviewItem, FaqItem, MediaAsset } from '../types';

export const RESTAURANT_INFO = {
  name: 'Taste of Sonada',
  tagline: 'Cafe & Restaurant • Sonada, Darjeeling',
  description:
    'A tranquil hill-station haven nestled in Chaikhola, Sonada. Serving fresh breakfast platters, handcrafted gourmet burgers, golden crispy fried chicken, specialty coffee, and authentic Darjeeling tea.',
  address: 'Chaikhola, near Green Hill School, Sonada, Darjeeling, West Bengal 734209',
  phone: '070016 74927',
  phoneRaw: '+917001674927',
  rating: 4.9,
  reviewCount: 135,
  priceRange: '₹200–400 per person',
  timing: 'Open daily until 8:00 PM',
  openingTime: '08:30 AM',
  closingTime: '08:00 PM',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3824147743586!2d88.2685249!3d26.9608249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e443f55099317b%3A0x6a2c206e0e64c39f!2sTaste%20of%20Sonada!5e0!3m2!1sen!2sin!4v1711100000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl:
    'https://maps.google.com/?q=Taste+of+Sonada+Chaikhola+Green+Hill+School+Sonada+Darjeeling+734209',
};

export const MENU_IMAGES = [
  {
    id: 'menu-1',
    title: 'Taste of Sonada Main Menu - Page 1',
    description: 'Hot brews, fresh cold drinks, all-day breakfast & hearty bites',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlUgD0F_ROhttI_Sj3Lfn1F2C_dySKHRgxZPuSs_SOGAtql0ATfH_I1BILe1A2cVDwYCuXSmFXj4gaGzv3blg6DR-aYRpYNJ-K5Dq03yZRsLP7D6QiMPb_Kz3ujEhXG3pLfp7LQLtvDvweJ=s680-w680-h510-rw',
  },
  {
    id: 'menu-2',
    title: 'Taste of Sonada Special Menu - Page 2',
    description: 'Signature burgers, crispy fried chicken, combos & chef specials',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlEW6AE9BlFw0NgSqj5ay_EPC8xNvVymhOOZjQWfYa8-3lT5VyLmDua1iws8jWU5DLfR3nRuQkosQ1wTOemc4kb9SU-OkLE-PredeJOu3SIM3ibaDXHFtIVZwpHDPsqw3ytTlst3vp0CZBd=s680-w680-h510-rw',
  },
];

export const GALLERY_ITEMS: MediaAsset[] = [
  {
    id: 'gallery-1',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzOq_w91zHaHUZc8wgG2cVsiotDY_qY9DlimkwOHhn192bEDzdWj6EXrRfI-A7XVPbMzamfRyLvBvZ6zDPBa7vbbhO7VYmMVBs2SERafgh972huyywHyRp1dszhXm8GkDLNGopD1k9qBXl=w229-h191-n-k-no-nu',
    title: 'Cozy Mountain Cafe Front',
    subtitle: 'Warm wooden aesthetic & relaxing hill ambiance',
    category: 'ambiance',
  },
  {
    id: 'gallery-2',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnmmwNfTyLjPj2YZdzvIpDkwl-s5Bf7Aw2hllz675uJnGSRlevFGBi4vRUfHEnxxsuxr4J0N8ddkOW50Dg3Z92-2gszVBn1hhKn97ED1WAlN72sDttAHFkROjq-HPwGmV7C8apl=s680-w680-h510-rw',
    title: 'Signature Crispy Chicken Basket',
    subtitle: 'Golden-fried crunch with homemade secret dip',
    category: 'food',
  },
  {
    id: 'gallery-3',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn80m2NrLFUojD2A_N-6njnPXE227iNeabtvKOphR2I2bC5uG4TojY-378D39P9nkngew6guhqIVRs5TqYGkVt51ZVDH-kfsu-0sl-7z3frVus2P_Fz73xE6Mu228Lpk0lyQeUwviOclXvq=s680-w680-h510-rw',
    title: 'Himalayan View & Table Seating',
    subtitle: 'Perfect spot for romantic brunch or quiet coffee',
    category: 'ambiance',
  },
  {
    id: 'gallery-4',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCIrvtmjn_CbbNVZUs3QKc-pVe6RXR6nzJCWxIZZlbbrO_a1r6mhjLqdLL_UunrSfl60Focb2goLPwv6keE6GvJPJ5pqaWUJatyNYCj3NIwGSGUAHuP9BkcrY_L3el-lHJwhSI=s680-w680-h510-rw',
    title: 'Gourmet Cheese Burger with Fries',
    subtitle: 'Juicy patty, melting cheddar, toasted brioche bun',
    category: 'food',
  },
  {
    id: 'gallery-5',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2BGSqo8U8ioecGxCyAEuFa_dn6UE109b-msGBtvAVVkoY521LMxyVG8NeBgNckdQ07yOMm10071ctOXBGIIuE2Hc7d3O_ZV4-IiG-4VdDAzfPhgW0u3jx1dlCwMNycOf5aelhew=s680-w680-h510-rw',
    title: 'Artisan Hot Brew & Darjeeling Tea',
    subtitle: 'Freshly brewed aromatic Darjeeling hills tea leaves',
    category: 'cozy',
  },
  {
    id: 'gallery-6',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHYjfNDNXMM_HZ8UmnJ1i-nIrmUJlbwbnC9XJHRYsU9PCXX9VdYMNXMbDcLTU2lvnYxGPGrV_6Fg74FDSaqvf_S-OYbvsT2T4Esxt75UQd6vUJlwhLxEAXyo0N-zb1ZMbn8D_A=s680-w680-h510-rw',
    title: 'Warm Rustic Seating Nook',
    subtitle: 'Natural wood tones, soft lighting & cozy music',
    category: 'cozy',
  },
  {
    id: 'gallery-7',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-gOATlHJ23VN1elJlgWS1B2EOBjIlNvQGW6D82i6WN_qIQO16_UECJZT8NVqUJ-fJky3KnJLNXSTgiExOTx78_rf5Eit38vLnAFq5yXXTe89W9C20IVgdXVskKHCIWGKoelTP_htNg4R3=s680-w680-h510-rw',
    title: 'Specialty Sizzling Delights',
    subtitle: 'Freshly prepared continental & local favorites',
    category: 'food',
  },
  {
    id: 'gallery-8',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnB4n66yJqdGAkOOQ7qN_KWsXI8zqzkfn1TKY0iVlevFH5T-IYt-ZCXruNWQ5cc6jbVOXCyTmvnJFBMm_VrgFc5W-ofvphxepRKuLy9wwv2Ax4DnmVLnUGO52M5nZY0Qtnc2c7S=s680-w680-h510-rw',
    title: 'Evening Cafe Warmth',
    subtitle: 'Charming lighting as the Darjeeling mist sets in',
    category: 'ambiance',
  },
  {
    id: 'gallery-v1',
    type: 'video',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkginA2AsePPNWSuu2EUBpjBOSGT-mG2OzMoKh_HdosVzmgMvOi-b26egqC7XBigsv9VXJYRek0TnEKReIL6wUONqR_CUqiuKwAzZMWBZhcABRuZ63ooUk9R3kLD5Fp9nIqqWnZ=w229-h383-n-k-no-nu',
    title: 'Cafe Atmosphere Reel #1',
    subtitle: 'Behind the scenes: sizzle, brews & cozy vibes',
    category: 'video',
  },
  {
    id: 'gallery-v2',
    type: 'video',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklH9uCgU5BFfVmTozSfG6Sd2aokD-bzXjruhD2f_p3JImsAb-3GSIfGvPnELBORcw3a4_m8u6O9Vv9YB8-g3ZG5GKH88U1I4ibWeDLBC6vn3-jctE89dyJKQK8Zg1IwmAKAte_e8LYSoKE=w229-h383-n-k-no-nu',
    title: 'Sonada Cafe Walkthrough Reel #2',
    subtitle: 'Experience the warm welcome and fragrant aroma',
    category: 'video',
  },
];

export const CURATED_MENU: MenuItem[] = [
  // Breakfast & Brunch
  {
    id: 'b-1',
    name: 'Himalayan Sunrise Breakfast Platter',
    description: 'Two sunny-side or masala scrambled eggs, grilled sausages, butter toast, sautéed mushrooms & baked beans.',
    price: 220,
    category: 'breakfast',
    badge: 'Best Seller',
    popular: true,
  },
  {
    id: 'b-2',
    name: 'Golden Fluffy Pancakes with Honey & Butter',
    description: 'Stack of three freshly flipped warm pancakes served with Darjeeling mountain honey and whipped butter.',
    price: 180,
    category: 'breakfast',
    isVeg: true,
  },
  {
    id: 'b-3',
    name: 'Sonada Club Sandwich',
    description: 'Triple-decker toasted sandwich with tender chicken, crisp lettuce, tomato, cheese slice, and seasoned fries.',
    price: 210,
    category: 'breakfast',
    popular: true,
  },
  {
    id: 'b-4',
    name: 'Cheesy Garlic French Toast',
    description: 'Brioche soaked in spiced egg batter, griddled golden and topped with melted mozzarella and fresh herbs.',
    price: 160,
    category: 'breakfast',
    isVeg: false,
  },

  // Handcrafted Burgers
  {
    id: 'm-1',
    name: 'Taste of Sonada Monster Crunch Burger',
    description: 'Double crispy chicken patty, double melted cheddar, caramelized onions, house smokey paprika mayo on toasted sesame bun.',
    price: 240,
    category: 'burgers',
    badge: 'Signature',
    popular: true,
  },
  {
    id: 'm-2',
    name: 'Classic Hillside Cheeseburger',
    description: 'Juicy spiced chicken fillet, fresh garden tomatoes, pickled gherkins, creamy cheese sauce, served with golden fries.',
    price: 190,
    category: 'burgers',
    popular: true,
  },
  {
    id: 'm-3',
    name: 'Smoked BBQ Paneer & Veggie Burger',
    description: 'Grilled spiced paneer steak, crunchy iceberg lettuce, smoked barbecue glaze, and herb mayo.',
    price: 180,
    category: 'burgers',
    isVeg: true,
  },
  {
    id: 'm-4',
    name: 'Fiery Darjeeling Chilli Burger',
    description: 'Crispy fried chicken breast dunked in local Dalle Khursani chilli sauce with cooling herb spread.',
    price: 220,
    category: 'burgers',
    badge: 'Must Try',
  },

  // Crispy Fried Chicken
  {
    id: 'c-1',
    name: 'Signature Sonada Fried Chicken (4 Pcs)',
    description: '24-hour buttermilk marinated chicken pieces in seasoned herb-crust, deep-fried to golden perfection. Served with garlic dip.',
    price: 250,
    category: 'chicken',
    badge: 'Chef Special',
    popular: true,
  },
  {
    id: 'c-2',
    name: 'Crispy Hot Chicken Wings (6 Pcs)',
    description: 'Extra-crunchy chicken wings tossed in choice of Smoky BBQ or Spicy Himalayan Dalle glaze.',
    price: 210,
    category: 'chicken',
    popular: true,
  },
  {
    id: 'c-3',
    name: 'Crispy Chicken Popcorn Basket',
    description: 'Bite-sized tender chicken nuggets coated in crunchy breadcrumbs, sprinkled with peri-peri seasoning.',
    price: 170,
    category: 'chicken',
  },
  {
    id: 'c-4',
    name: 'Chicken Tenders & Golden Fries Combo',
    description: 'Crisp boneless breast strips paired with salted crinkle-cut fries, sweet chili and mayo.',
    price: 230,
    category: 'chicken',
  },

  // Darjeeling Tea & Coffee
  {
    id: 't-1',
    name: 'Authentic First Flush Darjeeling Tea',
    description: 'Single-estate delicate floral infusion straight from neighboring Makaibari & Margaret’s Hope gardens.',
    price: 90,
    category: 'tea-coffee',
    badge: 'Local Favorite',
    isVeg: true,
    popular: true,
  },
  {
    id: 't-2',
    name: 'Artisan Hazelnut Cappuccino',
    description: 'Rich freshly ground Arabica espresso shot with velvety steamed milk foam and organic hazelnut drizzle.',
    price: 130,
    category: 'tea-coffee',
    isVeg: true,
    popular: true,
  },
  {
    id: 't-3',
    name: 'Spiced Mountain Masala Chai',
    description: 'Fresh cow milk simmered with crushed green cardamom, ginger, cloves, and premium CTC tea leaves.',
    price: 60,
    category: 'tea-coffee',
    isVeg: true,
  },
  {
    id: 't-4',
    name: 'Iced Caramel Macchiato',
    description: 'Double espresso pulled over iced milk and layered with rich buttery caramel swirl.',
    price: 150,
    category: 'tea-coffee',
    isVeg: true,
  },

  // Tibetan & Light Bites
  {
    id: 's-1',
    name: 'Steamed Himalayan Chicken Momos (8 Pcs)',
    description: 'Thin delicate dough stuffed with juicy minced chicken and local herbs, served with fiery red chutney and clear broth.',
    price: 140,
    category: 'bites',
    badge: 'Best Seller',
    popular: true,
  },
  {
    id: 's-2',
    name: 'Pan-Fried Kothey Momos (8 Pcs)',
    description: 'Crispy seared bottom and soft juicy top, served with sesame peanut dip and red chilli relish.',
    price: 160,
    category: 'bites',
    popular: true,
  },
  {
    id: 's-3',
    name: 'Loaded Cheesy Peri-Peri Fries',
    description: 'Hot crisp potato fries smothered with melted cheddar cheese sauce, jalapenos, and spice dust.',
    price: 140,
    category: 'bites',
    isVeg: true,
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r-1',
    author: 'Pema Bhutia',
    rating: 5,
    date: '2 weeks ago',
    highlight: 'Best fried chicken and tea in all of Sonada!',
    reviewText:
      'We stopped by Taste of Sonada on our way back from Darjeeling to Kurseong. The ambiance is so warm, rustic, and cozy! The fried chicken is exceptionally crunchy and non-greasy, and their Darjeeling tea is pure bliss in the chilly hill weather.',
    verified: true,
    source: 'Google Review',
  },
  {
    id: 'r-2',
    author: 'Anirban Mukherjee',
    rating: 5,
    date: '1 month ago',
    highlight: 'Unbeatable vibe near Green Hill School',
    reviewText:
      'Easily the best cafe in Sonada! The monster burger was huge, juicy, and packed with flavor. Prices are unbelievable for this quality (barely ₹250–350 per head). Super friendly staff and quick service. A must-visit pitstop!',
    verified: true,
    source: 'Google Review',
  },
  {
    id: 'r-3',
    author: 'Sunita Sharma',
    rating: 5,
    date: '3 weeks ago',
    highlight: 'Cozy retreat with breathtaking mist',
    reviewText:
      'The cappuccino and fresh club sandwiches are delicious. Love sitting by the window watching the misty clouds roll past Chaikhola. Very clean, polite hosts, and lovely background acoustic music.',
    verified: true,
    source: 'Google Review',
  },
  {
    id: 'r-4',
    author: 'Rohan Gurung',
    rating: 5,
    date: '2 months ago',
    highlight: 'Freshly prepared food and genuine hospitality',
    reviewText:
      'If you are studying or visiting near Green Hill School, this is the hangout place. The momos and crispy chicken strips are 10/10. Thank you Taste of Sonada for consistently great food!',
    verified: true,
    source: 'Google Review',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Location',
    question: 'Where is the best cafe near Green Hill School in Sonada?',
    answer:
      'Taste of Sonada is the premier cafe and restaurant situated right at Chaikhola, just steps away from Green Hill School in Sonada, Darjeeling (PIN 734209). It is easily accessible right along the main hillside route with convenient stopping points.',
  },
  {
    id: 'faq-2',
    category: 'Menu',
    question: 'What is on the menu at Taste of Sonada?',
    answer:
      'Our menu features freshly cooked breakfast platters, handcrafted gourmet burgers, signature crispy golden fried chicken, steamed and kothey Tibetan momos, club sandwiches, artisan coffee, and authentic first & second flush Darjeeling tea.',
  },
  {
    id: 'faq-3',
    category: 'Pricing',
    question: 'What is the average price range per person at Taste of Sonada?',
    answer:
      'The average spend is very affordable, ranging between ₹200 to ₹400 per person for a wholesome meal, beverage, and dessert or snack.',
  },
  {
    id: 'faq-4',
    category: 'Timings',
    question: 'What are the opening and closing hours of Taste of Sonada?',
    answer:
      'We welcome guests every day from 8:30 AM in the morning until 8:00 PM in the evening. It is ideal for morning breakfast, leisurely afternoon brunch, high tea, and early dinner.',
  },
  {
    id: 'faq-5',
    category: 'Menu',
    question: 'Does Taste of Sonada serve vegetarian and hot beverage options?',
    answer:
      'Yes! We offer a wide range of vegetarian options including grilled paneer burgers, golden pancakes with mountain honey, peri-peri loaded cheese fries, and artisanal hot brews including local Darjeeling tea and cappuccino.',
  },
  {
    id: 'faq-6',
    category: 'Location',
    question: 'How do I place a takeaway order or reach Taste of Sonada?',
    answer:
      'You can call our direct counter line at 070016 74927 to place quick takeaway orders, reserve tables for groups, or get easy driving directions.',
  },
];

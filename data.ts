type product = {
  id: number;
  img?: string;
  title: string;
  desc?: string;
  quantity: string;
  // price: string;
};

type products = product[];

export const featuredWheatProducts: products = [
  {
    id: 1,
    img: "/products/MP-Lokwan premium-flour.jpg",
    title: "MP Lokwan Premium Flour",
    desc: "Lokwan wheat is a premium variety of wheat primarily grown in Madhya Pradesh and Maharashtra. It has a soft, doughy texture when milled and keep Chapatis and rotis very soft and fluffy",
    quantity: "1 KG",
    // price: "Rs. 55",
  },
  {
    id: 2,
    img: "/products/MP-Sihore-wheat-flour.jpg",
    title: "MP Sihore Wheat Flour",
    desc: "Sihore wheat (also spelled Sehore wheat) refers to wheat cultivated in and around the Sehore district of Madhya Pradesh, India. It's known for its high quality and is a preferred choice for making chapatis (Indian flatbreads) due to its softness and nutritional properties. Typically has higher protien (around 12-13%) compared to regular wheat, making it more nutitious",
    quantity: "1 KG",
    // price: "Rs. 59",
  },
  {
    id: 3,
    img: "/products/khapli-wheat-flour.jpg",
    title: "Khapli Wheat FLour",
    desc: "Khapli wheat, also known as Emmer wheat (or Triticum dicoccum) is primarily grown in regions with semi-arid to dry climates. It has Low Glycemic Index (GI): Suitable for diabetics as it helps regulate blood sugar levels, Aids digestion and promotes gut health. Contain more protein than regular wheat and escpecially rich in magnesium, iron, and B-Complex vitamin",
    quantity: "1 KG",
    // price: "Rs. 150",
  },
  {
    id: 4,
    img: "/products/sharbati-premium-wheat-flour.jpg",
    title: "Sharbati Premium Wheat Flour",
    desc: "Wheat Flour",
    quantity: "1 KG",
    // price: "Rs. 55",
  },
];

export const featuredOtherProducts: products = [
  {
    id: 1,
    img: "/products/soyabean-flour.jpg",
    title: "Soyabean FLour",
    desc: "Soybean is a highly nutritious legume that provides several health benefits. It has High Protein Content",
    quantity: "1 KG",
    // price: "Rs. 98",
  },
  {
    id: 2,
    img: "/products/corn.jpg",
    title: "Corn (without grinding)",
    desc: "Indian corn flour, also known as cornstarch or maize flour, offers several health benefits. Rich in Carbohydrates, Gluten-Free: Good for digestive health, high in Antioxidants, supports hear health, low in fat, and rich in vitamins and minerals",
    quantity: "1 KG",
    // price: "Rs. 40",
  },
  {
    id: 3,
    img: "/products/besan.jpg",
    title: "Besan",
    desc: "Indian Chana Dal Flour is a versatile and nutritious ingredient made from ground chana dal (split chickpeas). It is High in protein: Chana dal flour is rich in plant-based protein, making it a great option for vegeterians. Chana dal flour is naturally gluten-free supports heart health. It can contribute to improved heart health by managing cholesterol levels. Helps in Weight management: Due to its high fiber content, it promotes satiety and can help manage hunger",
    quantity: "1 KG",
    // price: "Rs. 112",
  },
  {
    id: 4,
    img: "/products/chana-star.jpg",
    title: "Chana Star ",
    desc: "Chana Star Flour -- Without grinding",
    quantity: "1 KG",
    // price: "Rs. 87",
  },
];

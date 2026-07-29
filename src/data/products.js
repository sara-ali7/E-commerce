import tShirt from "../assets/images/women1.jpeg";
import oldMoney from "../assets/images/women2.jpeg";
import leatherJacket from "../assets/images/women3.jpeg";
import trouser from "../assets/images/women4.jpeg";
import cargo from "../assets/images/men1.jpeg";
import jacket from "../assets/images/men2.jpeg";
import jeans from "../assets/images/men3.jpeg";
import shirt from "../assets/images/men4.jpeg";
import jewllery from "../assets/images/ass1.jpeg";
import glass from "../assets/images/ass2.jpeg";
import cap from "../assets/images/ass3.jpeg";
import hat from "../assets/images/ass4.jpeg";
import trenchCoat from "../assets/images/women_trench_coat.png";
import knitSweater from "../assets/images/women_knit_sweater.png";
import blazer from "../assets/images/men_blazer.png";
import hoodie from "../assets/images/men_hoodie.png";
import backpack from "../assets/images/accessories_backpack.png";
import sunglasses from "../assets/images/accessories_sunglasses.png";

const products = [
  {
    id: 5,
    name: "Jewellery",
    price: 29.99,
    image: jewllery,
    description: "Elegant minimal silver necklace with a delicate finish.",
    sizes: ["One size"],
    category: "accessories",
  },
  {
    id: 6,
    name: "Glass",
    price: 129.99,
    image: glass,
    description: "Classic unisex sunglasses with dark lenses and durable frames.",
    sizes: ["One size"],
    category: "accessories",
  },
  {
    id: 7,
    name: "Cap",
    price: 59.99,
    image: cap,
    description: "Structured six-panel performance cap with an adjustable strap.",
    sizes: ["One size"],
    category: "accessories",
  },
  {
    id: 8,
    name: "Hat",
    price: 19.99,
    image: hat,
    description: "Premium woven straw hat with a wide brim for optimal sun protection.",
    sizes: ["One size"],
    category: "accessories",
  },
  {
    id: 1,
    name: "T-shirt",
    price: 24.99,
    image: tShirt,
    description:
      "A soft, breathable everyday tshirt made from 100% combed cotton. Fits true to size.",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
  },
  {
    id: 2,
    name: "Skirt",
    price: 49.99,
    image: oldMoney,
    description:
      "A tailored skirt with a comfortable stretch waistband — easy to dress up or down.",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 159.99,
    image: leatherJacket,
    description:
      "Premium leather jacket with a timeless cut and durable lining for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
  },
  {
    id: 4,
    name: "Trouser",
    price: 69.99,
    image: trouser,
    description:
      "Lightweight trousers with a tailored fit and breathable fabric.",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
  },
  {
    id: 9,
    name: "Denim jacket",
    price: 39.99,
    image: jacket,
    description: "High‑rise denim jacket with a comfortable stretch.",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
  },
  {
    id: 10,
    name: "Shirt",
    price: 89.99,
    image: shirt,
    description: "Comfortable organic cotton button-up shirt in a classic fit.",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
  },
  {
    id: 11,
    name: "Jeans & T-shirt",
    price: 34.99,
    image: jeans,
    description: "Casual daily combination featuring classic denim jeans and a white tee.",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
  },
  {
    id: 12,
    name: "Cargo Pant",
    price: 24.99,
    image: cargo,
    description: "Relaxed utility cargo pants with multiple spacious pockets.",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
  },
  {
    id: 13,
    name: "Trench Coat",
    price: 189.99,
    image: trenchCoat,
    description: "Classic double-breasted trench coat with structured shoulders.",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
  },
  {
    id: 14,
    name: "Knit Sweater",
    price: 79.99,
    image: knitSweater,
    description: "Cozy oversized knit sweater made from premium wool blend.",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
  },
  {
    id: 15,
    name: "Blazer",
    price: 149.99,
    image: blazer,
    description: "Sharp, slim-fit blazer ideal for business casual dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
  },
  {
    id: 16,
    name: "Hoodie",
    price: 49.99,
    image: hoodie,
    description: "Comfortable organic cotton hoodie with a soft brushed interior.",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
  },
  {
    id: 17,
    name: "Leather Backpack",
    price: 119.99,
    image: backpack,
    description: "Sleek and spacious leather backpack with dedicated laptop sleeve.",
    sizes: ["One size"],
    category: "accessories",
  },
  {
    id: 18,
    name: "Sunglasses",
    price: 89.99,
    image: sunglasses,
    description: "Polarized classic sunglasses with UV protection.",
    sizes: ["One size"],
    category: "accessories",
  },
];

export default products;

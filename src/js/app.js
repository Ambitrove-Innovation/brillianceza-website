// src/js/app.js - Main application logic

// ===== CONFIGURATION =====
const CONFIG = {
  whatsappNumber: "27686311388",
  imagePath: "/public/images/pics/",
  galleryPath: "/public/images/gallery/",
};

// ===== PRODUCT DATA =====
const products = [
  {
    id: "3bs-tshirt",
    name: "3 B'S T-SHIRT",
    price: 279.0,
    category: "tops",
    images: ["B9.png", "B8.png", "s4.png"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["White", "Black"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "7-ways-brilliance",
    name: "7 WAYS TO BRILLIANCE",
    price: 279.0,
    category: "tops",
    images: ["B2.png", "B3.png", "s3.png"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["White", "Black"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "7-ways-brilliance-blk",
    name: "7 WAYS TO BRILLIANCE",
    price: 279.0,
    category: "tops",
    images: ["B50.jpg", "B48.jpg", "B52.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["White", "Black"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "more-fashion-sweater",
    name: "LESS SLEEP-MORE FASHION SWEATER",
    price: 349.0,
    category: "tops",
    images: ["B4.png", "B5.png", "s1.png"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Red", "Black"],
    fit: "OVERSIZE",
    description: "Comfortable sweater for everyday wear.",
  },
  {
    id: "more-fashion-sweater-blk",
    name: "LESS SLEEP-MORE FASHION SWEATER",
    price: 349.0,
    category: "tops",
    images: ["B24.jpg", "B25.jpg", "B38.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Black", "Red"],
    fit: "OVERSIZE",
    description: "Comfortable sweater for everyday wear.",
  },
  {
    id: "brilliance-essential-purple",
    name: "BRILLIANCE ESSENTIAL",
    price: 279.0,
    category: "tops",
    images: ["B32.jpg", "B40.jpg", "B36.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Purple", "White", "Black"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "brilliance-essential-white",
    name: "BRILLIANCE ESSENTIAL",
    price: 279.0,
    category: "tops",
    images: ["B57.jpg", "B42.jpg", "B53.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["White", "Black", "Purple"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "brilliance-essential-black",
    name: "BRILLIANCE ESSENTIAL",
    price: 279.0,
    category: "tops",
    images: ["B51.jpg", "B55.jpg", "B56.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Black", "White", "Purple"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "rainbow-tshirt-white",
    name: "RAINBOW T-SHIRT",
    price: 279.0,
    category: "tops",
    images: ["B26.JPEG", "B27.JPEG", "B44.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["White", "Black"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "rainbow-tshirt-black",
    name: "RAINBOW T-SHIRT",
    price: 279.0,
    category: "tops",
    images: ["B29.jpg", "B35.jpg", "B37.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Black", "White"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "og-wte-tshirt-pink",
    name: "OG W.T.E T-SHIRT",
    price: 349.0,
    category: "tops",
    images: ["B16.JPG", "B15.JPG", "B14.JPG"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Pink", "White", "Black"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "og-wte-tshirt-white",
    name: "OG W.T.E T-SHIRT",
    price: 349.0,
    category: "tops",
    images: ["B46.JPG", "B43.JPG", "B39.JPG"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["White", "Black", "Pink"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "reflector-tshirt",
    name: "REFLECTOR T-SHIRT",
    price: 349.0,
    category: "tops",
    images: ["B1.JPG", "B6.png", "B7.png"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Black"],
    fit: "OVERSIZE",
    description:
      "Customers love its oversize fit, giving Streetwear style all the way.",
  },
  {
    id: "wte-hoodie",
    name: "W.T.E HOODIE",
    price: 399.0,
    category: "tops",
    images: ["B18.JPG", "B20.jpg", "B17.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Blue"],
    fit: "RELAXED",
    description: "Comfortable hoodie for casual wear.",
  },
  {
    id: "uk-motion-wear-navy",
    name: "UK MOTION-WEAR",
    price: 799.0,
    category: "tops",
    images: ["B22.jpg", "B23.jpg", "B30.jpg"],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Navy Blue", "Black"],
    fit: "RELAXED",
    description: "Premium motion wear tracksuit.",
  },
  {
    id: "uk-motion-wear-black",
    name: "UK MOTION-WEAR",
    price: 799.0,
    category: "tops",
    images: ["B19.JPG", "B45.jpg", "B21.jpg"],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Black", "Navy Blue"],
    fit: "RELAXED",
    description: "Premium motion wear tracksuit.",
  },
  {
    id: "wte-5p",
    name: "W.T.E 5'p",
    price: 100.0,
    category: "accessories",
    images: ["B13.png", "B11.png", "B10.png"],
    sizes: ["N/A"],
    colors: ["Blue", "Black"],
    fit: null,
    description: "W.T.E cap pack.",
  },
  {
    id: "black-strip-short",
    name: "BLACK STRIP SHORT",
    price: 280.0,
    category: "bottoms",
    images: ["B60.jpg", "B83.jpg", "B80.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Black"],
    fit: "RELAXED",
    description: "Comfortable shorts for everyday wear.",
  },
  {
    id: "purple-strip-short",
    name: "PURPLE STRIP-SHORT",
    price: 280.0,
    category: "bottoms",
    images: ["B89.jpg", "B85.jpg", "B69.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Purple"],
    fit: "RELAXED",
    description: "Stylish purple shorts.",
  },
  {
    id: "blue-strip-short",
    name: "BLUE STRIP-SHORT",
    price: 280.0,
    category: "bottoms",
    images: ["B68.jpg", "B72.jpg", "B71.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Blue"],
    fit: "RELAXED",
    description: "Cool blue shorts for summer.",
  },
  {
    id: "red-strip-short",
    name: "RED STRIP SHORT",
    price: 280.0,
    category: "bottoms",
    images: ["B75.jpg", "B74.jpg", "B73.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Red"],
    fit: "RELAXED",
    description: "Bold red shorts.",
  },
  {
    id: "reflector-cargo-pants",
    name: "REFLECTOR CARGO-PANTS",
    price: 399.0,
    category: "bottoms",
    images: ["B63.JPG", "B62.JPG", "B59.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Black"],
    fit: "RELAXED",
    description: "Stylish cargo pants with reflective details.",
  },
  {
    id: "white-cargo-pants",
    name: "WHITE CARGO-PANTS",
    price: 349.0,
    category: "bottoms",
    images: ["B78.jpg", "B76.jpg", "B70.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["White"],
    fit: "RELAXED",
    description: "Clean white cargo pants.",
  },
  {
    id: "sky-blue-cargo-pants",
    name: "SKY BLUE CARGO-PANTS",
    price: 349.0,
    category: "bottoms",
    images: ["B81.jpg", "B79.jpg", "B82.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Sky-Blue"],
    fit: "RELAXED",
    description: "Fresh sky blue cargo pants.",
  },
  {
    id: "uk-motion-pants-blue",
    name: "UK MOTION PANTS",
    price: 349.0,
    category: "bottoms",
    images: ["B49.jpg", "B86.jpg", "B41.jpg"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Navy Blue"],
    fit: "RELAXED",
    description: "Comfortable motion pants.",
  },
  {
    id: "uk-motion-pants-black",
    name: "UK MOTION PANTS",
    price: 349.0,
    category: "bottoms",
    images: ["B61.JPG", "B87.jpg", "B54.JPG"],
    sizes: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
    colors: ["Black"],
    fit: "RELAXED",
    description: "Comfortable motion pants.",
  },
];

// ===== STATE MANAGEMENT =====
let currentProduct = null;
let currentImageIndex = 0;

// ===== HELPER FUNCTIONS =====

function getProductById(id) {
  return products.find((p) => p.id === id);
}

function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

function getRandomProducts(count, excludeId = null) {
  let filtered = products;
  if (excludeId) {
    filtered = products.filter((p) => p.id !== excludeId);
  }
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
}

// ===== PAGE INITIALIZATION =====

document.addEventListener("DOMContentLoaded", function () {
  const page = document.body.dataset.page;

  switch (page) {
    case "home":
      initHomePage();
      break;
    case "shop":
      initShopPage();
      break;
    case "product":
      initProductPage();
      break;
  }
});

// ===== HOME PAGE =====

function initHomePage() {
  loadFeaturedProducts();
}

function loadFeaturedProducts() {
  const brillianceContainer = document.getElementById("brilliance-collection");
  if (brillianceContainer) {
    const featured = [
      getProductById("reflector-tshirt"),
      getProductById("7-ways-brilliance"),
      getProductById("more-fashion-sweater"),
      getProductById("3bs-tshirt"),
    ];
    renderProductGrid(brillianceContainer, featured);
  }

  const euphoriaContainer = document.getElementById("euphoria-collection");
  if (euphoriaContainer) {
    const euphoria = [
      getProductById("og-wte-tshirt-pink"),
      getProductById("wte-5p"),
      getProductById("wte-hoodie"),
      getProductById("uk-motion-wear-navy"),
    ];
    renderProductGrid(euphoriaContainer, euphoria);
  }

  const bottomsContainer = document.getElementById("bottoms-collection");
  if (bottomsContainer) {
    const bottoms = [
      getProductById("reflector-cargo-pants"),
      getProductById("purple-strip-short"),
      getProductById("white-cargo-pants"),
      getProductById("blue-strip-short"),
    ];
    renderProductGrid(bottomsContainer, bottoms);
  }
}

// ===== SHOP PAGE =====

function initShopPage() {
  loadShopProducts();
}

function loadShopProducts() {
  const topsContainer = document.getElementById("tops-container");
  const bottomsContainer = document.getElementById("bottoms-container");

  if (topsContainer) {
    const tops = getProductsByCategory("tops");
    renderProductGrid(topsContainer, tops);
  }

  if (bottomsContainer) {
    const bottoms = getProductsByCategory("bottoms");
    renderProductGrid(bottomsContainer, bottoms);
  }
}

// ===== PRODUCT PAGE =====

function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) {
    window.location.href = "index.html";
    return;
  }

  currentProduct = getProductById(productId);

  if (!currentProduct) {
    window.location.href = "index.html";
    return;
  }

  renderProductDetails();
  loadRecommendations();
}

function renderProductDetails() {
  document.title = `${currentProduct.name} - Brilliance`;

  document.getElementById("product-name").textContent = currentProduct.name;
  document.getElementById(
    "product-price"
  ).textContent = `R${currentProduct.price.toFixed(2)}`;

  const mainImage = document.getElementById("main-image");
  mainImage.src = `${CONFIG.imagePath}${currentProduct.images[0]}`;
  mainImage.alt = currentProduct.name;

  const thumbnailsContainer = document.getElementById("thumbnails");
  thumbnailsContainer.innerHTML = currentProduct.images
    .slice(1)
    .map(
      (img, index) => `
    <img src="${CONFIG.imagePath}${img}" alt="Image ${
        index + 2
      }" class="thumbnail cursor-pointer w-20 h-20 object-cover rounded" onclick="changeMainImage(${
        index + 1
      })">
  `
    )
    .join("");

  const sizeSelect = document.getElementById("size-select");
  sizeSelect.innerHTML = currentProduct.sizes
    .map(
      (size) => `
    <option value="${size}">${size}</option>
  `
    )
    .join("");

  const colorSelect = document.getElementById("color-select");
  colorSelect.innerHTML = currentProduct.colors
    .map(
      (color) => `
    <option value="${color}">${color}</option>
  `
    )
    .join("");

  if (currentProduct.fit) {
    document.getElementById(
      "product-fit"
    ).textContent = `FIT | ${currentProduct.fit}`;
  }
  if (currentProduct.description) {
    document.getElementById("product-description").textContent =
      currentProduct.description;
  }
}

function changeMainImage(index) {
  currentImageIndex = index;
  const mainImage = document.getElementById("main-image");
  mainImage.src = `${CONFIG.imagePath}${currentProduct.images[index]}`;
}

function loadRecommendations() {
  const recommendationsContainer = document.getElementById("recommendations");
  const recommendations = getRandomProducts(3, currentProduct.id);
  renderProductGrid(recommendationsContainer, recommendations);
}

// ===== SHARED FUNCTIONS =====

function renderProductGrid(container, products) {
  container.innerHTML = products
    .map(
      (product) => `
    <a href="product.html?id=${product.id}" class="product-link block">
      <div class="product-card bg-white border rounded-lg p-4 hover:shadow-lg transition">
        <img loading="lazy" src="${CONFIG.imagePath}${
        product.images[0]
      }" alt="${
        product.name
      }" class="product-image w-full h-64 object-cover mb-4 rounded">
        <p class="font-bold text-center mb-2">${product.name}</p>
        <button class="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">R${product.price.toFixed(
          2
        )}</button>
      </div>
    </a>
  `
    )
    .join("");
}

function handleBuyNow() {
  if (!currentProduct) return;

  const size = document.getElementById("size-select").value;
  const color = document.getElementById("color-select").value;
  const quantity = document.getElementById("quantity-select").value;
  const mainImageSrc = document.getElementById("main-image").src;

  const message =
    "*New Order Request*\n\n" +
    `*Product:* ${currentProduct.name} 👕\n` +
    `*Price:* R${currentProduct.price.toFixed(2)}\n` +
    `*Size:* ${size}\n` +
    `*Color:* ${color}\n` +
    `*Quantity:* ${quantity}\n\n` +
    `🖼️ *Product Image:* ${mainImageSrc}\n\n` +
    "Please confirm availability. ✅";

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;

  window.location.href = whatsappURL;
}

// ===== EXPORT TO GLOBAL SCOPE =====
window.changeMainImage = changeMainImage;
window.handleBuyNow = handleBuyNow;
window.products = products;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;

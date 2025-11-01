// app.js - Main application logic

// WhatsApp phone number
const WHATSAPP_NUMBER = "27686311388";

// Current product being viewed
let currentProduct = null;
let currentImageIndex = 0;

// Initialize the app based on current page
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
    case "gallery":
      initGalleryPage();
      break;
  }
});

// Home Page Initialization
function initHomePage() {
  loadFeaturedProducts();
}

function loadFeaturedProducts() {
  // Load Brilliance Collection
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

  // Load Welcome to Euphoria Collection
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

  // Load Bottoms Collection
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

// Shop Page Initialization
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

// Product Page Initialization
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

// Render product grid
function renderProductGrid(container, products) {
  container.innerHTML = products
    .map(
      (product) => `
    <a href="product.html?id=${product.id}" class="product-link">
      <div class="product-card">
        <img src="pics/${product.images[0]}" alt="${
        product.name
      }" class="product-image">
        <p>${product.name}</p>
        <button>R${product.price.toFixed(2)}</button>
      </div>
    </a>
  `
    )
    .join("");
}

// Render product details on product page
function renderProductDetails() {
  // Update page title
  document.title = `${currentProduct.name} - Brilliance`;

  // Update product name and price
  document.getElementById("product-name").textContent = currentProduct.name;
  document.getElementById(
    "product-price"
  ).textContent = `R${currentProduct.price.toFixed(2)}`;

  // Update main image
  const mainImage = document.getElementById("main-image");
  mainImage.src = `pics/${currentProduct.images[0]}`;
  mainImage.alt = currentProduct.name;

  // Update thumbnail images
  const thumbnailsContainer = document.getElementById("thumbnails");
  thumbnailsContainer.innerHTML = currentProduct.images
    .slice(1)
    .map(
      (img, index) => `
    <img src="pics/${img}" alt="Image ${
        index + 2
      }" class="thumbnail" onclick="changeMainImage(${index + 1})">
  `
    )
    .join("");

  // Update size options
  const sizeSelect = document.getElementById("size-select");
  sizeSelect.innerHTML = currentProduct.sizes
    .map(
      (size) => `
    <option value="${size}">${size}</option>
  `
    )
    .join("");

  // Update color options
  const colorSelect = document.getElementById("color-select");
  colorSelect.innerHTML = currentProduct.colors
    .map(
      (color) => `
    <option value="${color}">${color}</option>
  `
    )
    .join("");

  // Update fit and description
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

// Change main product image
function changeMainImage(index) {
  currentImageIndex = index;
  const mainImage = document.getElementById("main-image");
  mainImage.src = `pics/${currentProduct.images[index]}`;

  // Update active thumbnail
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb, i) => {
    if (i === index - 1) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

// Load product recommendations
function loadRecommendations() {
  const recommendationsContainer = document.getElementById("recommendations");
  const recommendations = getRandomProducts(3, currentProduct.id);
  renderProductGrid(recommendationsContainer, recommendations);
}

// Handle Buy Now button
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
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.location.href = whatsappURL;
}

// Gallery page initialization
function initGalleryPage() {
  // Gallery functionality can be added here if needed
  console.log("Gallery page loaded");
}

// Search functionality (if needed)
function searchProducts(query) {
  query = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );
}

// Export functions to global scope for inline event handlers
window.changeMainImage = changeMainImage;
window.handleBuyNow = handleBuyNow;

// src/js/components.js - Reusable HTML components

// ===== LOAD HEADER =====
function loadHeader() {
  const headerHTML = `
    <nav class="fixed top-0 w-full bg-white shadow-lg z-50">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <a href="../pages/index.html">
          <img src="/public/images/pics/Brilliancelogo.png" alt="Brilliance Logo" class="h-16">
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 uppercase tracking-wide font-semibold text-gray-800">
          <a href="../pages/index.html" class="hover:text-blue-600 transition">Home</a>
          <a href="../pages/shop.html" class="hover:text-blue-600 transition">Shop Now</a>
          <a href="../pages/gallery.html" class="hover:text-blue-600 transition">Gallery</a>
          <a href="../pages/contact.html" class="hover:text-blue-600 transition">Contact Us</a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden focus:outline-none">
          <svg class="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t shadow-md">
        <a href="../pages/index.html" class="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition">Home</a>
        <a href="../pages/shop.html" class="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition">Shop Now</a>
        <a href="../pages/gallery.html" class="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition">Gallery</a>
        <a href="../pages/contact.html" class="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition">Contact Us</a>
      </div>
    </nav>

    <!-- Spacer for fixed nav -->
    <div class="h-24"></div>

    <!-- Announcement Bar -->
    <div class="bg-gray-900 text-white text-center py-3 uppercase tracking-wider font-semibold text-sm">
      Free Delivery For Orders Over R500
    </div>
  `;

  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
    initMobileMenu();
  }
}

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// ===== LOAD FOOTER =====
function loadFooter() {
  const footerHTML = `
  <footer class="bg-[#0e0e0e] text-gray-300 py-12 mt-16 border-t border-gray-800">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 class="text-white text-lg font-semibold mb-3">About</h3>
          <a href="../pages/about.html" class="block text-gray-400 hover:text-white transition duration-300">Our Story</a>
        </div>
        <div>
          <h3 class="text-white text-lg font-semibold mb-3">Support</h3>
          <a href="../pages/contact.html" class="block text-gray-400 hover:text-white transition duration-300">Contact Us</a>
          <a href="#" class="block text-gray-400 hover:text-white transition duration-300">Delivery Info</a>
        </div>
        <div>
          <h3 class="text-white text-lg font-semibold mb-3">Shop</h3>
          <a href="#" class="block text-gray-400 hover:text-white transition duration-300">Secured Payment</a>
        </div>
        <div>
          <h3 class="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div class="flex justify-center md:justify-start space-x-5 mt-2">
            <a href="https://www.instagram.com/brilliance_za" target="_blank" class="text-2xl hover:text-pink-500 transition duration-300">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@brilliance_za" target="_blank" class="text-2xl hover:text-gray-400 transition duration-300">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>&copy; 2025 <span class="text-white font-medium">Brilliance Clothing</span>. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
}

// ===== SOCIAL MEDIA BAR =====
function loadSocialBar() {
  const socialHTML = `
    <div class="social-bar text-center my-8">
      <a href="https://www.instagram.com/brilliance_za" target="_blank" class="inline-block mx-4 text-5xl text-black hover:text-pink-500 transition">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.tiktok.com/@brilliance_za" target="_blank" class="inline-block mx-4 text-5xl text-black hover:text-gray-600 transition">
        <i class="fab fa-tiktok"></i>
      </a>
    </div>
  `;

  const socialContainer = document.getElementById("social-bar");
  if (socialContainer) {
    socialContainer.innerHTML = socialHTML;
  }
}

// ===== INIT ALL COMPONENTS =====
function initComponents() {
  loadHeader();
  loadFooter();
  loadSocialBar();
}

// Auto-load components on DOM ready
document.addEventListener("DOMContentLoaded", initComponents);

// Export functions
window.loadHeader = loadHeader;
window.loadFooter = loadFooter;
window.loadSocialBar = loadSocialBar;

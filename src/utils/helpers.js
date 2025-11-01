// src/utils/helpers.js - Utility helper functions

// ===== FORMAT CURRENCY =====
function formatPrice(price) {
  return `R${price.toFixed(2)}`;
}

// ===== SCROLL TO TOP =====
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ===== GET URL PARAMETERS =====
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// ===== SET URL PARAMETER =====
function setUrlParameter(name, value) {
  const url = new URL(window.location);
  url.searchParams.set(name, value);
  window.history.pushState({}, "", url);
}

// ===== DEBOUNCE FUNCTION =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== VALIDATE EMAIL =====
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ===== VALIDATE PHONE NUMBER (South African) =====
function isValidPhone(phone) {
  // Remove spaces and special characters
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
  // Check if it matches South African format
  const phoneRegex = /^(\+27|0)[0-9]{9}$/;
  return phoneRegex.test(cleanPhone);
}

// ===== SHOW NOTIFICATION =====
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  const bgColor =
    {
      success: "bg-green-500",
      error: "bg-red-500",
      info: "bg-blue-500",
      warning: "bg-yellow-500",
    }[type] || "bg-blue-500";

  notification.className = `fixed top-24 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in`;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("animate-fade-out");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ===== LOADING SPINNER =====
function showLoading(container) {
  const spinner = `
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
    </div>
  `;
  if (typeof container === "string") {
    document.getElementById(container).innerHTML = spinner;
  } else {
    container.innerHTML = spinner;
  }
}

// ===== LAZY LOAD IMAGES =====
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// ===== LOCAL STORAGE HELPERS =====
const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error("Error saving to localStorage:", e);
      return false;
    }
  },

  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error("Error reading from localStorage:", e);
      return null;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error("Error removing from localStorage:", e);
      return false;
    }
  },

  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      console.error("Error clearing localStorage:", e);
      return false;
    }
  },
};

// ===== FORM VALIDATION =====
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("border-red-500");
      isValid = false;
    } else {
      input.classList.remove("border-red-500");
    }

    // Email validation
    if (input.type === "email" && !isValidEmail(input.value)) {
      input.classList.add("border-red-500");
      isValid = false;
    }

    // Phone validation
    if (input.type === "tel" && !isValidPhone(input.value)) {
      input.classList.add("border-red-500");
      isValid = false;
    }
  });

  return isValid;
}

// ===== COPY TO CLIPBOARD =====
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showNotification("Copied to clipboard!", "success");
      })
      .catch(() => {
        showNotification("Failed to copy", "error");
      });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showNotification("Copied to clipboard!", "success");
  }
}

// ===== SHARE TO SOCIAL MEDIA =====
function shareToSocial(platform, url, text) {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`,
  };

  if (shareUrls[platform]) {
    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  }
}

// ===== EXPORT FUNCTIONS =====
window.formatPrice = formatPrice;
window.scrollToTop = scrollToTop;
window.getUrlParameter = getUrlParameter;
window.setUrlParameter = setUrlParameter;
window.debounce = debounce;
window.isValidEmail = isValidEmail;
window.isValidPhone = isValidPhone;
window.showNotification = showNotification;
window.showLoading = showLoading;
window.lazyLoadImages = lazyLoadImages;
window.storage = storage;
window.validateForm = validateForm;
window.copyToClipboard = copyToClipboard;
window.shareToSocial = shareToSocial;

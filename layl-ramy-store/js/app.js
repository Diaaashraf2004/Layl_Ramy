// ============================================
// Layl Ramy Storefront - Main Application
// ============================================
const Store = window.Store;
if (!Store) {
  console.error('❌ Store module failed to load. Check store.js for errors.');
}

// ============================================
// i18n - Internationalization Module
// ============================================
const translations = {
  ar: {
    nav: { home: 'الرئيسية', products: 'المنتجات', cart: 'السلة', search: 'بحث' },
    hero: { subtitle: 'تسوق بأناقة وراحة', shopNow: 'تسوق الآن' },
    home: {
      featured: 'منتجات مميزة', offers: 'عروض وخصومات', categories: 'التصنيفات',
      seeAll: 'عرض الكل', shopNow: 'تسوق الآن', offersBanner: 'عروض حصرية',
      offersBannerSub: 'خصومات تصل إلى 30% على منتجات مختارة'
    },
    products: {
      title: 'المنتجات', filter: 'تصفية', sort: 'ترتيب حسب', sortNewest: 'الأحدث',
      sortPriceLow: 'السعر: الأقل', sortPriceHigh: 'السعر: الأعلى', sortRating: 'التقييم',
      noResults: 'لا توجد منتجات', searchPlaceholder: 'ابحث عن منتج...', allCategories: 'الكل',
      results: 'نتيجة', noResultsMessage: 'جرب البحث بكلمات أخرى'
    },
    product: {
      addToCart: 'أضف للسلة', outOfStock: 'نفذت الكمية', description: 'الوصف',
      reviews: 'التقييمات', noReviews: 'لا توجد تقييمات بعد', writeReview: 'اكتب تقييم',
      relatedProducts: 'منتجات مشابهة', quantity: 'الكمية', added: 'تمت الإضافة للسلة',
      backToProducts: 'العودة للمنتجات'
    },
    cart: {
      title: 'سلة التسوق', empty: 'السلة فارغة', emptyMessage: 'لم تقم بإضافة أي منتجات بعد',
      continueShopping: 'تابع التسوق', subtotal: 'المجموع الفرعي', shipping: 'الشحن',
      freeShipping: 'مجاني', total: 'الإجمالي', checkout: 'إتمام الطلب',
      remove: 'حذف', clear: 'تفريغ السلة', items: 'منتجات'
    },
    checkout: {
      title: 'إتمام الطلب', name: 'الاسم الكامل', phone: 'رقم الهاتف', email: 'البريد الإلكتروني',
      address: 'العنوان بالتفصيل', city: 'المدينة', notes: 'ملاحظات', placeOrder: 'تأكيد الطلب',
      orderSummary: 'ملخص الطلب', paymentMethod: 'طريقة الدفع', cod: 'الدفع عند الاستلام',
      codNote: 'ادفع نقداً عند استلام طلبك', success: 'تم تأكيد طلبك بنجاح! 🎉',
      orderNumber: 'رقم الطلب', trackOrder: 'تتبع الطلب', backToHome: 'العودة للرئيسية',
      successMessage: 'سنتواصل معك قريباً لتأكيد التفاصيل', required: 'هذا الحقل مطلوب',
      invalidPhone: 'رقم هاتف غير صحيح', emptyCart: 'السلة فارغة',
      selectCity: 'اختر المدينة', customerInfo: 'معلومات العميل', shippingInfo: 'معلومات الشحن',
      discount: 'الخصم', couponCode: 'كود الخصم', applyCoupon: 'تطبيق',
      couponApplied: 'تم تطبيق الخصم', invalidCoupon: 'كود الخصم غير صحيح أو منتهي'
    },
    track: {
      title: 'تتبع الطلب', enterOrder: 'أدخل رقم الطلب', placeholder: 'مثال: LR-78432',
      search: 'بحث', orderDetails: 'تفاصيل الطلب', notFound: 'لم يتم العثور على الطلب',
      notFoundMessage: 'تأكد من رقم الطلب وحاول مرة أخرى', orderItems: 'المنتجات',
      customerInfo: 'معلومات العميل', orderSummary: 'ملخص الطلب'
    },
    auth: {
      login: 'تسجيل الدخول', register: 'إنشاء حساب جديد', profile: 'حسابي', logout: 'تسجيل الخروج',
      email: 'البريد الإلكتروني', password: 'كلمة المرور', name: 'الاسم الكامل', phone: 'رقم الهاتف',
      noAccount: 'ليس لديك حساب؟', haveAccount: 'لديك حساب بالفعل؟',
      createAccount: 'سجل الآن', loginNow: 'سجل دخولك',
      loginSuccess: 'تم تسجيل الدخول بنجاح', registerSuccess: 'تم إنشاء الحساب بنجاح',
      invalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة', emailExists: 'البريد الإلكتروني مسجل مسبقاً',
      ordersHistory: 'سجل الطلبات', noOrders: 'لا توجد طلبات سابقة',
      personalInfo: 'المعلومات الشخصية',
      guestCheckout: 'الشراء كزائر', guestCheckoutDesc: 'يمكنك إتمام الطلب وتتبعه لاحقاً برقم الطلب'
    },
    status: {
      new: 'جديد', confirmed: 'مؤكد', preparing: 'جاري التحضير',
      shipping: 'جاري الشحن', delivered: 'تم التوصيل', cancelled: 'ملغي'
    },
    review: {
      name: 'اسمك', comment: 'تعليقك', rating: 'التقييم', submit: 'إرسال التقييم',
      thankYou: 'شكراً لتقييمك! سيظهر بعد المراجعة.', nameRequired: 'يرجى إدخال اسمك',
      ratingRequired: 'يرجى اختيار تقييم', commentRequired: 'يرجى كتابة تعليق'
    },
    footer: {
      about: 'عن المتجر', quickLinks: 'روابط سريعة', contact: 'تواصل معنا',
      rights: 'جميع الحقوق محفوظة', phone: 'الهاتف', email: 'البريد', address: 'العنوان',
      categoriesTitle: 'التصنيفات'
    },
    common: {
      egp: 'ج.م', off: 'خصم', loading: 'جاري التحميل...', close: 'إغلاق', save: 'حفظ',
      cancel: 'إلغاء', delete: 'حذف', edit: 'تعديل', add: 'إضافة', noData: 'لا توجد بيانات',
      product: 'منتج', products: 'منتجات'
    },
    theme: { dark: 'الوضع الداكن', light: 'الوضع الفاتح' },
    lang: { switch: 'EN', current: 'عربي' },
    cities: ['القاهرة', 'الجيزة', 'الإسكندرية', 'المنصورة', 'طنطا', 'الزقازيق', 'أسيوط', 'سوهاج', 'المنيا', 'بورسعيد', 'السويس', 'الإسماعيلية', 'دمياط', 'الفيوم', 'بني سويف']
  },
  en: {
    nav: { home: 'Home', products: 'Products', cart: 'Cart', search: 'Search' },
    hero: { subtitle: 'Shop with Elegance & Comfort', shopNow: 'Shop Now' },
    home: {
      featured: 'Featured Products', offers: 'Offers & Deals', categories: 'Categories',
      seeAll: 'See All', shopNow: 'Shop Now', offersBanner: 'Exclusive Offers',
      offersBannerSub: 'Up to 30% off on selected products'
    },
    products: {
      title: 'Products', filter: 'Filter', sort: 'Sort by', sortNewest: 'Newest',
      sortPriceLow: 'Price: Low to High', sortPriceHigh: 'Price: High to Low', sortRating: 'Top Rated',
      noResults: 'No products found', searchPlaceholder: 'Search products...', allCategories: 'All',
      results: 'results', noResultsMessage: 'Try searching with different keywords'
    },
    product: {
      addToCart: 'Add to Cart', outOfStock: 'Out of Stock', description: 'Description',
      reviews: 'Reviews', noReviews: 'No reviews yet', writeReview: 'Write a Review',
      relatedProducts: 'Related Products', quantity: 'Quantity', added: 'Added to cart',
      backToProducts: 'Back to Products'
    },
    cart: {
      title: 'Shopping Cart', empty: 'Cart is empty', emptyMessage: "You haven't added any products yet",
      continueShopping: 'Continue Shopping', subtotal: 'Subtotal', shipping: 'Shipping',
      freeShipping: 'Free', total: 'Total', checkout: 'Checkout',
      remove: 'Remove', clear: 'Clear Cart', items: 'items'
    },
    checkout: {
      title: 'Checkout', name: 'Full Name', phone: 'Phone Number', email: 'Email',
      address: 'Delivery Address', city: 'City', notes: 'Notes', placeOrder: 'Place Order',
      orderSummary: 'Order Summary', paymentMethod: 'Payment Method', cod: 'Cash on Delivery',
      codNote: 'Pay cash when you receive your order', success: 'Order confirmed! 🎉',
      orderNumber: 'Order Number', trackOrder: 'Track Order', backToHome: 'Back to Home',
      successMessage: "We'll contact you soon to confirm details", required: 'This field is required',
      invalidPhone: 'Invalid phone number', emptyCart: 'Cart is empty',
      selectCity: 'Select city', customerInfo: 'Customer Information', shippingInfo: 'Shipping Information',
      discount: 'Discount', couponCode: 'Coupon Code', applyCoupon: 'Apply',
      couponApplied: 'Coupon applied', invalidCoupon: 'Invalid or expired coupon'
    },
    track: {
      title: 'Track Order', enterOrder: 'Enter order number', placeholder: 'e.g. LR-78432',
      search: 'Search', orderDetails: 'Order Details', notFound: 'Order not found',
      notFoundMessage: 'Check the order number and try again', orderItems: 'Items',
      customerInfo: 'Customer Info', orderSummary: 'Order Summary'
    },
    auth: {
      login: 'Login', register: 'Create Account', profile: 'My Profile', logout: 'Logout',
      email: 'Email', password: 'Password', name: 'Full Name', phone: 'Phone Number',
      noAccount: "Don't have an account?", haveAccount: 'Already have an account?',
      createAccount: 'Register now', loginNow: 'Login now',
      loginSuccess: 'Logged in successfully', registerSuccess: 'Account created successfully',
      invalidCredentials: 'Invalid email or password', emailExists: 'Email is already registered',
      ordersHistory: 'Order History', noOrders: 'No previous orders',
      personalInfo: 'Personal Information',
      guestCheckout: 'Guest Checkout', guestCheckoutDesc: 'You can complete your order and track it later using the order number'
    },
    status: {
      new: 'New', confirmed: 'Confirmed', preparing: 'Preparing',
      shipping: 'Shipping', delivered: 'Delivered', cancelled: 'Cancelled'
    },
    review: {
      name: 'Your name', comment: 'Your comment', rating: 'Rating', submit: 'Submit Review',
      thankYou: 'Thank you! Your review will appear after moderation.', nameRequired: 'Please enter your name',
      ratingRequired: 'Please select a rating', commentRequired: 'Please write a comment'
    },
    footer: {
      about: 'About', quickLinks: 'Quick Links', contact: 'Contact Us',
      rights: 'All rights reserved', phone: 'Phone', email: 'Email', address: 'Address',
      categoriesTitle: 'Categories'
    },
    common: {
      egp: 'EGP', off: 'OFF', loading: 'Loading...', close: 'Close', save: 'Save',
      cancel: 'Cancel', delete: 'Delete', edit: 'Edit', add: 'Add', noData: 'No data',
      product: 'product', products: 'products'
    },
    theme: { dark: 'Dark Mode', light: 'Light Mode' },
    lang: { switch: 'عربي', current: 'EN' },
    cities: ['Cairo', 'Giza', 'Alexandria', 'Mansoura', 'Tanta', 'Zagazig', 'Asyut', 'Sohag', 'Minya', 'Port Said', 'Suez', 'Ismailia', 'Damietta', 'Fayoum', 'Beni Suef']
  }
};

function getLang() {
  try {
    return localStorage.getItem('lr_lang') || 'ar';
  } catch (e) {
    return 'ar';
  }
}

function setLang(lang) {
  try {
    localStorage.setItem('lr_lang', lang);
  } catch (e) {}
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Swap font CSS vars
  if (lang === 'ar') {
    document.body.style.fontFamily = "var(--font-ar-body)";
  } else {
    document.body.style.fontFamily = "var(--font-body)";
  }
  renderNavbar();
  renderFooter();
  renderCartSidebar();
  navigateTo(getCurrentRoute());
}

function isRTL() {
  return getLang() === 'ar';
}

function t(key) {
  const lang = getLang();
  const keys = key.split('.');
  let val = translations[lang];
  for (const k of keys) {
    if (!val) return key;
    val = val[k];
  }
  return val !== undefined ? val : key;
}

// ============================================
// Theme Module
// ============================================
function getTheme() {
  try {
    return localStorage.getItem('lr_theme') || 'dark';
  } catch (e) {
    return 'dark';
  }
}

function setTheme(theme) {
  try {
    localStorage.setItem('lr_theme', theme);
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = getTheme();
  setTheme(current === 'dark' ? 'light' : 'dark');
  renderNavbar();
}

// ============================================
// Router (Hash-based)
// ============================================
function getCurrentRoute() {
  return window.location.hash || '#/';
}

function navigateTo(hash) {
  window.location.hash = hash;
}

function parseRoute(hash) {
  const clean = hash.replace('#', '');
  const parts = clean.split('/').filter(Boolean);
  if (parts.length === 0) return { page: 'home', params: {} };
  if (parts[0] === 'products') return { page: 'products', params: {} };
  if (parts[0] === 'product' && parts[1]) return { page: 'product', params: { id: parts[1] } };
  if (parts[0] === 'category' && parts[1]) return { page: 'category', params: { id: parts[1] } };
  if (parts[0] === 'checkout') return { page: 'checkout', params: {} };
  if (parts[0] === 'track') return { page: 'track', params: { orderNumber: parts[1] || '' } };
  if (parts[0] === 'order-success' && parts[1]) return { page: 'order-success', params: { orderNumber: parts[1] } };
  if (parts[0] === 'login') return { page: 'login', params: {} };
  if (parts[0] === 'register') return { page: 'register', params: {} };
  if (parts[0] === 'profile') return { page: 'profile', params: {} };
  return { page: 'home', params: {} };
}

function handleRoute() {
  const { page, params } = parseRoute(getCurrentRoute());
  const app = document.getElementById('app');
  closeMobileNav();
  closeCartSidebar();
  closeSearchOverlay();

  let html = '';
  switch (page) {
    case 'home': html = renderHomePage(); break;
    case 'products': html = renderProductsPage(); break;
    case 'category': html = renderProductsPage(params.id); break;
    case 'product': html = renderProductDetailPage(params.id); break;
    case 'checkout': html = renderCheckoutPage(); break;
    case 'track': html = renderOrderTrackingPage(params.orderNumber); break;
    case 'order-success': html = renderOrderSuccessPage(params.orderNumber); break;
    case 'login': html = renderLoginPage(); break;
    case 'register': html = renderRegisterPage(); break;
    case 'profile': html = renderProfilePage(); break;
    default: html = renderHomePage();
  }

  app.innerHTML = html;
  app.className = 'page-enter';
  updateActiveNavLink(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger animation
  void app.offsetWidth;
}

function updateActiveNavLink(page) {
  document.querySelectorAll('.navbar-link, .mobile-nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (page === 'home' && href === '#/') link.classList.add('active');
    else if (page === 'products' && href === '#/products') link.classList.add('active');
    else if (page === 'category' && href === '#/products') link.classList.add('active');
  });
}

// ============================================
// Helper Functions
// ============================================
function getProductName(product) {
  if (!product) return '';
  return getLang() === 'ar' ? (product.name_ar || product.name_en) : (product.name_en || product.name_ar);
}

function getProductDesc(product) {
  if (!product) return '';
  return getLang() === 'ar' ? (product.description_ar || product.description_en) : (product.description_en || product.description_ar);
}

function getCategoryName(category) {
  if (!category) return '';
  return getLang() === 'ar' ? (category.name_ar || category.name_en) : (category.name_en || category.name_ar);
}

function getLocalizedText(obj, field) {
  if (!obj) return '';
  const lang = getLang();
  return obj[`${field}_${lang}`] || obj[`${field}_ar`] || obj[`${field}_en`] || '';
}

function formatPrice(price) {
  return Store.formatPrice(price, getLang());
}

function renderStars(rating, interactive = false, containerId = '') {
  let html = `<div class="stars ${interactive ? '' : 'stars-static'}" ${containerId ? `id="${containerId}"` : ''}>`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= Math.round(rating) ? 'filled' : ''}" data-rating="${i}" ${interactive ? `data-action="set-star"` : ''}><i class="ph-fill ph-star"></i></span>`;
  }
  html += '</div>';
  return html;
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ============================================
// Components
// ============================================

// --- Navbar ---
function renderNavbar() {
  const settings = Store.getSettings();
  const cartTotal = Store.getCartTotal();
  const lang = getLang();
  const theme = getTheme();
  const storeName = settings.storeName || 'Layl Ramy';
  const nameParts = storeName.split(' ');
  const firstName = nameParts[0] || 'Layl';
  const lastName = nameParts.slice(1).join(' ') || 'Ramy';
  const currentCustomer = Store.getCurrentCustomer();

  document.getElementById('navbar-container').innerHTML = `
    <nav class="navbar" id="main-navbar">
      <div class="navbar-inner">
        <a href="#/" class="navbar-logo" id="navbar-logo">
          <span class="logo-regular">${escapeHtml(firstName)}</span>
          <span class="logo-bold">${escapeHtml(lastName)}</span>
          <span class="logo-moon">🌙</span>
        </a>
        <div class="navbar-links" id="navbar-links">
          <a href="#/" class="navbar-link" id="nav-home">${t('nav.home')}</a>
          <a href="#/products" class="navbar-link" id="nav-products">${t('nav.products')}</a>
          <a href="#/track" class="navbar-link" id="nav-track">${t('track.title')}</a>
        </div>
        <div class="navbar-actions">
          <button class="btn-icon" data-action="open-search" id="btn-search" title="${t('nav.search')}"><i class="ph ph-magnifying-glass"></i></button>
          <a href="${currentCustomer ? '#/profile' : '#/login'}" class="btn-icon" title="${currentCustomer ? t('auth.profile') : t('auth.login')}"><i class="ph ph-user"></i></a>
          <button class="lang-toggle" data-action="toggle-lang" id="btn-lang">${t('lang.switch')}</button>
          <button class="btn-icon" data-action="toggle-theme" id="btn-theme">${theme === 'dark' ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>'}</button>
          <button class="btn-icon" data-action="toggle-cart" id="btn-cart" title="${t('nav.cart')}">
            <i class="ph ph-shopping-cart"></i>
            ${cartTotal.itemCount > 0 ? `<span class="cart-badge" id="cart-badge">${cartTotal.itemCount}</span>` : ''}
          </button>
          <button class="hamburger" data-action="toggle-mobile-nav" id="btn-hamburger"><i class="ph ph-list"></i></button>
        </div>
      </div>
    </nav>
    <div class="mobile-nav" id="mobile-nav">
      <a href="#/" class="mobile-nav-link" id="mobile-nav-home">${t('nav.home')}</a>
      <a href="#/products" class="mobile-nav-link" id="mobile-nav-products">${t('nav.products')}</a>
      <a href="#/track" class="mobile-nav-link" id="mobile-nav-track">${t('track.title')}</a>
      <div style="height:1px; background:var(--border); margin:10px 0;"></div>
      <a href="${currentCustomer ? '#/profile' : '#/login'}" class="mobile-nav-link">${currentCustomer ? t('auth.profile') : t('auth.login')}</a>
    </div>
    <!-- Search Overlay -->
    <div class="search-overlay" id="search-overlay" data-action="close-search-overlay">
      <div class="search-box" id="search-box">
        <div class="search-input-wrapper">
          <span class="search-icon"><i class="ph ph-magnifying-glass"></i></span>
          <input type="text" class="search-input" id="search-input" placeholder="${t('products.searchPlaceholder')}" data-action="search-input">
        </div>
        <div class="search-results" id="search-results"></div>
      </div>
    </div>
  `;
}

// --- Footer ---
function renderFooter() {
  const settings = Store.getSettings();
  const categories = Store.getActiveCategories();
  const lang = getLang();
  const year = new Date().getFullYear();
  const storeName = settings.storeName || 'Layl Ramy';
  const nameParts = storeName.split(' ');
  const firstName = nameParts[0] || 'Layl';
  const lastName = nameParts.slice(1).join(' ') || 'Ramy';
  const aboutText = lang === 'ar' ? settings.aboutText_ar : settings.aboutText_en;
  const address = lang === 'ar' ? settings.address_ar : settings.address_en;

  document.getElementById('footer-container').innerHTML = `
    <footer class="footer" id="main-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-logo">
              <span class="logo-regular">${escapeHtml(firstName)}</span>
              <span class="logo-bold">${escapeHtml(lastName)}</span>
              <span>🌙</span>
            </div>
            <p class="footer-text">${escapeHtml(aboutText)}</p>
            <div class="footer-social">
              <a href="#" title="Facebook"><i class="ph ph-facebook-logo"></i></a>
              <a href="#" title="Instagram"><i class="ph ph-instagram-logo"></i></a>
              <a href="#" title="WhatsApp"><i class="ph ph-whatsapp-logo"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-title">${t('footer.quickLinks')}</h4>
            <a href="#/" class="footer-link">${t('nav.home')}</a>
            <a href="#/products" class="footer-link">${t('nav.products')}</a>
            <a href="#/track" class="footer-link">${t('track.title')}</a>
          </div>
          <div class="footer-col">
            <h4 class="footer-title">${t('footer.categoriesTitle')}</h4>
            ${categories.map(cat => `
              <a href="#/category/${cat.id}" class="footer-link">${getCategoryName(cat)}</a>
            `).join('')}
          </div>
          <div class="footer-col">
            <h4 class="footer-title">${t('footer.contact')}</h4>
            <p class="footer-text"><i class="ph ph-phone"></i> ${t('footer.phone')}: ${settings.contactPhone}</p>
            <p class="footer-text"><i class="ph ph-envelope"></i> ${t('footer.email')}: ${settings.contactEmail}</p>
            <p class="footer-text"><i class="ph ph-map-pin"></i> ${t('footer.address')}: ${escapeHtml(address)}</p>
          </div>
        </div>
        <div class="footer-bottom">
          © ${year} ${escapeHtml(storeName)}. ${t('footer.rights')}.
        </div>
      </div>
    </footer>
  `;
}

// --- Cart Sidebar ---
function renderCartSidebar() {
  const cartItems = Store.getCartWithProducts();
  const cartTotal = Store.getCartTotal();
  const settings = Store.getSettings();
  const lang = getLang();

  let itemsHtml = '';
  if (cartItems.length === 0) {
    itemsHtml = `
      <div class="cart-empty">
        <span class="cart-empty-icon"><i class="ph ph-shopping-cart"></i></span>
        <h4>${t('cart.empty')}</h4>
        <p class="cart-empty-message">${t('cart.emptyMessage')}</p>
        <button class="btn btn-secondary" data-action="close-cart">${t('cart.continueShopping')}</button>
      </div>
    `;
  } else {
    itemsHtml = cartItems.map(item => `
      <div class="cart-item" id="cart-item-${item.productId}">
        <img src="${item.product.images?.[0] || 'https://picsum.photos/seed/placeholder/150/150'}" alt="${escapeHtml(getProductName(item.product))}" class="cart-item-image" loading="lazy">
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(getProductName(item.product))}</div>
          <div class="cart-item-price">${formatPrice(item.unitPrice)}</div>
          <div class="cart-item-actions">
            <div class="qty-selector">
              <button class="qty-btn" data-action="cart-qty-decrease" data-product-id="${item.productId}"><i class="ph ph-minus"></i></button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" data-action="cart-qty-increase" data-product-id="${item.productId}"><i class="ph ph-plus"></i></button>
            </div>
            <button class="btn btn-ghost btn-sm" data-action="cart-remove" data-product-id="${item.productId}" style="color:var(--danger)"><i class="ph ph-trash"></i></button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const shippingText = cartTotal.shipping === 0 && cartTotal.subtotal > 0
    ? `<span class="free-shipping">${t('cart.freeShipping')} ✓</span>`
    : formatPrice(cartTotal.shipping);

  document.getElementById('cart-sidebar-container').innerHTML = `
    <div class="cart-overlay" id="cart-overlay" data-action="close-cart"></div>
    <div class="cart-sidebar" id="cart-sidebar">
      <div class="cart-header">
        <h3>${t('cart.title')} (${cartTotal.itemCount})</h3>
        <button class="btn-icon" data-action="close-cart" id="btn-close-cart"><i class="ph ph-x"></i></button>
      </div>
      <div class="cart-body">${itemsHtml}</div>
      ${cartItems.length > 0 ? `
        <div class="cart-footer">
          <div class="cart-summary-row">
            <span>${t('cart.subtotal')}</span>
            <span>${formatPrice(cartTotal.subtotal)}</span>
          </div>
          <div class="cart-summary-row">
            <span>${t('cart.shipping')}</span>
            <span>${shippingText}</span>
          </div>
          <div class="cart-summary-row total">
            <span>${t('cart.total')}</span>
            <span>${formatPrice(cartTotal.total)}</span>
          </div>
          <button class="btn btn-primary w-100 mt-2" data-action="go-checkout" id="btn-checkout">${t('cart.checkout')}</button>
        </div>
      ` : ''}
    </div>
  `;
}

function openCartSidebar() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// --- Mobile Nav ---
function toggleMobileNav() {
  document.getElementById('mobile-nav')?.classList.toggle('open');
}

function closeMobileNav() {
  document.getElementById('mobile-nav')?.classList.remove('open');
}

// --- Search Overlay ---
function openSearchOverlay() {
  const overlay = document.getElementById('search-overlay');
  overlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    document.getElementById('search-input')?.focus();
  }, 100);
}

function closeSearchOverlay() {
  document.getElementById('search-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  const results = document.getElementById('search-results');
  if (results) results.innerHTML = '';
}

function handleSearch(query) {
  const results = Store.searchProducts(query, getLang());
  const container = document.getElementById('search-results');
  if (!container) return;

  if (!query.trim()) {
    container.innerHTML = '';
    return;
  }

  if (results.length === 0) {
    container.innerHTML = `<div class="search-no-results">${t('products.noResults')}</div>`;
    return;
  }

  container.innerHTML = results.slice(0, 8).map(product => `
    <a href="#/product/${product.id}" class="search-result-item" data-action="search-result-click">
      <img src="${product.images?.[0] || 'https://picsum.photos/seed/placeholder/100/100'}" alt="" class="search-result-image" loading="lazy">
      <div class="search-result-info">
        <div class="search-result-name">${escapeHtml(getProductName(product))}</div>
        <div class="search-result-price">${formatPrice(Store.getProductPrice(product))}</div>
      </div>
    </a>
  `).join('');
}

// --- Toast ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '<i class="ph ph-check-circle"></i>' : type === 'error' ? '<i class="ph ph-x-circle"></i>' : '<i class="ph ph-warning-circle"></i>'}</span> ${escapeHtml(message)}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Modal ---
function showModal(title, content) {
  document.getElementById('modal-container').innerHTML = `
    <div class="modal-overlay open" id="modal-overlay" data-action="close-modal">
      <div class="modal" id="modal-box">
        <div class="modal-header">
          <h3>${escapeHtml(title)}</h3>
          <button class="btn-icon" data-action="close-modal"><i class="ph ph-x"></i></button>
        </div>
        <div class="modal-body">${content}</div>
      </div>
    </div>
  `;
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    setTimeout(() => {
      document.getElementById('modal-container').innerHTML = '';
    }, 300);
  }
}

// --- Product Card ---
function renderProductCard(product) {
  const category = Store.getCategory(product.categoryId);
  const discountedPrice = Store.getProductPrice(product);
  const lang = getLang();
  const hasDiscount = product.discountPercentage > 0;
  const outOfStock = product.stock <= 0;

  const discountLabel = lang === 'ar'
    ? `${t('common.off')} ${product.discountPercentage}%`
    : `${product.discountPercentage}% ${t('common.off')}`;

  return `
    <article class="product-card" data-action="go-product" data-product-id="${product.id}" id="product-card-${product.id}">
      <div class="product-card-image">
        ${hasDiscount ? `<span class="discount-badge">${discountLabel}</span>` : ''}
        <img src="${product.images?.[0] || 'https://picsum.photos/seed/placeholder/600/800'}" alt="${escapeHtml(getProductName(product))}" loading="lazy">
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${category ? escapeHtml(getCategoryName(category)) : ''}</div>
        <h3 class="product-card-name">${escapeHtml(getProductName(product))}</h3>
        <div class="product-card-rating">
          ${renderStars(product.ratingAvg)}
          <span style="color:var(--text-muted);font-size:0.75rem;">(${product.ratingCount})</span>
        </div>
        <div class="product-card-footer">
          <div class="price-group">
            <span class="price-current">${formatPrice(discountedPrice)}</span>
            ${hasDiscount ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
          </div>
          <button class="btn btn-primary btn-sm" data-action="add-to-cart" data-product-id="${product.id}" ${outOfStock ? 'disabled' : ''}>
            ${outOfStock ? t('product.outOfStock') : t('product.addToCart')}
          </button>
        </div>
      </div>
    </article>
  `;
}

// ============================================
// Pages
// ============================================

// --- Home Page ---
function renderHomePage() {
  const settings = Store.getSettings();
  const lang = getLang();
  const featured = Store.getFeaturedProducts().slice(0, 8);
  const categories = Store.getActiveCategories();
  const offers = Store.getDiscountedProducts().slice(0, 4);
  const subtitle = lang === 'ar' ? settings.subtitle_ar : settings.subtitle_en;
  const storeName = settings.storeName || 'Layl Ramy';
  const nameParts = storeName.split(' ');
  const firstName = nameParts[0] || 'Layl';
  const lastName = nameParts.slice(1).join(' ') || 'Ramy';

  return `
    <section class="hero" id="hero-section">
      <div class="hero-decoration"></div>
      <div class="hero-decoration"></div>
      <div class="hero-decoration"></div>
      <div class="hero-decoration"></div>
      <div class="hero-decoration"></div>
      <div class="hero-line"></div>
      <div class="hero-line"></div>
      <div class="hero-content">
        <h1 class="hero-title" id="hero-title">
          ${escapeHtml(firstName)} <span class="accent">${escapeHtml(lastName)}</span>
          <span class="hero-moon">🌙</span>
        </h1>
        <p class="hero-subtitle">${escapeHtml(subtitle)}</p>
        <a href="#/products" class="btn btn-primary btn-lg" id="hero-cta">${t('hero.shopNow')}</a>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="page-section" id="featured-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t('home.featured')}</h2>
          <a href="#/products" class="section-link">${t('home.seeAll')} →</a>
        </div>
        <div class="products-grid">
          ${featured.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="page-section" id="categories-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t('home.categories')}</h2>
        </div>
        <div class="categories-grid">
          ${categories.map(cat => {
            const count = Store.getCategoryProductCount(cat.id);
            return `
              <a href="#/category/${cat.id}" class="category-card" id="category-card-${cat.id}">
                <span class="category-icon">${cat.icon || '<i class="ph ph-package"></i>'}</span>
                <div class="category-name">${escapeHtml(getCategoryName(cat))}</div>
                <div class="category-count">${count} ${count === 1 ? t('common.product') : t('common.products')}</div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    <!-- Offers -->
    ${offers.length > 0 ? `
      <section class="page-section" id="offers-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">${t('home.offers')}</h2>
            <a href="#/products" class="section-link">${t('home.seeAll')} →</a>
          </div>
          <div class="offers-banner">
            <h3>${t('home.offersBanner')} 🔥</h3>
            <p>${t('home.offersBannerSub')}</p>
          </div>
          <div class="products-grid">
            ${offers.map(p => renderProductCard(p)).join('')}
          </div>
        </div>
      </section>
    ` : ''}
  `;
}

// --- Products Page ---
function renderProductsPage(categoryId = null) {
  const categories = Store.getActiveCategories();
  const category = categoryId ? Store.getCategory(categoryId) : null;
  const pageTitle = category ? getCategoryName(category) : t('products.title');
  let products = categoryId ? Store.getProductsByCategory(categoryId) : Store.getActiveProducts();

  return `
    <div class="page-content">
      <div class="container">
        <h1 class="mb-3">${escapeHtml(pageTitle)}</h1>

        <!-- Toolbar -->
        <div class="products-toolbar" id="products-toolbar">
          <div class="products-search" id="products-search-bar">
            <span class="products-search-icon"><i class="ph ph-magnifying-glass"></i></span>
            <input type="text" placeholder="${t('products.searchPlaceholder')}" id="products-search-input" data-action="products-search">
          </div>
          <div class="products-sort">
            <select class="form-select" id="products-sort-select" data-action="products-sort">
              <option value="newest">${t('products.sortNewest')}</option>
              <option value="price-low">${t('products.sortPriceLow')}</option>
              <option value="price-high">${t('products.sortPriceHigh')}</option>
              <option value="rating">${t('products.sortRating')}</option>
            </select>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="filter-pills" id="category-filters">
          <button class="filter-pill ${!categoryId ? 'active' : ''}" data-action="filter-category" data-category-id="" id="filter-all">${t('products.allCategories')}</button>
          ${categories.map(cat => `
            <button class="filter-pill ${categoryId === cat.id ? 'active' : ''}" data-action="filter-category" data-category-id="${cat.id}" id="filter-${cat.id}">${escapeHtml(getCategoryName(cat))}</button>
          `).join('')}
        </div>

        <!-- Products Count -->
        <p class="products-count mb-2" id="products-count">${products.length} ${t('products.results')}</p>

        <!-- Products Grid -->
        <div class="products-grid" id="products-grid">
          ${products.length > 0
            ? products.map(p => renderProductCard(p)).join('')
            : `<div class="empty-state">
                <span class="empty-icon"><i class="ph ph-package"></i></span>
                <h3 class="empty-title">${t('products.noResults')}</h3>
                <p class="empty-message">${t('products.noResultsMessage')}</p>
              </div>`
          }
        </div>
      </div>
    </div>
  `;
}

// --- Product Detail Page ---
function renderProductDetailPage(productId) {
  const product = Store.getProduct(productId);
  if (!product) {
    return `
      <div class="page-content">
        <div class="container">
          <div class="empty-state">
            <span class="empty-icon"><i class="ph ph-x-circle"></i></span>
            <h3 class="empty-title">${t('common.noData')}</h3>
            <a href="#/products" class="btn btn-primary mt-2">${t('product.backToProducts')}</a>
          </div>
        </div>
      </div>
    `;
  }

  const category = Store.getCategory(product.categoryId);
  const discountedPrice = Store.getProductPrice(product);
  const hasDiscount = product.discountPercentage > 0;
  const outOfStock = product.stock <= 0;
  const reviews = Store.getApprovedReviews(product.id);
  const related = Store.getProductsByCategory(product.categoryId).filter(p => p.id !== product.id).slice(0, 4);
  const lang = getLang();

  const discountLabel = lang === 'ar'
    ? `${t('common.off')} ${product.discountPercentage}%`
    : `${product.discountPercentage}% ${t('common.off')}`;

  return `
    <div class="page-content">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" id="product-breadcrumb">
          <a href="#/">${t('nav.home')}</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#/products">${t('nav.products')}</a>
          ${category ? `
            <span class="breadcrumb-separator">/</span>
            <a href="#/category/${category.id}">${escapeHtml(getCategoryName(category))}</a>
          ` : ''}
          <span class="breadcrumb-separator">/</span>
          <span>${escapeHtml(getProductName(product))}</span>
        </nav>

        <div class="product-detail-grid">
          <!-- Image -->
          <div class="product-detail-image" id="product-detail-image">
            ${hasDiscount ? `<span class="discount-badge">${discountLabel}</span>` : ''}
            <img src="${product.images?.[0] || 'https://picsum.photos/seed/placeholder/600/800'}" alt="${escapeHtml(getProductName(product))}">
          </div>

          <!-- Info -->
          <div class="product-detail-info">
            <div class="product-detail-category">${category ? escapeHtml(getCategoryName(category)) : ''}</div>
            <h1 class="product-detail-name" id="product-detail-name">${escapeHtml(getProductName(product))}</h1>

            <div class="product-detail-rating">
              ${renderStars(product.ratingAvg)}
              <span class="rating-count">(${product.ratingCount} ${t('product.reviews')})</span>
            </div>

            <div class="product-detail-price">
              <span class="price-current">${formatPrice(discountedPrice)}</span>
              ${hasDiscount ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
            </div>

            <p class="product-detail-description">${escapeHtml(getProductDesc(product))}</p>

            <div class="product-detail-actions" id="product-actions">
              <div class="qty-selector" id="qty-selector-detail">
                <button class="qty-btn" data-action="detail-qty-decrease" id="detail-qty-minus"><i class="ph ph-minus"></i></button>
                <span class="qty-value" id="detail-qty-value">1</span>
                <button class="qty-btn" data-action="detail-qty-increase" id="detail-qty-plus"><i class="ph ph-plus"></i></button>
              </div>
              <button class="btn btn-primary btn-lg" data-action="detail-add-to-cart" data-product-id="${product.id}" id="btn-add-to-cart" ${outOfStock ? 'disabled' : ''}>
                ${outOfStock ? t('product.outOfStock') : t('product.addToCart')}
              </button>
            </div>

            ${outOfStock ? `<p style="color:var(--danger);font-weight:600;">${t('product.outOfStock')}</p>` : ''}
          </div>
        </div>

        <!-- Reviews Section -->
        <section class="page-section" id="reviews-section">
          <div class="section-header">
            <h2 class="section-title">${t('product.reviews')} (${reviews.length})</h2>
          </div>

          ${reviews.length > 0 ? reviews.map(rev => `
            <div class="review-card" id="review-${rev.id}">
              <div class="review-header">
                <div>
                  <div class="review-author">${escapeHtml(rev.customerName)}</div>
                  ${renderStars(rev.rating)}
                </div>
                <span class="review-date">${Store.formatDate(rev.createdAt, lang)}</span>
              </div>
              <p class="review-comment">${escapeHtml(rev.comment)}</p>
            </div>
          `).join('') : `
            <p style="color:var(--text-muted);padding:24px 0;">${t('product.noReviews')}</p>
          `}

          <!-- Review Form -->
          <div class="review-form" id="review-form">
            <h4 class="review-form-title">${t('product.writeReview')}</h4>
            <div class="form-group">
              <label class="form-label">${t('review.name')}</label>
              <input type="text" class="form-input" id="review-name" placeholder="${t('review.name')}">
            </div>
            <div class="form-group">
              <label class="form-label">${t('review.rating')}</label>
              <div class="review-stars-input" id="review-stars-input">
                ${[1,2,3,4,5].map(i => `<span class="star" data-rating="${i}" data-action="review-star"><i class="ph-fill ph-star"></i></span>`).join('')}
              </div>
              <input type="hidden" id="review-rating-value" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">${t('review.comment')}</label>
              <textarea class="form-textarea" id="review-comment" placeholder="${t('review.comment')}"></textarea>
            </div>
            <button class="btn btn-primary" data-action="submit-review" data-product-id="${product.id}" id="btn-submit-review">
              ${t('review.submit')}
            </button>
          </div>
        </section>

        <!-- Related Products -->
        ${related.length > 0 ? `
          <section class="related-products" id="related-products">
            <div class="section-header">
              <h2 class="section-title">${t('product.relatedProducts')}</h2>
            </div>
            <div class="products-grid">
              ${related.map(p => renderProductCard(p)).join('')}
            </div>
          </section>
        ` : ''}
      </div>
    </div>
  `;
}

// --- Checkout Page ---
function renderCheckoutPage() {
  const cartItems = Store.getCartWithProducts();
  const cartTotal = Store.getCartTotal();
  const settings = Store.getSettings();
  const lang = getLang();
  const cities = t('cities');

  if (cartItems.length === 0) {
    return `
      <div class="page-content">
        <div class="container">
          <div class="empty-state">
            <span class="empty-icon"><i class="ph ph-shopping-cart"></i></span>
            <h3 class="empty-title">${t('checkout.emptyCart')}</h3>
            <a href="#/products" class="btn btn-primary mt-2">${t('cart.continueShopping')}</a>
          </div>
        </div>
      </div>
    `;
  }

  const shippingText = cartTotal.shipping === 0
    ? `<span class="free-shipping">${t('cart.freeShipping')} ✓</span>`
    : formatPrice(cartTotal.shipping);

  let discountRow = '';
  let finalTotal = cartTotal.total;
  
  if (currentCouponCode) {
    const val = Store.validateCoupon(currentCouponCode, cartTotal.subtotal);
    if (val.valid) {
      currentDiscountAmount = val.discountAmount;
      finalTotal = Math.max(0, cartTotal.total - currentDiscountAmount);
      discountRow = `
        <div class="cart-summary-row" style="color:var(--success)">
          <span>${t('checkout.discount')} (${currentCouponCode})</span>
          <span>-${formatPrice(currentDiscountAmount)}</span>
        </div>
      `;
    } else {
      currentCouponCode = '';
      currentDiscountAmount = 0;
    }
  }

  const customer = Store.getCurrentCustomer();
  const defName = customer ? customer.name : '';
  const defPhone = customer ? customer.phone : '';
  const defEmail = customer ? customer.email : '';

  return `
    <div class="page-content">
      <div class="container">
        <h1 class="mb-4">${t('checkout.title')}</h1>
        <div class="checkout-grid">
          <!-- Form -->
          <div>
            ${!customer ? `
              <div class="mb-4" style="background:var(--accent-light); border:1px solid var(--accent); border-radius:var(--radius-sm); padding:16px;">
                <strong>${t('auth.guestCheckout')}</strong><br>
                <span style="color:var(--text-secondary);font-size:0.9rem;">${t('auth.guestCheckoutDesc')}</span><br>
                <div class="mt-2"><a href="#/login" style="color:var(--accent);font-weight:bold;">${t('auth.loginNow')}</a></div>
              </div>
            ` : ''}
            <h3 class="mb-3">${t('checkout.customerInfo')}</h3>
            <form id="checkout-form">
              <div class="form-group">
                <label class="form-label" for="checkout-name">${t('checkout.name')} *</label>
                <input type="text" class="form-input" id="checkout-name" value="${escapeHtml(defName)}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="checkout-phone">${t('checkout.phone')} *</label>
                <input type="tel" class="form-input" id="checkout-phone" value="${escapeHtml(defPhone)}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="checkout-email">${t('checkout.email')}</label>
                <input type="email" class="form-input" id="checkout-email" value="${escapeHtml(defEmail)}">
              </div>

              <h3 class="mb-3 mt-4">${t('checkout.shippingInfo')}</h3>
              <div class="form-group">
                <label class="form-label" for="checkout-city">${t('checkout.city')} *</label>
                <select class="form-select" id="checkout-city" required>
                  <option value="">${t('checkout.selectCity')}</option>
                  ${(Array.isArray(cities) ? cities : []).map(city => `<option value="${escapeHtml(city)}">${escapeHtml(city)}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="checkout-address">${t('checkout.address')} *</label>
                <input type="text" class="form-input" id="checkout-address" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="checkout-notes">${t('checkout.notes')}</label>
                <textarea class="form-textarea" id="checkout-notes"></textarea>
              </div>

              <!-- Payment -->
              <h3 class="mb-3 mt-4">${t('checkout.paymentMethod')}</h3>
              <div class="cod-notice">
                <span class="cod-notice-icon"><i class="ph ph-money"></i></span>
                <div>
                  <div class="cod-notice-text">${t('checkout.cod')}</div>
                  <div class="cod-notice-subtext">${t('checkout.codNote')}</div>
                </div>
              </div>

              <button type="button" class="btn btn-primary btn-lg w-100" data-action="place-order" id="btn-place-order">
                ${t('checkout.placeOrder')}
              </button>
            </form>
          </div>

          <!-- Order Summary -->
          <div class="order-summary-card" id="checkout-summary">
            <h3 class="mb-3">${t('checkout.orderSummary')}</h3>
            ${cartItems.map(item => `
              <div class="order-summary-item">
                <img src="${item.product.images?.[0] || 'https://picsum.photos/seed/placeholder/100/100'}" alt="" class="order-summary-item-image" loading="lazy">
                <div class="order-summary-item-info">
                  <div class="order-summary-item-name">${escapeHtml(getProductName(item.product))}</div>
                  <div class="order-summary-item-qty">× ${item.quantity}</div>
                </div>
                <div class="order-summary-item-price">${formatPrice(item.totalPrice)}</div>
              </div>
            `).join('')}
            <div class="divider"></div>
            <div class="cart-summary-row">
              <span>${t('cart.subtotal')}</span>
              <span>${formatPrice(cartTotal.subtotal)}</span>
            </div>
            ${discountRow}
            <div class="cart-summary-row">
              <span>${t('cart.shipping')}</span>
              <span>${shippingText}</span>
            </div>
            <div class="cart-summary-row total">
              <span>${t('cart.total')}</span>
              <span>${formatPrice(finalTotal)}</span>
            </div>
            
            <div class="divider"></div>
            <div class="coupon-section mt-4 mb-2" style="display:flex;gap:8px;">
              <input type="text" class="form-input" id="checkout-coupon" placeholder="${t('checkout.couponCode')}" style="text-transform:uppercase" value="${currentCouponCode}">
              <button type="button" class="btn btn-secondary" data-action="apply-coupon">${t('checkout.applyCoupon')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Order Success Page ---
function renderOrderSuccessPage(orderNumber) {
  return `
    <div class="page-content">
      <div class="container">
        <div class="success-page">
          <span class="success-icon"><i class="ph ph-check-circle"></i></span>
          <h1 class="success-title">${t('checkout.success')}</h1>
          <p style="color:var(--text-secondary);margin-bottom:24px;">${t('checkout.successMessage')}</p>
          <div class="success-order-number">${orderNumber || ''}</div>
          <div class="mt-4 flex-center gap-2" style="flex-wrap:wrap;">
            <a href="#/track/${orderNumber || ''}" class="btn btn-primary" id="btn-track-success">${t('checkout.trackOrder')}</a>
            <a href="#/" class="btn btn-secondary" id="btn-home-success">${t('checkout.backToHome')}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Order Tracking Page ---
function renderOrderTrackingPage(orderNumber = '') {
  let orderHtml = '';

  if (orderNumber) {
    const order = Store.getOrderByNumber(orderNumber);
    if (order) {
      orderHtml = renderOrderDetails(order);
    } else {
      orderHtml = `
        <div class="empty-state">
          <span class="empty-icon"><i class="ph ph-magnifying-glass"></i></span>
          <h3 class="empty-title">${t('track.notFound')}</h3>
          <p class="empty-message">${t('track.notFoundMessage')}</p>
        </div>
      `;
    }
  }

  return `
    <div class="page-content">
      <div class="container">
        <h1 class="text-center mb-4">${t('track.title')}</h1>
        <div class="track-search" id="track-search">
          <p class="text-center mb-3" style="color:var(--text-secondary);">${t('track.enterOrder')}</p>
          <div class="track-search-form">
            <input type="text" class="form-input" id="track-input" placeholder="${t('track.placeholder')}" value="${escapeHtml(orderNumber)}">
            <button class="btn btn-primary" data-action="track-order" id="btn-track-search">${t('track.search')}</button>
          </div>
        </div>
        <div id="track-results">${orderHtml}</div>
      </div>
    </div>
  `;
}

function renderOrderDetails(order) {
  const lang = getLang();
  const statuses = ['new', 'confirmed', 'preparing', 'shipping', 'delivered'];
  const currentIndex = statuses.indexOf(order.status);
  const isCancelled = order.status === 'cancelled';

  const shippingText = order.shipping === 0
    ? `<span class="free-shipping">${t('cart.freeShipping')} ✓</span>`
    : formatPrice(order.shipping);

  return `
    <div class="order-details-card" id="order-details">
      <div class="order-details-header">
        <div>
          <span class="order-number-display">${order.orderNumber}</span>
          <div style="color:var(--text-muted);font-size:0.85rem;margin-top:4px;">${Store.formatDateTime(order.createdAt, lang)}</div>
        </div>
        <span class="status-badge status-${order.status}">${Store.getStatusIcon(order.status)} ${t('status.' + order.status)}</span>
      </div>

      <!-- Timeline -->
      ${!isCancelled ? `
        <div class="order-timeline" id="order-timeline">
          ${statuses.map((status, index) => {
            const isCompleted = index < currentIndex;
            const isActive = index === currentIndex;
            const isLast = index === statuses.length - 1;
            return `
              <div class="timeline-step">
                <div class="timeline-dot ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}">
                  ${isCompleted ? '✓' : isActive ? '●' : ''}
                </div>
                ${!isLast ? `<div class="timeline-line ${isCompleted ? 'completed' : ''}"></div>` : ''}
                <div class="timeline-info">
                  <div class="timeline-label ${!isCompleted && !isActive ? 'muted' : ''}">${Store.getStatusIcon(status)} ${t('status.' + status)}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}

      <div class="divider"></div>

      <!-- Order Items -->
      <h4 class="mb-2">${t('track.orderItems')}</h4>
      <div class="order-items-list">
        ${order.items.map(item => `
          <div class="order-item-row">
            <img src="${item.image || 'https://picsum.photos/seed/placeholder/100/100'}" alt="" class="order-item-image" loading="lazy">
            <div class="order-item-info">
              <div class="order-item-name">${escapeHtml(lang === 'ar' ? item.name_ar : item.name_en)}</div>
              <div class="order-item-qty">× ${item.quantity}</div>
            </div>
            <div class="order-item-price">${formatPrice(item.discountedPrice * item.quantity)}</div>
          </div>
        `).join('')}
      </div>

      <div class="divider"></div>

      <!-- Summary -->
      <div class="cart-summary-row">
        <span>${t('cart.subtotal')}</span>
        <span>${formatPrice(order.subtotal)}</span>
      </div>
      <div class="cart-summary-row">
        <span>${t('cart.shipping')}</span>
        <span>${shippingText}</span>
      </div>
      <div class="cart-summary-row total">
        <span>${t('cart.total')}</span>
        <span>${formatPrice(order.total)}</span>
      </div>

      <div class="divider"></div>

      <!-- Customer Info -->
      <h4 class="mb-2">${t('track.customerInfo')}</h4>
      <div style="color:var(--text-secondary);line-height:2;">
        <div><i class="ph ph-user"></i> ${escapeHtml(order.customerName)}</div>
        <div><i class="ph ph-phone"></i> ${escapeHtml(order.customerPhone)}</div>
        ${order.customerEmail ? `<div><i class="ph ph-envelope"></i> ${escapeHtml(order.customerEmail)}</div>` : ''}
        <div><i class="ph ph-map-pin"></i> ${escapeHtml(order.customerAddress)}${order.city ? `, ${escapeHtml(order.city)}` : ''}</div>
        ${order.notes ? `<div><i class="ph ph-note"></i> ${escapeHtml(order.notes)}</div>` : ''}
      </div>
    </div>
  `;
}

// --- Auth Pages ---
function renderLoginPage() {
  if (Store.getCurrentCustomer()) {
    setTimeout(() => navigateTo('#/profile'), 0);
    return '';
  }
  return `
    <div class="page-content">
      <div class="container" style="max-width: 480px;">
        <div class="card" style="padding: 40px 32px;">
          <h2 class="text-center mb-4" style="color:var(--accent); font-family:var(--font-heading);">${t('auth.loginNow')}</h2>
          
          <button type="button" class="btn btn-secondary w-100 mb-3" data-action="google-login" style="display:flex; justify-content:center; align-items:center; gap:8px; background:white; color:#333;">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" height="20" alt="Google">
            Sign in with Google
          </button>
          
          <div style="display:flex; align-items:center; text-align:center; color:var(--text-muted); margin-bottom:16px;">
            <hr style="flex:1; border:none; border-top:1px solid var(--border);">
            <span style="padding:0 10px; font-size:0.9rem;">or</span>
            <hr style="flex:1; border:none; border-top:1px solid var(--border);">
          </div>

          <form id="login-form">
            <div class="form-group">
              <label class="form-label">${t('auth.email')}</label>
              <input type="email" id="login-email" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">${t('auth.password')}</label>
              <input type="password" id="login-password" class="form-input" required>
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-2">${t('auth.login')}</button>
          </form>
          <div class="text-center mt-4" style="color:var(--text-secondary);">
            ${t('auth.noAccount')} <a href="#/register" style="color:var(--accent);font-weight:bold;">${t('auth.createAccount')}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRegisterPage() {
  if (Store.getCurrentCustomer()) {
    setTimeout(() => navigateTo('#/profile'), 0);
    return '';
  }
  return `
    <div class="page-content">
      <div class="container" style="max-width: 480px;">
        <div class="card" style="padding: 40px 32px;">
          <h2 class="text-center mb-4" style="color:var(--accent); font-family:var(--font-heading);">${t('auth.createAccount')}</h2>
          
          <button type="button" class="btn btn-secondary w-100 mb-3" data-action="google-login" style="display:flex; justify-content:center; align-items:center; gap:8px; background:white; color:#333;">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" height="20" alt="Google">
            Sign up with Google
          </button>
          
          <div style="display:flex; align-items:center; text-align:center; color:var(--text-muted); margin-bottom:16px;">
            <hr style="flex:1; border:none; border-top:1px solid var(--border);">
            <span style="padding:0 10px; font-size:0.9rem;">or</span>
            <hr style="flex:1; border:none; border-top:1px solid var(--border);">
          </div>

          <form id="register-form">
            <div class="form-group">
              <label class="form-label">${t('auth.name')}</label>
              <input type="text" id="reg-name" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">${t('auth.phone')}</label>
              <input type="tel" id="reg-phone" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">${t('auth.email')}</label>
              <input type="email" id="reg-email" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">${t('auth.password')}</label>
              <input type="password" id="reg-password" class="form-input" required minlength="6">
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-2">${t('auth.register')}</button>
          </form>
          <div class="text-center mt-4" style="color:var(--text-secondary);">
            ${t('auth.haveAccount')} <a href="#/login" style="color:var(--accent);font-weight:bold;">${t('auth.loginNow')}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProfilePage() {
  const customer = Store.getCurrentCustomer();
  if (!customer) {
    setTimeout(() => navigateTo('#/login'), 0);
    return '';
  }

  const orders = Store.getCustomerOrders(customer.id);
  const lang = getLang();

  let ordersHtml = '';
  if (orders.length === 0) {
    ordersHtml = `
      <div class="empty-state">
        <span class="empty-icon"><i class="ph ph-receipt"></i></span>
        <h3 class="empty-title">${t('auth.noOrders')}</h3>
      </div>
    `;
  } else {
    ordersHtml = orders.map(order => `
      <div class="card mb-3" style="padding: 20px;">
        <div class="flex-between mb-2">
          <span style="font-weight:bold; font-family:monospace; font-size:1.1rem; color:var(--text-primary)">${order.orderNumber}</span>
          <span class="status-badge status-${order.status}">${Store.getStatusIcon(order.status)} ${t('status.' + order.status)}</span>
        </div>
        <div style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:12px;">${Store.formatDateTime(order.createdAt, lang)}</div>
        <div class="flex-between">
          <span style="color:var(--text-muted);">${order.items.length} ${t('common.products')}</span>
          <span style="font-weight:bold; color:var(--accent);">${formatPrice(order.total)}</span>
        </div>
        <div class="mt-3">
          <a href="#/track/${order.orderNumber}" class="btn btn-secondary btn-sm">${t('track.orderDetails')}</a>
        </div>
      </div>
    `).join('');
  }

  return `
    <div class="page-content">
      <div class="container" style="max-width: 800px;">
        <div class="flex-between mb-4">
          <h2>${t('auth.profile')}</h2>
          <button class="btn btn-danger btn-sm" data-action="logout" id="btn-logout"><i class="ph ph-sign-out"></i> ${t('auth.logout')}</button>
        </div>
        
        <div style="display:grid; grid-template-columns: 1fr; gap: 24px;">
          <div class="card" style="padding: 24px;">
            <h3 style="color:var(--accent); border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:16px;">
              <i class="ph ph-user-circle"></i> ${t('auth.personalInfo')}
            </h3>
            <div style="color:var(--text-secondary); line-height:2;">
              <div><strong>${t('auth.name')}:</strong> <span style="color:var(--text-primary)">${escapeHtml(customer.name)}</span></div>
              <div><strong>${t('auth.phone')}:</strong> <span style="color:var(--text-primary); direction:ltr; display:inline-block;">${escapeHtml(customer.phone)}</span></div>
              <div><strong>${t('auth.email')}:</strong> <span style="color:var(--text-primary)">${escapeHtml(customer.email)}</span></div>
            </div>
          </div>
          
          <div>
            <h3 class="mb-3"><i class="ph ph-receipt"></i> ${t('auth.ordersHistory')}</h3>
            ${ordersHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// Products Page - Filtering/Sorting Logic
// ============================================
let productsState = {
  categoryId: null,
  search: '',
  sort: 'newest'
};

let currentCouponCode = '';
let currentDiscountAmount = 0;

function applyProductsFilters() {
  let products;
  if (productsState.categoryId) {
    products = Store.getProductsByCategory(productsState.categoryId);
  } else {
    products = Store.getActiveProducts();
  }

  // Search
  if (productsState.search.trim()) {
    const q = productsState.search.toLowerCase().trim();
    products = products.filter(p => {
      const name = getProductName(p).toLowerCase();
      const desc = getProductDesc(p).toLowerCase();
      return name.includes(q) || desc.includes(q);
    });
  }

  // Sort
  switch (productsState.sort) {
    case 'price-low':
      products.sort((a, b) => Store.getProductPrice(a) - Store.getProductPrice(b));
      break;
    case 'price-high':
      products.sort((a, b) => Store.getProductPrice(b) - Store.getProductPrice(a));
      break;
    case 'rating':
      products.sort((a, b) => b.ratingAvg - a.ratingAvg);
      break;
    case 'newest':
    default:
      products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
  }

  // Update grid
  const grid = document.getElementById('products-grid');
  const count = document.getElementById('products-count');
  if (grid) {
    if (products.length > 0) {
      grid.innerHTML = products.map(p => renderProductCard(p)).join('');
    } else {
      grid.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon"><i class="ph ph-package"></i></span>
          <h3 class="empty-title">${t('products.noResults')}</h3>
          <p class="empty-message">${t('products.noResultsMessage')}</p>
        </div>
      `;
    }
  }
  if (count) {
    count.textContent = `${products.length} ${t('products.results')}`;
  }
}

// ============================================
// Event Delegation
// ============================================
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.dataset.action;
  const productId = target.dataset.productId;
  const categoryId = target.dataset.categoryId;

  switch (action) {
    // Navigation
    case 'go-product':
      e.preventDefault();
      navigateTo(`#/product/${productId}`);
      break;

    // Cart
    case 'add-to-cart':
      e.preventDefault();
      e.stopPropagation();
      if (Store.addToCart(productId)) {
        showToast(t('product.added'), 'success');
      }
      break;

    case 'toggle-cart':
      const sidebar = document.getElementById('cart-sidebar');
      if (sidebar?.classList.contains('open')) {
        closeCartSidebar();
      } else {
        openCartSidebar();
      }
      break;

    case 'close-cart':
      closeCartSidebar();
      break;

    case 'cart-qty-increase': {
      const item = Store.getCart().find(i => i.productId === productId);
      if (item) Store.updateCartQuantity(productId, item.quantity + 1);
      break;
    }

    case 'cart-qty-decrease': {
      const item = Store.getCart().find(i => i.productId === productId);
      if (item) Store.updateCartQuantity(productId, item.quantity - 1);
      break;
    }

    case 'cart-remove':
      Store.removeFromCart(productId);
      break;

    case 'go-checkout':
      closeCartSidebar();
      navigateTo('#/checkout');
      break;

    // Product detail
    case 'detail-qty-increase': {
      const el = document.getElementById('detail-qty-value');
      if (el) {
        let val = parseInt(el.textContent) || 1;
        el.textContent = val + 1;
      }
      break;
    }

    case 'detail-qty-decrease': {
      const el = document.getElementById('detail-qty-value');
      if (el) {
        let val = parseInt(el.textContent) || 1;
        if (val > 1) el.textContent = val - 1;
      }
      break;
    }

    case 'detail-add-to-cart': {
      const qty = parseInt(document.getElementById('detail-qty-value')?.textContent) || 1;
      if (Store.addToCart(productId, qty)) {
        showToast(t('product.added'), 'success');
      }
      break;
    }

    // Review
    case 'review-star': {
      const rating = parseInt(target.dataset.rating);
      const container = document.getElementById('review-stars-input');
      const hiddenInput = document.getElementById('review-rating-value');
      if (container && hiddenInput) {
        hiddenInput.value = rating;
        container.querySelectorAll('.star').forEach((star, i) => {
          star.classList.toggle('filled', i < rating);
        });
      }
      break;
    }

    case 'submit-review': {
      const name = document.getElementById('review-name')?.value?.trim();
      const rating = parseInt(document.getElementById('review-rating-value')?.value) || 0;
      const comment = document.getElementById('review-comment')?.value?.trim();

      if (!name) { showToast(t('review.nameRequired'), 'error'); return; }
      if (rating === 0) { showToast(t('review.ratingRequired'), 'error'); return; }
      if (!comment) { showToast(t('review.commentRequired'), 'error'); return; }

      Store.addReview({
        productId,
        customerName: name,
        rating,
        comment
      });

      showToast(t('review.thankYou'), 'success');

      // Clear form
      document.getElementById('review-name').value = '';
      document.getElementById('review-comment').value = '';
      document.getElementById('review-rating-value').value = '0';
      document.getElementById('review-stars-input')?.querySelectorAll('.star').forEach(s => s.classList.remove('filled'));
      break;
    }

    // Filters
    case 'filter-category':
      productsState.categoryId = categoryId || null;
      // Update active pill
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      target.classList.add('active');
      applyProductsFilters();
      break;

    // Theme/Lang
    case 'toggle-theme':
      toggleTheme();
      break;

    case 'toggle-lang':
      setLang(getLang() === 'ar' ? 'en' : 'ar');
      break;

    // Search
    case 'open-search':
      openSearchOverlay();
      break;

    case 'close-search-overlay':
      if (e.target.id === 'search-overlay') closeSearchOverlay();
      break;

    case 'search-result-click':
      closeSearchOverlay();
      break;

    // Mobile Nav
    case 'toggle-mobile-nav':
      toggleMobileNav();
      break;

    // Checkout
    case 'place-order':
      handlePlaceOrder();
      break;

    // Track
    case 'track-order':
      handleTrackOrder();
      break;

    // Coupon
    case 'apply-coupon': {
      const code = document.getElementById('checkout-coupon')?.value?.trim().toUpperCase();
      if (!code) return;
      const val = Store.validateCoupon(code, Store.getCartTotal().subtotal);
      if (val.valid) {
        currentCouponCode = code;
        showToast(t('checkout.couponApplied'), 'success');
        document.getElementById('app').innerHTML = renderCheckoutPage();
      } else {
        currentCouponCode = '';
        currentDiscountAmount = 0;
        showToast(val.message || t('checkout.invalidCoupon'), 'error');
        document.getElementById('app').innerHTML = renderCheckoutPage();
      }
      break;
    }

    // Auth
    case 'google-login':
      target.disabled = true;
      target.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Loading...';
      Store.loginWithGoogle().then(res => {
        if (res.success) {
          showToast(t('auth.login'), 'success');
          navigateTo('#/profile');
        } else {
          target.disabled = false;
          target.innerHTML = '<img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" height="20" alt="Google"> Sign in with Google';
          showToast(res.message, 'error');
        }
      });
      break;

    case 'logout':
      Store.logoutCustomer();
      showToast(t('auth.logout'), 'success');
      navigateTo('#/login');
      break;

    // Modal
    case 'close-modal':
      if (e.target.id === 'modal-overlay' || e.target.closest('[data-action="close-modal"]')) {
        closeModal();
      }
      break;
  }
});

// Form Submissions
document.addEventListener('submit', (e) => {
  if (e.target.id === 'login-form') {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    const res = Store.loginCustomer(email, password);
    if (res.success) {
      showToast(t('auth.loginSuccess'), 'success');
      navigateTo('#/profile');
    } else {
      showToast(t('auth.invalidCredentials'), 'error');
    }
  }

  if (e.target.id === 'register-form') {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    
    const res = Store.registerCustomer({ name, phone, email, password });
    if (res.success) {
      showToast(t('auth.registerSuccess'), 'success');
      navigateTo('#/profile');
    } else if (res.message === 'email_exists') {
      showToast(t('auth.emailExists'), 'error');
    } else {
      showToast('Error', 'error');
    }
  }
});

// Search input event
document.addEventListener('input', (e) => {
  if (e.target.id === 'search-input') {
    handleSearch(e.target.value);
  }
  if (e.target.id === 'products-search-input') {
    productsState.search = e.target.value;
    applyProductsFilters();
  }
});

// Sort change event
document.addEventListener('change', (e) => {
  if (e.target.id === 'products-sort-select') {
    productsState.sort = e.target.value;
    applyProductsFilters();
  }
});

// Keyboard events
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearchOverlay();
    closeCartSidebar();
    closeModal();
    closeMobileNav();
  }
  if (e.key === 'Enter' && e.target.id === 'track-input') {
    handleTrackOrder();
  }
});

// ============================================
// Order Placement
// ============================================
function handlePlaceOrder() {
  const name = document.getElementById('checkout-name')?.value?.trim();
  const phone = document.getElementById('checkout-phone')?.value?.trim();
  const email = document.getElementById('checkout-email')?.value?.trim();
  const city = document.getElementById('checkout-city')?.value?.trim();
  const address = document.getElementById('checkout-address')?.value?.trim();
  const notes = document.getElementById('checkout-notes')?.value?.trim();

  // Validation
  if (!name) {
    showToast(`${t('checkout.name')}: ${t('checkout.required')}`, 'error');
    document.getElementById('checkout-name')?.focus();
    return;
  }
  if (!phone || phone.length < 8) {
    showToast(t('checkout.invalidPhone'), 'error');
    document.getElementById('checkout-phone')?.focus();
    return;
  }
  if (!city) {
    showToast(`${t('checkout.city')}: ${t('checkout.required')}`, 'error');
    document.getElementById('checkout-city')?.focus();
    return;
  }
  if (!address) {
    showToast(`${t('checkout.address')}: ${t('checkout.required')}`, 'error');
    document.getElementById('checkout-address')?.focus();
    return;
  }

  const order = Store.createOrder({
    customerName: name,
    customerPhone: phone,
    customerEmail: email,
    city: city,
    customerAddress: address,
    notes: notes,
    couponCode: currentCouponCode,
    discountAmount: currentDiscountAmount
  });

  if (order) {
    // Send email via emailjs if configured
    const settings = Store.getSettings();
    if (window.emailjs && settings.emailjs_service_id && settings.emailjs_template_id && settings.emailjs_public_key) {
      const emailParams = {
        // معلومات الطلب
        order_number:   order.orderNumber,

        // بيانات العميل - بنفس أسماء المتغيرات في القالب
        customer_name:    order.customerName,
        customer_region:  order.city,
        customer_phone1:  order.customerPhone,
        customer_phone2:  order.customerEmail || '—',
        customer_address: order.customerAddress,

        // تفاصيل المنتجات
        order_details: order.items.map(item =>
          `${item.quantity} × ${item.name_ar || item.name_en}  —  ${Store.formatPrice(item.discountedPrice * item.quantity, 'ar')}`
        ).join('\n'),

        // ملخص الحساب
        subtotal:      Store.formatPrice(order.subtotal, 'ar'),
        shipping_fee:  order.shipping === 0 ? 'مجاني 🎁' : Store.formatPrice(order.shipping, 'ar'),
        delivery_time: '3 - 5 أيام عمل',
        total_price:   Store.formatPrice(order.total, 'ar'),
      };
      
      emailjs.send(
        settings.emailjs_service_id, 
        settings.emailjs_template_id, 
        emailParams, 
        settings.emailjs_public_key
      ).then(
        () => console.log('Order email sent successfully'),
        (err) => console.error('Failed to send order email:', err)
      );
    }
    
    // Clear local coupon state
    currentCouponCode = '';
    currentDiscountAmount = 0;
    
    navigateTo(`#/order-success/${order.orderNumber}`);
  } else {
    showToast(t('checkout.emptyCart'), 'error');
  }
}

// ============================================
// Order Tracking
// ============================================
function handleTrackOrder() {
  const input = document.getElementById('track-input');
  const orderNumber = input?.value?.trim();
  if (orderNumber) {
    navigateTo(`#/track/${orderNumber}`);
  }
}

// ============================================
// Store Event Listeners
// ============================================
Store.on('cart-updated', () => {
  renderCartSidebar();
  // Update badge in navbar
  const cartTotal = Store.getCartTotal();
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = cartTotal.itemCount;
    if (cartTotal.itemCount === 0) badge.remove();
  } else if (cartTotal.itemCount > 0) {
    const cartBtn = document.getElementById('btn-cart');
    if (cartBtn) {
      const newBadge = document.createElement('span');
      newBadge.className = 'cart-badge';
      newBadge.id = 'cart-badge';
      newBadge.textContent = cartTotal.itemCount;
      cartBtn.appendChild(newBadge);
    }
  }
});

Store.on('settings-updated', (settings) => {
  // Re-apply accent color
  if (settings.accentColor) {
    document.documentElement.style.setProperty('--accent', settings.accentColor);
  }
  renderNavbar();
  renderFooter();
});

Store.on('auth-changed', () => {
  renderNavbar();
  // Auto-redirect if on checkout and auth state changes? Not necessary.
});

Store.on('data-synced', () => {
  renderNavbar();
  renderFooter();
  renderCartSidebar();
  handleRoute(); // Re-render the current page with new data
});

// Hash change
window.addEventListener('hashchange', () => {
  productsState = { categoryId: null, search: '', sort: 'newest' };
  const { page, params } = parseRoute(getCurrentRoute());
  if (page === 'category') {
    productsState.categoryId = params.id;
  }
  handleRoute();
});

// ============================================
// Initialization
// ============================================
function init() {
  // Seed data
  Store.seedData();

  // Apply saved theme
  setTheme(getTheme());

  // Apply saved language
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (lang === 'ar') {
    document.body.style.fontFamily = "var(--font-ar-body)";
  } else {
    document.body.style.fontFamily = "var(--font-body)";
  }

  // Apply settings
  const settings = Store.getSettings();
  if (settings.accentColor) {
    document.documentElement.style.setProperty('--accent', settings.accentColor);
  }

  // Render shell
  renderNavbar();
  renderFooter();
  renderCartSidebar();

  // Initial route
  const { page, params } = parseRoute(getCurrentRoute());
  if (page === 'category') {
    productsState.categoryId = params.id;
  }
  handleRoute();

  console.log('🌙 Layl Ramy Storefront initialized!');
}

// Start
init();

// ============================================
// Layl Ramy Store - State Management
// ============================================
// Uses localStorage for persistence
// Will be migrated to Firebase Firestore later
// ============================================

const STORAGE_KEYS = {
  products: 'lr_products_v2',
  categories: 'lr_categories_v2',
  cart: 'lr_cart_v2',
  orders: 'lr_orders_v2',
  reviews: 'lr_reviews_v2',
  settings: 'lr_settings_v2',
  coupons: 'lr_coupons_v2',
  customers: 'lr_customers_v2',
  currentCustomer: 'lr_current_customer_v2',
  seeded: 'lr_seeded_v2'
};

// ===== EVENT SYSTEM =====
const listeners = {};

function on(event, callback) {
  if (!listeners[event]) listeners[event] = [];
  listeners[event].push(callback);
}

function off(event, callback) {
  if (!listeners[event]) return;
  listeners[event] = listeners[event].filter(cb => cb !== callback);
}

function emit(event, data) {
  if (!listeners[event]) return;
  listeners[event].forEach(cb => {
    try { cb(data); } catch (e) { console.error('Event handler error:', e); }
  });
}

// ===== HELPERS =====
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Detect if localStorage is available (blocked on file:// in some browsers)
const _memoryStore = {};
let _useLocalStorage = true;
try {
  const testKey = '__lr_test__';
  localStorage.setItem(testKey, '1');
  localStorage.removeItem(testKey);
} catch (e) {
  _useLocalStorage = false;
  console.warn('⚠️ localStorage unavailable — using in-memory storage. Data will NOT persist after refresh.');
}

function getFromStorage(key) {
  try {
    if (_useLocalStorage) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return _memoryStore[key] !== undefined ? JSON.parse(JSON.stringify(_memoryStore[key])) : null;
  } catch {
    return null;
  }
}

function saveToStorage(key, data) {
  try {
    if (_useLocalStorage) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      _memoryStore[key] = JSON.parse(JSON.stringify(data));
    }
  } catch (e) {
    // Last resort fallback to memory
    _memoryStore[key] = JSON.parse(JSON.stringify(data));
  }

  // Background Firebase Sync
  if (window.FirebaseDB && window.FirebaseDB.db) {
    // Only sync if it's not the 'currentCustomer' or 'cart' (those are per-user session)
    if (key !== STORAGE_KEYS.currentCustomer && key !== STORAGE_KEYS.cart) {
      try {
        const { doc, setDoc } = window.FirebaseDB;
        setDoc(doc(window.FirebaseDB.db, "store_data", key), { data: data })
          .catch(e => console.error("Firebase write error for " + key + ":", e));
      } catch (e) {}
    }
  }
}

// ===== SETTINGS =====
const DEFAULT_SETTINGS = {
  storeName: 'Layl Ramy',
  subtitle_ar: 'تسوق بأناقة وراحة',
  subtitle_en: 'Shop with Elegance & Comfort',
  fontHeading: 'Playfair Display',
  fontBody: 'Inter',
  fontArabicHeading: 'Tajawal',
  fontArabicBody: 'Cairo',
  accentColor: '#c9a04e',
  contactPhone: '+20 123 456 7890',
  contactWhatsapp: '+201234567890',
  contactEmail: 'info@laylramy.com',
  shippingCost: 50,
  freeShippingThreshold: 500,
  aboutText_ar: 'ليل رامي - متجرك المفضل للتسوق أونلاين. نقدم لك أفضل المنتجات بأعلى جودة وأفضل الأسعار مع توصيل سريع لجميع أنحاء مصر.',
  aboutText_en: 'Layl Ramy - Your favorite online shopping destination. We offer the best products with highest quality and best prices with fast delivery across Egypt.',
  address_ar: 'القاهرة، مصر',
  address_en: 'Cairo, Egypt',
  currency_ar: 'ج.م',
  currency_en: 'EGP',
  emailjs_service_id: '',
  emailjs_template_id: '',
  emailjs_public_key: ''
};

function getSettings() {
  return { ...DEFAULT_SETTINGS, ...(getFromStorage(STORAGE_KEYS.settings) || {}) };
}

function saveSettings(settings) {
  const current = getSettings();
  const updated = { ...current, ...settings };
  saveToStorage(STORAGE_KEYS.settings, updated);
  emit('settings-updated', updated);
  return updated;
}

// ===== PRODUCTS =====
function getProducts() {
  return (getFromStorage(STORAGE_KEYS.products) || []).filter(p => p);
}

function getActiveProducts() {
  return getProducts().filter(p => p.status === 'active');
}

function getProduct(id) {
  return getProducts().find(p => p.id === id) || null;
}

function saveProduct(product) {
  const products = getProducts();
  if (product.id) {
    const index = products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      products[index] = { ...products[index], ...product, updatedAt: new Date().toISOString() };
    } else {
      product.createdAt = product.createdAt || new Date().toISOString();
      product.updatedAt = new Date().toISOString();
      products.push(product);
    }
  } else {
    product.id = generateId();
    product.createdAt = new Date().toISOString();
    product.updatedAt = new Date().toISOString();
    product.ratingAvg = product.ratingAvg || 0;
    product.ratingCount = product.ratingCount || 0;
    product.status = product.status || 'active';
    products.push(product);
  }
  saveToStorage(STORAGE_KEYS.products, products);
  emit('products-updated', products);
  return product.id;
}

function deleteProduct(id) {
  const products = getProducts().filter(p => p.id !== id);
  saveToStorage(STORAGE_KEYS.products, products);
  emit('products-updated', products);
}

function getFeaturedProducts() {
  return getActiveProducts().filter(p => p.featured);
}

function getProductsByCategory(categoryId) {
  return getActiveProducts().filter(p => p.categoryId === categoryId);
}

function searchProducts(query, lang = 'ar') {
  if (!query || !query.trim()) return getActiveProducts();
  const q = query.toLowerCase().trim();
  return getActiveProducts().filter(p => {
    const name = lang === 'ar' ? (p.name_ar || '') : (p.name_en || '');
    const desc = lang === 'ar' ? (p.description_ar || '') : (p.description_en || '');
    const nameAlt = lang === 'ar' ? (p.name_en || '') : (p.name_ar || '');
    return name.toLowerCase().includes(q) ||
           desc.toLowerCase().includes(q) ||
           nameAlt.toLowerCase().includes(q);
  });
}

function getDiscountedProducts() {
  return getActiveProducts().filter(p => p.discountPercentage > 0);
}

function getProductPrice(product) {
  if (!product) return 0;
  if (product.discountPercentage > 0) {
    return Math.round(product.price * (1 - product.discountPercentage / 100));
  }
  return product.price;
}

// ===== CATEGORIES =====
function getCategories() {
  return (getFromStorage(STORAGE_KEYS.categories) || []).sort((a, b) => (a.order || 0) - (b.order || 0));
}

function getActiveCategories() {
  return getCategories().filter(c => c.status === 'active');
}

function getCategory(id) {
  return getCategories().find(c => c.id === id) || null;
}

function saveCategory(category) {
  const categories = getFromStorage(STORAGE_KEYS.categories) || [];
  if (category.id) {
    const index = categories.findIndex(c => c.id === category.id);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...category };
    } else {
      categories.push(category);
    }
  } else {
    category.id = generateId();
    category.status = category.status || 'active';
    categories.push(category);
  }
  saveToStorage(STORAGE_KEYS.categories, categories);
  emit('categories-updated', categories);
  return category.id;
}

function deleteCategory(id) {
  const categories = (getFromStorage(STORAGE_KEYS.categories) || []).filter(c => c.id !== id);
  saveToStorage(STORAGE_KEYS.categories, categories);
  emit('categories-updated', categories);
}

function getCategoryProductCount(categoryId) {
  return getActiveProducts().filter(p => p.categoryId === categoryId).length;
}

// ===== CART =====
function getCart() {
  return getFromStorage(STORAGE_KEYS.cart) || [];
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = getProduct(productId);
  if (!product || product.stock <= 0) return false;

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    const newQty = existing.quantity + quantity;
    existing.quantity = Math.min(newQty, product.stock);
  } else {
    cart.push({ productId, quantity: Math.min(quantity, product.stock) });
  }
  saveToStorage(STORAGE_KEYS.cart, cart);
  emit('cart-updated', cart);
  return true;
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.productId !== productId);
  saveToStorage(STORAGE_KEYS.cart, cart);
  emit('cart-updated', cart);
}

function updateCartQuantity(productId, quantity) {
  if (quantity <= 0) {
    return removeFromCart(productId);
  }
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) {
    const product = getProduct(productId);
    item.quantity = Math.min(quantity, product ? product.stock : quantity);
    saveToStorage(STORAGE_KEYS.cart, cart);
    emit('cart-updated', cart);
  }
}

function clearCart() {
  saveToStorage(STORAGE_KEYS.cart, []);
  emit('cart-updated', []);
}

function getCartTotal() {
  const cart = getCart();
  const settings = getSettings();
  let subtotal = 0;
  let itemCount = 0;

  cart.forEach(item => {
    const product = getProduct(item.productId);
    if (product) {
      subtotal += getProductPrice(product) * item.quantity;
      itemCount += item.quantity;
    }
  });

  const shipping = subtotal >= settings.freeShippingThreshold ? 0 : (subtotal > 0 ? settings.shippingCost : 0);

  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
    itemCount
  };
}

function getCartWithProducts() {
  const cart = getCart();
  return cart.map(item => {
    const product = getProduct(item.productId);
    return {
      ...item,
      product,
      unitPrice: product ? getProductPrice(product) : 0,
      totalPrice: product ? getProductPrice(product) * item.quantity : 0
    };
  }).filter(item => item.product);
}

// ===== ORDERS =====
function getOrders() {
  return (getFromStorage(STORAGE_KEYS.orders) || []).sort((a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt)
  );
}

function getOrder(id) {
  return getOrders().find(o => o.id === id) || null;
}

function getOrderByNumber(orderNumber) {
  if (!orderNumber) return null;
  return getOrders().find(o => o.orderNumber.toUpperCase() === orderNumber.toUpperCase()) || null;
}

function createOrder(orderData) {
  const orders = getFromStorage(STORAGE_KEYS.orders) || [];
  const cart = getCartWithProducts();
  const cartTotal = getCartTotal();

  if (cart.length === 0) return null;

  const discountAmount = orderData.discountAmount || 0;
  const finalTotal = Math.max(0, cartTotal.total - discountAmount);
  
  const customerId = getCurrentCustomer()?.id || null;

  const order = {
    id: generateId(),
    customerId: customerId,
    orderNumber: 'LR-' + String(Math.floor(10000 + Math.random() * 90000)),
    customerName: orderData.customerName,
    customerPhone: orderData.customerPhone,
    customerEmail: orderData.customerEmail || '',
    customerAddress: orderData.customerAddress,
    city: orderData.city || '',
    items: cart.map(item => ({
      productId: item.productId,
      name_ar: item.product.name_ar,
      name_en: item.product.name_en,
      price: item.product.price,
      discountedPrice: getProductPrice(item.product),
      quantity: item.quantity,
      image: item.product.images?.[0] || ''
    })),
    subtotal: cartTotal.subtotal,
    shipping: cartTotal.shipping,
    discountAmount: discountAmount,
    couponCode: orderData.couponCode || '',
    total: finalTotal,
    status: 'new',
    notes: orderData.notes || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Update stock
  cart.forEach(item => {
    const product = getProduct(item.productId);
    if (product) {
      saveProduct({ ...product, stock: Math.max(0, product.stock - item.quantity) });
    }
  });

  orders.push(order);
  saveToStorage(STORAGE_KEYS.orders, orders);
  clearCart();
  emit('orders-updated', orders);
  return order;
}

function updateOrderStatus(id, status) {
  const orders = getFromStorage(STORAGE_KEYS.orders) || [];
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = status;
    order.updatedAt = new Date().toISOString();
    saveToStorage(STORAGE_KEYS.orders, orders);
    emit('orders-updated', orders);
  }
  return order;
}

function deleteOrder(id) {
  const orders = (getFromStorage(STORAGE_KEYS.orders) || []).filter(o => o.id !== id);
  saveToStorage(STORAGE_KEYS.orders, orders);
  emit('orders-updated', orders);
}

function getOrderStats() {
  const orders = getOrders();
  const today = new Date().toISOString().split('T')[0];
  const todayOrders = orders.filter(o => o.createdAt.startsWith(today));
  const totalRevenue = orders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter(o => ['new', 'confirmed', 'preparing', 'shipping'].includes(o.status));

  return {
    totalOrders: orders.length,
    todayOrders: todayOrders.length,
    totalRevenue,
    pendingOrders: pendingOrders.length,
    deliveredOrders: orders.filter(o => o.status === 'delivered').length,
    cancelledOrders: orders.filter(o => o.status === 'cancelled').length
  };
}

// ===== REVIEWS =====
function getReviews(productId) {
  const reviews = getFromStorage(STORAGE_KEYS.reviews) || [];
  return reviews.filter(r => r.productId === productId).sort((a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt)
  );
}

function getApprovedReviews(productId) {
  return getReviews(productId).filter(r => r.approved);
}

function getAllReviews() {
  return (getFromStorage(STORAGE_KEYS.reviews) || []).sort((a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt)
  );
}

function addReview(review) {
  const reviews = getFromStorage(STORAGE_KEYS.reviews) || [];
  review.id = generateId();
  review.approved = false;
  review.createdAt = new Date().toISOString();
  reviews.push(review);
  saveToStorage(STORAGE_KEYS.reviews, reviews);
  emit('reviews-updated', reviews);
  return review.id;
}

function approveReview(id) {
  const reviews = getFromStorage(STORAGE_KEYS.reviews) || [];
  const review = reviews.find(r => r.id === id);
  if (review) {
    review.approved = true;
    saveToStorage(STORAGE_KEYS.reviews, reviews);
    updateProductRating(review.productId);
    emit('reviews-updated', reviews);
  }
}

function deleteReview(id) {
  const reviews = getFromStorage(STORAGE_KEYS.reviews) || [];
  const review = reviews.find(r => r.id === id);
  const filtered = reviews.filter(r => r.id !== id);
  saveToStorage(STORAGE_KEYS.reviews, filtered);
  if (review) updateProductRating(review.productId);
  emit('reviews-updated', filtered);
}

function updateProductRating(productId) {
  const approved = getApprovedReviews(productId);
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (product) {
    if (approved.length > 0) {
      product.ratingAvg = Math.round((approved.reduce((sum, r) => sum + r.rating, 0) / approved.length) * 10) / 10;
      product.ratingCount = approved.length;
    } else {
      product.ratingAvg = 0;
      product.ratingCount = 0;
    }
    saveToStorage(STORAGE_KEYS.products, products);
    emit('products-updated', products);
  }
}

// ===== ADMIN AUTH (Simple - will be replaced with Firebase Auth) =====
const ADMIN_PASSWORD = 'admin123';

function adminLogin(password) {
  if (password === ADMIN_PASSWORD) {
    try { sessionStorage.setItem('lr_admin', 'true'); } catch(e) { _memoryStore['_admin'] = true; }
    return true;
  }
  return false;
}

function isAdminLoggedIn() {
  try { return sessionStorage.getItem('lr_admin') === 'true'; } catch(e) { return _memoryStore['_admin'] === true; }
}

function adminLogout() {
  try { sessionStorage.removeItem('lr_admin'); } catch(e) {}
  _memoryStore['_admin'] = false;
}

function changeAdminPassword(oldPassword, newPassword) {
  // In localStorage version, we just validate the old one
  // Firebase version will handle this properly
  return oldPassword === ADMIN_PASSWORD;
}

// ===== CUSTOMERS & AUTH =====
function getCustomers() {
  return getFromStorage(STORAGE_KEYS.customers) || [];
}

function getCurrentCustomer() {
  return getFromStorage(STORAGE_KEYS.currentCustomer) || null;
}

// ------------------------------------
// Google Firebase Auth
// ------------------------------------
async function loginWithGoogle() {
  if (!window.FirebaseAuth) {
    return { success: false, message: 'firebase_not_loaded' };
  }
  try {
    const result = await window.FirebaseAuth.signInWithPopup(window.FirebaseAuth.auth, window.FirebaseAuth.provider);
    const user = result.user;
    
    // Check if customer exists in our storage, otherwise create
    let customers = getCustomers();
    let customer = customers.find(c => c.email === user.email);
    
    if (!customer) {
      customer = {
        id: user.uid,
        name: user.displayName || 'Google User',
        email: user.email,
        phone: user.phoneNumber || '',
        password: '', // Google users don't have a local password
        createdAt: new Date().toISOString()
      };
      customers.push(customer);
      saveToStorage(STORAGE_KEYS.customers, customers);
    }
    
    const sessionData = { id: customer.id, name: customer.name, email: customer.email, phone: customer.phone };
    saveToStorage(STORAGE_KEYS.currentCustomer, sessionData);
    emit('auth-changed', sessionData);
    
    return { success: true, customer };
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    return { success: false, message: error.message };
  }
}

// Automatically sync with Firebase Auth state and Firestore
document.addEventListener('DOMContentLoaded', () => {
  // Give time for firebase module to load
  setTimeout(() => {
    if (window.FirebaseAuth) {
      window.FirebaseAuth.onAuthStateChanged(window.FirebaseAuth.auth, (user) => {
        if (!user && getCurrentCustomer()) {
          // If logged out from Firebase but local shows logged in, sync it (if it's a Google user)
          // For simplicity, we won't auto logout unless explicitly clicked
        }
      });
    }

    if (window.FirebaseDB && window.FirebaseDB.db) {
      const { collection, onSnapshot } = window.FirebaseDB;
      onSnapshot(collection(window.FirebaseDB.db, "store_data"), (snapshot) => {
        let dataLoaded = false;
        snapshot.docChanges().forEach((change) => {
          const key = change.doc.id;
          const data = change.doc.data().data;
          
          if (data) {
            try {
              if (_useLocalStorage) {
                localStorage.setItem(key, JSON.stringify(data));
              } else {
                _memoryStore[key] = JSON.parse(JSON.stringify(data));
              }
              dataLoaded = true;
            } catch (e) {}
          }
        });
        
        if (dataLoaded) {
          emit('data-synced', null);
        }
      }, (error) => {
        console.error("Firebase onSnapshot error:", error);
      });
    }
  }, 1000);
});
// ------------------------------------

function registerCustomer(customerData) {
  const customers = getCustomers();

  // Check if email already exists
  if (customers.find(c => c.email === customerData.email)) {
    return { success: false, message: 'email_exists' };
  }

  const newCustomer = {
    id: generateId(),
    name: customerData.name,
    email: customerData.email,
    phone: customerData.phone,
    password: customerData.password,
    createdAt: new Date().toISOString()
  };

  customers.push(newCustomer);
  saveToStorage(STORAGE_KEYS.customers, customers);

  // Auto login
  const sessionData = { id: newCustomer.id, name: newCustomer.name, email: newCustomer.email, phone: newCustomer.phone };
  saveToStorage(STORAGE_KEYS.currentCustomer, sessionData);
  emit('auth-changed', sessionData);

  return { success: true, customer: newCustomer };
}

function loginCustomer(email, password) {
  const customers = getCustomers();
  const customer = customers.find(c => c.email === email && c.password === password);

  if (customer) {
    const sessionData = { id: customer.id, name: customer.name, email: customer.email, phone: customer.phone };
    saveToStorage(STORAGE_KEYS.currentCustomer, sessionData);
    emit('auth-changed', sessionData);
    return { success: true, customer };
  }
  return { success: false, message: 'invalid_credentials' };
}

function logoutCustomer() {
  if (_useLocalStorage) {
    try { localStorage.removeItem(STORAGE_KEYS.currentCustomer); } catch(e) {}
  }
  delete _memoryStore[STORAGE_KEYS.currentCustomer];
  emit('auth-changed', null);
}

function getCustomerOrders(customerId) {
  const orders = getFromStorage(STORAGE_KEYS.orders) || [];
  return orders.filter(o => o.customerId === customerId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// ===== COUPONS =====
function getCoupons() {
  return getFromStorage(STORAGE_KEYS.coupons) || [];
}

function getCoupon(code) {
  if (!code) return null;
  return getCoupons().find(c => c.code.toUpperCase() === code.toUpperCase()) || null;
}

function saveCoupon(coupon) {
  const coupons = getCoupons();
  coupon.code = coupon.code.toUpperCase();
  if (coupon.id) {
    const index = coupons.findIndex(c => c.id === coupon.id);
    if (index !== -1) {
      coupons[index] = { ...coupons[index], ...coupon };
    } else {
      coupons.push(coupon);
    }
  } else {
    coupon.id = generateId();
    coupon.status = coupon.status || 'active';
    coupons.push(coupon);
  }
  saveToStorage(STORAGE_KEYS.coupons, coupons);
  emit('coupons-updated', coupons);
  return coupon.id;
}

function deleteCoupon(id) {
  const coupons = getCoupons().filter(c => c.id !== id);
  saveToStorage(STORAGE_KEYS.coupons, coupons);
  emit('coupons-updated', coupons);
}

function validateCoupon(code, cartSubtotal) {
  const coupon = getCoupon(code);
  if (!coupon || coupon.status !== 'active') return { valid: false, message: 'Invalid or inactive coupon' };
  
  if (coupon.expiryDate && new Date(coupon.expiryDate) < new Date()) {
    return { valid: false, message: 'Coupon expired' };
  }
  if (coupon.minOrderAmount && cartSubtotal < coupon.minOrderAmount) {
    return { valid: false, message: `Minimum order amount is ${coupon.minOrderAmount}` };
  }
  
  let discountAmount = 0;
  if (coupon.discountType === 'percentage') {
    discountAmount = Math.round((cartSubtotal * coupon.discountValue) / 100);
  } else {
    discountAmount = coupon.discountValue;
  }
  
  // Cap discount if maxDiscountAmount is set
  if (coupon.maxDiscountAmount && discountAmount > coupon.maxDiscountAmount) {
    discountAmount = coupon.maxDiscountAmount;
  }
  
  return { valid: true, discountAmount, coupon };
}

// ===== SEED DATA =====
function seedData() {
  if (getFromStorage(STORAGE_KEYS.seeded)) return;

  saveToStorage(STORAGE_KEYS.categories, []);
  saveToStorage(STORAGE_KEYS.products, []);
  saveToStorage(STORAGE_KEYS.reviews, []);
  saveToStorage(STORAGE_KEYS.orders, []);
  saveToStorage(STORAGE_KEYS.coupons, []);

  saveToStorage(STORAGE_KEYS.seeded, true);
  console.log('🌙 Layl Ramy: Store initialized with empty data!');
}

// ===== RESET DATA (for testing) =====
function resetAllData() {
  Object.values(STORAGE_KEYS).forEach(key => {
    try { if (_useLocalStorage) localStorage.removeItem(key); } catch(e) {}
    delete _memoryStore[key];
  });
  seedData();
}

// ===== FORMAT HELPERS =====
function formatPrice(price, lang = 'ar') {
  const settings = getSettings();
  const currency = lang === 'ar' ? settings.currency_ar : settings.currency_en;
  const formatted = price.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-EG');
  return lang === 'ar' ? `${formatted} ${currency}` : `${currency} ${formatted}`;
}

function formatDate(dateStr, lang = 'ar') {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function formatDateTime(dateStr, lang = 'ar') {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

function getStatusColor(status) {
  const colors = {
    new: '#3498db',
    confirmed: '#9b59b6',
    preparing: '#f39c12',
    shipping: '#e67e22',
    delivered: '#2ecc71',
    cancelled: '#e74c3c'
  };
  return colors[status] || '#888';
}

function getStatusIcon(status) {
  const icons = {
    new: '<i class="ph ph-sparkle"></i>',
    confirmed: '<i class="ph ph-check-circle"></i>',
    preparing: '<i class="ph ph-package"></i>',
    shipping: '<i class="ph ph-truck"></i>',
    delivered: '<i class="ph ph-check-square"></i>',
    cancelled: '<i class="ph ph-x-circle"></i>'
  };
  return icons[status] || '•';
}

window.Store = {
  on, off, emit, getSettings, saveSettings, getProducts, getActiveProducts, getProduct, saveProduct, deleteProduct, getFeaturedProducts, getProductsByCategory, searchProducts, getDiscountedProducts, getProductPrice, getCategories, getActiveCategories, getCategory, saveCategory, deleteCategory, getCategoryProductCount, getCart, addToCart, removeFromCart, updateCartQuantity, clearCart, getCartTotal, getCartWithProducts, getOrders, getOrder, getOrderByNumber, createOrder, updateOrderStatus, deleteOrder, getOrderStats, getReviews, getApprovedReviews, getAllReviews, addReview, approveReview, deleteReview, adminLogin, isAdminLoggedIn, adminLogout, changeAdminPassword, getCoupons, getCoupon, saveCoupon, deleteCoupon, validateCoupon, seedData, resetAllData, formatPrice, formatDate, formatDateTime, getStatusColor, getStatusIcon, getCustomers, getCurrentCustomer, registerCustomer, loginCustomer, loginWithGoogle, logoutCustomer, getCustomerOrders
};

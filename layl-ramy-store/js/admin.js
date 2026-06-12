// ============================================
// Layl Ramy - Admin Panel
// ============================================
const Store = window.Store;

// ===== i18n =====
const translations = {
  ar: {
    'admin.login': 'تسجيل الدخول',
    'admin.password': 'كلمة المرور',
    'admin.loginBtn': 'دخول',
    'admin.wrongPassword': 'كلمة المرور غير صحيحة',
    'admin.dashboard': 'لوحة التحكم',
    'admin.products': 'المنتجات',
    'admin.categories': 'التصنيفات',
    'admin.orders': 'الطلبات',
    'admin.settings': 'الإعدادات',
    'admin.reviews': 'التقييمات',
    'admin.logout': 'تسجيل الخروج',
    'admin.totalProducts': 'إجمالي المنتجات',
    'admin.totalOrders': 'إجمالي الطلبات',
    'admin.revenue': 'الإيرادات',
    'admin.pendingOrders': 'طلبات معلقة',
    'admin.addProduct': 'إضافة منتج',
    'admin.editProduct': 'تعديل المنتج',
    'admin.deleteProduct': 'حذف المنتج',
    'admin.confirmDelete': 'هل أنت متأكد من الحذف؟',
    'admin.confirmDeleteDesc': 'لا يمكن التراجع عن هذا الإجراء.',
    'admin.productName_ar': 'اسم المنتج (عربي)',
    'admin.productName_en': 'اسم المنتج (إنجليزي)',
    'admin.description_ar': 'الوصف (عربي)',
    'admin.description_en': 'الوصف (إنجليزي)',
    'admin.price': 'السعر',
    'admin.discount': 'نسبة الخصم %',
    'admin.category': 'التصنيف',
    'admin.stock': 'المخزون',
    'admin.images': 'صور المنتج (روابط)',
    'admin.featured': 'منتج مميز',
    'admin.status': 'الحالة',
    'admin.addCategory': 'إضافة تصنيف',
    'admin.editCategory': 'تعديل التصنيف',
    'admin.categoryName_ar': 'اسم التصنيف (عربي)',
    'admin.categoryName_en': 'اسم التصنيف (إنجليزي)',
    'admin.icon': 'الأيقونة',
    'admin.order': 'الترتيب',
    'admin.orderNumber': 'رقم الطلب',
    'admin.customer': 'العميل',
    'admin.phone': 'الهاتف',
    'admin.address': 'العنوان',
    'admin.total': 'الإجمالي',
    'admin.date': 'التاريخ',
    'admin.updateStatus': 'تحديث الحالة',
    'admin.viewDetails': 'عرض التفاصيل',
    'admin.storeName': 'اسم المتجر',
    'admin.subtitle': 'العنوان الفرعي',
    'admin.fontHeading': 'خط العناوين',
    'admin.fontBody': 'خط النصوص',
    'admin.accentColor': 'اللون الأساسي',
    'admin.contactPhone': 'رقم الهاتف',
    'admin.contactWhatsapp': 'رقم الواتساب',
    'admin.contactEmail': 'البريد الإلكتروني',
    'admin.shippingCost': 'تكلفة الشحن',
    'admin.freeShippingThreshold': 'حد الشحن المجاني',
    'admin.saveSettings': 'حفظ الإعدادات',
    'admin.approve': 'موافقة',
    'admin.pending': 'معلق',
    'admin.approved': 'تم الموافقة',
    'admin.storeIdentity': 'هوية المتجر',
    'admin.typography': 'الخطوط',
    'admin.colors': 'الألوان',
    'admin.contactInfo': 'معلومات التواصل',
    'admin.shipping': 'الشحن',
    'admin.subtitleAr': 'العنوان الفرعي (عربي)',
    'admin.subtitleEn': 'العنوان الفرعي (إنجليزي)',
    'admin.aboutAr': 'عن المتجر (عربي)',
    'admin.aboutEn': 'عن المتجر (إنجليزي)',
    'admin.fontArHeading': 'خط العناوين العربي',
    'admin.fontArBody': 'خط النصوص العربي',
    'admin.addressAr': 'العنوان (عربي)',
    'admin.addressEn': 'العنوان (إنجليزي)',
    'admin.livePreview': 'معاينة مباشرة',
    'admin.headingSample': 'نص عنوان تجريبي',
    'admin.bodySample': 'هذا نص تجريبي لمعاينة الخط المختار. يمكنك رؤية كيف سيبدو الخط في المتجر.',
    'admin.recentOrders': 'أحدث الطلبات',
    'admin.quickActions': 'إجراءات سريعة',
    'admin.viewAllOrders': 'عرض كل الطلبات',
    'admin.backToStore': 'العودة للمتجر',
    'admin.product': 'المنتج',
    'admin.rating': 'التقييم',
    'admin.comment': 'التعليق',
    'admin.noReviews': 'لا توجد تقييمات',
    'admin.noProducts': 'لا توجد منتجات',
    'admin.noCategories': 'لا توجد تصنيفات',
    'admin.noOrders': 'لا توجد طلبات',
    'admin.selectCategory': 'اختر التصنيف',
    'admin.all': 'الكل',
    'admin.new': 'جديد',
    'admin.confirmed': 'مؤكد',
    'admin.preparing': 'قيد التحضير',
    'admin.shipping': 'قيد الشحن',
    'admin.delivered': 'تم التوصيل',
    'admin.cancelled': 'ملغي',
    'admin.orderDetails': 'تفاصيل الطلب',
    'admin.customerInfo': 'معلومات العميل',
    'admin.orderItems': 'عناصر الطلب',
    'admin.subtotal': 'المجموع الفرعي',
    'admin.shippingFee': 'رسوم الشحن',
    'admin.grandTotal': 'الإجمالي',
    'admin.notes': 'ملاحظات',
    'admin.messageOnWhatsapp': 'مراسلة واتساب',
    'admin.city': 'المدينة',
    'admin.email': 'البريد',
    'admin.qty': 'الكمية',
    'admin.unitPrice': 'سعر الوحدة',
    'admin.free': 'مجاني',
    'admin.imageUrls': 'أدخل رابط صورة واحد في كل سطر',
    'admin.active': 'نشط',
    'admin.inactive': 'غير نشط',
    'admin.name': 'الاسم',
    'admin.productCount': 'عدد المنتجات',
    'admin.deleteCategory': 'حذف التصنيف',
    'admin.deleteReview': 'حذف التقييم',
    'admin.settingsSaved': 'تم حفظ الإعدادات بنجاح',
    'admin.productSaved': 'تم حفظ المنتج بنجاح',
    'admin.productDeleted': 'تم حذف المنتج',
    'admin.categorySaved': 'تم حفظ التصنيف بنجاح',
    'admin.categoryDeleted': 'تم حذف التصنيف',
    'admin.orderUpdated': 'تم تحديث حالة الطلب',
    'admin.reviewApproved': 'تم الموافقة على التقييم',
    'admin.reviewDeleted': 'تم حذف التقييم',
    'admin.fillRequired': 'يرجى ملء جميع الحقول المطلوبة',
    'admin.currency': 'ج.م',
    'admin.adminPanel': 'لوحة التحكم',
    'admin.welcomeBack': 'مرحباً بك مجدداً',
    'admin.loginSubtitle': 'أدخل كلمة المرور للدخول إلى لوحة التحكم',
    'admin.deleteOrder': 'حذف الطلب',
    'admin.orderDeleted': 'تم حذف الطلب',
    'admin.coupons': 'الكوبونات',
    'admin.addCoupon': 'إضافة كوبون',
    'admin.editCoupon': 'تعديل الكوبون',
    'admin.code': 'كود الخصم',
    'admin.discountType': 'نوع الخصم',
    'admin.discountValue': 'قيمة الخصم',
    'admin.percentage': 'نسبة مئوية (%)',
    'admin.fixed': 'مبلغ ثابت',
    'admin.minOrderAmount': 'الحد الأدنى للطلب',
    'admin.expiryDate': 'تاريخ الانتهاء',
    'admin.deleteCoupon': 'حذف الكوبون',
    'admin.couponSaved': 'تم حفظ الكوبون',
    'admin.couponDeleted': 'تم حذف الكوبون',
    'admin.noCoupons': 'لا توجد كوبونات'
  },
  en: {
    'admin.login': 'Admin Login',
    'admin.password': 'Password',
    'admin.loginBtn': 'Log In',
    'admin.wrongPassword': 'Wrong password',
    'admin.dashboard': 'Dashboard',
    'admin.products': 'Products',
    'admin.categories': 'Categories',
    'admin.orders': 'Orders',
    'admin.settings': 'Settings',
    'admin.reviews': 'Reviews',
    'admin.logout': 'Logout',
    'admin.totalProducts': 'Total Products',
    'admin.totalOrders': 'Total Orders',
    'admin.revenue': 'Revenue',
    'admin.pendingOrders': 'Pending Orders',
    'admin.addProduct': 'Add Product',
    'admin.editProduct': 'Edit Product',
    'admin.deleteProduct': 'Delete Product',
    'admin.confirmDelete': 'Are you sure you want to delete?',
    'admin.confirmDeleteDesc': 'This action cannot be undone.',
    'admin.productName_ar': 'Product Name (Arabic)',
    'admin.productName_en': 'Product Name (English)',
    'admin.description_ar': 'Description (Arabic)',
    'admin.description_en': 'Description (English)',
    'admin.price': 'Price',
    'admin.discount': 'Discount %',
    'admin.category': 'Category',
    'admin.stock': 'Stock',
    'admin.images': 'Product Images (URLs)',
    'admin.featured': 'Featured',
    'admin.status': 'Status',
    'admin.addCategory': 'Add Category',
    'admin.editCategory': 'Edit Category',
    'admin.categoryName_ar': 'Category Name (Arabic)',
    'admin.categoryName_en': 'Category Name (English)',
    'admin.icon': 'Icon',
    'admin.order': 'Order',
    'admin.orderNumber': 'Order #',
    'admin.customer': 'Customer',
    'admin.phone': 'Phone',
    'admin.address': 'Address',
    'admin.total': 'Total',
    'admin.date': 'Date',
    'admin.updateStatus': 'Update Status',
    'admin.viewDetails': 'View Details',
    'admin.storeName': 'Store Name',
    'admin.subtitle': 'Subtitle',
    'admin.fontHeading': 'Heading Font',
    'admin.fontBody': 'Body Font',
    'admin.accentColor': 'Accent Color',
    'admin.contactPhone': 'Phone Number',
    'admin.contactWhatsapp': 'WhatsApp Number',
    'admin.contactEmail': 'Email',
    'admin.shippingCost': 'Shipping Cost',
    'admin.freeShippingThreshold': 'Free Shipping Threshold',
    'admin.saveSettings': 'Save Settings',
    'admin.approve': 'Approve',
    'admin.pending': 'Pending',
    'admin.approved': 'Approved',
    'admin.storeIdentity': 'Store Identity',
    'admin.typography': 'Typography',
    'admin.colors': 'Colors',
    'admin.contactInfo': 'Contact Information',
    'admin.shipping': 'Shipping',
    'admin.subtitleAr': 'Subtitle (Arabic)',
    'admin.subtitleEn': 'Subtitle (English)',
    'admin.aboutAr': 'About Store (Arabic)',
    'admin.aboutEn': 'About Store (English)',
    'admin.fontArHeading': 'Arabic Heading Font',
    'admin.fontArBody': 'Arabic Body Font',
    'admin.addressAr': 'Address (Arabic)',
    'admin.addressEn': 'Address (English)',
    'admin.livePreview': 'Live Preview',
    'admin.headingSample': 'Sample Heading Text',
    'admin.bodySample': 'This is a sample text to preview the selected font. You can see how it will look in the store.',
    'admin.recentOrders': 'Recent Orders',
    'admin.quickActions': 'Quick Actions',
    'admin.viewAllOrders': 'View All Orders',
    'admin.backToStore': 'Back to Store',
    'admin.product': 'Product',
    'admin.rating': 'Rating',
    'admin.comment': 'Comment',
    'admin.noReviews': 'No reviews yet',
    'admin.noProducts': 'No products yet',
    'admin.noCategories': 'No categories yet',
    'admin.noOrders': 'No orders yet',
    'admin.selectCategory': 'Select Category',
    'admin.all': 'All',
    'admin.new': 'New',
    'admin.confirmed': 'Confirmed',
    'admin.preparing': 'Preparing',
    'admin.shipping': 'Shipping',
    'admin.delivered': 'Delivered',
    'admin.cancelled': 'Cancelled',
    'admin.orderDetails': 'Order Details',
    'admin.customerInfo': 'Customer Information',
    'admin.orderItems': 'Order Items',
    'admin.subtotal': 'Subtotal',
    'admin.shippingFee': 'Shipping Fee',
    'admin.grandTotal': 'Grand Total',
    'admin.notes': 'Notes',
    'admin.messageOnWhatsapp': 'Message on WhatsApp',
    'admin.city': 'City',
    'admin.email': 'Email',
    'admin.qty': 'Qty',
    'admin.unitPrice': 'Unit Price',
    'admin.free': 'Free',
    'admin.imageUrls': 'Enter one image URL per line',
    'admin.active': 'Active',
    'admin.inactive': 'Inactive',
    'admin.name': 'Name',
    'admin.productCount': 'Products',
    'admin.deleteCategory': 'Delete Category',
    'admin.deleteReview': 'Delete Review',
    'admin.settingsSaved': 'Settings saved successfully',
    'admin.productSaved': 'Product saved successfully',
    'admin.productDeleted': 'Product deleted',
    'admin.categorySaved': 'Category saved successfully',
    'admin.categoryDeleted': 'Category deleted',
    'admin.orderUpdated': 'Order status updated',
    'admin.reviewApproved': 'Review approved',
    'admin.reviewDeleted': 'Review deleted',
    'admin.fillRequired': 'Please fill all required fields',
    'admin.currency': 'EGP',
    'admin.adminPanel': 'Admin Panel',
    'admin.welcomeBack': 'Welcome Back',
    'admin.loginSubtitle': 'Enter your password to access the admin panel',
    'admin.deleteOrder': 'Delete Order',
    'admin.orderDeleted': 'Order deleted',
  }
};

let currentLang = localStorage.getItem('lr_admin_lang') || 'ar';
let currentTheme = localStorage.getItem('lr_admin_theme') || 'dark';

function t(key) {
  return translations[currentLang]?.[key] || translations['en']?.[key] || key;
}

// ===== THEME & LANGUAGE =====
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('lr_admin_theme', theme);
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('lr_admin_lang', lang);
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  renderCurrentPage();
}

function toggleLanguage() {
  applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
  renderCurrentPage();
}

// ===== FONT LOADING =====
const loadedFonts = new Set();

function loadGoogleFont(fontName) {
  if (!fontName || loadedFonts.has(fontName)) return;
  loadedFonts.add(fontName);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;500;600;700&display=swap`;
  document.head.appendChild(link);
}

// ===== FONT OPTIONS =====
const headingFonts = ['Playfair Display', 'Montserrat', 'Poppins', 'Raleway', 'Lora', 'Merriweather', 'Oswald', 'Dancing Script', 'Pacifico', 'Lobster'];
const bodyFonts = ['Inter', 'Roboto', 'Open Sans', 'Lato', 'Nunito', 'Source Sans Pro', 'Raleway', 'Poppins', 'Montserrat', 'Work Sans'];
const arHeadingFonts = ['Tajawal', 'Cairo', 'Almarai', 'Noto Kufi Arabic', 'Amiri', 'Scheherazade', 'El Messiri', 'Changa', 'Harmattan', 'Lemonada'];
const arBodyFonts = ['Cairo', 'Tajawal', 'Almarai', 'Noto Kufi Arabic', 'Noto Sans Arabic', 'IBM Plex Sans Arabic', 'Readex Pro'];

// ===== ROUTING =====
function getRoute() {
  return window.location.hash.slice(1) || (Store.isAdminLoggedIn() ? 'dashboard' : 'login');
}

function navigate(route) {
  window.location.hash = route;
}

function renderCurrentPage() {
  const route = getRoute();
  if (route !== 'login' && !Store.isAdminLoggedIn()) {
    navigate('login');
    return;
  }
  const root = document.getElementById('admin-root');
  if (route === 'login') {
    root.innerHTML = renderLoginPage();
    return;
  }
  root.innerHTML = renderAdminLayout(route);
}

// ===== TOAST =====
function showToast(message, type = 'success') {
  const container = document.getElementById('admin-toast-container');
  const icons = { success: '<i class="ph ph-check-circle"></i>', error: '<i class="ph ph-x-circle"></i>', info: '<i class="ph ph-info"></i>' };
  const toast = document.createElement('div');
  toast.className = `admin-toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.classList.add('leaving');setTimeout(()=>this.parentElement.remove(),300)">✕</button>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ===== MODAL =====
function openModal(title, bodyHTML, footerHTML = '') {
  const container = document.getElementById('admin-modal-container');
  container.innerHTML = `
    <div class="admin-modal-overlay active" id="modal-overlay">
      <div class="admin-modal">
        <div class="modal-header">
          <h2>${title}</h2>
          <button class="modal-close" data-action="close-modal">✕</button>
        </div>
        <div class="modal-body">${bodyHTML}</div>
        ${footerHTML ? `<div class="modal-footer">${footerHTML}</div>` : ''}
      </div>
    </div>
  `;
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => {
      document.getElementById('admin-modal-container').innerHTML = '';
    }, 300);
  }
}

function confirmDialog(title, message, onConfirm) {
  openModal(title, `
    <div class="confirm-dialog">
      <div class="confirm-icon"><i class="ph ph-warning"></i></div>
      <h3>${title}</h3>
      <p>${message}</p>
      <div class="confirm-actions">
        <button class="btn btn-secondary" data-action="close-modal">${currentLang === 'ar' ? 'إلغاء' : 'Cancel'}</button>
        <button class="btn btn-danger" id="confirm-yes-btn">${currentLang === 'ar' ? 'حذف' : 'Delete'}</button>
      </div>
    </div>
  `);
  document.getElementById('confirm-yes-btn').addEventListener('click', () => {
    closeModal();
    onConfirm();
  });
}

// ===== LOGIN PAGE =====
function renderLoginPage() {
  return `
    <div class="login-page">
      <div class="login-card">
        <div class="login-logo">
          <span class="logo-icon"><i class="ph ph-moon"></i></span>
          <div class="logo-text">Layl Ramy</div>
          <div class="logo-subtitle">${t('admin.loginSubtitle')}</div>
        </div>
        <form class="login-form" id="login-form">
          <div class="input-group">
            <label for="login-password">${t('admin.password')}</label>
            <input type="password" id="login-password" placeholder="••••••••" autocomplete="current-password" autofocus>
          </div>
          <div class="login-error" id="login-error">${t('admin.wrongPassword')}</div>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:14px;">${t('admin.loginBtn')}</button>
        </form>
      </div>
    </div>
  `;
}

// ===== ADMIN LAYOUT =====
function renderAdminLayout(activeRoute) {
  const pendingReviews = Store.getAllReviews().filter(r => !r.approved).length;
  const stats = Store.getOrderStats();

  const navItems = [
    { route: 'dashboard', icon: '<i class="ph ph-chart-bar"></i>', label: t('admin.dashboard') },
    { route: 'products', icon: '<i class="ph ph-package"></i>', label: t('admin.products') },
    { route: 'categories', icon: '<i class="ph ph-folder"></i>', label: t('admin.categories') },
    { route: 'coupons', icon: '<i class="ph ph-ticket"></i>', label: t('admin.coupons') },
    { route: 'orders', icon: '<i class="ph ph-shopping-cart"></i>', label: t('admin.orders'), badge: stats.pendingOrders || 0 },
    { route: 'reviews', icon: '<i class="ph ph-star"></i>', label: t('admin.reviews'), badge: pendingReviews },
    { route: 'settings', icon: '<i class="ph ph-gear"></i>', label: t('admin.settings') },
  ];

  const navHTML = navItems.map(item => `
    <a href="#${item.route}" class="${activeRoute === item.route ? 'active' : ''}" data-nav="${item.route}">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
      ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
    </a>
  `).join('');

  let contentHTML = '';
  switch (activeRoute) {
    case 'dashboard': contentHTML = renderDashboard(); break;
    case 'products': contentHTML = renderProducts(); break;
    case 'categories': contentHTML = renderCategories(); break;
    case 'coupons': contentHTML = renderCoupons(); break;
    case 'orders': contentHTML = renderOrders(); break;
    case 'reviews': contentHTML = renderReviews(); break;
    case 'settings': contentHTML = renderSettings(); break;
    default: contentHTML = renderDashboard();
  }

  return `
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <div class="admin-layout">
      <aside class="admin-sidebar" id="admin-sidebar">
        <div class="sidebar-header">
          <span class="sidebar-logo"><i class="ph ph-moon"></i></span>
          <span class="sidebar-title">Layl Ramy</span>
          <span class="sidebar-badge">Admin</span>
        </div>
        <nav class="sidebar-nav">${navHTML}</nav>
        <div class="sidebar-footer">
          <a href="#login" data-action="logout">
            <span class="nav-icon"><i class="ph ph-sign-out"></i></span>
            <span>${t('admin.logout')}</span>
          </a>
        </div>
      </aside>
      <header class="admin-topbar">
        <div class="topbar-start">
          <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle Menu"><i class="ph ph-list"></i></button>
          <span class="topbar-title">${t('admin.adminPanel')}</span>
        </div>
        <div class="topbar-end">
          <a href="index.html" class="topbar-link" title="${t('admin.backToStore')}"><i class="ph ph-storefront"></i> ${t('admin.backToStore')}</a>
          <button class="topbar-btn" data-action="toggle-lang" title="AR / EN">${currentLang === 'ar' ? 'EN' : 'ع'}</button>
          <button class="topbar-btn" data-action="toggle-theme" title="Theme">${currentTheme === 'dark' ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>'}</button>
        </div>
      </header>
      <main class="admin-content" id="admin-content">${contentHTML}</main>
    </div>
  `;
}

// ===== DASHBOARD =====
function renderDashboard() {
  const products = Store.getProducts();
  const stats = Store.getOrderStats();
  const orders = Store.getOrders().slice(0, 5);
  const settings = Store.getSettings();
  const cur = t('admin.currency');

  return `
    <div class="page-header"><h1>${t('admin.dashboard')}</h1></div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon products"><i class="ph ph-package"></i></div>
        <div class="stat-info">
          <h3>${products.length}</h3>
          <p>${t('admin.totalProducts')}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon orders"><i class="ph ph-shopping-cart"></i></div>
        <div class="stat-info">
          <h3>${stats.totalOrders}</h3>
          <p>${t('admin.totalOrders')}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon revenue"><i class="ph ph-money"></i></div>
        <div class="stat-info">
          <h3>${stats.totalRevenue.toLocaleString()} ${cur}</h3>
          <p>${t('admin.revenue')}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon pending"><i class="ph ph-hourglass"></i></div>
        <div class="stat-info">
          <h3>${stats.pendingOrders}</h3>
          <p>${t('admin.pendingOrders')}</p>
        </div>
      </div>
    </div>

    <div class="d-flex gap-12 mb-24 flex-wrap">
      <a href="#products" class="btn btn-primary" data-nav="products"><i class="ph ph-plus"></i> ${t('admin.addProduct')}</a>
      <a href="#orders" class="btn btn-secondary" data-nav="orders"><i class="ph ph-clipboard-text"></i> ${t('admin.viewAllOrders')}</a>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>${t('admin.recentOrders')}</h2>
      </div>
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('admin.orderNumber')}</th>
              <th>${t('admin.customer')}</th>
              <th>${t('admin.total')}</th>
              <th>${t('admin.status')}</th>
              <th>${t('admin.date')}</th>
            </tr>
          </thead>
          <tbody>
            ${orders.length === 0 ? `<tr><td colspan="5"><div class="empty-state"><p>${t('admin.noOrders')}</p></div></td></tr>` :
              orders.map(o => `
                <tr style="cursor:pointer" data-action="view-order" data-id="${o.id}">
                  <td><strong>${o.orderNumber}</strong></td>
                  <td>${o.customerName}</td>
                  <td>${o.total.toLocaleString()} ${cur}</td>
                  <td><span class="status-badge status-${o.status}">${Store.getStatusIcon(o.status)} ${t('admin.' + o.status) || o.status}</span></td>
                  <td>${Store.formatDate(o.createdAt, currentLang)}</td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ===== PRODUCTS =====
let productSearchQuery = '';

function renderProducts() {
  const categories = Store.getCategories();
  let products = Store.getProducts();

  if (productSearchQuery) {
    const q = productSearchQuery.toLowerCase();
    products = products.filter(p =>
      (p.name_ar || '').toLowerCase().includes(q) ||
      (p.name_en || '').toLowerCase().includes(q)
    );
  }

  const cur = t('admin.currency');

  return `
    <div class="page-header">
      <h1>${t('admin.products')}</h1>
      <button class="btn btn-primary" data-action="add-product"><i class="ph ph-plus"></i> ${t('admin.addProduct')}</button>
    </div>
    <div class="table-container">
      <div class="table-header">
        <h2>${t('admin.products')} (${products.length})</h2>
        <div class="search-input-wrap">
          <span class="search-icon"><i class="ph ph-magnifying-glass"></i></span>
          <input type="text" id="product-search" placeholder="${currentLang === 'ar' ? 'بحث...' : 'Search...'}" value="${productSearchQuery}">
        </div>
      </div>
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th></th>
              <th>${t('admin.name')}</th>
              <th>${t('admin.price')}</th>
              <th>${t('admin.discount')}</th>
              <th>${t('admin.category')}</th>
              <th>${t('admin.stock')}</th>
              <th>${t('admin.status')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${products.length === 0 ? `<tr><td colspan="8"><div class="empty-state"><div class="empty-icon"><i class="ph ph-package"></i></div><h3>${t('admin.noProducts')}</h3></div></td></tr>` :
              products.map(p => {
                const cat = categories.find(c => c.id === p.categoryId);
                return `
                  <tr>
                    <td><img class="product-thumb" src="${p.images?.[0] || 'https://via.placeholder.com/42'}" alt="" loading="lazy"></td>
                    <td>
                      <div><strong>${currentLang === 'ar' ? (p.name_ar || p.name_en) : (p.name_en || p.name_ar)}</strong></div>
                      ${p.featured ? `<span class="status-badge status-active" style="font-size:10px;padding:2px 6px;"><i class="ph-fill ph-star"></i> ${t('admin.featured')}</span>` : ''}
                    </td>
                    <td>${p.price.toLocaleString()} ${cur}</td>
                    <td>${p.discountPercentage > 0 ? `<span class="text-accent">${p.discountPercentage}%</span>` : '-'}</td>
                    <td>${cat ? (currentLang === 'ar' ? cat.name_ar : cat.name_en) : '-'}</td>
                    <td>${p.stock}</td>
                    <td><span class="status-badge status-${p.status}">${t('admin.' + p.status)}</span></td>
                    <td>
                      <div class="actions-cell">
                        <button class="btn-icon" data-action="edit-product" data-id="${p.id}" title="${t('admin.editProduct')}"><i class="ph ph-pencil-simple"></i></button>
                        <button class="btn-icon danger" data-action="delete-product" data-id="${p.id}" title="${t('admin.deleteProduct')}"><i class="ph ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
// ===== IMAGE COMPRESSION =====
function compressImage(file, maxWidth, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function() {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
      callback(compressedBase64);
    };
  };
}

function openProductModal(product = null) {
  const isEdit = !!product;
  const title = isEdit ? t('admin.editProduct') : t('admin.addProduct');
  const categories = Store.getCategories();

  const body = `
    <form class="admin-form" id="product-form">
      <div class="form-group">
        <label for="prod-name-ar">${t('admin.productName_ar')} *</label>
        <input type="text" id="prod-name-ar" value="${product?.name_ar || ''}" required>
      </div>
      <div class="form-group">
        <label for="prod-name-en">${t('admin.productName_en')} *</label>
        <input type="text" id="prod-name-en" value="${product?.name_en || ''}" required>
      </div>
      <div class="form-group full-width">
        <label for="prod-desc-ar">${t('admin.description_ar')}</label>
        <textarea id="prod-desc-ar">${product?.description_ar || ''}</textarea>
      </div>
      <div class="form-group full-width">
        <label for="prod-desc-en">${t('admin.description_en')}</label>
        <textarea id="prod-desc-en">${product?.description_en || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="prod-price">${t('admin.price')} *</label>
        <input type="number" id="prod-price" min="0" step="1" value="${product?.price || ''}" required>
      </div>
      <div class="form-group">
        <label for="prod-discount">${t('admin.discount')}</label>
        <input type="number" id="prod-discount" min="0" max="100" step="1" value="${product?.discountPercentage || 0}">
      </div>
      <div class="form-group">
        <label for="prod-category">${t('admin.category')}</label>
        <select id="prod-category">
          <option value="">${t('admin.selectCategory')}</option>
          ${categories.map(c => `<option value="${c.id}" ${product?.categoryId === c.id ? 'selected' : ''}>${currentLang === 'ar' ? c.name_ar : c.name_en}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label for="prod-stock">${t('admin.stock')}</label>
        <input type="number" id="prod-stock" min="0" value="${product?.stock ?? 10}">
      </div>
      <div class="form-group full-width">
        <label>${t('admin.images')}</label>
        <div class="file-upload-wrapper" style="margin-bottom:8px; display:flex; align-items:center; gap:12px;">
          <input type="file" id="prod-image-upload" accept="image/*" multiple style="display:none">
          <label for="prod-image-upload" class="btn btn-secondary" style="cursor:pointer; display:inline-flex; align-items:center; gap:8px;">
            <i class="ph ph-upload-simple"></i> ${currentLang === 'ar' ? 'رفع صور من الجهاز' : 'Upload Images'}
          </label>
          <span class="text-muted" style="font-size:12px">${currentLang === 'ar' ? 'يتم ضغط الصور تلقائياً للحفاظ على المساحة' : 'Images are auto-compressed'}</span>
        </div>
        <textarea id="prod-images" placeholder="${t('admin.imageUrls')}" rows="3">${product?.images?.join('\n') || ''}</textarea>
        <div class="image-preview-grid" id="img-preview-grid">
          ${(product?.images || []).map((url, i) => `
            <div class="image-preview-item">
              <img src="${url}" alt="Preview" onerror="this.src='https://via.placeholder.com/72'">
            </div>
          `).join('')}
        </div>
      </div>
      <div class="form-group">
        <label for="prod-status">${t('admin.status')}</label>
        <select id="prod-status">
          <option value="active" ${(product?.status || 'active') === 'active' ? 'selected' : ''}>${t('admin.active')}</option>
          <option value="inactive" ${product?.status === 'inactive' ? 'selected' : ''}>${t('admin.inactive')}</option>
        </select>
      </div>
      <div class="form-group checkbox-group">
        <input type="checkbox" id="prod-featured" ${product?.featured ? 'checked' : ''}>
        <label for="prod-featured">${t('admin.featured')}</label>
      </div>
    </form>
  `;

  const footer = `
    <button class="btn btn-secondary" data-action="close-modal">${currentLang === 'ar' ? 'إلغاء' : 'Cancel'}</button>
    <button class="btn btn-primary" id="save-product-btn">${currentLang === 'ar' ? 'حفظ' : 'Save'}</button>
  `;

  openModal(title, body, footer);

  // Image preview update
  const imgTextarea = document.getElementById('prod-images');
  if (imgTextarea) {
    imgTextarea.addEventListener('input', () => {
      const urls = imgTextarea.value.split('\n').map(u => u.trim()).filter(Boolean);
      const grid = document.getElementById('img-preview-grid');
      grid.innerHTML = urls.map((url, i) => `
        <div class="image-preview-item" style="position:relative;">
          <img src="${url}" alt="Preview" onerror="this.src='https://via.placeholder.com/72'">
          <button type="button" class="btn-icon danger" onclick="removeImage(${i})" style="position:absolute; top:-5px; right:-5px; width:24px; height:24px; font-size:12px; background:var(--bg-card); border-radius:50%; box-shadow:var(--shadow);"><i class="ph ph-x"></i></button>
        </div>
      `).join('');
    });

    // Make removeImage function available globally just for the modal
    window.removeImage = function(index) {
      const urls = imgTextarea.value.split('\n').map(u => u.trim()).filter(Boolean);
      urls.splice(index, 1);
      imgTextarea.value = urls.join('\n');
      imgTextarea.dispatchEvent(new Event('input'));
    };
  }

  // Handle file uploads
  const imgUpload = document.getElementById('prod-image-upload');
  if (imgUpload && imgTextarea) {
    imgUpload.addEventListener('change', (e) => {
      const files = e.target.files;
      if (!files.length) return;
      
      const currentImages = imgTextarea.value ? imgTextarea.value.split('\n').map(u => u.trim()).filter(Boolean) : [];
      let processed = 0;
      
      Array.from(files).forEach(file => {
        compressImage(file, 800, (base64) => {
          currentImages.push(base64);
          processed++;
          if (processed === files.length) {
            imgTextarea.value = currentImages.join('\n');
            imgTextarea.dispatchEvent(new Event('input'));
            imgUpload.value = ''; // reset
          }
        });
      });
    });
  }

  document.getElementById('save-product-btn').addEventListener('click', () => {
    const nameAr = document.getElementById('prod-name-ar').value.trim();
    const nameEn = document.getElementById('prod-name-en').value.trim();
    const price = parseFloat(document.getElementById('prod-price').value);

    if (!nameAr || !nameEn || isNaN(price) || price <= 0) {
      showToast(t('admin.fillRequired'), 'error');
      return;
    }

    const imagesRaw = document.getElementById('prod-images').value;
    const images = imagesRaw.split('\n').map(u => u.trim()).filter(Boolean);

    const data = {
      name_ar: nameAr,
      name_en: nameEn,
      description_ar: document.getElementById('prod-desc-ar').value.trim(),
      description_en: document.getElementById('prod-desc-en').value.trim(),
      price: price,
      discountPercentage: parseInt(document.getElementById('prod-discount').value) || 0,
      categoryId: document.getElementById('prod-category').value,
      stock: parseInt(document.getElementById('prod-stock').value) || 0,
      images: images,
      status: document.getElementById('prod-status').value,
      featured: document.getElementById('prod-featured').checked,
    };

    if (isEdit) data.id = product.id;

    Store.saveProduct(data);
    closeModal();
    showToast(t('admin.productSaved'), 'success');
    renderContentArea('products');
  });
}

// ===== CATEGORIES =====
function renderCategories() {
  const categories = Store.getCategories();

  return `
    <div class="page-header">
      <h1>${t('admin.categories')}</h1>
      <button class="btn btn-primary" data-action="add-category"><i class="ph ph-plus"></i> ${t('admin.addCategory')}</button>
    </div>
    <div class="table-container">
      <div class="table-header">
        <h2>${t('admin.categories')} (${categories.length})</h2>
      </div>
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('admin.icon')}</th>
              <th>${t('admin.categoryName_ar')}</th>
              <th>${t('admin.categoryName_en')}</th>
              <th>${t('admin.productCount')}</th>
              <th>${t('admin.order')}</th>
              <th>${t('admin.status')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${categories.length === 0 ? `<tr><td colspan="7"><div class="empty-state"><div class="empty-icon"><i class="ph ph-folder"></i></div><h3>${t('admin.noCategories')}</h3></div></td></tr>` :
              categories.map(c => `
                <tr>
                  <td style="font-size:24px">${c.icon || '<i class="ph ph-folder"></i>'}</td>
                  <td>${c.name_ar}</td>
                  <td>${c.name_en}</td>
                  <td>${Store.getCategoryProductCount(c.id)}</td>
                  <td>${c.order || 0}</td>
                  <td><span class="status-badge status-${c.status}">${t('admin.' + c.status)}</span></td>
                  <td>
                    <div class="actions-cell">
                      <button class="btn-icon" data-action="edit-category" data-id="${c.id}" title="${t('admin.editCategory')}"><i class="ph ph-pencil-simple"></i></button>
                      <button class="btn-icon danger" data-action="delete-category" data-id="${c.id}" title="${t('admin.deleteCategory')}"><i class="ph ph-trash"></i></button>
                    </div>
                  </td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openCategoryModal(category = null) {
  const isEdit = !!category;
  const title = isEdit ? t('admin.editCategory') : t('admin.addCategory');

  const body = `
    <form class="admin-form" id="category-form">
      <div class="form-group">
        <label for="cat-name-ar">${t('admin.categoryName_ar')} *</label>
        <input type="text" id="cat-name-ar" value="${category?.name_ar || ''}" required>
      </div>
      <div class="form-group">
        <label for="cat-name-en">${t('admin.categoryName_en')} *</label>
        <input type="text" id="cat-name-en" value="${category?.name_en || ''}" required>
      </div>
      <div class="form-group">
        <label for="cat-icon">${t('admin.icon')}</label>
        <input type="text" id="cat-icon" value="${category?.icon || ''}" placeholder='<i class="ph ph-folder"></i>' style="font-size:18px">
      </div>
      <div class="form-group">
        <label for="cat-order">${t('admin.order')}</label>
        <input type="number" id="cat-order" min="0" value="${category?.order ?? 0}">
      </div>
      <div class="form-group">
        <label for="cat-status">${t('admin.status')}</label>
        <select id="cat-status">
          <option value="active" ${(category?.status || 'active') === 'active' ? 'selected' : ''}>${t('admin.active')}</option>
          <option value="inactive" ${category?.status === 'inactive' ? 'selected' : ''}>${t('admin.inactive')}</option>
        </select>
      </div>
    </form>
  `;

  const footer = `
    <button class="btn btn-secondary" data-action="close-modal">${currentLang === 'ar' ? 'إلغاء' : 'Cancel'}</button>
    <button class="btn btn-primary" id="save-category-btn">${currentLang === 'ar' ? 'حفظ' : 'Save'}</button>
  `;

  openModal(title, body, footer);

  document.getElementById('save-category-btn').addEventListener('click', () => {
    const nameAr = document.getElementById('cat-name-ar').value.trim();
    const nameEn = document.getElementById('cat-name-en').value.trim();

    if (!nameAr || !nameEn) {
      showToast(t('admin.fillRequired'), 'error');
      return;
    }

    const data = {
      name_ar: nameAr,
      name_en: nameEn,
      icon: document.getElementById('cat-icon').value.trim() || '<i class="ph ph-folder"></i>',
      order: parseInt(document.getElementById('cat-order').value) || 0,
      status: document.getElementById('cat-status').value,
    };

    if (isEdit) data.id = category.id;

    Store.saveCategory(data);
    closeModal();
    showToast(t('admin.categorySaved'), 'success');
    renderContentArea('categories');
  });
}

// ===== ORDERS =====
let orderStatusFilter = 'all';

function renderOrders() {
  const statuses = ['all', 'new', 'confirmed', 'preparing', 'shipping', 'delivered', 'cancelled'];
  let orders = Store.getOrders();
  const cur = t('admin.currency');

  if (orderStatusFilter !== 'all') {
    orders = orders.filter(o => o.status === orderStatusFilter);
  }

  return `
    <div class="page-header">
      <h1>${t('admin.orders')}</h1>
    </div>
    <div class="admin-tabs" id="order-tabs">
      ${statuses.map(s => `
        <button class="tab-btn ${orderStatusFilter === s ? 'active' : ''}" data-action="filter-orders" data-status="${s}">
          ${t('admin.' + s)}
        </button>
      `).join('')}
    </div>
    <div class="table-container">
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('admin.orderNumber')}</th>
              <th>${t('admin.customer')}</th>
              <th>${t('admin.phone')}</th>
              <th>${t('admin.total')}</th>
              <th>${t('admin.status')}</th>
              <th>${t('admin.date')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${orders.length === 0 ? `<tr><td colspan="7"><div class="empty-state"><div class="empty-icon"><i class="ph ph-shopping-cart"></i></div><h3>${t('admin.noOrders')}</h3></div></td></tr>` :
              orders.map(o => `
                <tr>
                  <td><strong>${o.orderNumber}</strong></td>
                  <td>${o.customerName}</td>
                  <td dir="ltr">${o.customerPhone}</td>
                  <td>${o.total.toLocaleString()} ${cur}</td>
                  <td><span class="status-badge status-${o.status}">${Store.getStatusIcon(o.status)} ${t('admin.' + o.status) || o.status}</span></td>
                  <td>${Store.formatDate(o.createdAt, currentLang)}</td>
                  <td>
                    <div class="actions-cell">
                      <button class="btn-icon" data-action="view-order" data-id="${o.id}" title="${t('admin.viewDetails')}"><i class="ph ph-eye"></i></button>
                      <button class="btn-icon danger" data-action="delete-order" data-id="${o.id}" title="${t('admin.deleteOrder')}"><i class="ph ph-trash"></i></button>
                    </div>
                  </td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openOrderDetailModal(orderId) {
  const order = Store.getOrder(orderId);
  if (!order) return;
  const cur = t('admin.currency');
  const settings = Store.getSettings();
  const statuses = ['new', 'confirmed', 'preparing', 'shipping', 'delivered', 'cancelled'];

  const body = `
    <div class="order-detail-section">
      <h3>${t('admin.customerInfo')}</h3>
      <div class="order-info-grid">
        <div class="order-info-item">
          <span class="info-label">${t('admin.customer')}</span>
          <span class="info-value">${order.customerName}</span>
        </div>
        <div class="order-info-item">
          <span class="info-label">${t('admin.phone')}</span>
          <span class="info-value" dir="ltr">${order.customerPhone}</span>
        </div>
        <div class="order-info-item">
          <span class="info-label">${t('admin.email')}</span>
          <span class="info-value">${order.customerEmail || '-'}</span>
        </div>
        <div class="order-info-item">
          <span class="info-label">${t('admin.city')}</span>
          <span class="info-value">${order.city || '-'}</span>
        </div>
        <div class="order-info-item" style="grid-column:1/-1">
          <span class="info-label">${t('admin.address')}</span>
          <span class="info-value">${order.customerAddress}</span>
        </div>
      </div>
    </div>

    <div class="order-detail-section">
      <h3>${t('admin.orderItems')}</h3>
      <table class="order-items-mini">
        <thead>
          <tr>
            <th></th>
            <th>${t('admin.product')}</th>
            <th>${t('admin.unitPrice')}</th>
            <th>${t('admin.qty')}</th>
            <th>${t('admin.total')}</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(item => `
            <tr>
              <td><img class="item-img" src="${item.image || 'https://via.placeholder.com/36'}" alt="" loading="lazy"></td>
              <td>${currentLang === 'ar' ? item.name_ar : item.name_en}</td>
              <td>${item.discountedPrice.toLocaleString()} ${cur}</td>
              <td>${item.quantity}</td>
              <td>${(item.discountedPrice * item.quantity).toLocaleString()} ${cur}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="order-totals">
        <div class="total-row">
          <span>${t('admin.subtotal')}</span>
          <span>${order.subtotal.toLocaleString()} ${cur}</span>
        </div>
        <div class="total-row">
          <span>${t('admin.shippingFee')}</span>
          <span>${order.shipping === 0 ? t('admin.free') : order.shipping.toLocaleString() + ' ' + cur}</span>
        </div>
        <div class="total-row grand">
          <span>${t('admin.grandTotal')}</span>
          <span>${order.total.toLocaleString()} ${cur}</span>
        </div>
      </div>
    </div>

    ${order.notes ? `
      <div class="order-detail-section">
        <h3>${t('admin.notes')}</h3>
        <p style="color:var(--text-secondary);font-size:14px">${order.notes}</p>
      </div>
    ` : ''}

    <div class="order-status-update">
      <select id="order-status-select">
        ${statuses.map(s => `<option value="${s}" ${order.status === s ? 'selected' : ''}>${t('admin.' + s)}</option>`).join('')}
      </select>
      <button class="btn btn-primary btn-sm" id="update-order-status-btn">${t('admin.updateStatus')}</button>
    </div>

    <div style="margin-top:16px">
      <a href="https://wa.me/${order.customerPhone.replace(/[^0-9+]/g, '')}" target="_blank" class="whatsapp-btn">
        <i class="ph ph-whatsapp-logo"></i> ${t('admin.messageOnWhatsapp')}
      </a>
    </div>
  `;

  openModal(`${t('admin.orderDetails')} - ${order.orderNumber}`, body);

  document.getElementById('update-order-status-btn').addEventListener('click', () => {
    const newStatus = document.getElementById('order-status-select').value;
    Store.updateOrderStatus(orderId, newStatus);
    closeModal();
    showToast(t('admin.orderUpdated'), 'success');
    renderContentArea(getRoute());
  });
}

// ===== REVIEWS =====
let reviewStatusFilter = 'all';

function renderReviews() {
  const filters = ['all', 'pending', 'approved'];
  let reviews = Store.getAllReviews();

  if (reviewStatusFilter === 'pending') {
    reviews = reviews.filter(r => !r.approved);
  } else if (reviewStatusFilter === 'approved') {
    reviews = reviews.filter(r => r.approved);
  }

  return `
    <div class="page-header">
      <h1>${t('admin.reviews')}</h1>
    </div>
    <div class="admin-tabs" id="review-tabs">
      ${filters.map(f => `
        <button class="tab-btn ${reviewStatusFilter === f ? 'active' : ''}" data-action="filter-reviews" data-status="${f}">
          ${t('admin.' + f)}
        </button>
      `).join('')}
    </div>
    <div class="table-container">
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('admin.product')}</th>
              <th>${t('admin.customer')}</th>
              <th>${t('admin.rating')}</th>
              <th>${t('admin.comment')}</th>
              <th>${t('admin.status')}</th>
              <th>${t('admin.date')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${reviews.length === 0 ? `<tr><td colspan="7"><div class="empty-state"><div class="empty-icon"><i class="ph ph-star"></i></div><h3>${t('admin.noReviews')}</h3></div></td></tr>` :
              reviews.map(r => {
                const product = Store.getProduct(r.productId);
                const productName = product ? (currentLang === 'ar' ? product.name_ar : product.name_en) : '-';
                const stars = '<i class="ph-fill ph-star" style="color:var(--accent)"></i>'.repeat(r.rating) + '<i class="ph ph-star" style="color:var(--text-muted)"></i>'.repeat(5 - r.rating);
                return `
                  <tr>
                    <td class="truncate">${productName}</td>
                    <td>${r.customerName}</td>
                    <td><span class="star-rating">${stars}</span></td>
                    <td class="truncate" title="${r.comment}">${r.comment}</td>
                    <td><span class="status-badge status-${r.approved ? 'approved' : 'pending'}">${r.approved ? t('admin.approved') : t('admin.pending')}</span></td>
                    <td>${Store.formatDate(r.createdAt, currentLang)}</td>
                    <td>
                      <div class="actions-cell">
                        ${!r.approved ? `<button class="btn btn-success btn-sm" data-action="approve-review" data-id="${r.id}"><i class="ph ph-check"></i> ${t('admin.approve')}</button>` : ''}
                        <button class="btn-icon danger" data-action="delete-review" data-id="${r.id}" title="${t('admin.deleteReview')}"><i class="ph ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ===== COUPONS =====
function renderCoupons() {
  const coupons = Store.getCoupons();
  
  return `
    <div class="page-header">
      <h1>${t('admin.coupons')}</h1>
      <button class="btn btn-primary" data-action="add-coupon"><i class="ph ph-plus"></i> ${t('admin.addCoupon')}</button>
    </div>
    
    <div class="table-container">
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('admin.code')}</th>
              <th>${t('admin.discountValue')}</th>
              <th>${t('admin.expiryDate')}</th>
              <th>${t('admin.status')}</th>
              <th width="100"></th>
            </tr>
          </thead>
          <tbody>
            ${coupons.length === 0 ? `<tr><td colspan="5"><div class="empty-state"><p>${t('admin.noCoupons')}</p></div></td></tr>` :
              coupons.map(c => `
                <tr>
                  <td><strong>${c.code}</strong></td>
                  <td>${c.discountType === 'percentage' ? c.discountValue + '%' : Store.formatPrice(c.discountValue, currentLang)}</td>
                  <td>${c.expiryDate ? Store.formatDate(c.expiryDate, currentLang) : '-'}</td>
                  <td><span class="status-badge status-${c.status === 'active' ? 'delivered' : 'cancelled'}">${t('admin.' + c.status) || c.status}</span></td>
                  <td>
                    <div class="actions-cell">
                      <button class="btn-icon" data-action="edit-coupon" data-id="${c.id}"><i class="ph ph-pencil-simple"></i></button>
                      <button class="btn-icon danger" data-action="delete-coupon" data-id="${c.id}"><i class="ph ph-trash"></i></button>
                    </div>
                  </td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openCouponModal(coupon = null) {
  const isEdit = !!coupon;
  const title = isEdit ? t('admin.editCoupon') : t('admin.addCoupon');
  
  const body = `
    <form class="admin-form" id="coupon-form">
      <div class="form-group">
        <label for="coup-code">${t('admin.code')} *</label>
        <input type="text" id="coup-code" value="${coupon?.code || ''}" required style="text-transform:uppercase">
      </div>
      <div class="form-group">
        <label for="coup-type">${t('admin.discountType')}</label>
        <select id="coup-type">
          <option value="percentage" ${coupon?.discountType === 'percentage' ? 'selected' : ''}>${t('admin.percentage')}</option>
          <option value="fixed" ${coupon?.discountType === 'fixed' ? 'selected' : ''}>${t('admin.fixed')}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="coup-value">${t('admin.discountValue')} *</label>
        <input type="number" id="coup-value" min="0" step="any" value="${coupon?.discountValue || ''}" required>
      </div>
      <div class="form-group">
        <label for="coup-min">${t('admin.minOrderAmount')}</label>
        <input type="number" id="coup-min" min="0" value="${coupon?.minOrderAmount || ''}">
      </div>
      <div class="form-group">
        <label for="coup-expiry">${t('admin.expiryDate')}</label>
        <input type="date" id="coup-expiry" value="${coupon?.expiryDate || ''}">
      </div>
      <div class="form-group">
        <label for="coup-status">${t('admin.status')}</label>
        <select id="coup-status">
          <option value="active" ${(coupon?.status || 'active') === 'active' ? 'selected' : ''}>${t('admin.active')}</option>
          <option value="inactive" ${coupon?.status === 'inactive' ? 'selected' : ''}>${t('admin.inactive')}</option>
        </select>
      </div>
    </form>
  `;
  
  const footer = `
    <button class="btn btn-secondary" data-action="close-modal">${currentLang === 'ar' ? 'إلغاء' : 'Cancel'}</button>
    <button class="btn btn-primary" id="save-coupon-btn">${currentLang === 'ar' ? 'حفظ' : 'Save'}</button>
  `;
  
  openModal(title, body, footer);
  
  document.getElementById('save-coupon-btn').addEventListener('click', () => {
    const code = document.getElementById('coup-code').value.trim().toUpperCase();
    const type = document.getElementById('coup-type').value;
    const value = parseFloat(document.getElementById('coup-value').value);
    
    if (!code || isNaN(value) || value <= 0) {
      showToast(t('admin.fillRequired'), 'error');
      return;
    }
    
    const minAmount = document.getElementById('coup-min').value;
    const expiry = document.getElementById('coup-expiry').value;
    
    Store.saveCoupon({
      id: coupon?.id,
      code: code,
      discountType: type,
      discountValue: value,
      minOrderAmount: minAmount ? parseFloat(minAmount) : null,
      expiryDate: expiry || null,
      status: document.getElementById('coup-status').value
    });
    
    closeModal();
    showToast(t('admin.couponSaved'));
    renderCurrentPage();
  });
}

// ===== SETTINGS =====
function renderSettings() {
  const settings = Store.getSettings();

  const fontSelect = (id, options, currentValue) => `
    <select id="${id}">
      ${options.map(f => `<option value="${f}" ${currentValue === f ? 'selected' : ''}>${f}</option>`).join('')}
    </select>
  `;

  return `
    <div class="page-header">
      <h1>${t('admin.settings')}</h1>
    </div>

    <!-- Store Identity -->
    <div class="settings-section">
      <div class="settings-section-header">
        <span class="section-icon"><i class="ph ph-storefront"></i></span>
        <span>${t('admin.storeIdentity')}</span>
      </div>
      <div class="settings-section-body">
        <div class="admin-form" id="settings-identity-form">
          <div class="form-group full-width">
            <label for="set-store-name">${t('admin.storeName')}</label>
            <input type="text" id="set-store-name" value="${settings.storeName}">
          </div>
          <div class="form-group">
            <label for="set-subtitle-ar">${t('admin.subtitleAr')}</label>
            <input type="text" id="set-subtitle-ar" value="${settings.subtitle_ar}">
          </div>
          <div class="form-group">
            <label for="set-subtitle-en">${t('admin.subtitleEn')}</label>
            <input type="text" id="set-subtitle-en" value="${settings.subtitle_en}">
          </div>
          <div class="form-group full-width">
            <label for="set-about-ar">${t('admin.aboutAr')}</label>
            <textarea id="set-about-ar">${settings.aboutText_ar}</textarea>
          </div>
          <div class="form-group full-width">
            <label for="set-about-en">${t('admin.aboutEn')}</label>
            <textarea id="set-about-en">${settings.aboutText_en}</textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- Typography -->
    <div class="settings-section">
      <div class="settings-section-header">
        <span class="section-icon"><i class="ph ph-text-t"></i></span>
        <span>${t('admin.typography')}</span>
      </div>
      <div class="settings-section-body">
        <div class="admin-form">
          <div class="form-group">
            <label for="set-font-heading">${t('admin.fontHeading')}</label>
            ${fontSelect('set-font-heading', headingFonts, settings.fontHeading)}
          </div>
          <div class="form-group">
            <label for="set-font-body">${t('admin.fontBody')}</label>
            ${fontSelect('set-font-body', bodyFonts, settings.fontBody)}
          </div>
          <div class="form-group">
            <label for="set-font-ar-heading">${t('admin.fontArHeading')}</label>
            ${fontSelect('set-font-ar-heading', arHeadingFonts, settings.fontArabicHeading)}
          </div>
          <div class="form-group">
            <label for="set-font-ar-body">${t('admin.fontArBody')}</label>
            ${fontSelect('set-font-ar-body', arBodyFonts, settings.fontArabicBody)}
          </div>
        </div>
        <div class="font-preview mt-16" id="font-preview">
          <div class="preview-heading" id="font-preview-heading" style="font-family:'${settings.fontHeading}',serif">${t('admin.headingSample')}</div>
          <div class="preview-body" id="font-preview-body" style="font-family:'${settings.fontBody}',sans-serif">${t('admin.bodySample')}</div>
        </div>
        <p class="text-muted mt-8" style="font-size:12px"><i class="ph ph-arrows-clockwise"></i> ${t('admin.livePreview')}</p>
      </div>
    </div>

    <!-- Colors -->
    <div class="settings-section">
      <div class="settings-section-header">
        <span class="section-icon"><i class="ph ph-palette"></i></span>
        <span>${t('admin.colors')}</span>
      </div>
      <div class="settings-section-body">
        <div class="admin-form">
          <div class="form-group">
            <label for="set-accent-color">${t('admin.accentColor')}</label>
            <input type="color" id="set-accent-color" value="${settings.accentColor}">
          </div>
          <div class="form-group">
            <label>${t('admin.livePreview')}</label>
            <div class="color-preview">
              <div class="color-swatch" id="color-swatch" style="background:${settings.accentColor}"></div>
              <div class="color-buttons">
                <button class="color-btn-sample" id="color-btn-sample" style="background:${settings.accentColor};color:#0a0a0f">${currentLang === 'ar' ? 'زر تجريبي' : 'Sample Button'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="settings-section">
      <div class="settings-section-header">
        <span class="section-icon"><i class="ph ph-phone"></i></span>
        <span>${t('admin.contactInfo')}</span>
      </div>
      <div class="settings-section-body">
        <div class="admin-form">
          <div class="form-group">
            <label for="set-phone">${t('admin.contactPhone')}</label>
            <input type="text" id="set-phone" value="${settings.contactPhone}" dir="ltr">
          </div>
          <div class="form-group">
            <label for="set-whatsapp">${t('admin.contactWhatsapp')}</label>
            <input type="text" id="set-whatsapp" value="${settings.contactWhatsapp}" dir="ltr">
          </div>
          <div class="form-group">
            <label for="set-email">${t('admin.contactEmail')}</label>
            <input type="email" id="set-email" value="${settings.contactEmail}" dir="ltr">
          </div>
          <div class="form-group">
            <label for="set-address-ar">${t('admin.addressAr')}</label>
            <input type="text" id="set-address-ar" value="${settings.address_ar}">
          </div>
          <div class="form-group">
            <label for="set-address-en">${t('admin.addressEn')}</label>
            <input type="text" id="set-address-en" value="${settings.address_en}">
          </div>
        </div>
      </div>
    </div>

    <!-- Shipping -->
    <div class="settings-section">
      <div class="settings-section-header">
        <span class="section-icon"><i class="ph ph-truck"></i></span>
        <span>${t('admin.shipping')}</span>
      </div>
      <div class="settings-section-body">
        <div class="admin-form">
          <div class="form-group">
            <label for="set-shipping-cost">${t('admin.shippingCost')} (${t('admin.currency')})</label>
            <input type="number" id="set-shipping-cost" min="0" value="${settings.shippingCost}">
          </div>
          <div class="form-group">
            <label for="set-free-threshold">${t('admin.freeShippingThreshold')} (${t('admin.currency')})</label>
            <input type="number" id="set-free-threshold" min="0" value="${settings.freeShippingThreshold}">
          </div>
        </div>
      </div>
    </div>

    <!-- EmailJS Settings -->
    <div class="settings-section">
      <div class="settings-section-header">
        <span class="section-icon"><i class="ph ph-envelope-simple"></i></span>
        <span>${currentLang === 'ar' ? 'إعدادات البريد (EmailJS)' : 'Email Settings (EmailJS)'}</span>
      </div>
      <div class="settings-section-body">
        <p class="text-muted" style="margin-bottom:16px;font-size:14px">
          ${currentLang === 'ar' ? 'قم بإنشاء حساب في emailjs.com مجاناً لإرسال الطلبات إلى بريدك.' : 'Create a free account at emailjs.com to receive order emails.'}
        </p>
        <div class="form-row">
          <div class="form-group">
            <label>Service ID</label>
            <input type="text" id="set-email-service" value="${settings.emailjs_service_id || ''}" placeholder="e.g. service_xxxx">
          </div>
          <div class="form-group">
            <label>Template ID</label>
            <input type="text" id="set-email-template" value="${settings.emailjs_template_id || ''}" placeholder="e.g. template_xxxx">
          </div>
          <div class="form-group">
            <label>Public Key</label>
            <input type="text" id="set-email-key" value="${settings.emailjs_public_key || ''}" placeholder="e.g. abcd1234EFGH">
          </div>
        </div>
      </div>
    </div>

    <div style="text-align:center;padding:20px 0">
      <button class="btn btn-primary" id="save-settings-btn" style="padding:14px 40px;font-size:16px">
        <i class="ph ph-floppy-disk"></i> ${t('admin.saveSettings')}
      </button>
    </div>
  `;
}

function attachSettingsListeners() {
  // Font live preview
  const headingSelect = document.getElementById('set-font-heading');
  const bodySelect = document.getElementById('set-font-body');
  const arHeadingSelect = document.getElementById('set-font-ar-heading');
  const arBodySelect = document.getElementById('set-font-ar-body');
  const previewHeading = document.getElementById('font-preview-heading');
  const previewBody = document.getElementById('font-preview-body');

  if (headingSelect && previewHeading) {
    const updateFontPreview = () => {
      const hFont = currentLang === 'ar' ? arHeadingSelect?.value : headingSelect?.value;
      const bFont = currentLang === 'ar' ? arBodySelect?.value : bodySelect?.value;
      if (hFont) {
        loadGoogleFont(hFont);
        previewHeading.style.fontFamily = `'${hFont}', serif`;
      }
      if (bFont) {
        loadGoogleFont(bFont);
        previewBody.style.fontFamily = `'${bFont}', sans-serif`;
      }
    };
    headingSelect.addEventListener('change', updateFontPreview);
    bodySelect?.addEventListener('change', updateFontPreview);
    arHeadingSelect?.addEventListener('change', updateFontPreview);
    arBodySelect?.addEventListener('change', updateFontPreview);
  }

  // Color live preview
  const colorInput = document.getElementById('set-accent-color');
  const colorSwatch = document.getElementById('color-swatch');
  const colorBtn = document.getElementById('color-btn-sample');

  if (colorInput) {
    colorInput.addEventListener('input', () => {
      const color = colorInput.value;
      if (colorSwatch) colorSwatch.style.background = color;
      if (colorBtn) colorBtn.style.background = color;
      document.documentElement.style.setProperty('--accent', color);
    });
  }

  // Save settings
  const saveBtn = document.getElementById('save-settings-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const newSettings = {
        storeName: document.getElementById('set-store-name')?.value || 'Layl Ramy',
        subtitle_ar: document.getElementById('set-subtitle-ar')?.value || '',
        subtitle_en: document.getElementById('set-subtitle-en')?.value || '',
        aboutText_ar: document.getElementById('set-about-ar')?.value || '',
        aboutText_en: document.getElementById('set-about-en')?.value || '',
        fontHeading: document.getElementById('set-font-heading')?.value || 'Playfair Display',
        fontBody: document.getElementById('set-font-body')?.value || 'Inter',
        fontArabicHeading: document.getElementById('set-font-ar-heading')?.value || 'Tajawal',
        fontArabicBody: document.getElementById('set-font-ar-body')?.value || 'Cairo',
        accentColor: document.getElementById('set-accent-color')?.value || '#c9a04e',
        contactPhone: document.getElementById('set-phone')?.value || '',
        contactWhatsapp: document.getElementById('set-whatsapp')?.value || '',
        contactEmail: document.getElementById('set-email')?.value || '',
        address_ar: document.getElementById('set-address-ar')?.value || '',
        address_en: document.getElementById('set-address-en')?.value || '',
        shippingCost: parseFloat(document.getElementById('set-shipping-cost')?.value) || 0,
        freeShippingThreshold: parseFloat(document.getElementById('set-free-threshold')?.value) || 0,
        emailjs_service_id: document.getElementById('set-email-service')?.value.trim() || '',
        emailjs_template_id: document.getElementById('set-email-template')?.value.trim() || '',
        emailjs_public_key: document.getElementById('set-email-key')?.value.trim() || ''
      };

      // Apply fonts to CSS properties
      document.documentElement.style.setProperty('--font-heading', `'${newSettings.fontHeading}', serif`);
      document.documentElement.style.setProperty('--font-body', `'${newSettings.fontBody}', sans-serif`);
      document.documentElement.style.setProperty('--font-ar-heading', `'${newSettings.fontArabicHeading}', sans-serif`);
      document.documentElement.style.setProperty('--font-ar-body', `'${newSettings.fontArabicBody}', sans-serif`);
      document.documentElement.style.setProperty('--accent', newSettings.accentColor);

      // Load the fonts
      loadGoogleFont(newSettings.fontHeading);
      loadGoogleFont(newSettings.fontBody);
      loadGoogleFont(newSettings.fontArabicHeading);
      loadGoogleFont(newSettings.fontArabicBody);

      Store.saveSettings(newSettings);
      showToast(t('admin.settingsSaved'), 'success');
    });
  }
}

// ===== CONTENT AREA RENDERER =====
function renderContentArea(route) {
  const content = document.getElementById('admin-content');
  if (!content) return;

  switch (route) {
    case 'dashboard': content.innerHTML = renderDashboard(); break;
    case 'products': content.innerHTML = renderProducts(); break;
    case 'categories': content.innerHTML = renderCategories(); break;
    case 'coupons': content.innerHTML = renderCoupons(); break;
    case 'orders': content.innerHTML = renderOrders(); break;
    case 'reviews': content.innerHTML = renderReviews(); break;
    case 'settings':
      content.innerHTML = renderSettings();
      attachSettingsListeners();
      break;
    default: content.innerHTML = renderDashboard();
  }

  // Update active nav
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === route);
  });
}

// ===== EVENT DELEGATION =====
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.dataset.action;
  const id = target.dataset.id;
  const btn = target;

  switch (action) {
    case 'close-modal':
      closeModal();
      break;

    case 'toggle-theme':
      toggleTheme();
      break;

    case 'toggle-lang':
      toggleLanguage();
      break;

    case 'logout':
      e.preventDefault();
      Store.adminLogout();
      navigate('login');
      renderCurrentPage();
      break;

    // Products
    case 'add-product':
      openProductModal();
      break;
    case 'edit-product':
      openProductModal(Store.getProduct(id));
      break;
    case 'delete-product':
      confirmDialog(t('admin.deleteProduct'), t('admin.confirmDeleteDesc'), () => {
        Store.deleteProduct(id);
        showToast(t('admin.productDeleted'), 'success');
        renderContentArea('products');
      });
      break;

    // Categories
    case 'add-category':
      openCategoryModal();
      break;
    case 'edit-category':
      openCategoryModal(Store.getCategory(id));
      break;
    case 'delete-category':
      confirmDialog(t('admin.deleteCategory'), t('admin.confirmDeleteDesc'), () => {
        Store.deleteCategory(id);
        showToast(t('admin.categoryDeleted'), 'success');
        renderCurrentPage();
      });
      break;

    // Coupons
    case 'add-coupon':
      openCouponModal();
      break;
    case 'edit-coupon':
      const coupon = Store.getCoupons().find(c => c.id === id);
      if (coupon) openCouponModal(coupon);
      break;
    case 'delete-coupon':
      confirmDialog(t('admin.deleteCoupon'), t('admin.confirmDeleteDesc'), () => {
        Store.deleteCoupon(id);
        showToast(t('admin.couponDeleted'), 'success');
        renderCurrentPage();
      });
      break;

    // Orders
    case 'view-order':
      openOrderDetailModal(id);
      break;
    case 'delete-order':
      confirmDialog(t('admin.deleteOrder'), t('admin.confirmDeleteDesc'), () => {
        Store.deleteOrder(id);
        showToast(t('admin.orderDeleted'), 'success');
        renderContentArea('orders');
      });
      break;
    case 'filter-orders':
      orderStatusFilter = target.dataset.status;
      renderContentArea('orders');
      break;

    // Reviews
    case 'approve-review':
      Store.approveReview(id);
      showToast(t('admin.reviewApproved'), 'success');
      renderContentArea('reviews');
      break;
    case 'delete-review':
      confirmDialog(t('admin.deleteReview'), t('admin.confirmDeleteDesc'), () => {
        Store.deleteReview(id);
        showToast(t('admin.reviewDeleted'), 'success');
        renderContentArea('reviews');
      });
      break;
    case 'filter-reviews':
      reviewStatusFilter = target.dataset.status;
      renderContentArea('reviews');
      break;
  }
});

// Hamburger & sidebar mobile
document.addEventListener('click', (e) => {
  if (e.target.closest('#hamburger-btn')) {
    const sidebar = document.getElementById('admin-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar?.classList.toggle('open');
    overlay?.classList.toggle('active');
  }
  if (e.target.closest('#sidebar-overlay')) {
    document.getElementById('admin-sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.remove('active');
  }
  // Close sidebar on nav click (mobile)
  if (e.target.closest('.sidebar-nav a') && window.innerWidth < 768) {
    document.getElementById('admin-sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.remove('active');
  }
});

// Modal overlay close
document.addEventListener('click', (e) => {
  if (e.target.id === 'modal-overlay') {
    closeModal();
  }
});

// Login form
document.addEventListener('submit', (e) => {
  if (e.target.id === 'login-form') {
    e.preventDefault();
    const password = document.getElementById('login-password').value;
    if (Store.adminLogin(password)) {
      navigate('dashboard');
      renderCurrentPage();
    } else {
      const errorEl = document.getElementById('login-error');
      errorEl.classList.add('visible');
      setTimeout(() => errorEl.classList.remove('visible'), 3000);
    }
  }
});

// Product search (delegated via input event)
document.addEventListener('input', (e) => {
  if (e.target.id === 'product-search') {
    productSearchQuery = e.target.value;
    // Debounce
    clearTimeout(e.target._timer);
    e.target._timer = setTimeout(() => {
      renderContentArea('products');
      // Restore focus and cursor
      const newInput = document.getElementById('product-search');
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(productSearchQuery.length, productSearchQuery.length);
      }
    }, 300);
  }
});

// Hash change routing
window.addEventListener('hashchange', () => {
  const route = getRoute();
  if (route === 'login') {
    renderCurrentPage();
  } else if (!Store.isAdminLoggedIn()) {
    navigate('login');
    renderCurrentPage();
  } else {
    renderContentArea(route);
    // Attach settings listeners when navigating to settings
    if (route === 'settings') {
      setTimeout(attachSettingsListeners, 50);
    }
  }
});

// Store events — auto-refresh
Store.on('products-updated', () => {
  if (getRoute() === 'products' || getRoute() === 'dashboard') {
    renderContentArea(getRoute());
  }
});

Store.on('orders-updated', () => {
  if (getRoute() === 'orders' || getRoute() === 'dashboard') {
    renderContentArea(getRoute());
  }
});

Store.on('reviews-updated', () => {
  if (getRoute() === 'reviews') {
    renderContentArea('reviews');
  }
});

Store.on('categories-updated', () => {
  if (getRoute() === 'categories') {
    renderContentArea('categories');
  }
});

// ===== INITIALIZATION =====
function init() {
  Store.seedData();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  renderCurrentPage();

  // Attach settings listeners if we're on settings page
  if (getRoute() === 'settings') {
    setTimeout(attachSettingsListeners, 100);
  }
}

init();

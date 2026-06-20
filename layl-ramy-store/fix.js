const fs = require('fs');

const path = 'C:\\Users\\Mass\\.gemini\\antigravity\\scratch\\layl-ramy-store\\js\\admin.js';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const renderSettingsStart = lines.findIndex(l => l.includes('function renderSettings() {'));
const renderDesignStart = lines.findIndex(l => l.includes('function renderDesign() {'));
const contactStart = lines.findIndex(l => l.includes('<!-- Contact -->'));
const attachSettingsStart = lines.findIndex(l => l.includes('function attachSettingsListeners() {'));
const renderContentAreaStart = lines.findIndex(l => l.includes('function renderContentArea(route) {'));

// 1. Rebuild renderSettings
let newRenderSettings = [];
newRenderSettings.push(...lines.slice(renderSettingsStart, renderDesignStart - 1)); // -1 to skip the '// ===== DESIGN PAGE ====='
newRenderSettings.push('            <textarea id="set-about-en">${settings.aboutText_en}</textarea>');
newRenderSettings.push('          </div>');
newRenderSettings.push('        </div>');
newRenderSettings.push('      </div>');
newRenderSettings.push('    </div>');
newRenderSettings.push('');
newRenderSettings.push(...lines.slice(contactStart, attachSettingsStart)); // Contact till end of renderSettings

// 2. Rebuild renderDesign
let newRenderDesign = [];
newRenderDesign.push('// ===== DESIGN PAGE =====');
newRenderDesign.push(...lines.slice(renderDesignStart, contactStart));
newRenderDesign.push('    <div style="text-align:center;padding:20px 0">');
newRenderDesign.push('      <button class="btn btn-primary" id="save-design-btn" style="padding:14px 40px;font-size:16px">');
newRenderDesign.push('        <i class="ph ph-floppy-disk"></i> ${currentLang === \'ar\' ? \'حفظ التصميم\' : \'Save Design\'}');
newRenderDesign.push('      </button>');
newRenderDesign.push('    </div>');
newRenderDesign.push('  `;');
newRenderDesign.push('}');
newRenderDesign.push('');

// 3. Rebuild attachSettingsListeners
let newAttachSettings = `function attachSettingsListeners() {
  const saveBtn = document.getElementById('save-settings-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const newSettings = {
        storeName: document.getElementById('set-store-name')?.value || 'Layl Ramy',
        subtitle_ar: document.getElementById('set-subtitle-ar')?.value || '',
        subtitle_en: document.getElementById('set-subtitle-en')?.value || '',
        aboutText_ar: document.getElementById('set-about-ar')?.value || '',
        aboutText_en: document.getElementById('set-about-en')?.value || '',
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

      if (settingsHistoryIndex === -1) {
        settingsHistory = [JSON.parse(JSON.stringify(Store.getSettings()))];
        settingsHistoryIndex = 0;
      }
      settingsHistory = settingsHistory.slice(0, settingsHistoryIndex + 1);
      settingsHistory.push(JSON.parse(JSON.stringify({...Store.getSettings(), ...newSettings})));
      settingsHistoryIndex = settingsHistory.length - 1;

      Store.saveSettings(newSettings);
      showToast(t('admin.settingsSaved'), 'success');
      renderContentArea('settings');
    });
  }

  const undoBtn = document.getElementById('settings-undo-btn');
  const redoBtn = document.getElementById('settings-redo-btn');
  if (undoBtn) {
    undoBtn.addEventListener('click', () => {
      if (settingsHistoryIndex > 0) {
        settingsHistoryIndex--;
        Store.saveSettings(settingsHistory[settingsHistoryIndex]);
        showToast(currentLang === 'ar' ? 'تم التراجع' : 'Undo successful', 'info');
        renderContentArea('settings');
      }
    });
  }
  if (redoBtn) {
    redoBtn.addEventListener('click', () => {
      if (settingsHistoryIndex < settingsHistory.length - 1) {
        settingsHistoryIndex++;
        Store.saveSettings(settingsHistory[settingsHistoryIndex]);
        showToast(currentLang === 'ar' ? 'تم إعادة التطبيق' : 'Redo successful', 'info');
        renderContentArea('settings');
      }
    });
  }
}
`;

// 4. Create attachDesignListeners
let newAttachDesign = `function attachDesignListeners() {
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
        previewHeading.style.fontFamily = \`'\${hFont}', serif\`;
      }
      if (bFont) {
        loadGoogleFont(bFont);
        previewBody.style.fontFamily = \`'\${bFont}', sans-serif\`;
      }
    };
    headingSelect.addEventListener('change', updateFontPreview);
    bodySelect?.addEventListener('change', updateFontPreview);
    arHeadingSelect?.addEventListener('change', updateFontPreview);
    arBodySelect?.addEventListener('change', updateFontPreview);
  }

  const colorInput = document.getElementById('set-accent-color');
  const colorSwatch = document.getElementById('color-swatch');
  const colorBtn = document.getElementById('color-btn-sample');

  if (colorInput) {
    colorInput.addEventListener('input', () => {
      const color = colorInput.value;
      if (colorSwatch) colorSwatch.style.background = color;
      if (colorBtn) colorBtn.style.background = color;
    });
  }

  const addSlideBtn = document.getElementById('add-slide-btn');
  const sliderContainer = document.getElementById('slider-settings-container');
  if (addSlideBtn && sliderContainer) {
    addSlideBtn.addEventListener('click', () => {
      const slideIndex = sliderContainer.querySelectorAll('.slide-setting-item').length + 1;
      const slideHTML = \`
        <div class="slide-setting-item" style="border: 1px solid var(--border); padding: 15px; margin-bottom: 15px; border-radius: 8px; position:relative;">
          <h5 style="margin-bottom: 10px;">Slide \${slideIndex}</h5>
          <button class="btn btn-danger btn-sm" style="position:absolute; top:15px; inset-inline-end:15px; padding:6px 12px;" type="button" data-action="delete-slide">\${currentLang === 'ar' ? 'حذف' : 'Delete'}</button>
          <div class="admin-form">
            <div class="form-group full-width">
              <label>\${currentLang === 'ar' ? 'الصورة (URL)' : 'Image (URL)'}</label>
              <input type="text" class="slide-img" value="">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'العنوان (عربي)' : 'Title (Arabic)'}</label>
              <input type="text" class="slide-title-ar" value="">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'العنوان (إنجليزي)' : 'Title (English)'}</label>
              <input type="text" class="slide-title-en" value="">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'النص الفرعي (عربي)' : 'Subtitle (Arabic)'}</label>
              <input type="text" class="slide-sub-ar" value="">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'النص الفرعي (إنجليزي)' : 'Subtitle (English)'}</label>
              <input type="text" class="slide-sub-en" value="">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'لون العنوان' : 'Title Color'}</label>
              <input type="color" class="slide-text-color" value="#c9a04e" style="height:40px;padding:2px;">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'لون النص الفرعي' : 'Subtitle Color'}</label>
              <input type="color" class="slide-subtitle-color" value="#ffffff" style="height:40px;padding:2px;">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'لون خلفية الزر' : 'Button Background'}</label>
              <input type="color" class="slide-btn-bg" value="#c9a04e" style="height:40px;padding:2px;">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'لون نص الزر' : 'Button Text Color'}</label>
              <input type="color" class="slide-btn-text" value="#0a0a0f" style="height:40px;padding:2px;">
            </div>
          </div>
        </div>
      \`;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = slideHTML;
      sliderContainer.appendChild(tempDiv.firstElementChild);
    });
  }

  const addCustomBannerBtn = document.getElementById('add-custom-banner-btn');
  const customBannersContainer = document.getElementById('custom-banners-container');
  if (addCustomBannerBtn && customBannersContainer) {
    addCustomBannerBtn.addEventListener('click', () => {
      const bannerIndex = customBannersContainer.querySelectorAll('.banner-setting-item').length + 1;
      const bannerHTML = \`
        <div class="banner-setting-item admin-form" style="padding:16px; border:1px solid rgba(255,255,255,0.1); border-radius:8px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <h5 style="margin:0">\${currentLang === 'ar' ? 'بنر' : 'Banner'} \${bannerIndex}</h5>
            <button class="btn-icon btn-danger btn-sm" data-action="delete-custom-banner" type="button"><i class="ph ph-trash"></i></button>
          </div>
          <div class="form-row">
            <div class="form-group checkbox-group" style="display:flex; align-items:center; gap:8px;">
              <input type="checkbox" class="banner-active" checked>
              <label>\${currentLang === 'ar' ? 'تفعيل' : 'Active'}</label>
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'الحجم' : 'Size'}</label>
              <select class="banner-size">
                <option value="small">\${currentLang === 'ar' ? 'صغير' : 'Small'}</option>
                <option value="medium" selected>\${currentLang === 'ar' ? 'متوسط' : 'Medium'}</option>
                <option value="large">\${currentLang === 'ar' ? 'كبير' : 'Large'}</option>
              </select>
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'المحاذاة' : 'Alignment'}</label>
              <select class="banner-align">
                <option value="center" selected>\${currentLang === 'ar' ? 'وسط' : 'Center'}</option>
                <option value="right">\${currentLang === 'ar' ? 'يمين' : 'Right'}</option>
                <option value="left">\${currentLang === 'ar' ? 'يسار' : 'Left'}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'النص (عربي)' : 'Text (Arabic)'}</label>
              <textarea class="banner-text-ar" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'النص (إنجليزي)' : 'Text (English)'}</label>
              <textarea class="banner-text-en" rows="2"></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'لون الخلفية' : 'Background Color'}</label>
              <input type="color" class="banner-bg-color" value="#1a1a2e" style="height:40px;padding:2px;">
            </div>
            <div class="form-group">
              <label>\${currentLang === 'ar' ? 'لون النص' : 'Text Color'}</label>
              <input type="color" class="banner-text-color" value="#f0f0f5" style="height:40px;padding:2px;">
            </div>
          </div>
        </div>
      \`;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = bannerHTML;
      customBannersContainer.appendChild(tempDiv.firstElementChild);
    });
  }

  const saveBtn = document.getElementById('save-design-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const slideItems = document.querySelectorAll('.slide-setting-item');
      const heroSlider = [];
      slideItems.forEach(item => {
        heroSlider.push({
          image: item.querySelector('.slide-img').value,
          title_ar: item.querySelector('.slide-title-ar').value,
          title_en: item.querySelector('.slide-title-en').value,
          subtitle_ar: item.querySelector('.slide-sub-ar').value,
          subtitle_en: item.querySelector('.slide-sub-en').value,
          buttonText_ar: 'تسوق الآن',
          buttonText_en: 'Shop Now',
          buttonLink: '#/products',
          textColor: item.querySelector('.slide-text-color')?.value || '#c9a04e',
          subtitleColor: item.querySelector('.slide-subtitle-color')?.value || '#ffffff',
          buttonBg: item.querySelector('.slide-btn-bg')?.value || '#c9a04e',
          buttonText: item.querySelector('.slide-btn-text')?.value || '#0a0a0f'
        });
      });

      const bannerItems = document.querySelectorAll('.banner-setting-item');
      const customBanners = [];
      bannerItems.forEach(item => {
        customBanners.push({
          active: item.querySelector('.banner-active')?.checked || false,
          size: item.querySelector('.banner-size')?.value || 'medium',
          align: item.querySelector('.banner-align')?.value || 'center',
          text_ar: item.querySelector('.banner-text-ar')?.value || '',
          text_en: item.querySelector('.banner-text-en')?.value || '',
          bgColor: item.querySelector('.banner-bg-color')?.value || '#1a1a2e',
          textColor: item.querySelector('.banner-text-color')?.value || '#f0f0f5'
        });
      });

      const newSettings = {
        fontHeading: document.getElementById('set-font-heading')?.value || 'Playfair Display',
        fontBody: document.getElementById('set-font-body')?.value || 'Inter',
        fontArabicHeading: document.getElementById('set-font-ar-heading')?.value || 'Tajawal',
        fontArabicBody: document.getElementById('set-font-ar-body')?.value || 'Cairo',
        textColor: document.getElementById('set-text-color')?.value || '#f0f0f5',
        accentColor: document.getElementById('set-accent-color')?.value || '#c9a04e',
        sliderInterval: parseFloat(document.getElementById('set-slider-interval')?.value) || 4,
        heroSlider: heroSlider,
        customBanners: customBanners,
        welcomePopupActive: document.getElementById('set-welcome-active')?.checked || false,
        welcomePopupTitle_ar: document.getElementById('set-welcome-title-ar')?.value || '',
        welcomePopupTitle_en: document.getElementById('set-welcome-title-en')?.value || '',
        welcomePopupSubtitle_ar: document.getElementById('set-welcome-sub-ar')?.value || '',
        welcomePopupSubtitle_en: document.getElementById('set-welcome-sub-en')?.value || '',
        welcomePopupCoupon: document.getElementById('set-welcome-coupon')?.value || '',
        welcomePopupBgColor: document.getElementById('set-welcome-bg-color')?.value || '#1a1a2e',
        welcomePopupTextColor: document.getElementById('set-welcome-text-color')?.value || '#f0f0f5',
        welcomePopupImage: document.getElementById('set-welcome-image')?.value || '',
        navBgColor: document.getElementById('set-nav-bg')?.value || '',
        navTextColor: document.getElementById('set-nav-text')?.value || '',
        btnBgColor: document.getElementById('set-btn-bg')?.value || '',
        btnTextColor: document.getElementById('set-btn-text')?.value || '',
        headingColor: document.getElementById('set-heading-color')?.value || '',
        footerBgColor: document.getElementById('set-footer-bg')?.value || '',
        footerTextColor: document.getElementById('set-footer-text')?.value || ''
      };

      loadGoogleFont(newSettings.fontHeading);
      loadGoogleFont(newSettings.fontBody);
      loadGoogleFont(newSettings.fontArabicHeading);
      loadGoogleFont(newSettings.fontArabicBody);

      if (settingsHistoryIndex === -1) {
        settingsHistory = [JSON.parse(JSON.stringify(Store.getSettings()))];
        settingsHistoryIndex = 0;
      }
      settingsHistory = settingsHistory.slice(0, settingsHistoryIndex + 1);
      settingsHistory.push(JSON.parse(JSON.stringify({...Store.getSettings(), ...newSettings})));
      settingsHistoryIndex = settingsHistory.length - 1;

      Store.saveSettings(newSettings);
      showToast(currentLang === 'ar' ? 'تم حفظ التصميم' : 'Design saved', 'success');
      renderContentArea('design');
    });
  }
}
`;

// 5. Update renderContentArea
let newRenderContentArea = `// ===== CONTENT AREA RENDERER =====
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
    case 'design':
      content.innerHTML = renderDesign();
      attachDesignListeners();
      break;
    default: content.innerHTML = renderDashboard();
  }

  // Update active nav
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === route);
  });
}
`;

let finalLines = [
  ...lines.slice(0, renderSettingsStart),
  ...newRenderSettings,
  ...newRenderDesign,
  newAttachSettings,
  newAttachDesign,
  newRenderContentArea,
  ...lines.slice(renderContentAreaStart + 22) // skip original renderContentArea
];

fs.writeFileSync(path, finalLines.join('\\n'), 'utf8');
console.log('Done!');

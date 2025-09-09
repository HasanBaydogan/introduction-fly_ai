export const tr = {
  nav: {
    home: 'Anasayfa',
    features: 'Özellikler',
    flow: 'Akış',
    faq: 'SSS',
    contact: 'İletişim',
    demo: 'Demo Talep Et',
  },
  hero: {
    title: 'FLY AI Akıllı Tedarik ve Ticaret Operasyon Yönetimi',
    summary:
      'FLY AI, tekliften teslimata tüm ticaret sürecinizi tek ekranda yöneten, ekipler arası iş birliği ve müşteri iletişimini hızlandıran modern bir operasyon yönetim platformudur. Teklif/RFQ, PI yönetimi, ödeme ve lojistik aşamaları, gümrük süreçleri ve destek taleplerini akış tabanlı bir yapıda birleştirir.',
    ctaPrimary: 'Demo Talep Et',
    ctaSecondary: 'Teknik Dokümantasyonu İncele',
    statuses: 'Durumlar: Trade Confirmation · Ödeme · Taşıma · Gümrük',
    flowCard: {
      header: 'Akış',
      line1: 'RFQ → Quote → PO',
      line2: 'PI → Ödeme → Taşıma',
      line3: 'Gümrük → Teslimat',
      current: 'Durum',
      next: 'Sonraki',
      currentsub: 'Ticaret Onaylanması',
      nextsub:'Ödeme'
    }
  },
  problemSolution: {
    problemTitle: 'Sorun: Dağınık Operasyon',
    problemSubtitle: 'E-posta, Excel, farklı araçlar',
    problemPeople: 'Zaman kaybı & risk',
    solutionTitle: 'Çözüm: FLY AI Tek Platform',
    solutionSubtitle: 'Mail Al ve Gönder , Dosyaları sakla, Operasyonu otomatize yönet',
    solutionPeople: 'Hızlı koordinasyon',
    bannerTitle: 'Tek ekrandan tedarik ve ticaret operasyonları',
    bannerText: 'Destek Merkezi (chat), çoklu para birimi, banka seçimleri, dosya yükleme ve statü tabanlı aşamalarla süreçlerinizi net, hızlı ve izlenebilir yönetin.',
  },
  features: {
    heading: 'Ana Özellikler',
    items: [
      { title: 'Tüm operasyon tek yerde', icon: '/folded-map.svg', description: 'RFQ → Quote → PO → PI → Ödeme → Taşıma → Gümrük → Teslimat akışını tek ekranda yönetin.' },
      { title: 'Şeffaf ilerleme', icon: '/manage.svg', description: 'Durum sekmeleri ve rozetlerle görsel akış takibi; herkes aynı sayfada.' },
      { title: 'Daha hızlı koordinasyon', icon: '/user.svg', description: 'Dahili Destek Merkezi ile sohbet tabanlı yazışma ve dosya paylaşımı.' },
      { title: 'Finansal uyum', icon: '/calendar.svg', description: 'Çoklu para birimi ve banka bilgileriyle PI düzenleme ve ödeme takibi.' },
      { title: 'Risk azaltma', icon: '/star.svg', description: 'İptal/iade için ayrı aşamalar ve onay mekanikleri ile güvenli süreç.' },
      { title: 'Verimlilik', icon: '/tech.svg', description: 'Toplu arama, filtreleme, dosya yükleme ve inline düzenleme.' },
    ],
  },
  guide: {
    heading: 'Tekliften Teslimata',
    sub: 'Aşama rozetleri ve sekmeler ile görsel ilerleme. Özel ve gümrük/delivery aşamaları dahil uçtan uca takip. Örnek statüler: Trade Confirmation, Payment, Delivery to Transit, Custom Stages, Delivery to Client, Cancellation & Refund.',
    kicker: 'Uçtan uca akış',
    current: 'Güncel Aşama',
    currentNote: 'Onay bekliyor',
    currentValue: 'Trade Confirmation',
    next: 'Sonraki',
    nextValue: 'Payment → Delivery to Transit',
  },
  footer: {
    rights: '2025 FLY AI | Tüm hakları saklıdır',
    contactTitle: 'Bize Ulaşın',
    socialTitle: 'Sosyal',
    contactLinks: [
      { label: 'Satış', value: 'sales@flyai.tr' },
      { label: 'Destek', value: 'support@flyai.tr' },
    ],
    columns: [
      { title: 'FLY AI', links: ['Hakkımızda', 'Teknik Dokümantasyon', 'Gizlilik Politikası', 'Kullanım Şartları'] },
      { title: 'Kaynaklar', links: ['SSS', 'Blog', 'API v1', 'Sürüm Notları'] },
    ],
  }
} as const;



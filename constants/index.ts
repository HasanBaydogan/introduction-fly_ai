// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Anasayfa' },
  { href: '#ozellikler', key: 'features', label: 'Özellikler' },
  { href: '#akis', key: 'flow', label: 'Akış' },
  { href: '#sss', key: 'faq', label: 'SSS' },
  { href: '#iletisim', key: 'contact', label: 'İletişim' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Tüm operasyon tek yerde',
    icon: '/folded-map.svg',
    variant: 'green',
    description:
      'RFQ → PI → Ödeme → Transit → Gümrük → Teslimat akışını tek ekranda yönetin.',
  },
  {
    title: 'Şeffaf ilerleme',
    icon: '/manage.svg',
    variant: 'green',
    description:
      'Durum sekmeleri ve rozetlerle görsel akış takibi; herkes aynı sayfada.',
  },
  {
    title: 'Daha hızlı koordinasyon',
    icon: '/user.svg',
    variant: 'green',
    description:
      'Dahili Destek Merkezi ile sohbet tabanlı yazışma ve dosya paylaşımı.',
  },
  {
    title: 'Finansal uyum',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      'Çoklu para birimi ve banka bilgileriyle PI düzenleme ve ödeme takibi.',
  },
  {
    title: 'Risk azaltma',
    icon: '/star.svg',
    variant: 'orange',
    description:
      'İptal/iade için ayrı aşamalar ve onay mekanikleri ile güvenli süreç.',
  },
  {
    title: 'Verimlilik',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Toplu arama, filtreleme, dosya yükleme ve satır içi (inline) düzenleme.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'FLY AI',
    links: [
      'Hakkımızda',
      'Teknik Dokümantasyon',
      'Gizlilik Politikası',
      'Kullanım Şartları',
    ],
  },
  {
    title: 'Kaynaklar',
    links: ['SSS', 'Blog', 'API v1', 'Sürüm Notları'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Bize Ulaşın',
  links: [
    { label: 'Satış', value: 'sales@flyai.tr' },
    { label: 'Destek', value: 'support@flyai.tr' },
  ],
};

export const SOCIALS = {
  title: 'Sosyal',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};

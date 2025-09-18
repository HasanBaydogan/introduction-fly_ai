export const tr = {
  nav: {
    home: 'Anasayfa',
    features: 'Özellikler',
    flow: 'Akış',
    faq: 'SSS',
    contact: 'İletişim',
    demo: 'Demo Talep Et',
    login: 'Giriş Yap',
    user: 'Kullanıcı',
    client: 'Müşteri',
  },
  demoRequest: {
    subject: 'FLY AI Demo Talebi',
    body: `Merhaba FLY AI Ekibi,

FLY AI platformu hakkında detaylı bir demo görüşmesi talep ediyorum.

Şirket Bilgileri:
- Şirket Adı: [Şirket adınızı buraya yazın]
- Sektör: [Sektörünüzü belirtin]
- Çalışan Sayısı: [Personel sayınızı belirtin]
- Web Sitesi: [Web sitenizi paylaşın]

İletişim Bilgileri:
- Ad Soyad: [Adınız soyadınız]
- Pozisyon: [Görevinizi belirtin]
- Telefon: [Telefon numaranız]
- E-posta: [E-posta adresiniz]

Talep Detayları:
- Öncelikli İhtiyaçlarınız: [Temel ihtiyaçlarınızı açıklayın]
- Mevcut Kullandığınız Sistemler: [Varsa mevcut sistemlerinizi belirtin]
- Beklenen Kullanıcı Sayısı: [Kaç kişinin sistemi kullanacağını belirtin]
- Demo Tercihi: [Online/Yüz yüze tercihini belirtin]

Uygun Olduğunuz Zaman Aralıkları:
- Gün: [Tercih ettiğiniz günleri belirtin]
- Saat: [Tercih ettiğiniz saatleri belirtin]

Ek Notlar:
[Varsa eklemek istediğiniz diğer bilgiler]

Teşekkürler,
[Adınız]`
  },
  hero: {
    title: 'Akıllı Tedarik ve Ticaret Operasyon Yönetimi',
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
    current: 'Aşama',
    status1: 'PI Müşteriye Gönderildi',
    status2: 'PO Tedarikçi Tarafından Onaylandı',
    status3: 'Onay Bekliyor',
    status4: 'Müşteriden Ödeme Aktarıldı',
    status5: 'Müşteriden Ödeme Alındı',
    status6: 'Tedarikçiye Ödeme Yapıldı',
    status7: 'Tedarikçi Tarafından LT Bekliyor',
    status8: 'LOT Oluşturuldu',
    status9: 'LOT FFlere Gönderildi',
    status10: 'Resmi Fatura',
    status11: 'Gümrük İşlemleri',
    status12: 'Hedefe Yolda',
    currentNote: 'Onay bekliyor',
    finalNote: 'Tamamlandı!',
    currentValue: 'Trade Confirmation',
    next: 'Son',
    nextValue: 'Payment → Delivery to Transit',
    step1: 'Ticaret Onayı',
    step2: 'Ödeme',
    step3: 'Transit Teslimatı',
    step4: 'Gümrük',
    step5: 'Teslimat',
    step6: 'Cancellation and Refund',
  },
  faq: {
  kicker: 'Sıkça Sorulan Sorular',
  heading: 'SSS',
  subtitle: 'Havacılık Tedarik Yönetim Aracımız hakkında en sık sorulan soruları yanıtladık. Diğer sorularınız için bizimle iletişime geçmekten çekinmeyin.',
  contactTitle: 'Başka bir sorunuz mu var?',
  contactSubtitle: 'Ekibimiz size yardımcı olmaktan mutluluk duyar.',
  contactEmail: 'Bize Ulaşın',
  items: [
    {
      question: 'Havacılık Tedarik Yönetim Aracı nedir ve nasıl çalışır?',
      answer: 'SMT (Tedarik Yönetim Aracımız), kapsamlı bir havacılık parçaları tedarik ve tedarik zinciri yönetim sistemidir. RFQ (Teklif Talebi) oluşturulmasından nihai teslimat aşamasına kadar tüm iş akışını yönetir; teklif yönetimi, PI (Proforma Fatura) işlemleri, PO (Satın Alma Siparişi) yönetimi ve havacılık parçaları tedarik zinciri boyunca detaylı durum güncellemeleri ile sevkiyat takibini içerir.'
    },
    {
      question: 'Hangi sektörler için uygundur?',
      answer: 'Sistem özellikle havacılık ve havacılık-uzay endüstrileri için tasarlanmıştır. Aviyonik, iniş takımları, aktüatörler ve kontrol sistemleri, aerostrüktürler ve uçak lastikleri dahil olmak üzere havacılık parçaları tedarikinde uzmanlaşmıştır. Çeşitli uçak tiplerini destekler ve Collins Aerospace, Honeywell, Safran gibi büyük OEM\'lerle ve diğer havacılık tedarikçileriyle çalışır.'
    },
    {
      question: 'Hangi raporları ve analizleri alabilirim?',
      answer: 'Sistem kapsamlı raporlama ve analitik özellikleri sunar. Kullanıcı istatistikleri, teklif analizleri, tedarikçi performans raporları, finansal özetler ve lojistik takip raporları oluşturabilirsiniz. Gerçek zamanlı dashboard\'lar ile RFQ süreçlerinizi, PI/PO durumlarını ve tedarik zinciri performansınızı anlık olarak izleyebilir, Excel formatında detaylı raporlar alabilirsiniz.'
    },
    {
      question: 'Güvenlik önlemleri nelerdir?',
      answer: 'Sistem, farklı kullanıcı türleri (Satın Alma, Lojistik, Finans, Admin, Müşteri) için izinlerle rol tabanlı erişim kontrolü uygular. Güvenli kimlik doğrulama, veri şifreleme ve tüm işlemler için kapsamlı denetim izleri içerir. Sistem havacılık endüstrisi güvenlik standartlarına uygun olup tüm kullanıcı aktivitelerinin detaylı kayıtlarını tutar.'
    },
    {
      question: 'Fiyatlandırma nasıl çalışır?',
      answer: 'Fiyatlandırma kullanıcı rolleri, işlem hacmi ve özel özellik gereksinimlerine dayanır. Sistem farklı departmanlar için çeşitli izin seviyeleri sunar (RFQ-Teklif yönetimi, Parça yönetimi, Müşteri yönetimi, Finans, İstatistikler). Havacılık işletmenizin ihtiyaçlarına göre özelleştirilmiş bir teklif için satış ekibimizle iletişime geçin.'
    },
    {
      question: 'Teknik destek nasıl alabilirim?',
      answer: 'Teknik destek, platform içindeki yerleşik Destek Merkezi aracılığıyla Yazılım ve Ticaret departmanları için ayrı kanallarla mevcuttur. Sistem içinde doğrudan destek talepleri oluşturabilirsiniz ve teknik ekibimiz sistem konfigürasyonu, kullanıcı eğitimi ve entegrasyon desteği konularında yardım sağlar.'
    },
    {
      question: 'Demo talep etmek için ne yapmam gerekir?',
      answer: 'Havacılık Tedarik Yönetim Aracının demosunu talep etmek için platform üzerinden ekibimizle iletişime geçin veya doğrudan ulaşın. Uzmanlarımız RFQ iş akışı, parça yönetimi, tedarikçi ilişkileri, PI/PO işlemleri ve havacılık parçaları tedariki ve tedarik zinciri yönetimine özel lojistik takip özelliklerini gösterecektir.'
    }
  ]
},
  footer: {
    rights: '2025 FLY AI | Tüm hakları saklıdır',
    contactTitle: 'Bize Ulaşın',
    socialTitle: 'Sosyal',
    contactLinks: [
      { label: 'Satış', value: 'rfq@flyai.tr' },
      { label: 'Destek', value: 'info@flyai.tr' },
    ],
    columns: [
      { title: 'FLY AI', links: ['Hakkımızda', 'Teknik Dokümantasyon', 'Gizlilik Politikası', 'Kullanım Şartları'] },
      { title: 'Kaynaklar', links: ['SSS'] },
    ],
  }
} as const;



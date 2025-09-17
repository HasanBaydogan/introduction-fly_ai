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
    firstCurrent: 'İlk Aşama',
    secondCurrent: 'İkinci Aşama',
    thirtCurrent: 'Üçüncü Aşama',
    fourthCurrent: 'Dördüncü Aşama',
    currentNote: 'Onay bekliyor',
    finalNote: 'Tamamlandı!',
    currentValue: 'Trade Confirmation',
    next: 'Son',
    nextValue: 'Payment → Delivery to Transit',
    step1: 'Trade Confirmation',
    step2: 'Payment',
    step3: 'Delivery to Transit',
    step4: 'Custom',
    step5: 'Delivery to Client → Başarıyla',
    step6: 'Cancellation and Refund',
  },
  faq: {
    kicker: 'Sık Sorulan Sorular',
    heading: 'SSS',
    subtitle: 'FLY AI hakkında en çok merak edilen konuları yanıtladık. Sorularınız için bizimle iletişime geçebilirsiniz.',
    contactTitle: 'Başka sorunuz mu var?',
    contactSubtitle: 'Ekibimiz size yardımcı olmaktan mutluluk duyar.',
    contactEmail: 'Bize Yazın',
    items: [
      {
        question: 'FLY AI nedir ve nasıl çalışır?',
        answer: 'FLY AI, tedarik ve ticaret operasyonlarını tek platformda yöneten akıllı bir çözümdür. RFQ\'dan teslimata kadar tüm süreçlerinizi görsel akış tabanlı bir yapıda takip edebilir, ekipler arası koordinasyonu hızlandırabilir ve müşteri iletişimini tek merkezden yönetebilirsiniz.'
      },
      {
        question: 'Hangi sektörler için uygun?',
        answer: 'FLY AI özellikle ithalat-ihracat, tedarik zinciri yönetimi, lojistik ve ticaret alanlarında faaliyet gösteren şirketler için tasarlanmıştır. Havacılık, otomotiv, elektronik ve endüstriyel ürünler gibi sektörlerde başarıyla kullanılmaktadır.'
      },
      {
        question: 'Mevcut sistemlerimle entegre olabilir mi?',
        answer: 'Evet, FLY AI API desteği ile mevcut ERP, CRM ve muhasebe sistemlerinizle entegre olabilir. Ayrıca Excel dosyalarını içe aktarma ve e-posta entegrasyonu gibi özelliklerle mevcut iş akışlarınızı kesintisiz şekilde devam ettirebilirsiniz.'
      },
      {
        question: 'Güvenlik önlemleri nelerdir?',
        answer: 'FLY AI, SSL şifreleme, çok faktörlü kimlik doğrulama ve düzenli güvenlik güncellemeleri ile verilerinizi korur. GDPR uyumlu veri işleme politikalarımız ve ISO 27001 standartlarına uygun güvenlik protokollerimiz mevcuttur.'
      },
      {
        question: 'Fiyatlandırma nasıl çalışıyor?',
        answer: 'FLY AI esnek fiyatlandırma planları sunar. Kullanıcı sayısı, işlem hacmi ve ihtiyaç duyduğunuz özellikler temel alınarak özelleştirilmiş teklifler hazırlanır. 30 günlük ücretsiz deneme sürümü ile platformu test edebilirsiniz.'
      },
      {
        question: 'Teknik destek nasıl alırım?',
        answer: 'Platform içindeki Destek Merkezi üzerinden 7/24 canlı destek alabilirsiniz. Ayrıca e-posta (info@flyai.tr), telefon ve video görüşme desteği de mevcuttur. Kurulum ve eğitim süreçlerinde özel danışman desteği sağlanır.'
      },
      {
        question: 'Demo talep etmek için ne yapmam gerekiyor?',
        answer: 'Ana sayfadaki "Demo Talep Et" butonuna tıklayarak form doldurabilir veya doğrudan rfq@flyai.tr adresine e-posta gönderebilirsiniz. Ekibimiz 24 saat içinde sizinle iletişime geçerek demo randevusu planlar.'
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



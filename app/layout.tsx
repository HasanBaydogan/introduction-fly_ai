import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'FLY AI – Akıllı Tedarik ve Ticaret Operasyon Yönetimi',
  description: 'RFQ’den teslimata tüm ticaret sürecinizi tek ekranda yöneten, ekipler arası iş birliği ve müşteri iletişimini hızlandıran operasyon yönetim platformu.',
  keywords: [
    'FLY AI', 'Operasyon Yönetimi', 'RFQ', 'PI', 'Proforma Fatura', 'Ödeme', 'Transit', 'Gümrük', 'Teslimat', 'Destek Merkezi', 'Chat', 'Supply Chain', 'İthalat', 'İhracat', 'Tedarik', 'B2B'
  ],
  icons: {
    icon: '/FlyAI-Logo.png',
    shortcut: '/FlyAI-Logo.png',
    apple: '/FlyAI-Logo.png',
  },
  openGraph: {
    title: 'FLY AI – Akıllı Tedarik ve Ticaret Operasyon Yönetimi',
    description: 'Tekliften teslimata akış tabanlı yapıda tüm süreçlerinizi yönetin.',
    images: [
      {
        url: '/Logistic-02.png',
        width: 1200,
        height: 630,
        alt: 'FLY AI Hero',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

export const en = {
  nav: {
    home: 'Home',
    features: 'Features',
    flow: 'Flow',
    faq: 'FAQ',
    contact: 'Contact',
    demo: 'Request a Demo',
  },
  hero: {
    title: 'FLY AI Intelligent Procurement & Trade Operations Management',
    summary:
      'FLY AI is a modern operations platform that manages your entire trade process from quote to delivery on a single screen, accelerating cross-team collaboration and customer communication. It unifies RFQ, PI management, payment & logistics, customs processes and support requests in a flow-based structure.',
    ctaPrimary: 'Request a Demo',
    ctaSecondary: 'View Technical Docs',
    statuses: 'Statuses: Trade Confirmation · Payment · Delivery · Customs',
    flowCard: {
      header: 'Flow',
      line1: 'RFQ → Quote → PO',
      line2: 'PI → Payment → Transit',
      line3: 'Customs → Delivery',
      current: 'Current',
      next: 'Next',
      currentsub: 'Trade Confirmation',
      nextsub:'Payment'
    }
  },
  problemSolution: {
    problemTitle: 'Problem: Scattered Operations',
    problemSubtitle: 'Email, spreadsheets, different tools',
    problemPeople: 'Time loss & risk',
    solutionTitle: 'Solution: FLY AI Single Platform',
    solutionSubtitle: 'Receive and send mail, store files, automate and manage operations',
    solutionPeople: 'Faster coordination',
    bannerTitle: 'Manage procurement and trade from a single screen',
    bannerText: 'Handle processes clearly, quickly and traceably with Support Center (chat), multi-currency, bank selections, file upload and status-based stages.',
  },
  features: {
    heading: 'Key Features',
    items: [
      { title: 'All operations in one place', icon: '/folded-map.svg', description: 'Manage RFQ → PI → Payment → Transit → Customs → Delivery on a single screen.' },
      { title: 'Transparent progress', icon: '/meter.svg', description: 'Visual flow tracking with status tabs and badges; everyone stays aligned.' },
      { title: 'Faster coordination', icon: '/user.svg', description: 'Chat-based Support Center for messaging and file sharing.' },
      { title: 'Financial compliance', icon: '/calendar.svg', description: 'PI editing with multi-currency and bank details; payment tracking.' },
      { title: 'Risk reduction', icon: '/star.svg', description: 'Dedicated cancellation/refund stages with approval mechanisms.' },
      { title: 'Efficiency', icon: '/tech.svg', description: 'Bulk search, filtering, file upload and inline editing.' },
    ],
  },
  guide: {
    heading: 'RFQ → PI → Payment → Transit → Customs → Delivery',
    sub: 'Visual progress with badges and tabs. End-to-end tracking including custom and customs/delivery stages. Example statuses: Trade Confirmation, Payment, Delivery to Transit, Custom Stages, Delivery to Client, Cancellation & Refund.',
    kicker: 'End-to-end flow',
    current: 'Current Stage',
    currentNote: 'Pending approval',
    currentValue: 'Trade Confirmation',
    next: 'Next',
    nextValue: 'Payment → Delivery to Transit',
  },
  footer: {
    rights: '2025 FLY AI | All rights reserved',
    contactTitle: 'Contact Us',
    socialTitle: 'Social',
    contactLinks: [
      { label: 'Sales', value: 'sales@flyai.app' },
      { label: 'Support', value: 'support@flyai.app' },
    ],
    columns: [
      { title: 'FLY AI', links: ['About', 'Technical Documentation', 'Privacy Policy', 'Terms of Use'] },
      { title: 'Resources', links: ['FAQ', 'Blog', 'API v1', 'Release Notes'] },
    ],
  }
} as const;



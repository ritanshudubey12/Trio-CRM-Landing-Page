import { Building2, Layers, MapPin, ClipboardList, IndianRupee, Users, FileText, PieChart } from 'lucide-react';

export const moduleData = [
  {
    id: 'project-hub',
    title: 'Project Hub',
    icon: Building2,
    features: [
      'Multi-project management',
      'Phase / Tower / Floor / Unit hierarchy',
      'Project timeline & milestones'
    ]
  },
  {
    id: 'inventory-hub',
    title: 'Inventory Hub',
    icon: Layers,
    features: [
      'Real-time unit availability matrix',
      'Unit blocking & allotment',
      'Price & configuration management'
    ]
  },
  {
    id: 'site-visit-center',
    title: 'Site Visit Center',
    icon: MapPin,
    features: [
      'GPS-verified check-ins',
      'Visit scheduling & reminders',
      'Visit-to-booking conversion tracking'
    ]
  },
  {
    id: 'booking-center',
    title: 'Booking Center',
    icon: ClipboardList,
    features: [
      'Digital booking form',
      'Cost sheet generation',
      'Allotment letter automation'
    ]
  },
  {
    id: 'collections-center',
    title: 'Collections Center',
    icon: IndianRupee,
    features: [
      'Demand letter generation',
      'Payment schedule tracking',
      'Receipt management & reconciliation'
    ]
  },
  {
    id: 'cp-network',
    title: 'Channel Partner Network',
    icon: Users,
    features: [
      'CP onboarding & KYC portal',
      'Lead assignment & tracking',
      'Brokerage calculation & payout'
    ]
  },
  {
    id: 'cost-sheet-studio',
    title: 'Cost Sheet Studio',
    icon: FileText,
    features: [
      'Dynamic pricing templates',
      'Tax & charges configuration',
      'Instant PDF generation'
    ]
  },
  {
    id: 'executive-dashboard',
    title: 'Executive Dashboard',
    icon: PieChart,
    features: [
      'Cross-project analytics',
      'Team performance metrics',
      'Revenue & collection forecasts'
    ]
  }
];

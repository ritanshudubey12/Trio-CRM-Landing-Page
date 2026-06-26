import { Inbox, PhoneCall, Presentation, MapPin, CheckSquare, FileSignature, CreditCard, PiggyBank, Key } from 'lucide-react';

export const workflowSteps = [
  {
    id: 1,
    title: 'Lead Capture',
    description: 'Web forms, WhatsApp, portals — all leads in one inbox',
    icon: Inbox
  },
  {
    id: 2,
    title: 'Contact & Qualification',
    description: 'Smart lead scoring. Auto-assign to sales rep.',
    icon: PhoneCall
  },
  {
    id: 3,
    title: 'Project Presentation',
    description: 'Share brochures, floor plans, pricing instantly',
    icon: Presentation
  },
  {
    id: 4,
    title: 'Site Visit',
    description: 'Schedule → GPS check-in → Visit report',
    icon: MapPin
  },
  {
    id: 5,
    title: 'Unit Selection',
    description: 'Live inventory matrix. Block unit in real-time.',
    icon: CheckSquare
  },
  {
    id: 6,
    title: 'Booking',
    description: 'Digital form → Cost sheet → Allotment letter',
    icon: FileSignature
  },
  {
    id: 7,
    title: 'Payment',
    description: 'Demand schedule → Payment link → Receipt',
    icon: CreditCard
  },
  {
    id: 8,
    title: 'Collections',
    description: 'Milestone-based tracking → Automated reminders',
    icon: PiggyBank
  },
  {
    id: 9,
    title: 'Possession',
    description: 'Handover checklist → Possession letter → Happy customer',
    icon: Key
  }
];

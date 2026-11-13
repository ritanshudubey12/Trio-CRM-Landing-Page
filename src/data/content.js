// All page copy lives here so product/legal can verify it in one place.
// VERIFY BEFORE LAUNCH: integration availability, trial terms, security wording, metrics.

export const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Integrations', href: '#suite' },
  { label: 'Resources', href: '#faq' },
  { label: 'Pricing', href: '#contact' },
];

export const LEAD_SOURCES = [
  'Website forms', 'Inbound email', 'CSV imports', 'Website webhook',
  'Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Click-to-WhatsApp',
];

export const PROBLEMS = [
  { t: 'Scattered leads', d: 'Enquiries live in inboxes, sheets and chats — nobody sees the whole picture.' },
  { t: 'Missed follow-ups', d: 'Without a clear next step, warm leads quietly go cold.' },
  { t: 'Unclear pipeline', d: "You can't tell what is moving, what is stuck, or who owns it." },
];

export const SOLUTION = {
  t: 'One connected workspace',
  d: 'Leads, pipeline, conversations, quotes and meetings in a single place — with an owner and a next action on every deal.',
  points: ['Every lead in one inbox', 'Owner + next step on every deal', 'Conversations kept with the record'],
};

export const CAPABILITIES = [
  { id: 'lead', t: 'Every lead, in one place.', d: 'Bring leads from a website webhook, Google Ads, Meta, Click-to-WhatsApp, Google Sheets, LinkedIn Ads and more into one shared workspace.', tag: 'Lead capture', shot: 'integrations' },
  { id: 'cust', t: 'Know every customer. Know who owns them.', d: 'Search customers by name, company or location, and see industry, assigned owner, city and status at a glance.', tag: 'Customers', shot: 'customers' },
  { id: 'quote', t: 'Move from conversation to commercial action.', d: 'Create invoices and track status, grand total, payment and due dates inside the CRM workflow.', tag: 'Invoices', shot: 'invoices' },
  { id: 'wa', t: 'Bring team conversations closer to the customer record.', d: 'Manage approved WhatsApp message templates for marketing, sales and support. Requires a WhatsApp Business API connection.', tag: 'WhatsApp', shot: 'whatsapp' },
  { id: 'notify', t: 'Make the next step impossible to miss.', d: 'Choose how you are notified about leads, follow-ups and meetings — in-app, push, quiet hours and digests.', tag: 'Follow-ups', shot: 'notifications' },
  { id: 'roles', t: 'The right access for every role.', d: 'Define roles such as Sales Manager or BDA and control who can view and manage records.', tag: 'Roles', shot: 'roles' },
];

export const FOLLOWUPS = {
  t: 'Make the next step impossible to miss.',
  d: 'Organise reminders, meetings and follow-up activity so reps know what needs attention today.',
};

export const TOUR = [
  { id: 'cust', label: 'Customers', shot: 'customers', cap: 'Customers with industry, owner, city and status.' },
  { id: 'inv', label: 'Invoices', shot: 'invoices', cap: 'Invoices with status, totals and due dates.' },
  { id: 'wa', label: 'WhatsApp', shot: 'whatsapp', cap: 'Approved WhatsApp templates, ready to send.' },
  { id: 'int', label: 'Integrations', shot: 'integrations', cap: 'Lead sources connected from one hub.' },
  { id: 'roles', label: 'Roles', shot: 'roles', cap: 'Role-based access for your team.' },
  { id: 'audit', label: 'Audit logs', shot: 'audit', cap: 'A record of activity across modules.' },
];

export const STEPS = [
  { n: '01', t: 'Capture', d: 'Bring enquiries into the CRM.' },
  { n: '02', t: 'Qualify', d: 'Assign owners, organise records and assess fit.' },
  { n: '03', t: 'Engage', d: 'Follow up through connected communication workflows.' },
  { n: '04', t: 'Close', d: 'Track the deal and prepare sales documents.' },
  { n: '05', t: 'Handoff', d: 'Continue the customer journey with connected TriostackOne apps.' },
];

export const SUITE = [
  { t: 'Identity', d: 'One shared TriostackOne identity across apps, so your team signs in once.' },
  { t: 'Finance', d: 'Hand a won deal over to invoicing in Triostack Finance.' },
  { t: 'Projects', d: 'Hand a won deal over to delivery in Triostack Projects.' },
];

export const USE_CASES = [
  { t: 'Technology', d: 'Track demos, trials and proposals across a longer B2B sales cycle.' },
  { t: 'Professional services', d: 'Keep enquiries, meetings and quotations together for every client.' },
  { t: 'Real estate', d: 'Capture portal and ad enquiries, assign owners and schedule site visits.' },
];

export const SECURITY = [
  { t: 'Shared identity', d: 'Sign in through your TriostackOne identity.' },
  { t: 'Role-based permissions', d: 'Control who can view and change records.' },
  { t: 'Clear ownership', d: 'Every lead and deal has an owner and an activity history.' },
];

export const FAQS = [
  { q: 'How long does setup take?', a: 'You can create an account and start adding leads right away. Timing for imports and integrations depends on your data.' },
  { q: 'Can I import leads from a spreadsheet?', a: 'Yes. CSV imports are supported, alongside web forms, inbound email and a website webhook.' },
  { q: 'Which lead sources are supported?', a: 'Website forms, inbound email, imports, a website webhook, Google Ads, Meta Ads, LinkedIn Ads and Click-to-WhatsApp. Confirm availability for your account during your demo.' },
  { q: 'What do I need for the WhatsApp inbox?', a: 'A WhatsApp Business API connection is required. Our team can walk you through the prerequisites and current limitations.' },
  { q: 'Is there a mobile experience?', a: 'The workspace is responsive. Ask us in a demo about the current mobile experience for your team.' },
  { q: 'Can I control who sees what?', a: 'Yes — role-based permissions let you decide who can view and edit records.' },
  { q: 'How does pricing and the free start work?', a: 'Use "Start free" to get going, or book a walkthrough to discuss your team size and needs. Final terms are shown before you commit.' },
  { q: 'Does it connect to other TriostackOne apps?', a: 'Yes — shared identity, plus handoffs from won deals to Finance and Projects. Ask for a demo of the exact workflows available today.' },
];

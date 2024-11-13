export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
}

export interface Invoice {
  id: string;
  clientId: string;
  number: string;
  date: Date;
  dueDate: Date;
  items: InvoiceItem[];
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Estimate {
  id: string;
  clientId: string;
  number: string;
  date: Date;
  validUntil: Date;
  items: EstimateItem[];
  total: number;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
}

export interface EstimateItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Job {
  id: string;
  clientId: string;
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
}
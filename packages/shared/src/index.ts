export type UserRole = 'admin' | 'manager' | 'sales' | 'support';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Contact {
  id: string;
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  tags: string[];
}

export interface Deal {
  id: string;
  title: string;
  customerId: string;
  value: number;
  stage: 'new' | 'qualified' | 'proposal' | 'won' | 'lost';
  ownerId: string;
}

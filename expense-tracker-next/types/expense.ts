/**
 * Core Expense Types
 * Shared across all components
 */

export type ExpenseCategory = 'Food' | 'Transportation' | 'Entertainment' | 'Shopping' | 'Other';

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
}

export interface ExpenseCardProps {
  id: number;
  description: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
  onDelete?: (id: number) => void;
  highlighted?: boolean;
  showCategory?: boolean;
}
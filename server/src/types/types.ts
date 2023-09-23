export interface IUser {
  id: string
  email: string
}

export enum TransactionType {
  EXPENSE = 'expense',
  INCOME = 'income',
}
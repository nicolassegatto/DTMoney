import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionContext'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (structure, oneTransaction) => {
        if (oneTransaction.type === 'income') {
          structure.income += oneTransaction.price
          structure.total += oneTransaction.price
        } else {
          structure.outcome += oneTransaction.price
          structure.total -= oneTransaction.price
        }

        return structure
      },
      { income: 0, outcome: 0, total: 0 },
    )
  }, [transactions])

  return summary
}

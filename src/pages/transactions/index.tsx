import { Header } from '../../components/Header'
import { SearchBar } from '../../components/SearchBar'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styled'
import { useContextSelector } from 'use-context-selector'

export function Transaction() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchBar />

        <TransactionsTable>
          <tbody>
            {transactions.map((OBJ) => {
              return (
                <tr key={OBJ.id}>
                  <td width="50%">{OBJ.description}</td>
                  <td>
                    <PriceHighLight variant={OBJ.type}>
                      {OBJ.type === 'outcome' && '- '}
                      {priceFormatter.format(OBJ.price)}
                    </PriceHighLight>
                  </td>
                  <td>{OBJ.category}</td>
                  <td>{dateFormatter.format(new Date(OBJ.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}

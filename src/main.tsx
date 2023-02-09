import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { TransactionsProvider } from './contexts/TransactionContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

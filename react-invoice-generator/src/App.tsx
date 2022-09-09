import React from 'react'
import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) { }

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
  }

  return (
    <div className="app">
      <h3 className="center fs-10">Here shall be link/history to previously generated invoices (cross-user, with login/token?)</h3>
      <h2 className="center fs-10">Other ideas: </h2>
      <h3 className="center fs-10">Language converting button</h3>
      <h3 className="center fs-10">Make the download button 'better'</h3>
      <h3 className="center fs-10">Saveable templates for companies? Searchable be company name or ID</h3>
      <h3 className="center fs-10">The "remove line" button is not visible on phone</h3>
      <InvoicePage data={data} onChange={onInvoiceUpdated} />
      <h3 className="center fs-10">Code and design by: <a href="https://github.com/tuanpham-dev" target="_blank">tuanpham-dev (GitHub)</a>, slightly modded by <a href="https://github.com/martinreinok" target="_blank">me</a> </h3>
      <h4 className="center fs-10"></h4>
    </div>
  )
}

export default App

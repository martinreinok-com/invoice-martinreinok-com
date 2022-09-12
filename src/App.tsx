import React from 'react'
import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'
import { AuthProvider } from './contexts/AuthContext'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'


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
    <AuthProvider>
      <Router>
        <Routes>
            <Route 
            path='/invoice' 
            element={
            <PrivateRoute>
                <InvoicePage data={data} onChange={onInvoiceUpdated} />
            </PrivateRoute>}>
            </Route>
            <Route path="/login" element={ <Login /> }></Route>
            <Route path="/" element={ <Login /> }></Route>
        </Routes>
      </Router>
    </AuthProvider>
    </div> 
  )
}

export default App
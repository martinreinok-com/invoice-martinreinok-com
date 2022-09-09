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
  //<footer><h3 className="center fs-10">Code and design by: <a href="https://github.com/tuanpham-dev" target="_blank">tuanpham-dev (GitHub)</a>, slightly modded by <a href="https://github.com/martinreinok" target="_blank">me</a> </h3></footer>
  return (
    <div className="app">
    <AuthProvider>
      <Router>
        <Routes>
            <Route exact path='/invoice' element={<PrivateRoute/>}>
              <Route exact path='/invoice' element={<InvoicePage data={data} onChange={onInvoiceUpdated} />}/>
            </Route>
            <Route exact path="/login" element={ <Login /> }></Route>
            <Route exact path="/" element={ <Login /> }></Route>
        </Routes>
      </Router>
    </AuthProvider>
    </div>
  )
}

export default App

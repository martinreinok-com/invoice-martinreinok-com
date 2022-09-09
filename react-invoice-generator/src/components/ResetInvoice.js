import React from 'react'

function deleteLocalStorage(){
    localStorage.removeItem("invoiceData")
}

export default function ResetInvoice() {
  return deleteLocalStorage()
}

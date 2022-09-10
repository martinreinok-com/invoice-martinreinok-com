function deleteLocalStorage(){
    window.localStorage.removeItem("invoiceData")
}

function ResetInvoice() {
  deleteLocalStorage()
  window.location.reload();
  
}

export default function getConfirmation(){
  var returnVal = window.confirm("This will reset the form, press OK to confirm.");
  if ( returnVal === true ){
      ResetInvoice();
   }
}

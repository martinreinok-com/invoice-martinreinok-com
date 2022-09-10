import React from 'react'


const AddUIButton = ({buttonClass, buttonName, hoverTitle, onButtonClick }) => {

    function buttonClick() {
        console.log('Button click :)');
        if (typeof onButtonClick === 'function') {
            onButtonClick()
        } else {console.log("onButtonClick is not a function")}
        
    }

  return (
    <button  
    onClick={buttonClick}
    className={buttonClass} 
    title={hoverTitle}>
        <span>{buttonName}</span>
    </button>
  )
}

export default AddUIButton

import { useState } from "react"
import React from 'react'

const KeyboardClipboard = () => {
  
  const  [icerik, setIcerik] = useState("")

  const handleKeyDown=(e)=>{
    
    console.log(e)
    if(e.keyCode>47 && e.keyCode<58){
      alert("cannot entered number")
      e.preventDefault()// girilen sayının default olarak bağlanması engellendi
    }

  }
  
  
  
  return (
    <div className="container">


      <h2>Keyboard Event</h2>

      <input 
          type="text"
          className="form-control"  
          onChange={(e)=>setIcerik(e.target.value.toLocaleUpperCase())}
          value={icerik}// hep büyük harf olacaktır
          onKeyDown={handleKeyDown}
          />

      <div className="mt-3">
        {/*burası hep kücük harf diğeri ise her zamn büyük harf olacaktır */}
        <p>{icerik.toLocaleLowerCase()}</p>
      </div>
    </div>
  )
}

export default KeyboardClipboard
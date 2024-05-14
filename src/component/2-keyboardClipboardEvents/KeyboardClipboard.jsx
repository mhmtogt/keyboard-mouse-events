import { useState } from "react"
import React from 'react'

const KeyboardClipboard = () => {
  
  const  [icerik, setIcerik] = useState("")

  const handleKeyDown=(e)=>{
    console.log(e)
    if(e.keyCode>47 && e.keyCode<58){
      alert("cannot entered number")
      e.preventDefault()// girilen sayının default olarak bağlanması engellendi
    } }
    
    const handleCopy=(e)=>{
      alert("kopyalandı")
    }
  
    const handleCut=(e)=>{
      alert("kesmek yasak")
      e.preventDefault()// kesimeyi engellemek için kullandım 
    }

    const handlePast=(e)=>{
      e.target.style.fontFamily= "Curire New"
      e.target.style.fontSize= "1.2rem"
    }
  
  
  return (
    <div className="container" onCut={handleCut}>


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
        <p onCopy={handleCopy}  >{icerik.toLocaleLowerCase()}</p>
      </div>

      <div>
        <textarea onPaste={handlePast} className="form-control" name="textarea" id="area" cols="30" rows="10"></textarea>
      </div>
    </div>
  )
}

export default KeyboardClipboard
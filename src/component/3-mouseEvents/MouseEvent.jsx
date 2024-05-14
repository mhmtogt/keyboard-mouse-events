import React, { useState } from 'react'

const MouseEvent = () => {

  const [visible,setVisible] = useState(false)

  const [coordX, setCoordX] = useState()
  const [coordY, setCoordY] = useState()



  const handleMouseMove=(e)=>{
    // {/*MUTLAK KORDİNATLAR  */}
    // console.log("X:",e.pagex)
    // console.log("Y:",e.pageY)

    // {/*GÖRECELİ KORDİNATLAR  */}
    // console.log("RX:",e.nativeEvent.offsetX)
    // console.log("RY:",e.nativeEvent.offsetY)



    setCoordX(e.pagex)
    setCoordY(e.coordY)
    setCoordX(e.nativeEvent.offsetX)
    setCoordY(e.nativeEvent.offsetY)


  }



// const handleMouseEnter=(e)=>{
// alert("bu bir denemedir")
// }

// const handleMouseLeave=(e)=>{
  
// }




  return (
    <div onMouseMove={handleMouseMove} className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger"> MOUSE EVENTS</h2>

      <div id='todo-1' className="bg-success text-light w-50 p-4 my-4" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>
        todo item 1
      </div>
      {/* conditional rendering == duruma göre göstr yada gösterme */}
      {visible && <span>Açıklmama</span>}

       
      <div id='todo-2' className="bg-success text-light w-50 p-4 my-4">
        todo item 2
      </div>

       
      <div  id='todo-3' className="bg-success text-light w-50 p-4 my-4">
        todo item 3
      </div>

      <p>x:{coordX} and Y:{coordY}</p>
    </div>
  )
}

export default MouseEvent
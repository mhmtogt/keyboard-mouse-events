import React, { useState } from 'react'
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
 import { Container } from 'react-bootstrap';

const Forms0bject = () => {
   
   // bu object şekli çok fazla state olduğunda kullanımı yazımı zor olur bunun jiçin object kullanmak çok daha efectif olur
    const [data, setData] = useState({
      userName:"",
      email:"",
      password:"",
    })
    

   

    const {userName, password, email} = data


    const handleData =(e)=>{
     // console.log(e.target.id)
      setData({...data, [e.target.id]: e.target.value})// {key=(e.targer.id) id istediğim değer olarak verdiğim için burada kullanabilirz     value =(e.target.value)  } bu bir obje olduğu için süslü ile yapıp state kapağını açıp kısmi güncelleme yapbiliiz
    }

    //destructure
    const handleFormSubmit= (e)=>{
   //  console.log(e.target.value)

     // e.preventDefault() // bunu yaptınca içerik refresh edilmiyor içerik silinmiyor içeriği kaydetmiş oluyoruz
      alert(
        `
        userName:${userName},
        email:${email},
        password:${password}`
            )
            //ileride bir submit işlemi sonucunda verilerin nasıl post edilbileceğini göstermek adına eklenmiştir
        
    setData({ 
          userName:"",
          email:"",
          password:""})
            //? const res = axios.post("url",{metod:post userName,password,email})
     }


  return (
    <Container className='mt-4'>
       <Form onSubmit={handleFormSubmit}>
        <h1 className='text-danger'>FORMS</h1>
       <Form.Group className="mb-3" controlId="userName">
        <Form.Label> {userName && <span className='fw-bold'>Hello:{userName}</span>}</Form.Label>
        <Form.Control type="user" placeholder="Enter User Name" onChange={handleData} value={userName} id="userName" />
        </Form.Group>


      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>{email && <span className='fw-bold'>Email:{email}</span>}</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleData} value={email} id="email"/>   
      </Form.Group>



      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleData} value={password} id="password"/>
      </Form.Group>
     
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Forms0bject
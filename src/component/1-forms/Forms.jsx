import React, { useState } from 'react'
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
 import { Container } from 'react-bootstrap';

const Forms = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUserName =(e)=>{
      setUserName(e.target.value)
    }

    const handleEmail=(e)=>{
      setEmail(e.target.value)
    }

    const handleFormSubmit= (e)=>{
     console.log(e.target.value)

      e.preventDefault() // bunu yaptınca içerik refresh edilmiyor içerik silinmiyor içeriği kaydetmiş oluyoruz
      alert("")
     }


  return (
    <Container className='mt-4'>
       <Form onSubmit={handleFormSubmit}>
        <h1 className='text-danger'>FORMS</h1>
       <Form.Group className="mb-3" controlId="userName">
        <Form.Label> {userName && <span className='fw-bold'>Hello:{userName}</span>}</Form.Label>
        <Form.Control type="user" placeholder="Enter User Name" onChange={handleUserName} value={userName} />
        </Form.Group>


      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>{email && <span className='fw-bold'>Email:{email}</span>}</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} value={email}/>   
      </Form.Group>



      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
      </Form.Group>
     
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Forms
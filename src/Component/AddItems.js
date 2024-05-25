import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const AddItems = ({addItem}) => {
  const [ item, setItem ] = useState("")

  const handlechange = (event) => {
        setItem(event.target.value) 
}


  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ITEMS</Form.Label>
        <Form.Control 
        type="email" placeholder="Enter email"
        onChange={(event) => handlechange(event)} value={item} />
        <Form.Text className="text-muted">
          We are happy to add in our list 
        </Form.Text>
      </Form.Group>

     
      <Button variant="primary" type="submit"
      onClick={(e)=>{
        e.preventDefault() ;
        addItem(item)
        setItem('')

      }}>
        Add 
      </Button>
    </Form>
    </div>
  )
}

export default AddItems

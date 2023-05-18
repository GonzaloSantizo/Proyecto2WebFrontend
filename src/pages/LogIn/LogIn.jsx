import React from 'react'
import { useState } from 'react'
import { navigate } from '@store'
import { useStoreon } from 'storeon/react'

import { Notification } from '@components'
import { useApi } from '@hooks'
import { styles } from './LogIn.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';


const LogIn = () => {
  const { loading, data, handleRequest } = useApi()
  const {dispatch, user } = useStoreon('user')
  const [values, setValues] = useState(
    {
      email: '',
      password: ''
    }
  )
  const [showButton, setShowButton] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false)

  const respond = async() => {
    const response = await handleRequest('GET', `/users/validateUser/${values.email}&${values.password}`)
    return response
  }

  const handleChangeCorreo = (valor) => {
    const newEmail = valor.target.value
    setValues(valors => {
      return {...valors, email: newEmail}
    })
  };

  const handleChangeContraseña = (valor) => {
    const newPassword = valor.target.value
    setValues(valors => {
      return {...valors, password: newPassword}
    })
  }

  const handleClick = async() => {
    const usuario = {email: values.email, contra: values.password}
    const response = await respond()
    
    if (response == true){
      setShowButton(!showButton);
      setShowAnimation(!showAnimation)
   
    setTimeout(() => {
      dispatch('user/login', usuario)
      navigate('/paginaInfo')
    }, 2000);
     
      
    }
  }

  return (
    <div className={styles}>
      <h1>Log In</h1>
      <h2>Correo</h2>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Ingresar Correo" value={values.email} onChange={handleChangeCorreo} />
      </Form.Group>
<h2>Contraseña</h2>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Ingresar contraseña" value={values.password} onChange={handleChangeContraseña} />
      </Form.Group>
      </Form>
   
      <br />
      {
        data == true || data == null ?
          null :
          <Notification type="danger">
            {data}
          </Notification>
      }
      <br />
      { showAnimation
     &&     <Button variant="dark" disabled>
     <Spinner
       as="span"
       animation="border"
       size="sm"
       role="status"
       aria-hidden="true"
     >
     <span className="visually-hidden">Loading...</span>
     </Spinner>
   </Button>
     }
      {showButton && <button onClick={handleClick}>Ingresar
  
      </button>}

     
    </div>

    
    
  )
}

export default LogIn

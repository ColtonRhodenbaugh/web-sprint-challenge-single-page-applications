import React from "react";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, 
Switch,
Route,
Link } from "react-router-dom";

import Home from './Components/home'
import Form from './Components/Form'
import Confirmation from './Components/Confirmation'

import * as yup from 'yup'
import Schema from './Components/Validation/Schema'

const initialFormValues = {
  person: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  special: '',
}

const initialDisabled = true;

const initialFormErr = {
  person: '',
  size: '',
  special: '',
}

function App() {
  const[formErrors, setFormErrors] = useState(initialFormErr)
  const[formValues, setFormValues] = useState(initialFormValues)
  const[confirmation, setConfirmation] = useState(initialDisabled)
  const[disabled, setDisabled] = useState(initialDisabled)

  const setNewOrder = (newOrder) => {
    setConfirmation(newOrder)
    setFormValues(initialFormValues)
  }

  const validate = (name, value) => {
    yup.reach(Schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...setFormValues, [name]: value })
  }

  const formSubmit = (evt) => {
    const newOrder = {
      personName: formValues.person,
      pizzaSize: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      peppers: formValues.peppers
    };
    setNewOrder(newOrder)
  }

  return(
    <div className='container'>
      <nav className='navbar'>

        <h1 className='title'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <span> </span>
          <Link to='/pizza'>Order A ZZA!</Link>
      </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            change={handleChange}
            errors={formErrors}
            disabled='true'
            submit={formSubmit}
          />
        </Route>
        <Route path='/order/confirmation'>
          <Confirmation />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};



  
export default App;

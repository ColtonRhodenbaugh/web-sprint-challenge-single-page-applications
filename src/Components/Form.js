import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useHistory } from 'react-router-dom';



function Form(props) {
    const { change, submit, values, disabled, errors } = props;
    
    const history = useHistory()

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
        history.push('./order/confirmation')
    }
    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    return(

        <form id='pizza-form' className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build a Custom ZZA</h2>
                <button id='order-button' onSubmit={onSubmit}>submit</button>

                <div className='form-group inputs'>
                    <h4>Customer Name:</h4>

                    <label><p>{errors.customerName}</p>
                        <input
                            type='text'
                            id='name-input'
                            defaultValue={values.person}
                            onChange={onChange}
                            name='customerName'
                        />
                    </label>

                    <label><p>{errors.pizzaSize}</p>
                        <select
                            id='size-dropdown'
                            onChange={onChange}
                            defaultValue={values.size}
                            name='pizzaSize'
                            data-test-id='pizzaSize'
                        >
                            <option value='pizzaSelection'> Select ZZA Size </option>
                            <option value='extra-small'> Extra Small </option>
                            <option value='small'> Small </option>
                            <option value='medium'> Medium </option>
                            <option value='large'> Large </option>
                        </select>
                    </label>
                </div>

                <div className='form-group checkboxes'>
                    <h4>Add-ons</h4>

                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            defaultChecked={values.pepperoni}
                            onChange={onChange}
                            data-test-id='pepperoni'
                        />
                    </label>

                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            defaultChecked={values.sausage}
                            onChange={onChange}
                        />
                    </label>

                    <label>Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            defaultChecked={values.peppers}
                            onChange={onChange}
                        />
                    </label>

                    <label>Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            defaultChecked={values.mushrooms}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='form-group inputs'>
                    <label>Special Instructions
                        <input
                            id='special-text'
                            defaultValue={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>

                </div>
            </div>
        </form>
    )
}
export default Form;
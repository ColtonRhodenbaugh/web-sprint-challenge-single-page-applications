import * as yup from 'yup'

const formSchema = yup.object().shape({
    customerName: yup.string()
        .trim()
        .required('Customer name is required')
        .min(2, 'name must be at least 2 characters'),

    pizzaSize: yup.string()
        .trim()
        .required('Size of pizza is required.'),


    
})
export default formSchema;
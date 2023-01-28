import * as yup from 'yup'

const formSchema = yup.object().shape({
    customerName: yup.string()
        .trim()
        .required("Customer name is required")
        .min(2, "name must be at least 2 characters"),

    pizzaSize: yup.string()
        .trim()
        .required("Size of pizza is required."),

    pepperoni: yup
        .boolean()
        .notRequired("Add-ons are not required."),

    sausage: yup
        .boolean()
        .notRequired("Add-ons are not required."),
    
    peppers: yup
        .boolean()
        .notRequired("Add-ons are not required."),

    mushrooms: yup
        .boolean()
        .notRequired("Add-ons are not required."),

    special: yup
        .string()
        .trim()
        .notRequired("Special Instructions are not required.")


    
})
export default formSchema;
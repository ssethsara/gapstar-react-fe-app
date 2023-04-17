import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    email: yup.string().email().required().label('Email'),
    title: yup.string().required().label('Missing title'),
    description: yup.string().required().label('Missing description'),
    price: yup.number().typeError('Price must be a number').label('Price').required(),
    amount: yup.number().typeError('Amount must be a number').required().label('Amount'),
    supplier: yup.string().required().label('Supplier'),
});

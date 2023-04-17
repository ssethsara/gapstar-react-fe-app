import React from 'react';
import { FormProps } from '../interfaces/form';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Input, Textarea, Button, createStyles } from '@mantine/core';
import { FormLabel } from '../../view/components/Forms/FormLabel';
import { validationSchema } from '../validations/FormValidations';

const useStyles = createStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export interface AddTicketsFormValues {
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: '',
    amount: 1,
    supplier: '',
};

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {
    const { control, formState, handleSubmit } = useForm<AddTicketsFormValues>({
        resolver: yupResolver(validationSchema),
        defaultValues,
    });
    const { classes } = useStyles();

    return (
        <Grid>
            <Grid.Col span={12}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Email</FormLabel>
                                <Input.Wrapper
                                    id="email"
                                    withAsterisk
                                    error={formState.errors?.email?.message}
                                >
                                    <Input onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Title</FormLabel>
                                <Input.Wrapper
                                    id="title"
                                    withAsterisk
                                    error={formState.errors?.title?.message}
                                >
                                    <Input onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="description"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Description</FormLabel>
                                <Input.Wrapper
                                    id="description"
                                    withAsterisk
                                    error={formState.errors?.description?.message}
                                >
                                    <Textarea onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Price</FormLabel>
                                <Input.Wrapper
                                    id="price"
                                    withAsterisk
                                    error={formState.errors?.price?.message}
                                >
                                    <Input
                                        type="number"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                    />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Amount of tickets</FormLabel>
                                <Input.Wrapper
                                    id="amount"
                                    withAsterisk
                                    error={formState.errors?.amount?.message}
                                >
                                    <Input
                                        type="number"
                                        onChange={onChange}
                                        value={value}
                                        name={name}
                                    />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="supplier"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Supplier</FormLabel>
                                <Input.Wrapper
                                    id="supplier"
                                    withAsterisk
                                    error={formState.errors?.supplier?.message}
                                >
                                    <Input onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12} className={classes.buttonContainer}>
                <Button onClick={handleSubmit(onSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};

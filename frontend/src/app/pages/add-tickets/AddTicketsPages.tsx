import React, { useState } from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { AddTicketsForm, AddTicketsFormValues } from '../../forms/AddTicketsForm';
import { colors } from '../../constants/colors';
import ticketServices from '../../../service/ticket-service';
import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 500,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const AddTicketsPage = () => {
    const { classes } = useStyles();
    const [successNotification, setSuccessNotification] = useState<boolean>(false);
    const [errorNotification, setErrorNotification] = useState<boolean>(false);

    const onFormSubmit = async (values: AddTicketsFormValues) => {
        setSuccessNotification(false);
        setErrorNotification(false);
        try {
            const result = await ticketServices.saveTicketAsync(values);
            if (result.status === 200) {
                setSuccessNotification(true);
            } else {
                setErrorNotification(true);
            }
        } catch (e) {
            console.error(e);
            setErrorNotification(true);
        }
    };

    return (
        <PageLayout>
            {successNotification ? (
                <Notification
                    icon={<IconCheck size="1.1rem" />}
                    color="teal"
                    title="Teal notification"
                    onClose={() => setSuccessNotification(false)}
                >
                    Ticket Added
                </Notification>
            ) : (
                ''
            )}
            {errorNotification ? (
                <Notification
                    icon={<IconX size="1.1rem" />}
                    color="red"
                    onClose={() => setErrorNotification(false)}
                >
                    Something went wrong!
                </Notification>
            ) : (
                ''
            )}
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} />
                </Paper>
            </Center>
        </PageLayout>
    );
};

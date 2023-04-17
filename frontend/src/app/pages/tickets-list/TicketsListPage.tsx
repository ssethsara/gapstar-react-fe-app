import React, { useEffect, useState } from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { colors } from '../../constants/colors';
import { TicketsListTable, TicketsListTableItemVM } from '../../tables/TicketsListTable';
import ticketServices from '../../../service/ticket-service';
import { addTickets } from '../../store/ticketsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const TicketsListPage = () => {
    const ticketDetails = useSelector((state: RootState) => state.ticketList);
    const dispatch = useDispatch();
    const { classes } = useStyles();

    useEffect(() => {
        const getData = async () => {
            try {
                const ticketsData = await ticketServices.getTicketsAsync();
                console.log(ticketsData?.data?.data);
                dispatch(addTickets(ticketsData?.data?.data));
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, []);

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Tickets list</h3>
                    {ticketDetails.length > 0 ? <TicketsListTable items={ticketDetails} /> : ''}
                </Paper>
            </Center>
        </PageLayout>
    );
};

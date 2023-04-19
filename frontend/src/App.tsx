import React from 'react';
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import { colors } from './app/constants/colors';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { PageLayout } from './view/components/PageLayout/PageLayout';
import { TicketsListPage } from './app/pages/tickets-list/TicketsListPage';
import { AddTicketsPage } from './app/pages/add-tickets/AddTicketsPages';
import { Route, Routes } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    bodyBackground: {
        backgroundColor: colors.lightBackground,
        minHeight: '100vh',
    },
}));

function App() {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <Routes>
                    <Route path="/" element={<AddTicketsPage />} />
                    <Route path="/list" element={<TicketsListPage />} />
                </Routes>
            </MantineProvider>
        </Provider>
    );
}

export default App;

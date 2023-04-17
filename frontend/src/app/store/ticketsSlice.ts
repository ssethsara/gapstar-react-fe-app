import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TicketsListTableItemVM } from '../tables/TicketsListTable';

const initialState = [] as TicketsListTableItemVM[];

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTickets: (state, action: PayloadAction<TicketsListTableItemVM>) => {
            Object.assign(state, action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;

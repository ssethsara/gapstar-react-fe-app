// local imports
import { apiConfig } from '../app/constants/apiConfig';
import { AddTicketsFormValues } from '../app/forms/AddTicketsForm';
import HttpService from './http-service';

// consts
const ADD_TICKET_URL = `${apiConfig.baseUrl}/tickets`;
const GET_TICKETS_URL = `${apiConfig.baseUrl}/tickets`;

const saveTicketAsync = async (data: AddTicketsFormValues) => {
    const ticketData = { ticket: data };
    return HttpService.postAsync(ADD_TICKET_URL, ticketData);
};

const getTicketsAsync = async () => {
    return HttpService.getAsync(GET_TICKETS_URL);
};

const ticketServices = { saveTicketAsync, getTicketsAsync };

export default ticketServices;

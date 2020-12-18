import {google} from 'googleapis'
import {getAuthClient} from './index'

// Создает клиента для работы
// с API Google Sheets

export const getApiClient = async () => {
    const authClient = await getAuthClient();
    const { spreadsheets: apiClient } = google.sheets( {
        version : 'v4',
        auth    : authClient,
    } );
 
    return apiClient;
 };
// Используется для получения данных из таблицы

// apiClient берется из getApiClient
// range это название листа из которого вы хотите получить данные

export const getValuesData = async ( apiClient:any, range:string ) => {
    const { data } = await apiClient.get( {
        // spreadsheetId находится в URL таблицы
        spreadsheetId   : '1T8Evc47dJEpMxWWVPqe1_-jGrxegoM276iRs_SWgFNg',
        ranges          : range,
        fields          : 'sheets',
        includeGridData : true,
    } );
 
    return data.sheets;
 };
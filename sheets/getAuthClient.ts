import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { google } from 'googleapis';
const readFile = promisify( fs.readFile );
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const CREDENTIALS_PATH = path.join( __dirname, "..", 'credentials.json' );

/**
* Создает клиента для аутентификации с помощью JWT
* в сервисах Google.
* @async
* @returns {Promise<Object>}  google.auth.JWT instance
*/
export const getAuthClient = async () => {
   const content = await readFile( CREDENTIALS_PATH )
       .catch( (error:string) => console.log( 'Error loading client secret file:', error ) );

   const { client_email, private_key } = JSON.parse( `${content}` );

   const client = new google.auth.JWT(
       client_email,
       undefined,
       private_key,
       SCOPES,
       undefined,
   );

   return client;
};
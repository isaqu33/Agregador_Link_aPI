import { applicationDefault, initializeApp, App } from 'firebase-admin/app'


export const appFirebase: App = initializeApp({
    credential: applicationDefault(),
    //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});
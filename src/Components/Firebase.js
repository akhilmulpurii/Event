import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBwiKhD31VwxSRr7dX6OdyjdwIqFx7ZmRM",
    authDomain: "event-registration-3430e.firebaseapp.com",
    databaseURL: "https://event-registration-3430e.firebaseio.com",
    projectId: "event-registration-3430e",
    storageBucket: "event-registration-3430e.appspot.com",
    messagingSenderId: "28483732974"
};

const fire = firebase.initializeApp(config);
export default fire;
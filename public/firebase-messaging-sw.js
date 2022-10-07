// Scripts for firebase and firebase messaging
importScripts(
    'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: 'AIzaSyCWxiYcSGXRYpVq0eiota09xdGuH93S8Wk',
    authDomain: 'fir-notification-7d91e.firebaseapp.com',
    projectId: 'fir-notification-7d91e',
    storageBucket: 'fir-notification-7d91e.appspot.com',
    messagingSenderId: '203283930674',
    appId: '1:203283930674:web:e51aac5af064cc2f4ca62b',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.hideNotification(notificationTitle, notificationOptions);
});

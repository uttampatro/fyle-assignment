import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCWxiYcSGXRYpVq0eiota09xdGuH93S8Wk",
  authDomain: "fir-notification-7d91e.firebaseapp.com",
  projectId: "fir-notification-7d91e",
  storageBucket: "fir-notification-7d91e.appspot.com",
  messagingSenderId: "203283930674",
  appId: "1:203283930674:web:e51aac5af064cc2f4ca62b",
  measurementId: "G-YQENZBBLSK",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BHHzJdFPuc3Q-fPux1VY5AzTDgMJzWy2wJITEI4xC3q_8Mo9UnDGMQ3OSrm7ZistXslHg5BT2AUJhkzqJovZfoA",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

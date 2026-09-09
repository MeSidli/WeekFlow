importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD7NDJ7zvQMypDvBkvujdijx_W2aAirg",
  authDomain: "weekflow-bb36b.firebaseapp.com",
  projectId: "weekflow-bb36b",
  storageBucket: "weekflow-bb36b.firebasestorage.app",
  messagingSenderId: "102257549219",
  appId: "1:102257549219:web:ed0c5b47da0c6d7146c416"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Weekflow";

  const options = {
    body: payload.notification?.body || "You have an upcoming activity."
  };

  self.registration.showNotification(title, options);
});

const firebaseConfig = {
  apiKey: "AIzaSyCNZZ6Z-_DLpWhSfc2Q3Chb10OpTCPCTGQ",
  authDomain: "hyastream.firebaseapp.com",
  projectId: "hyastream",
  storageBucket: "hyastream.firebasestorage.app",
  messagingSenderId: "8209901966",
  appId: "1:8209901966:web:1622b555c614e13b2e5cdf"
};

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
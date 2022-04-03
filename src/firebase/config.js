
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgBdE-8dMXCdnYp2AIqF39VXgPuz_GGiw",
  authDomain: "desafios-f3532.firebaseapp.com",
  projectId: "desafios-f3532",
  storageBucket: "desafios-f3532.appspot.com",
  messagingSenderId: "573132884624",
  appId: "1:573132884624:web:24c4658104535608d7a615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFSApp = () => {
    return app
}
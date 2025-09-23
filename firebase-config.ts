// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASZ7_kdyHLhienUjcZtQ5AIKRImMC4CB0",
  authDomain: "ticketbrain-landing-page.firebaseapp.com",
  projectId: "ticketbrain-landing-page",
  storageBucket: "ticketbrain-landing-page.firebasestorage.app",
  messagingSenderId: "89881123469",
  appId: "1:89881123469:web:db1ded785123a3429b20c4",
  measurementId: "G-5HP7HKP0YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the analytics instance so you can use it in other components
export { analytics, logEvent };
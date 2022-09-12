import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArPMHCJJ2oNvVjzHa2SdeTSHN_S0VBr5M",
    authDomain: "invoice-martinreinok-com.firebaseapp.com",
    projectId: "invoice-martinreinok-com",
    storageBucket: "invoice-martinreinok-com.appspot.com",
    messagingSenderId: "892402904173",
    appId: "1:892402904173:web:b7938cd64fd79f78f5a364"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app

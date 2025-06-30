import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDYPooTV0ZkWXut2d0Z7VRSZN-OKCYtY34',
    authDomain: 'netflixgpt-81bed.firebaseapp.com',
    projectId: 'netflixgpt-81bed',
    storageBucket: 'netflixgpt-81bed.firebasestorage.app',
    messagingSenderId: '939555090388',
    appId: '1:939555090388:web:127182ddcd6f8785a7f041',
    measurementId: 'G-0E729SWD14',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)
export const auth = getAuth()

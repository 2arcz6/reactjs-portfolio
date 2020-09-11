import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8uN-zt2TG337LLkupv4SF-UJtAKIxiUQ",
    authDomain: "rjsdemy.firebaseapp.com",
    databaseURL: "https://rjsdemy.firebaseio.com",
    projectId: "rjsdemy",
    storageBucket: "rjsdemy.appspot.com",
    messagingSenderId: "250089787728",
    appId: "1:250089787728:web:ef41ced4f934fb07c81c55",
    measurementId: "G-W16G0FEE38"
  }
  
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
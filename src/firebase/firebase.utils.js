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

//For Snapshot 
//documentRef.get()
//collectionRef.get()

//For CRUD - document object
//documentRef.set()
//documentRef.get()
//documentRef.update()
//documentRef.delete()

//Add a collection
//collectionRef.add({//val:prop})

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){  
            console.log('error creating user', error.message)
        }
    }

    return userRef

}

  
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
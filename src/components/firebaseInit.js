import firebase from 'firebase'
import firestore from 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp
(firebaseConfig)
export default firebaseApp.firestore()

// firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { doc,  getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWXJUL9vXubuwTynne5NaEI3FZPHs5PD8",
  authDomain: "shael-4047b.firebaseapp.com",
  projectId: "shael-4047b",
  storageBucket: "shael-4047b.firebasestorage.app",
  messagingSenderId: "415690147413",
  appId: "1:415690147413:web:76c28d07cacafd66c836dc",
  measurementId: "G-D5ZBVF0DKD"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);

export async function addData(data:any){
  localStorage.setItem('visitor',data.id);
  try {
      const docRef = await doc(db, 'pays', data.id!);
      await setDoc(docRef,{createdDate:new Date().toISOString(),...data}, {merge:true})

      console.log("Document written with ID: ", docRef.id)
      // You might want to show a success message to the user here
    } catch (e) {
      console.error("Error adding document: ", e)
      // You might want to show an error message to the user here
    }
}
export const handlePay=async (paymentInfo:any,setPaymentInfo:any)=>{
  try {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(docRef, { ...paymentInfo, status: 'pending' }, { merge: true });
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
}
export { db,database};


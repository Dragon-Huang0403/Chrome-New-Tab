/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  query,
  where,
  collection,
  getDocs,
  limit,
} from 'firebase/firestore';
import { v4 } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_APIKEY_AUTHDOMAIN,
  projectId: process.env.REACT_APP_APIKEY_PROJECTID,
  storageBucket: process.env.REACT_APP_APIKEY_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_APIKEY_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APIKEY_APPID,
  measurementId: process.env.REACT_APP_APIKEY_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dictionaryTableName = 'dictionary';

export async function getCard(quantity: number, tag: string[]) {
  const q = query(
    collection(db, dictionaryTableName),
    limit(quantity),
    where('id', '>=', v4()),
    where('tags', 'array-contains-any', tag),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());
  return data;
}
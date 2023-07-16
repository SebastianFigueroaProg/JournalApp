import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase";


export const loadNotes = async( uid= '' ) =>{
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectioRef = collection( FirebaseDB, `${ uid }/journal/notes`);
    const docs = await getDocs(collectioRef);

    const notes = [];
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    })

    return notes;

}
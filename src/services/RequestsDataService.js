import {db} from '../firebase-config';
import {
    collection,
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    doc
} from 'firebase/firestore';

// database reference based table name
const RequestsDataCollectionRef = collection(db,'requests');

// CRUD operation 
class RequestsDataService {

    // add new element
    addRequestData = (newRequest) =>  {
         return addDoc(RequestsDataCollectionRef, newRequest);
    }

    // update existing element
    updateRequestsData = (id,newRequest) =>  {
        const RequestDataDoc = doc(db, 'requests',id);
        return updateDoc(RequestDataDoc, newRequest);
    }

    // delete existing element
    deleteRequestsData = (id) =>  {
        const RequestDataDoc = doc(db, 'requests',id);
        return deleteDoc(RequestDataDoc);
    }

    // get all elements
    getAllRequestsData = () =>  {
        return getDocs(RequestsDataCollectionRef);
    }

    // get particular element
    getRequestsData = (id) =>  {
        const RequestDataDoc = doc(db, 'requests',id);
        return getDoc(RequestDataDoc);
    }

}

export default new RequestsDataService();


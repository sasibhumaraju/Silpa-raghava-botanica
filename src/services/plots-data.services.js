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
const plotsDataCollectionRef = collection(db,'plots');

// CRUD operation 
class PlotsDataService {

    // add new element
    addPlotsData = (newPlot) =>  {
         return addDoc(plotsDataCollectionRef, newPlot);
    }

    // update existing element
    updatePlotsData = (id,newPlot) =>  {
        const plotDataDoc = doc(db, 'plots',id);
        return updateDoc(plotDataDoc, newPlot);
    }

    // delete existing element
    deletePlotsData = (id) =>  {
        const plotDataDoc = doc(db, 'plots',id);
        return deleteDoc(plotDataDoc);
    }

    // get all elements
    getAllPlotsData = () =>  {
        return getDocs(plotsDataCollectionRef);
    }

    // get particular element
    getPlotsData = (id) =>  {
        const plotDataDoc = doc(db, 'plots',id);
        return getDoc(plotDataDoc);
    }

}

export default new PlotsDataService();


import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postEntries (action) {
    try {
        yield axios.post(`/entries/post-calculations`, action.payload);
        
    }
    catch (error) {
        console.log(`Error posting calculations! Sorry! Try again later.`)
        alert(`Error. Check postEntries Saga.`, error);
    }
}

function* getEntries() {
    try{
        const response = yield axios.get(`/entries/get-calculations/`);
        const action = {type: 'SET_ENTRIES', payload: response.data};
        yield put(action);
    }catch (error) {
        alert(`Error getting calculations! Sorry! Try again later.`, error);
        console.log(`Error. Check getEntries Saga `)
    }
}

function* deleteEntry(action) {
    try {
    console.log(`HIT deleteEntries`);
    console.log(`action.payload is: `, action.payload);
    const id = action.payload
    
    yield axios.delete(`/entries/${id}`, action.payload);
    yield put({ type: 'GET_ENTRIES', payload: action.payload})
    }
    catch (error) {
      console.log(`Couldn't delete the entry`);
    }
}

function* entriesSaga() {
    yield takeLatest('POST_ENTRY', postEntries);
    yield takeLatest('GET_ENTRIES', getEntries);
    yield takeLatest('DELETE_ENTRY', deleteEntry);
  }
  
  export default entriesSaga;
  


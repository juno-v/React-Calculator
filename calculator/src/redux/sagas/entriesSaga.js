import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postEntries (action) {
    try {
        yield axios.post(`/entries/get-calculations`, action.payload);
        
    }
    catch (error) {
        alert(`Error posting calculations! Try again later.`)
        console.log(`error. check postEntries Saga.`, error);
    }
}

function* entriesSaga() {
    yield takeLatest('POST_ENTRY', postEntries);
  }
  
  export default entriesSaga;
  


import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
//import "babel-polyfill"
import {fetchDataSuccess} from "./actions";

function* fetchData(action) {
    try {
        const url='http://localhost:3000/';
        const response=(yield call(fetch,url));

        if(response.ok){
            let json=yield response.json();
            yield put(fetchDataSuccess(json));
        }
    }catch(e) {

    }finally {

    }
}

export default function* sagas() {
    yield takeEvery('fetchData',fetchData);
}
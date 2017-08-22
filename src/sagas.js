import { all, fork } from 'redux-saga/effects';
import sagas from './container/sagas'

export default function* rootSaga() {
    yield all(
        [
            fork(sagas)
        ]
    )
}
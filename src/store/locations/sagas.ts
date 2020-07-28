import axios from 'axios';

import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { LocationsActionTypes } from './types';
import { fetchError, fetchRequest, fetchSuccess } from './actions';

function* handleFetch(action:  ReturnType<typeof fetchRequest>)  {
  try {
    // To call async functions, use redux-saga's `call()`.
    const resource = `https://www.metaweather.com/api/location/search/?query=`;
    const res = yield all(action.payload.map(location => call(axios.get, `${resource}${location}`)));

    yield put(fetchSuccess(res.map((r: any) => r.data[0])));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError('An unknown error occured.'));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(LocationsActionTypes.FETCH_REQUEST, handleFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* locationsSaga() {
  yield all([fork(watchFetchRequest)]);
}

export { locationsSaga };

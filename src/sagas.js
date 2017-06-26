import { sampleWatcher } from './containers/Foo/saga';

export default function* rootSaga() {
  yield [
    sampleWatcher()
  ];
}

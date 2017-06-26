import { createSelector } from 'reselect';

const selectFooDomain = () => state => state.get('fooDomain');

const selectSomething = () => createSelector(
  selectFooDomain(),
  fooState => fooState.get('something')
);

const selectIsLoading = () => createSelector(
  selectFooDomain(),
  fooState => fooState.get('isLoading')
);

export {
  selectSomething,
  selectIsLoading
};

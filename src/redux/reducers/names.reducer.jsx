import { TYPES } from '../actions/names.actions';
const { List, Map } = require('immutable');

const INITIAL_STATE = Map({
  namesMale: List(),
  namesFemale: List(),
});

const namesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_NAMES_MALE: {
      const newNamesMale = action.namesMale;
      const newState = state.set('namesMale', newNamesMale);
      return newState;
    }
    case TYPES.SET_NAMES_FEMALE: {
      const newNamesFemale = action.namesFemale;
      const newState = state.set('namesFemale', newNamesFemale);
      return newState;
    }
    default:
      return state;
  }
};

export default namesReducer;

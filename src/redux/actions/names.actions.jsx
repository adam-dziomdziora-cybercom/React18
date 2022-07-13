export const TYPES = {
  SET_NAMES_MALE: 'SET_NAMES_MALE',
  SET_NAMES_FEMALE: 'SET_NAMES_FEMALE',
};

export function setNamesMale(namesMale) {
  return {
    type: TYPES.SET_NAMES_MALE,
    namesMale,
  };
}

export function setNamesFemale(namesFemale) {
  return {
    type: TYPES.SET_NAMES_FEMALE,
    namesFemale,
  };
}

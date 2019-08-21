import {AsyncStorage} from 'react-native';

export const createFave = async faveId => {
  try {
    return AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, faved_on: new Date()}),
    );
  } catch (error) {
    return false;
  }
};

export const deleteFaves = faveId => {
  return AsyncStorage.removeItem(`${faveId}`);
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (error) {
    return error;
  }
};

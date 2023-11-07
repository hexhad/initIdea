import { MMKV } from "react-native-mmkv";

const USER_DIRECTORY = 'initIdea';

export const storage = new MMKV()

export const mmkvStorage = {
  setItem: (key:string, value :any) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key:any) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key:any) => {
    storage.delete(key);
    return Promise.resolve();
  },
};
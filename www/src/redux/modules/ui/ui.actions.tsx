import { SET_LOADER } from './ui.types';
import { ActionToReducer } from '@lib/types/store.types';

export const setLoader = (value: boolean): ActionToReducer<boolean> => ({
    type: SET_LOADER,
    payload: value,
})
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface AppState {
    counter: {
        value: number;
    }
}

export const setupStore = () =>
    configureStore<AppState>({
        reducer: {
            counter: counterReducer
        }
    });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

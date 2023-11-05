import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getValue = (state:RootState) => state.dummy.value

export const processedValue = createSelector(
    (state: RootState) => state.dummy,
    ({loading,value}) => {
        return loading ? 'Loading' : value + 100
    }
)
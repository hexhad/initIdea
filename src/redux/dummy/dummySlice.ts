import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type DummyState = {
  value: number,
  loading:boolean,
}

const initialState : DummyState = {
  value: 0,
  loading: false
}

const dummySlice = createSlice({
  name:'dummy',
  initialState,
  reducers:{
    increment: (state) => {
      state.value += 1;
    },
    incrementByValue: (state,action:PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(dummyAsync.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(dummyAsync.fulfilled,(state,action:PayloadAction<boolean>)=>{
      state.loading = action.payload;
    })
    builder.addCase(dummyAsync.rejected,(state)=>{
      console.log('FAILED');
      state.loading = false;
    })
  }
})

export const dummyAsync = createAsyncThunk(
  'dummy/asyncDummy',
  async (value:boolean,{getState,dispatch}) => {
    await new Promise(resolve=>setTimeout(resolve,1000));
    dispatch(incrementByValue(20));
    return value;
  }
)

export default dummySlice.reducer;
export const {increment,decrement,incrementByValue} = dummySlice.actions;
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { contactType } from "../types";

const initialState: contactType[] = [];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<contactType>) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      state = state.filter((user: contactType) => user.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});

export const contactAction = contactSlice.actions;
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;

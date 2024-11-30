import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import productReducer from "@/app/slices/productSlice";
import userReducer from "@/app/slices/userSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

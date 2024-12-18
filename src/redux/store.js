import { configureStore } from "@reduxjs/toolkit";
import news from "./newsSlice";

const store = configureStore({
  reducer: news,
});

export default store;

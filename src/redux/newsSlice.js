import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    savedNews: [],
  },
  reducers: {
    saveNews: (state, action) => {
      state.savedNews.push(action.payload);
    },
    unSaveNews: (state, action) => {
      const index = state.savedNews.findIndex(
        (news) => news.url === action.payload.url
      );
      if (index !== -1) {
        state.savedNews.splice(index, 1);
      }
    },
  },
});

export const { saveNews, unSaveNews } = newsSlice.actions;

export default newsSlice.reducer;

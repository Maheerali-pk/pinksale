import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "dark" | "light";
type SidebarState = boolean;
interface GlobalState {
   theme: Theme;
   sidebarState: SidebarState;
}

const initialState: GlobalState = { theme: "light", sidebarState: true };
export const globalSlice = createSlice({
   name: "global",
   initialState,
   reducers: {
      setTheme: (state, action: PayloadAction<Theme>) => {
         state.theme = action.payload;
      },
      setSidebarState: (state, action: PayloadAction<SidebarState>) => {
         state.sidebarState = action.payload;
      },
   },
});
export const { setTheme, setSidebarState } = globalSlice.actions;

export const store = configureStore({ reducer: { global: globalSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

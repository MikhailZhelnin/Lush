import {configureStore} from "@reduxjs/toolkit";
import {savedItemsReducer} from "./savedItems/savedItems.slice";
import {createWrapper} from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: {
      savedItems: savedItemsReducer
    },
  })
}

// export const store = configureStore({
//   reducer: {
//     savedItems: savedItemsReducer
//   },
// })

export const store = makeStore()

export type TypeRootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);
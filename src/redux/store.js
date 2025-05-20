import { configureStore } from "@reduxjs/toolkit"
import api from "./api"
import authReducer from "./slices/authSlice"
import vendorReducer from "./slices/vendorSlice"
import categoryReducer from "./slices/categorySlice"
import foodReducer from "./slices/foodSlice"
import orderReducer from "./slices/orderSlice"
import driverReducer from "./slices/driverSlice"
import userReducer from "./slices/userSlice"
import couponReducer from "./slices/couponSlice"
import zoneReducer from "./slices/zoneSlice"
import settingReducer from "./slices/settingSlice"
import dashboardReducer from "./slices/dashboardSlice"
import bannerReducer from "./slices/bannerSlice"
import roleReducer from "./slices/roleSlice"
import giftCardReducer from "./slices/giftCardSlice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    vendor: vendorReducer,
    category: categoryReducer,
    food: foodReducer,
    order: orderReducer,
    driver: driverReducer,
    user: userReducer,
    coupon: couponReducer,
    zone: zoneReducer,
    setting: settingReducer,
    dashboard: dashboardReducer,
    banner: bannerReducer,
    role: roleReducer,
    // giftCards: giftCardReducer,
    giftCard: giftCardReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
})

export default store

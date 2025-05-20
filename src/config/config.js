// Environment variables in Vite use the VITE_ prefix
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1"
export const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || "http://localhost:5000/storage"
export const APP_NAME = import.meta.env.VITE_APP_NAME || "Food Delivery Admin"

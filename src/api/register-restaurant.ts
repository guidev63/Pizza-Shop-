import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restauranName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restauranName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    restauranName,
    managerName,
    email,
    phone,
  })
}
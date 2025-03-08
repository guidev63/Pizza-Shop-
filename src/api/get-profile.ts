import { api } from "@/lib/axios";

interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updateAt: Date | null
}

export async function getProfile() {
  const response = await api.get('/me')


  return response.data
}
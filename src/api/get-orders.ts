import { api } from "@/lib/axios";

export interface GetOrdersResponse {
  orders: {
    ordersId: string
    createdAt: Date 
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string

  }[]
  meta:{
    pageIndex: number
    perPage: number
    totalCount: number

  }
}
export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })


  return response.data
}
import { api } from "@/lib/axios";
export interface GetOrdersQuery{
  pageIndex?: number | null 
}
export interface GetOrdersResponse {
  orders: {
    ordersId: string
    createdAt: string 
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string

  }[]
  meta:{
    pageIndex: number
    perPage: number
    totalCount: number

  }
}
export async function getOrders({pageIndex}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })


  return response.data
}
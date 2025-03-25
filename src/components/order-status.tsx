type  OderStatus = 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}
const orderStatusMap:Record<OrderStatusProps,string>  = {
pending:'Pendente',
canceled:'Canceledo',
delivered:'Entregue',
processing:'Em preparo',
}
export function OrderStatus(){
   return (
    <div></div>
   )
}

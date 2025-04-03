import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

 const  ordersFiltersSchema = z.object({
  orderId:z.string().optional(),
  customerName:z.string().optional(),
  status:z.string().optional(),
 })
 type OrdersFiltersSchema = z.infer<typeof ordersFiltersSchema>
export function OrderTableFilters() {
  const [searchParams, setsearchParams] = useSearchParams()

   const orderId = searchParams.get('orderId')
   const customerName = searchParams.get('orderId')
   const status = searchParams.get('orderId')



  const {register,handleSubmit,control} = useForm<OrdersFiltersSchema>({
    resolver:zodResolver(ordersFiltersSchema),
    defaultValues:{
      orderId:orderId ?? '',
      customerName:customerName ?? '',
      status:status ?? 'all',
    },
  })
   function handleFilter({orderId,customerName,status}:OrdersFiltersSchema){
        setsearchParams(state =>{
           if(orderId){
            state.set('orderId', orderId)
           }else {
            state.delete('orderId')
           }
        })
   }

  return (
    <form onSubmit={handleSubmit(handleFilter)}  className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" {...register('orderId')}/>
      <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" {...register('customerName')} />
      <Controller
      name="status"
      control={control}
      render={({fild:{name,onChange, value,disabled}}) =>{
        return(
 
          <Select defaultValue="all"
           name={name}
           onValueChange={onChange}
            value={value} 
            disabled={disabled}>
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">todos</SelectItem  >
            <SelectItem value="peding">Pendente</SelectItem  >
            <SelectItem value="canceled">Cancelado</SelectItem  >
            <SelectItem value="processing">Em preparo</SelectItem  >
            <SelectItem value="delivering">Em Entrega </SelectItem  >
            <SelectItem value="delivered"> Entregue </SelectItem  >
          </SelectContent>
        </Select>

        )
      }} 
      />
      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filtrar Resultados
      </Button>
      <Button type="button" variant="outline" size="xs">
        <X className="h-4 w-4 mr-2" />
        Remover Filtros
      </Button>
    </form>
  )
}
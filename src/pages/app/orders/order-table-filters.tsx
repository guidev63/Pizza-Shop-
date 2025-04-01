import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

 const  ordersFiltersSchema = z.object({
  orderId:z.string().optional(),
  customerName:z.string().optional(),
  status:z.string().optional(),
 })
 type OrdersFiltersSchema = z.infer<typeof ordersFiltersSchema>
export function OrderTableFilters() {
  const {register,handleSubmit,} = useForm<OrdersFiltersSchema>({
    resolver:zodResolver(ordersFiltersSchema),
  })
   function handleFilter(data:OrdersFiltersSchema){

   }

  return (
    <form onSubmit={handleSubmit(handleFilter)}  className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" {...register('orderId')}/>
      <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" {...register('customerName')} />
      <Select defaultValue="all">
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
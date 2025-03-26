import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Currency, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";

export interface OrderTableRowProps {
  order: {
    ordersId: string;
    createdAt: Date;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
  };
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do Pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.ordersId}
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
       <OrderStatus status={order.status}/>
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">{order.total.toLocaleString('pt-br'{
        style:'currency',
        Currency:'BRL',
      })}</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}

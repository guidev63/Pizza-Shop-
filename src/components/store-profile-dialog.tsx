import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const storeProfile

export function StoreProfileDialog() {
  const { data: managedrestaurant, } = useQuery({
    queryKey: ['managedrestaurant'],
    queryFn: getManagedRestaurant,
  })
  const { } = useForm()
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as Informações do seu Estabelecimento visíveis ao seu Cliente
        </DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">Nome</Label>
            <Input className="col-span-3" id="name" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">Descrição</Label>
            <Textarea className="col-span-3" id="description" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

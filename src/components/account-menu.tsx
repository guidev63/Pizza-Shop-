import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";
export interface AccountMenuProps { }
export function AccountMenu() {
   const natigate = useNavigate

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
  const { data: managedrestaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
    queryKey: ['managedrestaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,

  })
  const {mutateAsync:signOutFn,isPending: isSignigOut } = useMutation({
    mutationFn: signOut,
    onSuccess:() =>{
      natigate('/sign-in',{replace: tue})
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className=" flex items-center gap-2 select-none"
          >
            {isLoadingManagedRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : managedrestaurant?.name}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger><a href=""></a>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex  flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.6">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />

              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="w-4 h-4 mr-2" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem asChild className="text-rose-500 dark:text-red-400" disabled={isSignigOut}>
            <button className="w-full" onClick={() =>signOutFn ()}>
            <LogOut className="w-4 h-4 mr-2" />
            <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  );
}

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { registerRestaurant } from "@/api/register-restaurant";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  Phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

const {mutateAsync:registerRestaurantFn} = useMutation({
  mutationFn:registerRestaurant
})


  async function handleSignUp(data: SignUpForm) {
    console.log(data);
    try {
     await registerRestaurantFn({
      restauranName:data.restaurantName,
      managerName:data.managerName,
       email:data.email,
      phone:data.Phone,
     })
      toast.success("Restaurante Cadastrado com Sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate(`/sign-in?email=${data.email}`), 
        },
        duration: 4000, 
        position: "bottom-right",
      });
    } catch {
      
      toast.error("Erro ao Cadastrar Restaurante.");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <Toaster richColors position="bottom-right" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-4">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar Conta grátis</h1>
            <p className="text-sm text-muted-foreground">
              seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
                required
                placeholder="Digite o nome do restaurante"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
                required
                placeholder="Digite seu nome"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                required
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Phone">Seu Celular</Label>
              <Input
                id="Phone"
                type="tel"
                {...register("Phone")}
                required
                placeholder="Digite seu número de telefone"
              />
            </div>


            <button
              disabled={isSubmitting}
              type="submit"
              className={`px-4 py-2 rounded-md w-full transition text-white 
                ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 cursor-pointer"}`}
            >
              {isSubmitting ? "Aguarde..." : "Finalizar Cadastro"}
            </button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, Você concorda com nossos{" "}
              <a className="underline underline-offset-4" href="">
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a className="underline underline-offset-4" href="">
                Políticas De Privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

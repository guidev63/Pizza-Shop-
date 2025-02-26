import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Definição do schema do formulário com Zod
const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  Phone: z.string(),
  email: z.string().email(),
});

// Tipo inferido a partir do schema
type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate(); // Correção: chamada correta do hook useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  // Função para lidar com o envio do formulário
  async function handleSignUp(data: SignUpForm) {
    console.log(data);
    try {
      // Simula um atraso de 2 segundos (para visualizar o estado "Aguarde...")
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Exibe o toast de sucesso após o delay
      toast.success("Restaurante Cadastrado com Sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"), // Redireciona corretamente para o sign-in
        },
        duration: 4000, // Tempo de exibição do toast
        position: "bottom-right", // Posicionamento do toast
      });
    } catch {
      // Exibe o toast de erro em caso de falha
      toast.error("Erro ao Cadastrar Restaurante.");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      {/* Componente para exibir toasts */}
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

          {/* Formulário de cadastro */}
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

            {/* Botão de submit */}
            <button
              disabled={isSubmitting}
              type="submit"
              className={`px-4 py-2 rounded-md w-full transition text-white 
                ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 cursor-pointer"}`}
            >
              {isSubmitting ? "Aguarde..." : "Finalizar Cadastro"}
            </button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a className="underline underline-offset-4" href="">
                termos de serviço
              </a>{" "}
              e{" "}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

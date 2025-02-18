import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "sonner";

// Definição do schema do formulário com Zod
const signInForm = z.object({
  email: z.string().email(),
});

// Tipo inferido a partir do schema
type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  // Função para lidar com o envio do formulário
  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);

      // Simula um atraso de 2 segundos (para visualizar o estado "Aguarde...")
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Exibe o toast de sucesso após o delay
      toast.success("Enviamos um link de autenticação para seu e-mail!", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data), // Reenvia o link ao clicar no botão
        },
        duration: 4000, // Tempo de exibição do toast
        position: "bottom-right", // Posicionamento do toast
      });
    } catch {
      // Exibe o toast de erro em caso de falha
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <>
      <Helmet title="Login" />

      {/* Componente para exibir toasts */}
      <Toaster richColors position="bottom-right" />

      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          {/* Formulário de login */}
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
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

            {/* Botão de submit */}
            <button
              disabled={isSubmitting}
              type="submit"
              className={`px-4 py-2 rounded-md w-full transition text-white 
                ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 cursor-pointer"
                }`}
            >
              {isSubmitting ? "Aguarde..." : "Acessar Painel"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
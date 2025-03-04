import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticação para seu e-mail!", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data), 
        },
        duration: 4000,
        position: "bottom-right",
      });
    } catch {
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <Toaster richColors position="bottom-right" />

      <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8  top-4">
      <Link
        to="/sign-up" className="">
          Novo estabelecimento
       </Link> 
      </Button>
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
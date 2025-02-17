import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { resolve } from "path"
import { Helmet } from "react-helmet-async"
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit ,formState:{isSubmitting} } = useForm<SignInForm>()
 async function handleSignIn(data: SignInForm) {
  console.log(data)
  await new Promise((resolve) => setTimeout(resolve,2000))
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className=" flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email"> Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <button disabled={isSubmitting} type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition w-full">Acessar Painel</button>
          </form>
        </div>
      </div>
    </>
  )
}
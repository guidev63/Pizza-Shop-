import { api } from "@/lib/axios";
import { error } from "console";

interface UpdateProfileBody{
  name: string
  description:string | null
}

export  async function updateProfile({name,description}:UpdateProfileBody){
  throw new Error()
  await api.put('/profile',{name,description})
}
import { Value } from '@radix-ui/react-select'
import { z } from 'Zod'
export const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENAVLE_API_DELAY:z.string().transform(Value =>Value === 'true'),
})



export const env = envSchema.parse(import.meta.env)
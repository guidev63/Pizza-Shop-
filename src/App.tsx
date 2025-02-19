import { RouterProvider } from 'react-router-dom'
import './index.css'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { router } from './routes'
export function App() {
  return (
    <HelmetProvider>
      <Helmet  titleTemplate="%s | pizza shop"/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}


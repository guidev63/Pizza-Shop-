import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { router } from "./routes";
import { Toaster } from "sonner"; // Importação do Toaster
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Helmet titleTemplate="%s | pizza.shop" />
      
      {/* Componente Toaster para exibir notificações */}
      <Toaster richColors position="bottom-right" />

      {/* Provedor de rotas */}
      <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
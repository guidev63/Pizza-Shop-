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
      
      <Toaster richColors position="bottom-right" />


      <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
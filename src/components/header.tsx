import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "../components/account-menu";
export function Header() {
  return (
    <div>
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex items-center">
          <Pizza className="h-6 w-6 text-muted-foreground" />
          <div className="h-6 w-px bg-border mx-4"></div>
        </div>
        <div className="flex space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            <span>Início</span>
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            <span>Pedidos</span>
          </NavLink>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>

      <div className="px-6 py-2">
      </div>
    </div>
  );
}
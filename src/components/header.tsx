import { Home, Pizza, UtensilsCrossed } from "lucide-react"
import { NavLink } from "./nav-link"

export function Header() {
  return (
    <div>
      <div className="flex h-16 items-center px-6 border-b space-x-6">
        <Pizza className="h-6 w-6 text-muted-foreground" />

        <NavLink to="/">
          <Home className="h-4 w-4" />
          <span>Início</span>
        </NavLink>

        <NavLink to="/pedidos">
          <UtensilsCrossed className="h-4 w-4" />
          <span>Pedidos</span>
        </NavLink>
      </div>

      <div className="px-6 py-2">
        Dashboard
      </div>
    </div>
  )
}

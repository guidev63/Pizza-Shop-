import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

const data = [
  { product: "Peperoni", amount: 40 },
  { product: "Mussarela", amount: 30 },
  { product: "Marguerita", amount: 50 },
  { product: "4 Queijos", amount: 16 },
  { product: "Franco frito ", amount: 26 },
];
export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Produtos Populares</CardTitle>
          <BarChart className="w-4 h-4 text-muted-foreground"
          />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          < PieChart style={{ fontSize: 12 }}>
            <Pie data={data} dataKey="amount" nameKey="product"
             cx="50%"
              cy="50%"
              outerRadius={86}
              />
        </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

/**
 * Componente wrapper para tarjetas de estadísticas en el dashboard.
 * Recibe un title, un icono (ReactNode) y children con el contenido.
 * Se usa en HeroStats para mostrar: total personajes, favoritos,
 * héroe más fuerte y héroe más inteligente.
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropsWithChildren } from "react";

interface props extends PropsWithChildren { title: string; icon: React.ReactNode; }

export const HeroStatCard = ({ title, icon, children }: props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

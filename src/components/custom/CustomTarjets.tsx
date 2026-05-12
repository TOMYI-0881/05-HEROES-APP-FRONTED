/**
 * CustomTarjets — Componente de esqueleto (skeleton) para carga de héroes.
 *
 * Propósito:
 *  - Muestra una cuadrícula de placeholders con skeleton mientras se
 *    obtienen los datos del backend.
 *  - Uso típico: reemplazar el contenido real durante `isLoading`.
 *
 * Props:
 *  - limit: número de tarjetas skeleton a renderizar.
 *
 * Layout:
 *  - Grid responsive: 1 col móvil, 2 tablet, 3 desktop.
 *  - Cada skeleton simula una Card con header (título + subtítulo)
 *    y contenido (imagen aspect-video + líneas de texto).
 *
 * Efecto:
 *  - Muestra un toast.loading al montarse y lo descarta al desmontarse.
 */

import { useEffect } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  /** Número de tarjetas skeleton a renderizar */
  limit: number;
}

export const CustomTarjets = ({ limit }: Props) => {
  //efecto para mostrar un toast de carga mientras se obtienen los datos del backend
  useEffect(() => {
    const id = toast.loading("cargando datos del backend...");
    console.log("cargando datos del backend...");
    return () => {
      toast.dismiss(id);
      console.log("limpiando efecto de carga");
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {Array.from({ length: limit }).map((_, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="aspect-video w-full" />
            <div className="space-y-3 mt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

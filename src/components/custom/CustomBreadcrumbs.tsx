/**
 * Componente de migas de pan (breadcrumbs) para navegación.
 * breadCrumbs → array opcional de rutas intermedias ({label, to})
 * currentPage → nombre de la página actual (último elemento, no clickeable)
 *
 * Ejemplo: Home / heroes / super Heroes
 * Nota: key={Math.random()} no es ideal para rendimiento (re-renders),
 * pero funciona para este caso de uso demostrativo.
 */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

interface Breadcrum {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadCrumbs?: Breadcrum[];
  colorCurrentPage?: string;
  colorHome?: string;
  colorBreadCrumbs?: string;
}

const CustomBreadcrumbs = ({
  currentPage,
  breadCrumbs = [],
  colorCurrentPage,
  colorHome,
  colorBreadCrumbs,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Breadcrumb className="mb-4 cursor-pointer mt-0">
      <BreadcrumbList>
        <BreadcrumbItem
          className={cn(!colorHome && "text-gray-400")}
          style={colorHome ? { color: colorHome } : undefined}
        >
          <BreadcrumbLink href="/" className="hover:text-gray-400">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        /
        {breadCrumbs.map((crumb) => (
          <div key={Math.random()}>
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => navigate(crumb.to)}
                className="hover:text-gray-400"
                style={
                  colorBreadCrumbs ? { color: colorBreadCrumbs } : undefined
                }
              >
                {crumb.label} /
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
        <BreadcrumbItem
          className={cn(!colorCurrentPage && "text-black")}
          style={colorCurrentPage ? { color: colorCurrentPage } : undefined}
        >
          <BreadcrumbLink className="pointer-events-none hover:text-inherit">{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;

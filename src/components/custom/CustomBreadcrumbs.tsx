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
        <BreadcrumbItem className={`text-${colorHome || "gray-400"}`}>
          <BreadcrumbLink href="/" className="hover:text-gray-400">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        /
        {breadCrumbs.map((crumb) => (
          <div
            className={cn(
              `flex items-center text-${colorBreadCrumbs || "white"}`,
            )}
            key={Math.random()}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => navigate(crumb.to)}
                className={`hover:text-${colorBreadCrumbs || "white"} hover:text-gray-400`}
              >
                {crumb.label} /
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
        <BreadcrumbItem>
          <BreadcrumbLink
            className={`text-${colorCurrentPage || "black"}hover:text-gray-400`}
          >
            {currentPage}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;

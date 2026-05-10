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
import { useNavigate } from "react-router";

interface Breadcrum {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadCrumbs?: Breadcrum[];
}

const CustomBreadcrumbs = ({ currentPage, breadCrumbs = [] }: Props) => {
  const navigate = useNavigate();
  return (
    <Breadcrumb className="mb-4 cursor-pointer">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        /
        {breadCrumbs.map((crumb) => (
          <div className="flex items-center" key={Math.random()}>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate(crumb.to)}>
                {crumb.label} /
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;

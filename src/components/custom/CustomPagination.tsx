import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useSearchParams } from "react-router";

interface Props {
  totalPages: number;
}

const CustomPagination = ({ totalPages }: Props) => {
  //esto dispara renders
  const [searchParams, setSearchParams] = useSearchParams();
  // const [page, setPage] = useState(1);

  const queryPage = searchParams.get("page") ?? "1";
  const page = isNaN(+queryPage) ? 1 : +queryPage;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    //segunda opcion posible para tener persistencia en la url
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  //const [page, setPage] = useState(1);

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        atras
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          variant={page === index + 1 ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      {/*             
      <Button variant="outline" size="sm">
        2
      </Button> */}

      {/* <Button variant="ghost" size="sm" disabled>
        <MoreHorizontal className="h-4 w-4" />
      </Button> */}

      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        siguiente
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CustomPagination;

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Search, Filter, SortAsc, Grid, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { useRef } from "react";
import { useSearchParams } from "react-router";

const SearchControler = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  //creamos persistencia de la URL
  const setQueryParams = (name: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(name, value);
      return prev;
    });
  };

  const activeAccordion = searchParams.get("active-accordion") ?? "";
  const selectedStrength = Number(searchParams.get("strength") ?? "0");

  const handlekeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value ?? "";
      setQueryParams("name", value);
    }
  };

  const teams = [
    "Ninguno",
    "Liga de la Justicia",
    "Vengadores",
    "X-Men",
    "Batfamilia",
    "Jóvenes Titanes",
    "Solo",
    "Suicide Squad",
  ];
  const category = ["Ninguno", "Hero", "Villain"];
  const universe = ["Ninguno", "DC", "Marvel"];
  const status = ["Ninguno", "Active", "Deceased"];

  const teamsQuery = searchParams.get("team") ?? "";
  const categoryQuery = searchParams.get("category") ?? "";
  const universeQuery = searchParams.get("universe") ?? "";
  const statusQuery = searchParams.get("status") ?? "";

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            //usamos ref para obtener el elemento completo del imput, evitamos usar un useState
            ref={inputRef}
            placeholder="Search heroes, villains, powers, teams..."
            className="pl-12 h-12 text-lg bg-white"
            onKeyDown={handlekeyDown}
            defaultValue={searchParams.get("name") ?? ""}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant={
              activeAccordion === "advance-filters" ? "default" : "outline"
            }
            className="h-12 cursor-pointer"
            onClick={() => {
              if (activeAccordion === "advance-filters") {
                setQueryParams("active-accordion", "");
                //esto lo que esta hacinendo es hacer que el parametro desaparesca cuando este con el valor ""
                //  lo hago por estetica
                setSearchParams((prev) => {
                  prev.delete("active-accordion");
                  return prev;
                });
                return;
              }
              setQueryParams("active-accordion", "advance-filters");
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button variant="outline" className="h-12">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort by Name
          </Button>

          <Button variant="outline" className="h-12">
            <Grid className="h-4 w-4" />
          </Button>

          <Button className="h-12">
            <Plus className="h-4 w-4 mr-2" />
            Add Character
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <Accordion value={[activeAccordion]}>
        <AccordionItem value="advance-filters">
          {/* <AccordionTrigger>Is it accessible?</AccordionTrigger> */}
          <AccordionContent>
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                <Button variant="ghost">Clear All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team</label>
                  <Combobox
                    items={teams}
                    value={teamsQuery}
                    onValueChange={(currentValue) => {
                      if (currentValue === "Ninguno") {
                        setQueryParams("team", "");
                        return;
                      }
                      setQueryParams("team", currentValue ?? "");
                    }}
                  >
                    <ComboboxInput placeholder="Select a team" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Combobox
                    items={category}
                    value={categoryQuery}
                    onValueChange={(currentValue) => {
                      if (currentValue === "Ninguno") {
                        setQueryParams("category", "");
                        return;
                      }
                      setQueryParams("category", currentValue ?? "");
                    }}
                  >
                    <ComboboxInput placeholder="Select a category" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Universe</label>
                  <Combobox
                    items={universe}
                    value={universeQuery}
                    onValueChange={(currentValue) => {
                      if (currentValue === "Ninguno") {
                        setQueryParams("universe", "");
                        return;
                      }
                      setQueryParams("universe", currentValue ?? "");
                    }}
                  >
                    <ComboboxInput placeholder="Select a universe" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Combobox
                    items={status}
                    value={statusQuery}
                    onValueChange={(currentValue) => {
                      if (currentValue === "Ninguno") {
                        setQueryParams("status", "");
                        return;
                      }
                      setQueryParams("status", currentValue ?? "");
                    }}
                  >
                    <ComboboxInput placeholder="Select a status" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">
                  Minimum Strength: {selectedStrength}/10
                </label>
                <Slider
                  className="mt-1"
                  defaultValue={[selectedStrength]}
                  onValueChange={(value) => {
                    setQueryParams("strength", value.toString());
                  }}
                  max={10}
                  step={1}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SearchControler;

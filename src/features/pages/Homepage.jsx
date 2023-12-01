import { useState } from "react";
import Input from "../../ui/Input";
import Countries from "../main/countries";
import { useNavigate } from "react-router-dom";

function Homepage({
  queryOption,
  setQueryOption,
  isLightMode,
  handleLightMode,
}) {
  const [searchByRegion, setSearchByRegion] = useState("");
  const [searchByInput, setSearchByInput] = useState("");

  const handleSearchByRegion = (e) => {
    setQueryOption("region");
    setSearchByRegion(e.target.value);
  };
  const handleSearchByInput = (e) => {
    setQueryOption("name");
    setSearchByInput(e.target.value);
  };

  if (!searchByInput && searchByRegion) {
    setQueryOption("region");
  } else if (searchByInput && !searchByRegion) setQueryOption("name");

  return (
    <>
      <Input
        searchByInput={searchByInput}
        handleSearchByInput={handleSearchByInput}
        searchByRegion={searchByRegion}
        handleSearchByRegion={handleSearchByRegion}
        queryOption={queryOption}
        setQueryOption={setQueryOption}
      />
      <Countries
        searchByInput={searchByInput}
        handleSearchByInput={handleSearchByInput}
        searchByRegion={searchByRegion}
        queryOption={queryOption}
        setQueryOption={setQueryOption}
      />
    </>
  );
}

export default Homepage;

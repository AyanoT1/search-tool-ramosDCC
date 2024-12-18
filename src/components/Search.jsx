import React, { useEffect } from "react";
import { useState, createContext } from "react";
import Searchbar from "./Searchbar";
import Filterbox from "./Filterbox";
import Display from "./Display";
import { AllSources, genericSearch } from "../utils/utils";

export const SettingsContext = createContext();

const initialSettings = {
  pattern: "",
  source: AllSources,
  sortBy: "code",
  isReversed: false,
  tag: "Any",
};

function Search() {
  const [settings, setSettings] = useState(initialSettings);
  const [results, setResults] = useState([]);

  useEffect(() => setResults(genericSearch(settings)), [settings]);

  return (
    <>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <Searchbar />
        <Filterbox/>
      </SettingsContext.Provider>
      <Display elements={results}/>
    </>
    
  );
}

export default Search;

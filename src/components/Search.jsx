import React, { useEffect } from "react";
import { useState, createContext } from "react";
import Mandatory from "../assets/Mandatory.json";
import Optionals from "../assets/Optionals.json";
import Searchbar from "./Searchbar";
import Display from "./Display";
import { genericSearch } from "../utils/utils";

export const SettingsContext = createContext();
export const AllSources = { ...Mandatory, ...Optionals };

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
  useEffect(()=> console.log(results), [results])

  return (
    <>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <Searchbar />
      </SettingsContext.Provider>
      <Display elements={results}/>
    </>
    
  );
}

export default Search;

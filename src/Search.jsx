import React from "react";
import { useState, createContext } from "react";
import Mandatory from "./assets/Mandatory.json";
import Optionals from "./assets/Optionals.json";
import Searchbar from "./Searchbar";

export const SettingsContext = createContext();
export const AllSources = { ...Mandatory, ...Optionals };

const initialSettings = {
  pattern: "",
  source: AllSources,
  sortBy: "code",
  tags: "Any",
};

function Search() {
  const [settings, setSettings] = useState({ initialSettings });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <Searchbar />
    </SettingsContext.Provider>
  );
}

export default Search;

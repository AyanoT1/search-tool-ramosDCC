import React from "react";
import { useState, createContext } from "react";
import Mandatory from "./assets/Mandatory.json";
import Optionals from "./assets/Optionals.json";

const AllSources = {...Mandatory, ...Optionals};
const initialSettings = {
    result: [],
    source: AllSources,
    sortBy: "code",
    tags: "Any"
}

function Search() {

    const [settings, setSettings] = useState({initialSettings});

  return <></>;
}

export default Search;

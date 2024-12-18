import { useContext } from "react";
import { SettingsContext } from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
  const { settings, setSettings } = useContext(SettingsContext);

  function handleInputSearch(e) {
    setSettings({ ...settings, pattern: e.target.value });
  }

  return (
    <div
      name="search-bar"
      className="flex items-center flex-col w-screen absolute top-32"
    >
      <div className="w-1/2 flex items-center">
        <input
          onChange={handleInputSearch}
          id="searchbar-input"
          type="text"
          className="border w-full rounded-full p-2 pl-4 border-gray-400 shadow-md"
          placeholder="Busca tema específico aquí"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="relative right-9"
        />
      </div>
    </div>
  );
}

export default Searchbar;

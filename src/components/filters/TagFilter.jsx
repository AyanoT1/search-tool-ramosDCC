import { useContext } from "react";
import { SettingsContext } from "../Search";
import { TagList } from "../../utils/utils";

function TagFilter() {
  const { settings, setSettings } = useContext(SettingsContext);

  function handleTagChange(e) {
    setSettings({ ...settings, tag: e.target.value });
  }

  return (
    <div>
      <h3 className="font-semibold mt-2">Área:</h3>
      <hr className="border-gray-400" />
      <select
        name="sorting"
        id="sort-filter"
        onChange={handleTagChange}
        className="mt-2 h-7 rounded-md pl-2"
      >
        <option value="Any">Cualquiera</option>
        {TagList.map((tag) => {
          return <option value={tag}>{tag}</option>;
        })}
      </select>
    </div>
  );
}

export default TagFilter;

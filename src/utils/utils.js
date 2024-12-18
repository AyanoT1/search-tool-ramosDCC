import Mandatory from "../assets/Mandatory.json";
import Optionals from "../assets/Optionals.json";

export const AllSources = { ...Mandatory, ...Optionals };

export const AvailableSources = {
  Todos: AllSources,
  Obligatorios: Mandatory,
  Electivos: Optionals,
};

export const TagList = [
  ...new Set(Object.values(AllSources).flatMap((course) => course.tags || [])),
];

function getSortFunction(option, source) {
  const convertNaN = (x) => (isNaN(x) ? 999 : parseInt(x));

  switch (option) {
    case "name":
      return (a, b) =>
        source[a].name
          .slice(8)
          .localeCompare(source[b].name.slice(8), undefined, {
            sensitivity: "base",
          });
    case "code":
      return (a, b) =>
        source[a].name.localeCompare(source[b].name, undefined, {
          sensitivity: "base",
        });
    case "difficulty":
      return (a, b) =>
        convertNaN(source[a].difficulty) - convertNaN(source[b].difficulty);
    case "time":
      return (a, b) => convertNaN(source[a].time) - convertNaN(source[b].time);
  }
}

export function genericSearch({
  pattern,
  source,
  sortBy,
  isReversed,
  tag,
} = {}) {
  var codeResults = Object.keys(source).filter((key) => {
    return (
      (source[key].name.toLowerCase().includes(pattern.toLowerCase()) ||
        source[key].desc.toLowerCase().includes(pattern.toLowerCase())) &&
      source[key].desc != "" &&
      (tag != "Any" ? source[key].tags.includes(tag) : true)
    );
  });

  codeResults.sort(getSortFunction(sortBy, source));

  if (isReversed) {
    codeResults = codeResults.reverse();
  }

  return codeResults.map((code) => {
    return { key: code, ...source[code] };
  });
}

export function getTagStyle(tag) {
  const base = "p-1 text-[13px] font-bold text-[#242424] rounded mr-2 ";
  switch (true) {
    case tag === "Programación":
      return base + "bg-blue-500 ";
    case tag === "Software":
      return base + "bg-green-500 ";
    case tag === "Datos":
      return base + "bg-purple-500 ";
    case tag === "Teoría":
      return base + "bg-red-500 ";
    case tag === "HCI":
      return base + "bg-amber-400 ";
    case tag === "Apps web (opcional)":
      return base + "bg-yellow-500 ";
    case tag === "Apps web":
      return base + "bg-yellow-400 ";
    case tag === "Gráfica":
      return base + "bg-pink-500 ";
    case tag === "Sistemas":
      return base + "bg-cyan-500 ";
    case tag === "Arquitectura":
      return base + "bg-lime-500 ";
    case tag === "Seguridad":
      return base + "bg-gray-400 ";
    case tag === "Machine Learning":
      return base + "bg-indigo-500 ";
    case tag === "Industria":
      return base + "bg-teal-500 ";
    case tag === "Investigación":
      return base + "bg-orange-500 ";
    case tag === "Redes":
      return base + "bg-rose-500 ";
    case tag === "Lenguajes":
      return base + "bg-violet-500 ";
    default:
      return base + "bg-gray-200 ";
  }
}

export function numberStyler(x) {
  let base =
    "rounded-full w-8 h-8 flex items-center justify-center font-extrabold ";
  switch (true) {
    case x > 7:
      return base + "bg-red-500 text-[#242424]";
    case x > 5:
      return base + "bg-amber-400 text-[#242424]";
    case x > 2:
      return base + "bg-green-500 text-[#242424]";
    case x === "?":
      return base + "bg-stone-700 text-white";
    default:
      return base + "bg-blue-200 text-[#242424]";
  }
}

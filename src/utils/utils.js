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

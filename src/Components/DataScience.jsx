import DisplayContent from "./DisplayContent";
import blogs from "../BlogsData";

function DataScience({ searchTerm }) {

  const filtered = blogs.filter(
    (item) =>
      item.domain === "DataScience" &&
      item.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
  );

  return (
    <DisplayContent data={filtered} />
  );
}

export default DataScience;
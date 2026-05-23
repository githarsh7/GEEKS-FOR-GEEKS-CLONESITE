import DisplayContent from "./DisplayContent";
import blogs from "../BlogsData";

function FullStackDevelopment({
  searchTerm
}) {

  const filtered = blogs.filter(
    (item) =>
      item.domain ===
        "FullStackDevelopment" &&
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

export default FullStackDevelopment;
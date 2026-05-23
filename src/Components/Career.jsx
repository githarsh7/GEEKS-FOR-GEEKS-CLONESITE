import DisplayContent from "./DisplayContent";
import blogs from "../BlogsData";

function Career({ searchTerm }) {

  const filtered = blogs.filter(
    (item) =>
      item.domain === "Career" &&
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

export default Career;
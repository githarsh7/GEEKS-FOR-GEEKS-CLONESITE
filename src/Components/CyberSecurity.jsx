import DisplayContent from "./DisplayContent";
import blogs from "../BlogsData";

function CyberSecurity({ searchTerm }) {

  const filtered = blogs.filter(
    (item) =>
      item.domain === "CyberSecurity" &&
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

export default CyberSecurity;
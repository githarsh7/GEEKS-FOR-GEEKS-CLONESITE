import DisplayContent from "./DisplayContent";
import blogs from "../BlogsData";

function All({ searchTerm }) {

  const filteredBlogs =
    blogs.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  return (
    <DisplayContent
      data={filteredBlogs}
    />
  );

}

export default All;
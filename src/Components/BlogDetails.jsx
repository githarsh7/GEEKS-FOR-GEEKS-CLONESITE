import { useParams } from "react-router-dom";

import blogs from "../BlogsData";

function BlogDetails() {

  const { id } = useParams();

  const blog = blogs.find(
    (item) =>
      item.id === Number(id)
  );

  if (!blog) {

    return (
      <h1>
        Blog Not Found
      </h1>
    );

  }

  return (

    <div className="details-container">

      <img
        src={blog.img}
        alt={blog.title}
        className="details-image"
      />

      <div className="details-content">

        <h1>{blog.title}</h1>

        <p className="details-domain">
          {blog.domain}
        </p>

        <p className="details-text">
          {blog.content}
        </p>

        <a
          href={blog.url}
          target="_blank"
          rel="noreferrer"
        >

          <button className="read-btn">
            Read More
          </button>

        </a>

      </div>

    </div>
  );
}

export default BlogDetails;
import { useNavigate } from "react-router-dom";

function Card({ item }) {

  const navigate = useNavigate();

  return (

    <div
      className="card"
      onClick={() =>
        navigate(`/blog/${item.id}`)
      }
    >

      <img
        src={item.img}
        alt={item.title}
      />

      <div className="card-content">

        <h2>{item.title}</h2>

      </div>

    </div>
  );
}

export default Card;
import Template from "./Template";

function DisplayContent({ data }) {

  return (
    <div className="display-container">

      {
        data.map((item, index) => (

          <Template
            key={index}
            item={item}
            index={index}
          />

        ))
      }

    </div>
  );
}

export default DisplayContent;
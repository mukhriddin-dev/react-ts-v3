import { Link } from "react-router-dom";
import "./style.scss";
import { CardPropType } from "@interface";

const index = (data: CardPropType) => {
  const {
    data: { title, body , id }
  } = data;
  return (
    <div className="card">
      <img src="https://picsum.photos/id/541/300/250" alt="smth image" />
      <div className="p-3">
        <Link to={`/posts/${id}`}><h1>{title}</h1></Link>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default index;

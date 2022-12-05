import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="div-home-container">
      <div>
        <h1 className="title-page ">Github </h1>
      </div>
      <div>
        <h2 className="caption-page ">Agardando o texto</h2>
      </div>
      <div className=" outbtn">
        <Link to="/hubsearch">
          <button className="inbtn">Iniciar</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;

import "./Landing.Module.css";
import freshnerlogo from "../../assets/freshners.png";
import cleaners from "../../assets/cleaners.png";
import { Link } from "react-router-dom";

const Cleaning = () => {
  const category = ["Cleaners", "Fresheners"];
  return (
    <>
      <h1 className="myb">Cleaning & Household</h1>
      <hr className="hrbank" />

      <div className="bank">
        <Link to="/product" state={{ category: category[0] }}>
          <div>
            <img src={cleaners} alt="" />
          </div>
        </Link>
        <Link to="/product" state={{ category: category[1] }}>
          <div>
            {" "}
            <img src={freshnerlogo} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cleaning;

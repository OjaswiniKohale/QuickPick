import namkeensNachos from "../../assets/namkeensNachos.png";
import sweets from "../../assets/sweets.png";
import { Link } from "react-router-dom";

import biscuitslogo from "../../assets/biscuits.png";

const Snack = () => {
  const category = ["Snacks", "Cookies", "Sweets"];
  return (
    <>
      <h1 className="snack">Snack Store</h1>
      <hr className="hrbank" />
      <div className="Fruit">
        <Link to="/product" state={{ category: category[0] }}>
          <div>
            <img src={namkeensNachos} alt="" />
          </div>
        </Link>
        <Link to="/product" state={{ category: category[1] }}>
          <div>
            {" "}
            <img src={biscuitslogo} />
          </div>
        </Link>
        <Link to="/product" state={{ category: category[2] }}>
          <div>
            {" "}
            <img src={sweets} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Snack;

import "./Landing.Module.css";
import { Link } from "react-router-dom";

const Fruit = () => {
  const category = ["Fruits", "Vegetables"];
  return (
    <>
      <h1 className="myb">Fruits & Vegetables</h1>
      <hr className="hrbank" />
      <div className="Fruit">
        <Link to="/product" state={{ category: category[0] }}>
          <div>
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_fresh-fruits-fnv_Storefront_m_251022_02.jpg"
              alt=""
            />
          </div>
        </Link>
        <Link to="/product" state={{ category: category[1] }}>
          <div>
            {" "}
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_fresh-veggs-fnv_Storefront_m_251022_03.jpg"
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Fruit;

import "./Landing.Module.css";
<<<<<<< Updated upstream
import freshnerlogo from '../../assets/freshners.png'


=======
import cleaners from '../../assets/cleaners.png'
>>>>>>> Stashed changes


const Cleaning = () => {
    return (
        <>
            <h1 className="myb">Cleaning & Household
            
            </h1>
            <hr className="hrbank" />
            
            <div className="bank">
                <div>
                    <img src={cleaners} alt="" />
              </div>
              {/* <div> <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_detetgents-cleaningStorefront_m_480_251022_02.jpg" alt="" /></div> */}
              {/* <div> <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_kitchen-wipes-m_480_251022_03.jpg" alt="" /></div> */}
              <div> <img src={freshnerlogo} alt="" /></div>
            </div>
        </>
    )
}

export default Cleaning;
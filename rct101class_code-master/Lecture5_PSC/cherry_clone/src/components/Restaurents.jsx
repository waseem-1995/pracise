import React from 'react'

const Reastaurents = (props) => {
  return (
    <div className="container divider">
            <div className="cards">
              {props.restaurents.map((e)=>(
              <div className="card">
              <img width="254" height="160px" src={e.image}/>
              <div className="restaurant-details">
                  <div className="restaurant-title">{e.name}</div>
                  <div className="restaurant-subtitle">
                    {e.category.join(", ")}
                  </div>
              </div>
              <div className="restaurant-info">
                  <div className="restaurant-ratings">
                      <i className="material-icons star-icon">{e.rating}</i> 4.3
                  </div>
                   .<div className="restaurant-delivery-timings">{e.deliveryTimings}</div> .
                  <div className="restaurant-cost-for-two">₹ {e.costfortwo} FOR TWO</div>
              </div>
              <div className="offer-banner">
                  <span className="material-icons"> local_offer </span>
                  <span className="offer-text">
                    {e.offers.join("- | ")}
                  </span>
              </div>
          </div>
              ))}
               
               
            </div>
        </div>
  )
}

export default Reastaurents
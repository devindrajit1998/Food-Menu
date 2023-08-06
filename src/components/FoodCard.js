import React from "react";

export default function FoodCard({ menuData }) {
  return (
    <div className="container ">
      <div className="row">
        {menuData.map((newElem) => {
          const { id, image, name, description, price, category } = newElem;
          return (
            <>
              <div className="col-md-4" key={id}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4 text-center">
                      <img
                        src={image}
                        className="img-fluid rounded-start card_img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <div className="order d-flex justify-content-between align-items-center">
                          <p className="card-text d-flex flex-column">
                            <small className="text-muted">Price: {price}</small>
                            <small className="text-muted">{category}</small>
                          </p>
                          <button className="order_button">
                            <span className="text">Order Now</span>
                            <div className="circle-container">
                              <div className="circle"></div>
                            </div>
                          </button>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

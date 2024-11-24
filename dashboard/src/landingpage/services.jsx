import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>
          Your Life Is An Art
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <p>{d.text}</p>
                    <a href={`payment/${d.slug}`}>
                      <button
                        className="btn btn-custom"
                      >Buy Now
                      </button>
                    </a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

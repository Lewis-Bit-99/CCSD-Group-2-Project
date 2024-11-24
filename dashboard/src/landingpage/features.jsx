import React, { useState, useEffect } from "react";

const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [featuresData, setFeaturesData] = useState(null);

  useEffect(() => {
    // Simulated data; replace with an API call if needed
    const fetchData = [
      { icon: "fa fa-check", title: "Feature 1", text: "This is feature 1" },
      { icon: "fa fa-heart", title: "Feature 2", text: "This is feature 2" },
      { icon: "fa fa-star", title: "Feature 3", text: "This is feature 3" },
      { icon: "fa fa-cog", title: "Feature 4", text: "This is feature 4" },
    ];
    setTimeout(() => setFeaturesData(fetchData), 1000); // Simulate loading
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <Features data={featuresData} />
    </div>
  );
};

export default App;

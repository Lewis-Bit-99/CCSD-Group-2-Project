import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure Axios is installed with: npm install axios

export const Features = () => {
  const [data, setData] = useState(null);

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/websiteTexts"); // Adjust API URL if necessary
        // Map the backend data into the structure expected by the component
        const mappedData = response.data.map((item) => ({
          icon: "fa fa-check", // Example icon, map appropriately if your data includes icons
          title: item.title,
          text: item.postShortDescription,
        }));
        setData(mappedData);
      } catch (error) {
        console.error("Error fetching WebsiteTexts data:", error);
        alert("Failed to load features data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {data ? (
            data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;

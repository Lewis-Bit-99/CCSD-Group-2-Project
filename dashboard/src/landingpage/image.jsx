import React, { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:8082/api/WebsiteImage";

export const Services = () => {
  const token = localStorage.getItem("jwtToken");
  const [websiteImages, setWebsiteImages] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    if (!token) {
      console.error("No token found! Please login.");
      setLoading(false);
      return;
    }

    // Fetch data from the API
    fetch(API_BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setWebsiteImages(data);
      })
      .catch((error) => {
        console.error("Error fetching website images:", error);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!websiteImages.length) {
    return <div>No services available.</div>;
  }

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {websiteImages.map((image, index) => (
            <div key={`${image.title}-${index}`} className="col-md-4">
              <div className="service-desc">
                {image.image64String && (
                  <img
                    src={`data:image/jpeg;base64,${image.image64String}`}
                    alt={image.title}
                    className="img-fluid"
                    style={{ width: "150px", height: "150px" }}
                  />
                )}
                <h3>{image.title}</h3>
                <h4>{image.tag}</h4>
                <p>{image.postShortDescription}</p>
                <a href={`payment/${image.postSlug}`}>
                  <button className="btn btn-custom">Buy Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

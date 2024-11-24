import { Image } from "./image";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082';

export const Gallery = (props) => {
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/gallery`);
        setGalleryData(response.data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Art build your life more colourful by using it
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {galleryData
              ? galleryData.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.image}
                      smallImage={d.image}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

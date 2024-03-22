import React, { useState } from 'react';
import './Modals.scss';

const Modals = () => {
  // Array containing image paths for the carousel
  const carouselImages = [
    "still-life-vase-with-artificial-flowers-living-room_169016-5191.jpg",
    "living-room-with-blue-sofa-large-painting-flower-wall_123827-23872.avif",
    "workplace-with-decorative-frames_23-2147601349.jpg",
    "still-life-vase-with-artificial-flowers-living-room_169016-5191.jpg",
    "living-room-with-blue-sofa-large-painting-flower-wall_123827-23872.avif",
    "workplace-with-decorative-frames_23-2147601349.jpg"
  ];

  // Array containing image paths for the thumbnails at the bottom
  const thumbnailImages = [
    // Add your additional images here
    // For example:
    "still-life-vase-with-artificial-flowers-living-room_169016-5191.jpg",
    "living-room-with-blue-sofa-large-painting-flower-wall_123827-23872.avif",
    "workplace-with-decorative-frames_23-2147601349.jpg",
    "still-life-vase-with-artificial-flowers-living-room_169016-5191.jpg",
    "living-room-with-blue-sofa-large-painting-flower-wall_123827-23872.avif",
    "workplace-with-decorative-frames_23-2147601349.jpg"
  ];

  // State to track the index of the active carousel item
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to generate carousel items
  const renderCarouselItems = () => {
    return carouselImages.map((image, index) => (
      <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
        <img src={image} className="d-block w-100" alt={`Image ${index + 1}`} />
      </div>
    ));
  };

  // Function to generate thumbnails
  const renderThumbnails = () => {
    return thumbnailImages.map((image, index) => (
      <button key={index} onClick={() => setActiveIndex(index)}>
        <img src={image} alt={`Thumbnail ${index + 1}`} />
      </button>
    ));
  };

  return (
    <div className='Modals'>
      <div className="modal fade modaalls" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id="carouselExampleControls" className="carousel slide slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {renderCarouselItems()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Render thumbnails */}
              <div className="thumbnail-container">
                {renderThumbnails()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table with initial images */}
      <table className="image-table">
        <tbody>
          <tr>
            <td>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="1000_F_677132375_mFvGvYsFk2xQbbvStjUGygJyTResMkMg.jpg" alt="" />
              </button>
            </td>
            
       
        
   
           <td> <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="home-indoor-design-concept_23-2148811467.jpg" alt="" />
            </button></td>
  
           <td>
           <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="1000_F_677132375_mFvGvYsFk2xQbbvStjUGygJyTResMkMg.jpg" alt="" />
            </button>
           </td>
           <td>
           <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="1000_F_677132375_mFvGvYsFk2xQbbvStjUGygJyTResMkMg.jpg" alt="" />
            </button>
           </td>
           
          </tr>

          <tr>
            <td>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="1000_F_677132375_mFvGvYsFk2xQbbvStjUGygJyTResMkMg.jpg" alt="" />
              </button>
            </td>
            
       
        
   
           <td> <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="home-indoor-design-concept_23-2148811467.jpg" alt="" />
            </button></td>
  
           <td>
           <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="1000_F_677132375_mFvGvYsFk2xQbbvStjUGygJyTResMkMg.jpg" alt="" />
            </button>
           </td>
           <td>
           <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="1000_F_677132375_mFvGvYsFk2xQbbvStjUGygJyTResMkMg.jpg" alt="" />
            </button>
           </td>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Modals;

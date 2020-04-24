import React from 'react'
import contactPagePicture from "../../../static/assets/images/auth/shop-hacker.jpg";
import {FontAwesomeIcon  } from "@fortawesome/react-fontawesome";


export default function() {
  return (
      <div className="content-page-wrapper">
          <div className="left-column"
            style={{
              background: "url(" + contactPagePicture + ")  no-repeat",
              backgroundSize: "fit",
              backgroundPosition: "center"
            }}
          />
        

          <div className="right-column">
            <div className="contact-bullet-points">
              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon  icon="store" />
                </div>
                <div className="text">https://d4rkevgaming.live/</div>
              </div>

              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon  icon="link" />
                </div>
                <div className="text">https://www.facebook.com/d4rkdevGaming</div>
              </div>

              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon  icon="map-marker-alt" />
                </div>
                <div className="text">Naples, Florida</div>
              </div>
            </div>
          </div>
      </div>
  )
}
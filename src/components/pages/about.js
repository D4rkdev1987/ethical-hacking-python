import React from 'react'
import profilePicture from "../../../static/assets/images/bio/website_banner.png"
import { Repeat } from 'immutable'

export default function() {
  return (
      <div className="content-page-wrapper">
          <div className="left-column"
            style={{
              background: "url(" + profilePicture + ")  no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        

          <div className="right-column">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, facilis! Quibusdam,
          incidunt culpa repellendus quidem, facilis fugiat officia totam praesentium dignissimos,
          architecto excepturi consectetur! Est quisquam fuga ratione laboriosam neque. Dolor eaque
          quos, animi, unde voluptatum nam vero soluta commodi fugit magni architecto odit, nemo
          laudantium. Animi, hic, ab nemo voluptate soluta labore, inventore laudantiu
          </div>
      </div>
  )
}
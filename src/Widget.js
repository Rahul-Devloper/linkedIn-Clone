import React from 'react';
import { FiberManualRecord, Info } from '@mui/icons-material';
import './Widget.css'

const Widget = () => {

    const newsArticle = (heading, subtitle)=>(
        <div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    

  return (
      <div className="widget">
          <div className="widgets_header">
              <h2>LinkedIn News</h2>
              <Info />
          </div>
          {newsArticle('LinkedIn Clone', 'Made with React & Redux')}
          {newsArticle('LinkedIn Clone', 'Deployed in Firebase')}
          {newsArticle('LinkedIn Clone', 'Completely Reactive')}
      </div>
  )
};

export default Widget;

import React from 'react';

import './card.styles.scss';


const Card  = ({link, description, name}) => {

    return (
      <div className="card">
        <div className="card-title">
          <span>{name}</span>
        </div>

        <div className="card-description">
          <span>{description}</span>
        </div>

        <div className="card-link">
          <span>Use Template</span>
        </div>
      </div>
    );
};

export default Card;
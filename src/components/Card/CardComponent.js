import React from 'react';
import { Image } from 'semantic-ui-react';
import './CardComponent.scss';
const CardComponent = ({ item }) => {
  return (
    <div className="mainCard">
      <div className="cardTop">
        <Image src={item.image} fluid className="imageClass" />
      </div>
      <div className="cardBody">
        <p>{item?.title}</p>
      </div>
    </div>
  );
};

export default CardComponent;

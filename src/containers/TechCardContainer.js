import React, { useState } from 'react';
import CardComponent from '../components/Card/CardComponent';
import './index.scss';

// grid to hold cards
const TechCardContainer = () => {
  //save total item of card to be rendered
  const [totalItem, setTotalItem] = useState([
    { title: 'Node JS', image: require('../assets/images/nodejs6.png') },
    { title: 'React JS', image: require('../assets/images/reactjs6.jpg') },
    { title: 'Java', image: require('../assets/images/java1.png') },
    { title: 'Firebase', image: require('../assets/images/firebase2.png') },
    { title: 'Angular', image: require('../assets/images/angular1.jpg') },
    { title: 'React Native', image: require('../assets/images/reactnative6.jpg') },
    { title: 'AWS Web Services', image: require('../assets/images/aws4.png') },
    { title: 'Google Cloud Platforms', image: require('../assets/images/gcp2.png') },
  ]);

  const noOfRows = [...Array(Math.ceil(totalItem.length / 4))];
  const itemRows = noOfRows.map((row, idx) => totalItem.slice(idx * 4, idx * 4 + 4));
  const cardContainer = itemRows.map((row, idx) => (
    <div className="row" key={idx}>
      {row.map((item) => (
        <CardComponent item={item} />
      ))}
    </div>
  ));
  return <div>{cardContainer}</div>;
};

export default TechCardContainer;

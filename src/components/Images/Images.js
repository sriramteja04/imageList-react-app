import React from 'react';

import classes from './Images.module.css';
import ImageCard from '../ImageCard';

const Images = props => {
  const images = props.results.map(result => (
    <ImageCard key={result.id} image={result} />
  ));

  return <div className={classes.ImageList}>{images}</div>;
};

export default Images;

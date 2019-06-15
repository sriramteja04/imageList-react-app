import React from 'react';
import classes from './Images.module.css';

const Images = props => {
  const images = props.results.map(({ id, urls, description }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));

  return <div className={classes.ImageList}>{images}</div>;
};

export default Images;

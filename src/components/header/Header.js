import React from 'react';
import './header.scss';
// eslint-disable-next-line no-undef
const imgUrl = require('../../assets/avatar.jpg');

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <div>
      <img src={imgUrl} />
      <h1>Hello,</h1>
      <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      <br />
      <hr />
      <br />
    </div>
  );
};

import React from 'react';
import Table from '../table/Table';
import './paragraph.scss';

export default (title, type, content) => {
  if (type === 'table') {
    return (
      <p>
        <h3>{title}</h3>
        <h5>{Table(content)}</h5>
      </p>
    );
  } else if (type === 'introduce') {
    return (
      <p>
        <h3>{title}</h3>
        <h5 className="introduceContent">{content}</h5>
      </p>
    );
  }
};

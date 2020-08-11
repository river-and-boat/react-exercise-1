import React from 'react';
import './table.scss';

// eslint-disable-next-line react/display-name
export default (education) => {
  const resultTable = education.map((entry, index) => {
    return (
      <tr key={index}>
        <td className="year">{entry.year}</td>
        <td className="content">
          <h3 className="title">{entry.synopsis}</h3>
          <h4 className="contentFont">{entry.content}</h4>
        </td>
      </tr>
    );
  });
  return <table>{resultTable}</table>;
};

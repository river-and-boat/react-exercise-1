import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Paragraph from './components/paragraph/Paragraph';

class App extends Component {
  constructor() {
    super();
    this.state = [
      {
        year: 1990,
        synopsis: 'I was born in Katowice',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
      },
      {
        year: 2005,
        synopsis: 'Secondary school specializing in artistic',
        content:
          'Eos, explicabo, nam, tenetur et ab eius deserunt.' +
          ' aspernatur ipsum ducimus quibusdam quis voluptatibus.',
      },
      {
        year: 2009,
        synopsis: 'First level graduation in Graphic Design',
        content:
          'Aspernatur, mollitia, quos maxime elus suscipit sed beatae ducimus quaerat quibusdam perferendis?' +
          ' lustom, quibusdam asperiores unde repellat',
      },
      {
        year: 2012,
        synopsis: 'Second level graduation in Graphic Design',
        content: 'Ducimus, aliquam tempore autern itaque ' + 'et accisantium!',
      },
    ];
    this.staticIntroduce =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, ' +
      'cumque distincitio magni quam expedita velit laborum syuunt amet facere tempora ut fuga aliquyuam ad asperires volupatem doloruml! Quasi.';
  }

  render() {
    return (
      <main>
        <body className="app">
          {Header()}
          {Paragraph('ABOUT ME', 'introduce', this.staticIntroduce)}
          {Paragraph('EDUCATION', 'table', this.state)}
        </body>
        ;
      </main>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Card from './Card';

import profileImage from './images/profile.jpg';

import likeH from './images/hearth.svg';

var fecha = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          image={profileImage}
          imageAlt="Mi foto de perfil"
          name="Alex"
          date={fecha}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          likes={37}
          likeImg={likeH}
          />

          <Card
            image={profileImage}
            imageAlt="La foto de otro"
            name="Victor"
            date={fecha}
            text="Florem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            likes={12}
            likeImg={likeH}
            />
      </div>
    );
  }
}

export default App;

// Include React
import React, {Component} from 'react';

class Player extends Component {
    constructor(props) {
        super(props);

    }

    render() {

      <div>
        <img href="http://pre00.deviantart.net/c9ab/th/pre/i/2014/155/f/7/orc_cartoon_by_turnemsideways-d7l0ed0.jpg"></img>
        <div><p>HP: {this.props.enemy.HP}/{this.props.enemy.maxHP}</p></div>
      </div>
    }
  }

  module.exports = Player;

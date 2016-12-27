// Include React
import React, {Component} from 'react';

class Player extends Component {
    constructor(props) {
        super(props);

    }

    render() {

      <div>
        <img href="http://2.media.dorkly.cvcdn.com/10/60/ad186ff21b13f861fa80770bb83739c5-player-1-suit.jpg"></img>
        <div><p>HP: {this.props.player.HP}/{this.props.player.maxHP}</p></div>
      </div>
    }
  }

  module.exports = Player;

// Include React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as RPG from '../actions/rpgApp'

class Player extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <img src="http://2.media.dorkly.cvcdn.com/10/60/ad186ff21b13f861fa80770bb83739c5-player-1-suit.jpg"></img>
                <div>
                    <p>HP: {this.props.player.HP}/{this.props.player.maxHP}</p>
                </div>
                <button onClick={() => this.props.reducePlayerHP(this.props.player, 10)}>Attack!</button>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {player: state.player}
}

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators({addPlayerHP: RPG.addPlayerHP, reducePlayerHP: RPG.reducePlayerHP}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

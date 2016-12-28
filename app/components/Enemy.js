// Include React
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as RPG from '../actions/rpgApp'

class Enemy extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <img src="http://pre00.deviantart.net/c9ab/th/pre/i/2014/155/f/7/orc_cartoon_by_turnemsideways-d7l0ed0.jpg"></img>
                <div>
                    <p>HP: {this.props.enemy.HP}/{this.props.enemy.maxHP}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
  return {
    enemy: state.enemy
  }
}

export default connect(mapStateToProps)(Enemy);

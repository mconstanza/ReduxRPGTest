// Include React
import React, {Component} from 'react';
import Player from './Player';
import Enemy from './Enemy';

import * as actionCreators from '../actions/rpgApp';


const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    addHP: actionCreators.addHP,
    reduceHP: actionCreators.reduceHP
  }, dispatch)
}


class RPG extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron text-center">
                        <h2 className="text-center">RPG - Redux</h2>

                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <Player />

                        </div>

                        <div className="col-md-6">
                            <Enemy />
                        </div>
                    </div>

                    <div className="row"></div>

                </div>

            </div>
        )
    }
}

module.exports = RPG;

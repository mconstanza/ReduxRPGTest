// Include React
import React, {Component} from 'react';
import Player from './Player';
import Enemy from './Enemy';

class RPG extends Component {
    constructor(props) {
        super(props);

        this.state = {
          player: {
            maxHP: 100,
            HP: 100
          },
          enemy: {
            maxHP: 100,
            HP: 100
          }
        };
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
                            <Player player={this.state.player}/>

                        </div>

                        <div className="col-md-6"></div>
                    </div>

                    <div  className ="row">
                      <Enemy enemy={this.state.enemy}/>
                    </div>

                </div>

            </div>
        );
    }
}

module.exports = RPG;

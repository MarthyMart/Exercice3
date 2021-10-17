import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Competence extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Mes compétences</h1>
            <Widecard title="Plomberie" where="Dans les lavabos" from="Hier" to="Aujourd'hui"/>
            <Widecard title="Ventriloquie" where="Partout" from="Toujours" to="Jamais"/>
            <Widecard title="Escrime" where="En russie" from="1978" to="À ma mort"/>
            </div>
            )
        }
    }
    
export default Competence
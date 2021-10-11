import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Competence extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Mes compétences</h1>
            <Widecard title="Plombier" where="dans un lavabo" from="hier" to="aujourd'hui"/>
            <Widecard title="Ventriloque" where="En russie" from="toujours" to="jamais"/>
            </div>
            )
        }
    }
    
export default Competence
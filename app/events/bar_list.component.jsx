import React, {Component} from 'react'; 
import {Row,Col,Card,CardTitle} from 'react-materialize'; 

class BarsList extends Component {  
    constructor(){ 
        super(); 
    }  


    render()
        { 
            return ( 
                    <Row>
                        <ul className="collection">

                        {
                            this.props.bars.map((bar,i) =>
                            <li key={i} className="collection-item avatar">
                                <img src={bar.image_url} alt="" className="circle"/>
                                    <span className="title">{bar.name}</span>
                            </li>
                        )}
                        </ul>
                    </Row>
                     
            ); 
        } }

  export default BarsList;

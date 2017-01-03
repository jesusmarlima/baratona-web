import React, {Component} from 'react';
import Avatar from './avatar.component.jsx';
import Filter from './filter.component.jsx';
import BarList from './bar_list.component.jsx';



class NewEvent extends Component {

    constructor(){
        super();
        this.state = {
            errors: "",
            bars: []
        }
    }

    errors(){
        return <span className="color red">{this.state.errors}</span>
    }

    handleBarSearch(bars){
        this.setState({
            bars: bars.data
        })
    }

    render() {

        let bars = this.props.bars;
        return (
            <div>
                <div className="left_side">
                    <Avatar/>
                    <Filter bars={this.handleBarSearch.bind(this)}/>
                    <BarList bars={this.state.bars}/>
                </div>
            </div>
        );
    }
}

export default NewEvent;

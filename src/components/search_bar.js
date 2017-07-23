import React, { Component } from 'react';

// class based component
class SearchBar extends Component {

    // all class based components have their own state
    // you initialize the state in the constructor
    constructor(props){
        super(props); // you must call the super constructor first

        // this is the only time you assign state like this in the constructor
        // everywhere else you use this.setState
        this.state = { term: '' }; 
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                placeholder='search YouTube'
                value={ this.state.term }
                onChange={ event => this.onInputChange(event.target.value) }/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar
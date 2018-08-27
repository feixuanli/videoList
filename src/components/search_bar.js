import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };  
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={ event =>  this.onInputChange(event.target.value) }
                />
            </div>
        
        );
    }

    onInputChange(term) {
        //setstate
        this.setState({ term});
        //callback from parent
        this.props.onSearchTermChange(term);
    }
}

// const foo = '4';

export default SearchBar; 
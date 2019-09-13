import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

     handleChange = (event) => { // Arrow functions do not have their own "this" so the this will refer to the class itself
         this.setState({ searchTerm: event.target.value }); // Let's React know the current state of the properties contained in the state object
     }

     handleSubmit = (event) => {
         const { searchTerm } = this.state; // Destructuring for state objects
         const { onFormSubmit } = this.props; // Destructuring for props

         onFormSubmit(searchTerm); // Give the searchTerm to the App.js OnFormSubmit method

         event.preventDefault();  // A normal form on submission will refresh the page; You never want this in React. You want components to simply update upon changes
     }
    
    render(){
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;

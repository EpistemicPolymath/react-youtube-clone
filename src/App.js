import React from 'react';

import { Grid } from '@material-ui/core'; // The brackets mean that it is not a 'default' export

// import { SearchBar, VideoList, VideoDetail } from './components';
import { SearchBar, VideoDetail, VideoList } from './components'; // You do not have to specify index files in React

import youtube from './api/youtube'; // Youtube API
import env from './env.json';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (searchTerm) => { // Needs to be asynchronous because it will wait for a response from the Youtube API
        // Axios Instance of Fetch
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: env['keyAPI'],
                q: searchTerm // q stands for query
            }
        }); // We can use the response from the Youtube API to set our state object property values + send it to our VideoDetail Component
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }
    render (){
        const { selectedVideo, videos } = this.state; // Destructuring
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;
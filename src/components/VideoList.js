import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video}/>); // When you map over objects you need to provide a key (id of video)

    return (
        <Grid container spacing={10}>
           { listOfVideos }
        </Grid>
    );
}

export default VideoList;
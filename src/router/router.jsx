import React from 'react';
import Bundle from './Bundle-loader';
import loadHome from 'bundle-loader?lazy!../home/containers';
import loadGallery from 'bundle-loader?lazy!../gallery/containers';
import loadAbout from 'bundle-loader?lazy!../about/containers';

export const Home = (props) => (
    <Bundle load={loadHome}>
        {(Home) => <Home {...props}/>}
    </Bundle>
);

export const About = (props) => (
    <Bundle load={loadAbout}>
        {(About) => <About {...props}/>}
    </Bundle>
);

export const Gallery = (props) => (
    <Bundle load={loadGallery}>
        {(Gallery) => <About {...props}/>}
    </Bundle>
);

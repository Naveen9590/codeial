import React from 'react';
import PostList from './PostList';


function Home(props){
    console.log(props)
    return(
        <PostList posts={props.posts}/>

    )
}

export default Home;
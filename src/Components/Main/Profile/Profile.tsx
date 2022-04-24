import React from 'react';
import {InfoUser} from './InfoUser/InfoUser';
import {Myposts} from './Myposts/Myposts';
import {addPost} from '../../../Redux/State';



type PostsDataType = {
    postsData: Array<PostArray>
    addPost: (postMessage: string)=> void
}
type PostArray = {
    id: number
    post: string
    count: number
}

export const Profile = (props: PostsDataType) => {

    return (
        <>
            <InfoUser/>
            <Myposts addPost={addPost}
                     postsData={props.postsData}/>
        </>
    )
}
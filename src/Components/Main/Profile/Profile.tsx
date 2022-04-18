import React from 'react';
import {InfoUser} from './InfoUser/InfoUser';
import {Myposts} from './Myposts/Myposts';



type PostsDataType = {
    postsData: Array<PostArray>
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
            <Myposts postsData={props.postsData} />
        </>
    )
}
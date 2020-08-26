import React from 'react'
//import ReactDOM from "React-dom";
import PostListItem from '../Post-list-item/Post-list-item'
import './Post-list.css'

const PostList = ({posts, onDelete}) => {

    const el = posts.map((item) => {
        return(
             <li className="list-group-item">
                <PostListItem
                
                key={item.id}
                lable = {item.lable}
                important = {item.important} 
                onDelete={()=>(onDelete(item.id))}
                
                />
            </li>
        )
    })

    return(
        <ul className='app-list list-group'>
            {el}
            
        </ul>
    )
}

export default PostList
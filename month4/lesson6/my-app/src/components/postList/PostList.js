import React from "react";


function PostList({postsList, postInfo}){
    return(
        <div>
            <ul>
                
                {
                    postsList.length>0
                    ?
                postsList.map(post => <li key ={post.id}style={{marginBottom:"15 px"}}>{post.title} 
                <div>
                    <button onClick={postInfo}
                    data-id={post.id}>
                        post info
                    </button>
                </div>
                
                </li>)
                    
                    :
                    <li>
                        Данных нет
                    </li>
            }
            </ul>
        </div>
    );
}

export default PostList;
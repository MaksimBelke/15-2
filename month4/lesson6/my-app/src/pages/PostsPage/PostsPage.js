import react, { useState } from"react"
import PostsList from "../../components/postList/PostList"

function PostsPage(props) {

    const[posts, setposts]= useState([]);
    const[post, setpost]= useState({})


    const getPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setposts(data))

    }

    const postInfo = (e) => {
        const id = e.target.dataset.id;

        fetch(`https://jsonplaceholder.typicode.com/posts${id}`)
        .then(response => response.json())
        .then(data => setpost(data))

        console.log(id)
    }

    return (
        <div>
            <button onClick={getPosts}>
                get posts
            </button>

            <div>
                <h2>title: {post.title}</h2>
                <p>body: {post.body}</p>
            </div>
            <PostsList postsList={posts} postInfo={postInfo}/>
        </div>
    );
}

export default PostsPage;
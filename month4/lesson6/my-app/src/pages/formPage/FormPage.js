import React, { useState } from "react";

function FormPage(props){

    const[post,setPost] = useState({
        title:"",
        body:""
    })

    const changeInput = (e) =>{
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const addPost = (e)=>{
        e.preventDefault();
        if(!post.title || !post.body){
            if (!post.title){
                alert("Заполни поле title")

            }else{
                alert("Заполни поле body")
            }
            
        }
        else {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({title:post.title.trim(), body: post.body.trim() })
              });
        }
        console.log(post.body.trim())
        console.log(post.title.trim())
    }

    return(
        <form onSubmit={addPost}>
            <input
            type="text"
            placeholder="title"
            name="title"
            onChange={changeInput}
            />
            <input
            type="text"
            placeholder="body"
            name="body"
            onChange={changeInput}
            />
            <button type="submit">add post</button>
        </form>
    );
}

export default FormPage;
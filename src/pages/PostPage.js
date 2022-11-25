import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  let params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(res => res.json())
      .then(postData => {
        setPost(postData);
      })
  }, [params.postId]);

  return (
    <div>
      {!post ? <h1>Loading...</h1> : <h1>{post.title}</h1>}
    </div>
  )
}

export default PostPage
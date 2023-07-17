import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/postAction";
import { addUserLike } from "../actions/userAction";
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';


const Like = ({ post }) => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer)
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    const postData ={
      title: post.title,
      content: post.content,
      author: post.author,
      id: post.id,
      likes: 1 + parseInt(post.likes), // update the number of likes by adding
      liked: !liked,
      likes: liked ? parseInt(post.likes) - 1 : parseInt(post.likes) + 1,
      unliked: liked ? parseInt(post.likes) : parseInt(post.likes) - 1,
      
    };

    const userData ={
      author: user.pseudo,
      id: user.id,
      age: user.age,
      likes: 1 + parseInt(user.likes), // update the number of likes by adding
    };

    dispatch(addPostLike(postData));
    dispatch(addUserLike(userData));

  };

  return (
    <div>
      {/* <img onClick={() => handleLike()} src="./icons/clap.png" className="clap" alt="clap" /> */}
      
      <span onClick={() => handleLike()}>
        {liked ? <FcLike className="clap" /> : <FcLikePlaceholder className="clap" />}
      </span>
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/postAction";
import { addUserLike } from "../actions/userAction";


const Like = ({ post }) => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer)

  const handleLike = () => {
    const postData ={
      title: post.title,
      content: post.content,
      author: post.author,
      id: post.id,
      likes: 1 + parseInt(post.likes), // update the number of likes by adding
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
      <img onClick={() => handleLike()} src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;

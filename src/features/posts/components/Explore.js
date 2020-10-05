import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getAllPosts, clearPageCounter } from "../actions/postsActions";

const PostImage = styled.div`
  height: 41rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

function Explore() {
  const posts = useSelector((state) => state.posts.posts);
  const page = useSelector((state) => state.posts.page);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearPageCounter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getAllPosts({ page }));
  }, [dispatch, page]);

  return (
    <div>
      {posts.map((post) => (
        <PostImage key={post.id} imageUrl={post.imageUrl}></PostImage>
      ))}
    </div>
  );
}

export default Explore;

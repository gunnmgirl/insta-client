import React from "react";
import styled from "styled-components";
import { Heart, MessageCircle, Bookmark } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { heartPost, unheartPost, addComment } from "../actions/postsActions";

const MainContainer = styled.div`
  width: 38rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 3px;
  background-color: ${(props) => props.theme.primary};
  margin: 1.5rem 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
`;

const ProfileImage = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.6rem;
`;

const PostImage = styled.div`
  height: 41rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const StyledMessageCircle = styled(MessageCircle)`
  stroke-width: 2px;
  margin: 0 1rem;
  :hover {
    cursor: pointer;
  }
`;

const HeartIcon = styled(Heart)`
  stroke-width: 2px;
  :hover {
    cursor: pointer;
  }
  color: ${(props) => props.theme.onPrimary};
`;

const StyledHeartIcon = styled(HeartIcon)`
  fill: ${(props) => props.theme.onPrimary};
`;

const StyledBookmark = styled(Bookmark)`
  stroke-width: 2px;
  :hover {
    cursor: pointer;
  }
`;

const Options = styled.div`
  padding: 1rem 1rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
  width: 7rem;
  height: 1.8rem;
  font-size: 1rem;
  margin: 0.6rem 0;
  :hover {
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextare = styled.textarea`
  resize: none;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div``;

function Post({ post }) {
  const dispatch = useDispatch();
  const meId = useSelector((state) => state.users.me.id);
  const meUsername = useSelector((state) => state.users.me.username);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: (values, { resetForm }) => {
      const payload = {
        comment: values.comment,
        postId: post.id,
        meUsername: meUsername,
      };
      dispatch(addComment(payload, { formik }));
      resetForm();
    },
  });

  return (
    <MainContainer>
      <Header>
        <ProfileImage />
        <Wrapper>
          <span>
            {post.user.firstName} {post.user.lastName}
          </span>
          <span>{post.location}</span>
        </Wrapper>
      </Header>
      <PostImage imageUrl={post.imageUrl} />
      <Options>
        {post.hearts.find((heart) => Number(heart.userId) === meId) ? (
          <StyledHeartIcon
            onClick={() => dispatch(unheartPost({ postId: post.id }))}
          />
        ) : (
          <HeartIcon onClick={() => dispatch(heartPost({ postId: post.id }))} />
        )}
        <span>{post.hearts.length}</span>
        <StyledMessageCircle />
        <span>{post.comments.length}</span>
        <StyledBookmark />
      </Options>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledTextare
          name="comment"
          id="comment"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
        />
        <StyledButton
          type="submit"
          disabled={formik.isSubmitting}
          onClick={formik.handleSubmit}
        >
          Comment
        </StyledButton>
      </StyledForm>
      <Comments>
        {post.comments.map((comment) => (
          <Comment key={comment.id}>
            <span>{comment.user.username}</span>
            <div>{comment.body}</div>
          </Comment>
        ))}
      </Comments>
    </MainContainer>
  );
}

export default Post;

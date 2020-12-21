import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getMyPosts, editUser } from "../../users/actions/usersActions";
import Header from "./Header";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.surface};
`;

const ProfileImage = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 6rem;
  width: 6rem;
  margin-right: 2rem;
  border-radius: 50%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 3px;
  background-color: ${(props) => props.theme.primary};
  margin: 0.2rem 0;
  height: 1.4rem;
  font-family: "Roboto", sans-serif;
`;

const Container = styled.div`
  padding: 2rem 16rem;
`;

const UserInfo = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const UserPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;

const PostImage = styled.div`
  height: 15rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.secondary};
  height: 1.8rem;
  font-size: 1rem;
  margin: 0 0.2rem;
  margin-bottom: 2rem;
  margin-top: 0.4rem;
  :hover {
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
`;

const WrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

function UserProfile() {
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState(false);
  const me = useSelector((state) => state.users.me);

  React.useEffect(() => {
    dispatch(getMyPosts({ userId: me.id }));
  }, [dispatch, me.id]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: me.firstName,
      lastName: me.lastName,
      username: me.username,
      profileImage: me.profileImage,
    },
    onSubmit: (values) => {
      dispatch(editUser(values, { formik }));
      onCancel();
    },
    validationSchema,
  });

  function onCancel() {
    setEdit(false);
  }

  return (
    <MainContainer>
      <Header />
      <Container>
        <UserInfo>
          <ProfileImage imageUrl={me.profileImage} />
          <Wrapper>
            {edit ? (
              <StyledForm>
                <StyledLabel htmlFor="username">Username</StyledLabel>
                <StyledInput
                  type="text"
                  name="username"
                  id="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  autoFocus
                />
                <StyledLabel htmlFor="firstName">First name</StyledLabel>
                <StyledInput
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <StyledLabel htmlFor="lastName">Last name</StyledLabel>
                <StyledInput
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                <StyledLabel htmlFor="profileImage">Profile image</StyledLabel>
                <StyledInput
                  type="text"
                  name="profileImage"
                  id="profileImage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.profileImage}
                />
                <WrapperRow>
                  <StyledButton type="submit" onClick={formik.handleSubmit}>
                    Edit
                  </StyledButton>
                  <StyledButton type="submit" onClick={onCancel}>
                    Cancel
                  </StyledButton>
                </WrapperRow>
              </StyledForm>
            ) : (
              <Wrapper>
                <StyledButton onClick={() => setEdit(true)}>
                  Edit Profile
                </StyledButton>
                <span>{me.username}</span>
                <span>
                  {me.firstName} {me.lastName}
                </span>
              </Wrapper>
            )}
          </Wrapper>
        </UserInfo>
        <UserPosts>
          {me.posts
            ? me.posts.map((post) => (
                <PostImage key={post.id} imageUrl={post.imageUrl} />
              ))
            : null}
        </UserPosts>
      </Container>
    </MainContainer>
  );
}

export default UserProfile;

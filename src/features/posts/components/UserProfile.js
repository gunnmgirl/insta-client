import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getMyPosts } from "../../users/actions/usersActions";

const Container = styled.div``;

function UserProfile() {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.users.me);

  React.useEffect(() => {
    dispatch(getMyPosts({ userId: me.id }));
  }, [dispatch, me.id]);

  return <Container>UserProfile</Container>;
}

export default UserProfile;

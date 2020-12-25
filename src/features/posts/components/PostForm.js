import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { createPost } from "../actions/postsActions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.primary};
`;

function PostForm() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.me.username);

  const validationSchema = Yup.object().shape({
    imageUrl: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      imageUrl: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(createPost({ values, username }, { formik }));
      resetForm();
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit} data-cy="post-form">
      <label htmlFor="imageUrl">Image URL</label>
      <StyledInput
        type="text"
        name="imageUrl"
        id="imageUrl"
        data-cy="post-input"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.imageUrl}
      />
    </StyledForm>
  );
}

export default PostForm;

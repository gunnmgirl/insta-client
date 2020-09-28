import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { login } from "../actions/authActions";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.onPrimary};
  width: 50%;
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.onPrimary};
  height: 1.8rem;
  margin: 0.4rem 0;
`;

const StyledText = styled.span`
  color: ${(props) => props.theme.warning};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
  width: 14rem;
  height: 2rem;
  font-size: 1rem;
  margin: 0.6rem 0;
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-left: 0.4rem;
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
`;

const StyledHeader = styled.h2`
  margin-top: 2rem;
  margin-bottom: 0;
`;

function LogIn() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values, { formik }));
    },
    validationSchema,
  });

  return (
    <>
      <Container>
        <StyledHeader>Log in</StyledHeader>
        <Wrapper>
          <p>Don’t have an account yet?</p>
          <StyledLink to="/signup">Sign up</StyledLink>
        </Wrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <StyledText>{formik.errors.email}</StyledText>
          ) : null}
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <StyledText>{formik.errors.password}</StyledText>
          ) : null}
          <StyledButton
            type="submit"
            disabled={formik.isSubmitting}
            onClick={formik.handleSubmit}
          >
            Log in
          </StyledButton>
        </StyledForm>
      </Container>
    </>
  );
}

export default LogIn;

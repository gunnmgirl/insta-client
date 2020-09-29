import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Search as SearchIcon } from "react-feather";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  background-color: ${(props) => props.theme.surface};
  height: 1.6rem;
  width: 12rem;
`;

const StyledInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.surface};
  font-size: 1rem;
  width: 4rem;
  :focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  stroke-width: 1px;
`;

function Search() {
  const validationSchema = Yup.object().shape({
    search: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {},
    validationSchema,
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledSearchIcon size="1rem" />
      <StyledInput
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.search}
      />
    </StyledForm>
  );
}

export default Search;

import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSharedLayout = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: all 0.3s;
  color: black;
  &.active {
    color: #1f1fac;
    border-bottom: 2px solid #1f1fac;
  }
`;

export const StyledSearchBar = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;

  & button,
  & input {
    padding: 5px 10px;
  }

  & button {
    border: 1px solid #1f1fac;
    border-radius: 5px;
    background-color: #4242e5;
    color: aliceblue;
    cursor: pointer;
    min-width: 120px;

    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #2e2e9a;
    }
  }

  & input {
    border: 1px solid #ccc;
    outline: none;
    border-radius: 5px;

    &:focus {
      border-color: #1f1fac;
    }
  }
`;

export const StyledMovieDetails = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  & .backLink {
    padding: 15px;
  }

  & .main-detailes {
    display: flex;
    margin-bottom: 20px;

    & img {
      border-radius: 5px;
    }

    & div {
      padding: 20px;
    }
  }

  & .additional {
    & ul {
      display: flex;
      gap: 30px;
      margin-bottom: 30px;
      margin-top: 30px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  color: black;

  &:hover,
  &:focus {
    color: #1f1fac;
    border-bottom: 2px solid #1f1fac;
  }

  &:visited {
    color: blueviolet;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  margin-bottom: 10px;
  transition: all 0.3s;
  color: black;

  &:active,
  &:hover,
  &:focus {
    color: #1f1fac;
    border-bottom: 2px solid #1f1fac;
  }
`;

export const StyledFilmList = styled.ul`
  & li {
    padding: 5px 10px;
  }
`;

export const StyledCast = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  & img {
    width: 100%;
  }

  & .item {
    flex-basis: calc((100% - 80px) / 5);
  }
`;

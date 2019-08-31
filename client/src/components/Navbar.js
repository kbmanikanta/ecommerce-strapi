import React from 'react';
import { NavLink } from 'react-router-dom';
import { getToken } from '../utils';
import { Box, Text, Heading, Image, Button } from 'gestalt';
import './App.css';

const Navbar = () => {
  return getToken() !== null ? <AuthNav /> : <UnAuthNav />;
};

const AuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={60}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white">
        Checkout
      </Text>
    </NavLink>
    <Box display="flex" alignItems="center">
      <NavLink activeClassName="active" exact to="/">
        <Box margin={2} height={50} width={50}>
          <Image naturalHeight={1} naturalWidth={1} src="./icons/logo.svg" />
        </Box>
        <Heading size="xs" color="orange">
          Example
        </Heading>
      </NavLink>
    </Box>
    <Button color="transparent" text="Sign Out" inline size="md" />
  </Box>
);

const UnAuthNav = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={60}
      color="midnight"
      padding={1}
      shape="roundedBottom"
    >
      <NavLink activeClassName="active" to="/signin">
        <Text size="xl" color="white">
          Sign In
        </Text>
      </NavLink>
      <Box display="flex" alignItems="center">
        <NavLink activeClassName="active" exact to="/">
          <Box margin={2} height={50} width={50}>
            <Image naturalHeight={1} naturalWidth={1} src="./icons/logo.svg" />
          </Box>
          <Heading size="xs" color="orange">
            Example
          </Heading>
        </NavLink>
      </Box>
      <NavLink activeClassName="active" to="/signup">
        <Text size="xl" color="white">
          Sign Up
        </Text>
      </NavLink>

      <NavLink to="/signin">
        <Text size="xl" color="white">
          Checkout
        </Text>
      </NavLink>
    </Box>
  );
};

export default Navbar;

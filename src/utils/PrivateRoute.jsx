import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (localStorage.getItem('token')) return <Component {...props} />;
      return <Redirect to="/login" />;
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
  ]).isRequired,
};

export default PrivateRoute;

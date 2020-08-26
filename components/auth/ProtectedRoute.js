import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { connect } from 'react-redux';

export default function ProtectRoute(props) {
  return () => {
    const router = useRouter();

    useEffect(() => {
      if (!props.auth.data && !props.auth.loading) Router.push('/');
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(ProtectRoute);

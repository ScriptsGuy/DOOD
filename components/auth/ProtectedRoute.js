import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

export function ProtectRoute(Component) {
  return () => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) Router.push('/login');
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}

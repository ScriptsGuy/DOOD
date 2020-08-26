import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

import { useStore } from '../../redux/store';

export function ProtectRoute(Component) {
  const store = useStore();

  return () => {
    useEffect(() => {
      if (!store.getState().auth.data && !store.getState().auth.loading) Router.replace('/');
    }, [store]);

    return <Component {...arguments} />;
  };
}

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../../app/providers/storeProvider/StoreProvider.tsx';
import { AvailablePagesEnum } from '../../../shared/config/availablePages.ts';

export function useInitNavigate() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authStore } = useStore();
  const isAuth = authStore.isAuth;

  useEffect(() => {
    if (!isAuth && pathname !== `/${AvailablePagesEnum.AUTHORIZATION}`)
      navigate('/' + AvailablePagesEnum.AUTHORIZATION);
  }, []);
}

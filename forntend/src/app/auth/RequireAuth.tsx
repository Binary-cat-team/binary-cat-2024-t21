import { Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AvailablePagesEnum } from '../../shared/config/availablePages.ts';
import { AppRoutesProps } from '../providers/routerProvider/model/types.ts';
import { useStore } from '../providers/storeProvider/StoreProvider.tsx';

interface RequireAuthProps {
  route: AppRoutesProps;
}

export function RequireAuth({ route }: RequireAuthProps) {
  const location = useLocation();
  const { currentUserStore } = useStore();
  const user = currentUserStore.userData;
  const userHasAccess = true;

  if (!user) {
    return <Navigate to={`/${AvailablePagesEnum.AUTHORIZATION}`} state={{ from: location }} replace />;
  }

  if (!userHasAccess) {
    return <Navigate to={`/${AvailablePagesEnum.FORBIDDEN}`} />;
  }

  return <Suspense fallback={''}>{route.element}</Suspense>;
}

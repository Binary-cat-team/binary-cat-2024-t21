import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { RequireAuth } from '../../auth/RequireAuth.tsx';
import { routeConfig } from '../../../shared/config/routeConfig.tsx';
import { Login } from '../../../pages/login';
import { useStore } from '../storeProvider/StoreProvider.tsx';
import { useInitNavigate } from '../../../entities/auth/model/useInitNavigate.tsx';
import { observer } from 'mobx-react-lite';

export const AppRouter = observer(() => {
  useInitNavigate();
  const { currentUserStore } = useStore();
  const user = currentUserStore.userData;

  return (
    <Routes>
      {user &&
        routeConfig?.map((route: any) => (
          <Route
            {...route}
            key={route.path || '/'}
            element={route.authOnly ? <RequireAuth route={route} /> : <Suspense>{route.element}</Suspense>}
          >
            {route.innerRoutes &&
              route.innerRoutes.map((routeItem: RouteProps) => (
                <Route {...routeItem} key={routeItem.path || '/'} element={routeItem.element} />
              ))}
          </Route>
        ))}
      <Route
        path={`/login`}
        element={
          <Suspense>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  );
});

import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/routerProvider/AppRouter.tsx';
import { useCheckCurrentUser } from '../entities/auth/model/useCheckCurrentUser.tsx';
import { useStore } from './providers/storeProvider/StoreProvider.tsx';

const App = observer(() => {
  const { authStore } = useStore();
  const isAuth = authStore.isAuth;
  const { getCurrentUser } = useCheckCurrentUser();

  useEffect(() => {
    if (isAuth) getCurrentUser();
    else authStore.initAuth();
  }, [isAuth]);

  return <BrowserRouter>{isAuth !== null && <AppRouter />}</BrowserRouter>;
});

export default App;

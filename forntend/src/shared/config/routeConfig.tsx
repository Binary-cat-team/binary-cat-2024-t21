import { AvailablePagesEnum } from './availablePages.ts';
import { StatusCode } from '../constants/StatusCode.ts';
import { ErrorStatus } from '../../pages/errorStatus';
import { Dashboard } from '../../pages/dashboard';
import { AppRoutesProps } from '../../app/providers/routerProvider/model/types.ts';

export const routeConfig: AppRoutesProps[] = [
  { path: AvailablePagesEnum.NOT_FOUND, element: <ErrorStatus status={StatusCode.NotFound} /> },
  { path: AvailablePagesEnum.FORBIDDEN, element: <ErrorStatus status={StatusCode.Forbidden} />, authOnly: true },
  {
    path: AvailablePagesEnum.INTERNAL_SERVER_ERROR,
    element: <ErrorStatus status={StatusCode.InternalServerError} />,
    authOnly: true,
  },
  { path: AvailablePagesEnum.MAINTENANCE, element: <ErrorStatus status={'maintenance'} />, authOnly: true },

  { path: AvailablePagesEnum.MAIN, element: <Dashboard />, authOnly: true },
];

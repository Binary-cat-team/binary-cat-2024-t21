import { useEffect, useState } from 'react';
import axiosInstance from '../../../shared/constants/axiosInstance.ts';
import { useStore } from '../../../app/providers/storeProvider/StoreProvider.tsx';

export function useCheckCurrentUser() {
  const { currentUserStore } = useStore();
  const [userData, setUserData] = useState<any>(null);
  const fetchCurrentUser = async () => {
    try {
      await axiosInstance.get('/Users/check'); // TODO: url
      setUserData('test');
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    if (userData) currentUserStore.setUserData(userData);
  }, [userData]);

  const getCurrentUser = async () => {
    try {
      await fetchCurrentUser();
    } catch (e) {
      localStorage.removeItem('token');
      window.location.replace(`${window.location.origin}/login`);
    }
  };

  return { getCurrentUser };
}

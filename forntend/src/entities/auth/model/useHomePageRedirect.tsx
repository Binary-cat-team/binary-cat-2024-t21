import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useHomePageRedirect = (user: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);
};

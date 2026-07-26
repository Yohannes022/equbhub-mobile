import { useEffect, useState } from 'react';
import AuthService from '../services/auth/AuthService';
import { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthService.currentUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  return {
    user,
    loading,
    isLoggedIn: !!user,
    logout,
  };
}
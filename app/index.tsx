import { Redirect } from 'expo-router';
import { useAuthContext } from '../src/store/AuthContext';
import Loading from '../components/Loading';

export default function Index() {
  const { loading, isLoggedIn } = useAuthContext();

  if (loading) return <Loading />;

  return isLoggedIn ? (
    <Redirect href='/home' />
  ) : (
    <Redirect href='/auth/login' />
  );
}
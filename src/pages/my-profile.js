import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import UserProfile from '../components/UserProfile'

export default function myProfile() {

  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/login');
    }
  }, [user, isLoading])

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Log In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: '100%' }}>
        {user &&
          <>
            <UserProfile user={user} />
          </>
        }

      </main>

    </>
  )
}
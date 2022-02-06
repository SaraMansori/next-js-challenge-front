import Head from 'next/head';
import LogInForm from '../components/LogInForm'


export default function login() {
  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Log In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: '100%' }}>
        <LogInForm />
      </main>

    </>
  )
}
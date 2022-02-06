import Head from 'next/head';
import SignUpForm from '../components/SignUpForm'

export default function signUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: '100%' }}>
        <SignUpForm />
      </main>

    </>
  )
}
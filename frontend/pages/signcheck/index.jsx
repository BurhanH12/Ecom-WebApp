import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';

const SignCheck = () => {
  const { data, status } = useSession();

  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === 'authenticated') {
    return (
      <div>
        <h1> Hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + ' photo'} />
        <button onClick={signOut}>sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn('google')}>sign in with gooogle</button>
    </div>
  );
}

export const getServersideProps = () => {
  return {
 props:{
  session:"// define logic to get user session here, this will be part of pageProps in _app.js"
 //...
   }
  }
 }

export default SignCheck


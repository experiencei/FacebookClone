import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/header/Header'
import Login from '../components/login/Login';
import Sidebar from '../components/sidebar/Sidebar';

export default function Home({ session}) {

  if(!session)  return <Login/>;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>
      <main className="flex">
        <Sidebar/>
      </main>
    </div>
  );
}


export async function getServerSideProps(context){
   const session = await getSession(context);

   return {
     props : {
       session
     }
   }
}
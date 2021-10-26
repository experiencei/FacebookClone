import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Feed from '../components/feed/Feed';
import { db } from '../components/firebase/firebase';
import Header from '../components/header/Header'
import Login from '../components/login/Login';
import Sidebar from '../components/sidebar/Sidebar';
import Widgets from '../components/widgets/Widgets';

export default function Home({ session , posts}) {

  if(!session)  return <Login/>;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>
      <main className="flex">
        <Sidebar/>
        <Feed posts={posts}/>
        <Widgets/>
      </main>
    </div>
  );
}


export async function getServerSideProps(context){
   const session = await getSession(context);
   //prefectch post before server side
   const posts = await db.collection("posts").orderBy("timestamp" , "desc").get();

     const docs = posts.docs.map( post =>({
       id : post.id,
       ...post.data(),
       timestamp : null
     }))
   return {
     props : {
       session, 
       posts : docs,
     }
   }
}
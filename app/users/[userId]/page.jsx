import getUser from "../../lib/getUser";
import getAllUsers from "../../lib/getAllUsers";
import getUserPosts from "../../lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import Link from 'next/link';
import { notFound } from 'next/navigation';


export async function generateMetadata({params:{userId}}) {
    const userData = getUser(userId);
    const user = await userData;
    if (user === undefined) {
      return(
        {
          title: 'User Not Found'
        }

      )
    }
  return {
    title: user.name,
    description: `Page for ${user.description}`,

  }
}


export default async function UserPage({params:{userId}}) {
    const userData = getUser(userId);
    const userPostsData = getUserPosts(userId);
    // const [user,userPosts]= await Promise.all([userData, userPostsData]);
    const user = await userData;
    if (user === undefined){
      return notFound();
    }

  return (
    <>
    <Link href="/users" className="">Go back to users</Link>
    <h2>{user.name}</h2>
    <br/>
    <Suspense fallback={<h1>Loading...</h1>}>
    <UserPosts promise={userPostsData}/>
    </Suspense>
    </>
  )
}



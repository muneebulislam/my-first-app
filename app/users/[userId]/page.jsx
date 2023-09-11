import getUser from "../../lib/getUser";
import getAllUsers from "../../lib/getAllUsers";
import getUserPosts from "../../lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RemoveProduct from "@/app/components/RemoveProduct";

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

  };
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
    <h1 className="font-bold text-center font-size-12 ">{user.name}</h1>
    <br/>
    <Suspense fallback={<h1>Loading...</h1>}>
    <UserPosts promise={userPostsData}/>
    </Suspense>
    </>
  )
}



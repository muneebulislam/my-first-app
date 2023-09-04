
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
export default async function UsersPage() {
    const usersData =  getAllUsers();
    const users = await usersData;
    const usersContent = <section>
       {users.map(user =>{
        return <>

        <ul key={user.id}> 
        <Link href={`/users/${user.id}`}>{user.name}</Link>
        </ul>
        <br/>

        </>
       })} 

    </section>
  return usersContent
}

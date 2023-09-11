export default async function getUserPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{ next: { revalidate: 60 } });
    if (!res.ok) throw undefined;
  return res.json();
}


export default async function getAllUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!users.ok) return undefined;
  return users.json();
}

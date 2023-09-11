

export default async function UserPosts({promise}) {
    const posts = await promise;
    const content = posts.map((post) =>{
        return (
            <article key={post.id}>
                <h1 className="ml-3 underline decoration-solid text-center text- fondt-normal hover:font-bold">{post.title}</h1>
                <p className="ml-3 text-left">{post.body}</p>
            </article>
        )
    })
  return content;
}

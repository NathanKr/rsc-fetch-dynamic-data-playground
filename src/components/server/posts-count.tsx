
async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com1/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  return posts.length;
}

export default async function PostsCount() {
  const postCount = await fetchPosts();

  return (
    <div>
      <h1>Number of Posts</h1>
      <p>There are {postCount} posts.</p>
    </div>
  );
}

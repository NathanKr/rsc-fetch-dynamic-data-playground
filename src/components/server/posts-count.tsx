import { GOOD_POSTS_URL} from "@/utils/constants";
import { pauseMs } from "@/utils/utils";

async function fetchPosts() {
  await pauseMs(2000); // --- pause just so we can see loader
  const res = await fetch(GOOD_POSTS_URL);
  
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

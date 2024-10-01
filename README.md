<h2>Project Description</h2>
............

<h2>Motivation</h2>
In the first two references <a href='#ref1'>[1]</a> , <a href='#ref2'>[2]</a> we gather info on rsc vs rcc for 'hello world' and static data fetch (ssg). Now its time to fetch data dynamically (ssr) using rsc. In ssg (build time) there is no need for our code to handle error and loading state but in ssr it is required for good ux. But 

<ul>
<li>how to do it in next.js ??</li>
<li>how to handle error in server component ??</li>
<li>what if you dont handle error in server component ??</li>
<li>how to handle loading in server component ??</li>
</ul>


<h2>Installation</h2>

```bash
pnpm i
```


<h2>Usage</h2>

```bash
pnpm run dev
```
use fetch with BAD_POSTS_URL to issue an error

<h2>Home page</h2>

```ts

export default function Home() {
  return (
    <div>
      <PostsCount/>
    </div>
  );
}
```

<h2>PostsCount - react server component</h2>
React server component

```ts
async function fetchPosts() {
  await pauseMs(2000); // --- pause just so we can see loader
  const res = await fetch(GOOD_POSTS_URL);
  if (!res.ok) throw new Error('Failed to fetch posts');
  
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

```

<h2>loading.tsx</h2>
in Home page directory
called by next.js framework as long as PostsCount did not finished

```ts
const Loading: FC = () => {
  return <p>Loading...</p>;
};
```


<h2>error.tsx</h2>
in Home page directory
called by next.js framework when PostsCount throw exception

```ts
const Error: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};
```


<h2>Demo - Loading</h2>

<img src='./figs/loading.png'/>

<h2>Demo - After Loading</h2>
<img src='./figs/after-loading.png'/>

<h2>Error</h2>
<img src='./figs/error.png'>


<h2 id="points-of-interest">Points of Interest</h2>
<ul>
    <li>why error.tsx has "use client"</li>
</ul>

<h2 id="references">References</h2>
<ul>
    <li id='ref1'><a href='https://youtu.be/7WhcpereZkQ'>Mastering Server vs. Client Components in Next.js! </a></li>
    <li id='ref2'><a href='https://youtu.be/ck8ZEuPmhSM'> RSC vs RCC: Data Fetching Showdown (with Code Examples) </a></li>
</ul>


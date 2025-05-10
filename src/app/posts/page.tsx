'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../lib/fetchPosts';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostsPage() {
  const { data, error, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching posts:', error);
    return <p>Error loading posts</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {data?.map((post) => (
          <li key={post.id} className="border p-4 rounded">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

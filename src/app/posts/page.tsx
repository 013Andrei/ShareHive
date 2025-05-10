'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../lib/fetchPosts';// Use @ if path alias is configured

export default function PostsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {data.map((post: any) => (
          <li key={post.id} className="border p-4 rounded">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

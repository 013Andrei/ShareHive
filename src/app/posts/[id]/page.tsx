'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

type Post = {
  id: number;
  title: string;
  body: string;
};

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

const fetchPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
};

const fetchComments = async (id: string): Promise<Comment[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  if (!res.ok) throw new Error('Failed to fetch comments');
  return res.json();
};

export default function PostPage() {
  const { id } = useParams();

  const { data: post, isLoading: postLoading, error: postError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id as string),
    enabled: !!id,
  });

  const { data: comments, isLoading: commentsLoading, error: commentsError } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchComments(id as string),
    enabled: !!id,
  });

  if (postLoading || commentsLoading) return <p>Loading...</p>;
  if (postError || commentsError) return <p>Error loading post</p>;
  if (!post || !comments) return <p>No data found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.body}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border p-4 rounded">
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-gray-500">{comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

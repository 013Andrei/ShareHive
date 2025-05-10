'use client';

import { useQuery } from '@tanstack/react-query';

type User = {
  id: number;
  name: string;
  username: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export default function UsersPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-4">
        {data?.map((user) => (
          <li key={user.id} className="border p-4 rounded">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <a
              href={`/users/${user.id}`}
              className="text-blue-600 hover:underline text-sm"
            >
              View Profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

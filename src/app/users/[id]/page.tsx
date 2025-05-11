"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchUser = async (id: string): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

const fetchUserPosts = async (id: string): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function UserProfilePage() {
  const { id } = useParams();

  const {
    data: user,
    error: userError,
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id as string),
    enabled: !!id,
  });

  const {
    data: posts,
    error: postError,
    isLoading: postLoading,
  } = useQuery({
    queryKey: ["userPosts", id],
    queryFn: () => fetchUserPosts(id as string),
    enabled: !!id,
  });

  if (userLoading || postLoading) return <p>Loading profile...</p>;
  if (userError || postError) return <p>Error loading user profile</p>;
  if (!user || !posts) return <p>No data found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        {user.name} (@{user.username})
      </h1>
      <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
      </div>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>
        Address: {user.address.street}, {user.address.city}
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Google Map</h2>
        <iframe
          title="Google Map"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&z=15&output=embed`}
        ></iframe>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Posts by {user.name}</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

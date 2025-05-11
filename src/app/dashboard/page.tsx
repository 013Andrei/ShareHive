'use client';

import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
const fetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
const fetchComments = () => fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());

export default function DashboardPage() {
  const { data: users } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const { data: posts } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });
  const { data: comments } = useQuery({ queryKey: ['comments'], queryFn: fetchComments });

  const userCount = users?.length || 0;
  const postCount = posts?.length || 0;
  const commentCount = comments?.length || 0;

  const chartOptions = {
    chart: { id: 'totals' },
    xaxis: { categories: ['Users', 'Posts', 'Comments'] },
    colors: ['#facc15'],
  };

  const chartSeries = [
    {
      name: 'Total',
      data: [userCount, postCount, commentCount],
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
}


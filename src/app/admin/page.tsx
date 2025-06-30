"use client";

import { FiFileText, FiMessageSquare, FiUsers } from "react-icons/fi";
import { HiOutlineCollection } from "react-icons/hi";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { useAuthStore } from "@/hooks/useAuthStore";
import { getStats } from "@/services/stats";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/posts";
import { Post } from "@/types/models";
import PostsTable from "@/components/admin/PostsTable";
import StatCard from "@/components/admin/StatCard";

const AdminPage = () => {
  const auth = useAuthStore();
  const [stats, setStats] = useState<Awaited<
    ReturnType<typeof getStats>
  > | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        if (!auth.token) {
          console.error("No authentication token found");
          return;
        }
        const stats = await getStats(auth.token);
        setStats(stats);
        const articles = await getPosts({
          select: {
            title: true,
            category: true,
            published: true,
            published_date: true,
          },
          relations: ["category"],
          limit: 5,
        });
        setPosts(articles.docs);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [auth.token]);

  const statCards = [
    {
      title: "Total Posts",
      value: stats?.totalPosts || 0,
      icon: <FiFileText className="w-6 h-6 text-primary" />,
    },
    {
      title: "Categorías",
      value: stats?.totalCategories || 0,
      icon: <HiOutlineCollection className="w-6 h-6 text-primary" />,
    },
    {
      title: "Usuarios",
      value: stats?.totalUsers || 0,
      icon: <FiUsers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Comentarios",
      value: stats?.totalComments || 0,
      icon: <FiMessageSquare className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">Dashboard</h2>
          <p className="text-gray-600">Bienvenido al panel de administración</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card) => (
            <StatCard
              key={card.title}
              title={card.title}
              value={card.value}
              icon={card.icon}
              loading={loading}
            />
          ))}
        </div>

        <PostsTable posts={posts} />
      </div>
    </DashboardLayout>
  );
};

export default AdminPage;

"use client";

import { Post } from "@/types/models";
import { getPosts } from "@/services/posts";
import { useEffect, useState } from "react";
import PostsTable from "@/components/admin/PostsTable";
import DashboardLayout from "@/components/admin/DashboardLayout";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
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
  }, []);

  const handleEdit = (postId: number) => {};

  const handleDelete = (postId: number) => {};

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            
          </div>
          <div>
            <button className="px-4 py-2 bg-primary text-white rounded hover:scale-105 transition">
              Crear nuevo post
            </button>
          </div>
        </div>
        <PostsTable posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </DashboardLayout>
  );
}

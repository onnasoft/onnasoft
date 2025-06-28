"use client";

import Link from "next/link";
import { Post } from "@/types/models";
import { getPosts } from "@/services/posts";
import { useEffect, useState } from "react";
import PostsTable from "@/components/admin/PostsTable";
import DashboardLayout from "@/components/admin/DashboardLayout";
import Pagination from "@/components/admin/Pagination";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching posts...");
        const articles = await getPosts({
          select: {
            title: true,
            category: true,
            published: true,
            published_date: true,
          },
          relations: ["category"],
          limit: 5,
          page: currentPage,
        });
        setPosts(articles.docs);
        setTotalPages(articles.totalPages || 1);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleEdit = (postId: number) => {};

  const handleDelete = (postId: number) => {};

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div></div>
          <div>
            <Link
              href="/admin/posts/create"
              className="px-4 py-2 bg-primary text-white rounded hover:scale-105 transition"
            >
              Crear nuevo post
            </Link>
          </div>
        </div>
        <PostsTable posts={posts} onEdit={handleEdit} onDelete={handleDelete} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </DashboardLayout>
  );
}

"use client";

import DashboardLayout from "@/components/admin/DashboardLayout";

export default function PostsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <p className="mb-4">
          Aquí puedes gestionar los posts de tu blog. Puedes ver los posts más
          recientes, crear nuevos posts y administrar las categorías.
        </p>
      </div>
    </DashboardLayout>
  );
}

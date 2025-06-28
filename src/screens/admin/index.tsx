import { FiFileText, FiMessageSquare, FiUsers } from "react-icons/fi";
import { HiOutlineCollection } from "react-icons/hi";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { useAuthStore } from "@/hooks/useAuthStore";
import { getStats } from "@/services/stats";
import { useEffect, useState } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  loading: boolean;
}

const StatCard = ({ title, value, icon, loading }: StatCardProps) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div className="flex items-center">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">
          {loading ? "Cargando..." : value}
        </p>
      </div>
      <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
  </div>
);

interface RecentPost {
  title: string;
  category: string;
  status: string;
  date: string;
  statusColor: "primary" | "success" | "warning" | "danger";
  categoryColor: "primary" | "success" | "warning" | "danger";
}

const RecentPostsTable = () => {
  const posts: RecentPost[] = [
    {
      title: "Introducción a React",
      category: "Tecnología",
      status: "Publicado",
      date: "2024-01-15",
      statusColor: "success",
      categoryColor: "primary",
    },
    {
      title: "Guía de Tailwind CSS",
      category: "Diseño",
      status: "Borrador",
      date: "2024-01-14",
      statusColor: "warning",
      categoryColor: "danger",
    },
    {
      title: "Mejores Prácticas de UX",
      category: "UX/UI",
      status: "Publicado",
      date: "2024-01-13",
      statusColor: "success",
      categoryColor: "success",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "success":
        return "bg-success/10 text-success";
      case "warning":
        return "bg-warning/10 text-warning";
      case "danger":
        return "bg-danger/10 text-danger";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Posts Recientes</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Título
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.title}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {post.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold ${getColorClasses(post.categoryColor)} rounded-full`}
                  >
                    {post.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold ${getColorClasses(post.statusColor)} rounded-full`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ContentHeader = () => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
    <p className="text-gray-600">Bienvenido al panel de administración</p>
  </div>
);

const AdminPage = () => {
  const auth = useAuthStore();
  const [stats, setStats] = useState<Awaited<
    ReturnType<typeof getStats>
  > | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        if (!auth.token) {
          console.error("No authentication token found");
          return;
        }
        const data = await getStats(auth.token);
        setStats(data);
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
        <ContentHeader />

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

        <RecentPostsTable />
      </div>
    </DashboardLayout>
  );
};

export default AdminPage;

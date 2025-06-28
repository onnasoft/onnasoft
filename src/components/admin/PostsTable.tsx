import { Post } from "@/types/models";
import { Button } from "@/components/ui/button";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface PostsTableProps {
  posts: Post[];
  onEdit?: (postId: number) => void;
  onDelete?: (postId: number) => void;
}

const PostsTable = ({ posts, onEdit, onDelete }: PostsTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="overflow-x-auto h-[600px]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Título
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              {(onEdit || onDelete) && (
                <th className="relative px-6 py-3">
                  <span className="sr-only">Acciones</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-wrap">
                  <div className="font-medium text-gray-900">{post.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <span className="inline-flex px-2 py-1 font-semibold bg-primary/10 text-primary rounded-full">
                    {post.category?.name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <span
                    className={`inline-flex px-2 py-1 font-semibold rounded-full ${
                      post.published
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.published ? "Publicado" : "Borrador"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 align-top">
                  {post.published_date
                    ? new Date(post.published_date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No publicado"}
                </td>
                {(onEdit || onDelete) && (
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2 align-top">
                    {onEdit && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-primary hover:bg-primary/10"
                        onClick={() => onEdit(post.id)}
                      >
                        <FiEdit className="h-4 w-4" />
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600 hover:bg-red-100"
                        onClick={() => onDelete(post.id)}
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;

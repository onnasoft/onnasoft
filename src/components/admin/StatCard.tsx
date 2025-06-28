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
        <p className=" font-medium text-gray-600">{title}</p>
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

export default StatCard;

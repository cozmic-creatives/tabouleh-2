import React from "react";
import { LucideIcon } from "lucide-react";

interface OrderingOptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const OrderingOptionCard: React.FC<OrderingOptionCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white/95 p-6 rounded-lg shadow-md border border-spice-200 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-spice-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-spice-600" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default OrderingOptionCard;


import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface OrderButtonProps {
  text?: string;
  className?: string;
  icon?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

const OrderButton = ({
  text = "Nu Bestellen",
  className = "",
  icon = true,
  size = "default",
}: OrderButtonProps) => {
  return (
    <Button
      asChild
      size={size}
      className={`bg-spice-600 hover:bg-spice-700 ${className}`}
    >
      <Link to="/contact" className="flex items-center">
        {icon && <Phone size={16} />}
        {text}
      </Link>
    </Button>
  );
};

export default OrderButton;

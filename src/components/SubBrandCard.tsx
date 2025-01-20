import { Link } from "react-router-dom";

interface SubBrandCardProps {
  title: string;
  description: string;
  path: string;
  imageUrl: string;
}

const SubBrandCard = ({ title, description, path, imageUrl }: SubBrandCardProps) => {
  return (
    <Link
      to={path}
      className="group relative overflow-hidden rounded-xl bg-black text-white hover:scale-105 transition-transform duration-300"
    >
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
        />
      </div>
      <div className="relative p-6 h-full flex flex-col justify-end">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SubBrandCard;
import { Link } from "react-router-dom";
function CategoryItem({ category }) {
  return (
    <div className="overflow-hidden h-96 w-full rounded-2xl group relative">
      <Link to={"/category" + category.href}>
        <div className="w-full h-full cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-gray-900 opacity-50 z-10">
            <img
              src={category.img}
              alt={category.name}
              className="h-full w-full objet-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h2 className="text-white text-2xl font-bold mb-2">{category.name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default CategoryItem;

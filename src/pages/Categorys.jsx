import manClothes from "../assets/manClothes.jpg";
import womenClothes from "../assets/womenClothes.jpg";
import electronic from "../assets/electronic.jpg";
import jewelery from "../assets/jewelery.jpg";
import CategoryItem from "../components/CategoryItem";

function Categorys() {
  const categories = [
    { href: "/man's clothing", name: "man's clothing", img: manClothes},
    { href: "/women's clothing", name: "women's clothing", img: womenClothes},
    { href: "/electronic", name: "electronic", img: electronic},
    { href: "/jewelery", name: "jewelery", img: jewelery},
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gray-700 pt-16 ">
      <div className="relative z-10 mx-auto max-w-7x1 mb-8">
            <h1 className="text-emerald-400 text-center text-5xl font-bold mb-4">Categories</h1>

        <p className="text-center text-x1 text-gray-300 mb-12">Discover the latest trends</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
                <CategoryItem category ={category} key ={category.name} />
            ))}
        </div>
      </div>
    </div>
  );
}
export default Categorys;

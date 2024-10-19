/* eslint-disable react/prop-types */


const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <button
      id={`btn-${category.category}`}
      onClick={onClick}
      className={`${isActive ? "active" : "deActive"} flex gap-2 px-4 items-center justify-center py-2 border border-[#0e7a86] hover:bg-[#0e7a86] hover:text-white transition duration-100 ease-in-out`}
    >
      <img src={category.category_icon} alt={category.category} className="h-10 w-10"/>
      <p>{category.category}</p>
    </button>
  );
};

export default CategoryButton;

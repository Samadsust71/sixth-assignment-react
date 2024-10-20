import { useState, useEffect } from "react";
import CategoryButton from "./components/CategoryButton";
import PostCard from "./components/PostCard";
import LoadingSpinner from "./components/LoadingSpinner";

const WebMain = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [addLikedImage,setAddLikedImage]=useState([])

  // Fetch categories on initial load
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/peddy/categories"
        );
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    loadCategories();
  }, []);

  

  // Fetch posts (either all or filtered by category)
  const loadPosts = (category = "") => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const url = category
          ? `https://openapi.programming-hero.com/api/peddy/category/${category}`
          : "https://openapi.programming-hero.com/api/peddy/pets";
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data.pets || data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  // handle add Liked image 
  const handleAddImage = (post)=>{
    const{image}=post
    const newLikedImage = [...addLikedImage,image]
   setAddLikedImage(newLikedImage)
  }

  // Handle category selection
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    loadPosts(category);
  };

  // Handle sorting by price
  const handleSortByPrice = () => {
    const sortedPosts = [...posts].sort((a, b) => b.price - a.price);
    setPosts(sortedPosts);
  };

  // Load all posts on initial load
  useEffect(() => {
    loadPosts();
  }, []);
  

  return (
    <div id="main" className="w-11/12 mx-auto my-10 space-y-10">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-black font-extrabold text-4xl">
          Adopt Your Best Friend
        </h1>
        <p className="text-gray-500 w-[60%] text-center">
          Peddy have pets of all shapes, sizes, and personalities. Whether
          you’re looking for an energetic puppy, a calm senior cat, or even a
          playful rabbit, you’ll find the perfect companion
        </p>
      </div>

      {/* Category Button container */}
      <section>
        <div className="categories flex flex-wrap justify-between items-center">
          {categories.map((category) => (
            <CategoryButton
              key={category.category}
              category={category}
              isActive={category.category === activeCategory}
              onClick={() => handleCategoryClick(category.category)}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-black font-extrabold text-4xl">
            Best Deal For you
          </h1>
          <button
            onClick={handleSortByPrice}
            className="px-4 py-3 rounded-xl border border-[#0e7a86] bg-[#0e7a86] text-white hover:bg-white hover:text-black"
          >
            Sort by Price
          </button>
        </div>
      </section>
      {/* All card and side image container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* all card container */}
        <section className="col-span-3">
          {loading ? (
            <LoadingSpinner />
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.petId} handleAddImage={handleAddImage} post={post} />
              ))}
            </div>
          ) : (
            <div className="space-y-6 flex flex-col justify-center items-center bg-gray-100 py-10 rounded-xl">
              <img src="/src/assets/error.webp" alt="" />
              <h1 className="text-2xl text-black font-bold">
                No Information Available
              </h1>
              <p className="w-[50%] text-center">
                Currently, we do not have any birds available for adoption.
                Please check back soon for updates on our website friends!
              </p>
            </div>
          )}
        </section>
        <section className="">
          <div className="border border-[#0e7a86] p-4 rounded-lg space-y-6 col-span-3 lg:col-span-1">
          <h1 className="font-extrabold text-2xl">Liked pets: <span className="text-[#0e7a86]">{addLikedImage.length}</span></h1>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            {
              addLikedImage.map((img,idx)=><img key={idx} src={img} className="rounded-lg w-full object-cover lg:h-40" />)
            }
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebMain;

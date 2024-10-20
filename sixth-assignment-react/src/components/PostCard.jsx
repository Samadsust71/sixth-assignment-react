/* eslint-disable react/prop-types */




const PostCard = ({ post,handleAddImage}) => {
  
 
  return (
    <div className="p-4 border border-[#0e7a86] shadow-lg rounded-lg space-y-5">
      <img src={post.image} alt={post.category} className="h-52 w-full rounded-lg object-cover" />
      <div>
      <h3 className="font-bold text-black">{post.pet_name || "Not Available"}</h3>
      <p>Breed: {post.breed || "Not Available"}</p>
      <p>Birth: {post.date_of_birth || "Not Available"}</p>
      <p>Gender: {post.gender || "Not Available"}</p>
      <p>Price: {post.price ? `${post.price}$` : "Not Available"}</p>
      </div>
     <div className="flex items-center gap-6" >
     <button className="px-3 py-2 rounded-xl border border-[#0e7a86]" onClick={()=>handleAddImage(post)}>
        Like
      </button>
     <button className="px-3 py-2 rounded-xl border border-[#0e7a86]" onClick={() => console.log(`Adopting ${post.petId}`)}>
        Adopt
      </button>
     <button className="px-3 py-2 rounded-xl border border-[#0e7a86]" onClick={() => console.log(`Adopting ${post.petId}`)}>
        details
      </button>
      
     </div>
    </div>
  );
};

export default PostCard;

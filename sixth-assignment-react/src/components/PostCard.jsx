
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import AdoptModal from './AdoptModal';
import DetailsModal from './DetailsModal';


const PostCard = ({ post,handleAddImage}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [isAdopted, setIsAdopted] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const openDetailsModal = () => setIsDetailsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeDetailsModal = () => setIsDetailsModalOpen(false);

 

 
 
 // Function to start the adoption process and countdown
 const handleAdopt = () => {
  setCountdown(2); // Countdown starts from 2 seconds
};

// Countdown logic inside useEffect
useEffect(() => {
  if (countdown !== null) {
    if (countdown === 0) {
      setIsAdopted(true); // Mark as adopted
      closeModal(); // Close the modal
      setCountdown(null); // Reset countdown
    } else {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Decrease countdown by 1 second
      return () => clearTimeout(timer); // Clear timer on cleanup
    }
  }
}, [countdown]);

  
 
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
     
      <button
          className={`px-3 py-2 rounded-xl border border-[#0e7a86] ${isAdopted ? "bg-gray-400" : ""}`}
          onClick={openModal}
          disabled={isAdopted}
        >
          {isAdopted ? "Adopted" : "Adopt"}
        </button>
     <button className="px-3 py-2 rounded-xl border border-[#0e7a86]"  onClick={openDetailsModal}>
        details
      </button>
      
     </div>
     {isModalOpen && <AdoptModal post={post} handleClose={closeModal} handleAdopt={handleAdopt} countdown={countdown} />}
     <div>
     {isDetailsModalOpen && <DetailsModal post={post} handleClose={closeDetailsModal}/>}
     </div>
    </div>
  );
};

export default PostCard;

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  handleAddImage: PropTypes.func.isRequired
};


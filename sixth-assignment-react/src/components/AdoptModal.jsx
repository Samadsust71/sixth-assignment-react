import PropTypes from 'prop-types';

const AdoptModal = ({ post, handleAdopt,handleClose, countdown }) => {
 
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex flex-col justify-center items-center">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold">Adopting {post.pet_name || "this pet"}</h2>
          
          <div className="mt-4 flex flex-col justify-center space-y-6">
          <p>Are you sure you want to adopt {post.pet_name}?</p>
          
            <div className='flex justify-between items-center'>
            <button
              className={`px-4 py-2  text-white rounded ${countdown !== null?'bg-gray-400':'bg-green-500'}`}
              onClick={handleAdopt}
              disabled={countdown !== null}
            >
              confirm
            </button>
            <button className={`px-4 py-2  text-white rounded ${countdown !== null?'bg-gray-400':'bg-red-500'} `} onClick={handleClose} disabled={countdown !== null}>Cancel</button>
            </div>
            <p className='text-4xl font-bold'>Adopting in : <span className='text-[#0e7a86] font-extrabold '>{countdown||3}s</span> </p>
          </div>
        </div>
      </div>
    );
  };
  export default AdoptModal

  AdoptModal.propTypes = {
    post: PropTypes.object.isRequired,
    handleAdopt: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    countdown: PropTypes.number
    
  };
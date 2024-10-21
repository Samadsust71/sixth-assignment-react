import PropTypes from "prop-types";
export default function DetailsModal({ post, handleClose }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex flex-col justify-center items-center overflow-y-scroll">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-[50%] overflow-y-scroll my-6 space-y-6">
        <img
          src={post.image}
          alt={post.category}
          className="h-80 w-full rounded-lg object-cover"
        />

        <div>
          <h3 className="font-bold text-black">
            {post.pet_name || "Not Available"}
          </h3>
          <p>Breed: {post.breed || "Not Available"}</p>
          <p>Birth: {post.date_of_birth || "Not Available"}</p>
          <p>Gender: {post.gender || "Not Available"}</p>
          <p>Price: {post.price ? `${post.price}$` : "Not Available"}</p>
          <p>
          Vaccinated Status:{" "}
            {post.vaccinated_status
              ? `${post.vaccinated_status}`
              : "Not Available"}
          </p>
          <hr />
          <div>
            <h1 className="font-bold  text-black">Pet Description</h1>
            <p>{post.pet_details}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2  text-white rounded bg-green-500 w-full text-center"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
DetailsModal.propTypes = {
  post: PropTypes.object,
  handleClose: PropTypes.func,
};

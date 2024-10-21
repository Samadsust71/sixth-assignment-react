import PropTypes from 'prop-types';


export default function AddImage({img,handleClear}) {
    const{image,petId}=img
   
  return (
    <div className="rounded-lg space-y-4 border border-[#0e7a86] p-2">
      <img src={image} alt="" className="w-full object-cover lg:h-40 rounded-lg" />
      <button className="bg-red-500 text-white px-2 py-1 text-center rounded-lg" onClick={()=>handleClear(petId)}>Clear</button>
    </div>
  )
}
AddImage.propTypes = {
    img: PropTypes.object,
    handleClear:PropTypes.func
  };
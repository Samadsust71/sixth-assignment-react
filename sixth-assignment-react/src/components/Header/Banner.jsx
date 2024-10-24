import BannerImage from '../../assets/pet.webp'

export default function Banner() {
  return (
    <div className='my-10 text-center flex flex-col justify-center items-center space-y-6'>
      <p>Bringing Families Together ❤</p>
      <h1 className='text-3xl lg:text-6xl font-extrabold text-black'>Your Path to Adoption <br />
      Starts Here</h1>
      <p className='w-[60%]'>Your journey to finding the perfect pet begins today! Whether you’re ready to adopt or just exploring the idea, we’re here to guide you every step of the way.</p>
      <a href="#main"><button className='px-4 py-2 rounded-lg bg-[#0e7a86] text-white'>View More</button></a>
      <div><img src={BannerImage} alt="" /></div>
    </div>
  )
}


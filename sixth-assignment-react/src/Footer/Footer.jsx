export default function Footer() {
  return (
    <div className="bg-black py-20">
      <div className=" w-11/12 mx-auto flex items-center justify-between">
        <div className="space-y-6 flex flex-col justify-center">
          <div className="flex gap-2">
            <img src="/src/assets/logo.webp" alt="" />
            <h1 className="text-4xl text-white">Peddy</h1>
          </div>
          <div className="text-white leading-7">
            Location: av. Washington 165, NY CA 54003 <br /> Phone: +31 85 964
            47 25 <br />
            Email: info@yourdomain.com <br />
            Openings hours: 9.00 AM - 5.00 PM
          </div>
        </div>
        <div className="text-white space-y-6 flex flex-col justify-center">
        <h1 className="text-2xl">Useful Links</h1>
          <div className="text-white space-y-2 flex flex-col  justify-center">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Animals</a>
            <a href="">Foundation</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="text-white space-y-6 flex flex-col justify-center">
        <h1 className="text-2xl">Drop a Message</h1>
        <div className="flex flex-col space-y-6">
            <input type="text" placeholder="Enter Your Email" className="px-6 py-3 w-full rounded-lg bg-gray-800 shadow-2xl" />
            <button className="px-4 py-3 w-full bg-[#2b5558] rounded-xl">Subscribe</button>
        </div>
        </div>
      </div>
    </div>
  );
}

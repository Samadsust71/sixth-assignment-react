export default function Navbar() {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img className="h-10 w-10" src="/src/assets/logo.webp" alt="" />
        <h1 className="text-2xl text-black font-extrabold">Peddy</h1>
      </div>
      <div className="flex items-center gap-6">
        <button className="px-4 py-2 rounded-lg hover:bg-[#0e7a86] hover:text-white"><a href="">Shop</a></button>
        <button className="px-4 py-2 rounded-lg hover:bg-[#0e7a86] hover:text-white"><a href="/index.html">Home</a></button>
        <button className="px-4 py-2 rounded-lg hover:bg-[#0e7a86] hover:text-white"><a href="">Contact</a></button>
      </div>

      <button className="p-4 rounded-full border hover:bg-[#0e7a86]">
        <img src="/src/assets/user-icon.png" alt="" />
      </button>
    </div>
  );
}

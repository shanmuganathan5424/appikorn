export default function TopNavBar() {
  return (
    <div className="flex items-center justify-center">
        <div className=" w-[1200px] h-[80px] px-8 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div >
            <img src="/landing/appikorn-logo 1.svg" alt="Appikorn Logo" className="h-[80px] w-[80px]" />
            
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-10 text-white text-base">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">Team</a>
            <a href="#" className="hover:underline">Contact</a>
        </div>
        </div>
    </div>
  );
}

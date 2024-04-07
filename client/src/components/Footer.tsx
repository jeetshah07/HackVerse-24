export default function Footer() {
  return (
    <div>
      <footer className="container mx-auto p-3 pb-6 lg:pb-3">
        <div
          id="footer-frame"
          className="rounded-2xl border border-gray-800 flex flex-col lg:flex-row"
        >
          <div className="basis-1/3 py-2 px-3 md:p-5 xl:pr-16 flex flex-col gap-6 lg:gap-24">
            <div className="flex flex-row gap-3">
              <img
                className="w-6 h-6 my-1 ml-2"
                src="https://slwehdbwpcxuqrwxmwqq.supabase.co/storage/v1/object/public/resources/naruto%20logo.png"
                alt="logo"
              />
              <h3 className="text-lg text-white font-Sora font-semibold tracking-wide">
                NFTFlix
              </h3>
            </div>
            <div className="flex flex-row justify-between items-center text-slate-500 transition-all ease-in-out delay-200 text-sm font-Inter">
              {/* Add your content here */}
            </div>
          </div>
          <div className="basis-1/3 border p-5 xl:p-8 border-y-gray-800 border-x-transparent lg:border-x-gray-800 lg:border-y-transparent flex flex-col justify-start gap-4">
            <div className="flex flex-col justify-start gap-2 w-max text-white text-md font-Sora">
              <div className="hover:text-slate-400 cursor-pointer">Home</div>
              <div className="hover:text-slate-400 cursor-pointer">Dashboard</div>
              <div className="hover:text-slate-400 cursor-pointer">Discover</div>
            </div>
            <div className="flex flex-row justify-start gap-3 items-center text-slate-500 transition-all ease-in-out text-lg">
              <i className="bx bxl-facebook-square cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-linkedin-square cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-github cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-twitter cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-instagram-alt cursor-pointer hover:text-slate-300"></i>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col gap-6 lg:gap-0 py-2 px-3 md:p-5 xl:px-16 xl:py-8 justify-center">
            <div className="text-slate-500 text-center lg:text-start text-sm font-Inter">
              Made with Anime! <p>Made with Awesomeness!!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

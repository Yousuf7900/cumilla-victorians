

const Newsletter = () => {
  return (
    <div className="
      absolute z-10 -mt-44 border-2 p-5 rounded-3xl border-white
      left-4 w-[95vw] max-w-[400px]
      lg:left-auto lg:w-auto lg:max-w-none lg:p-5
    ">
      <div className="
        border-1 text-center px-3 py-10 sm:py-16 rounded-3xl 
        bg-gradient-to-r from-violet-200 to-pink-200 border-lime-50 
        space-y-4
        lg:min-w-[1280px]
      ">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-3xl">Subscribe to our Newsletter</h2>
        <p className="text-sm sm:text-base">Get the latest updates and news right in your inbox!</p>
        <div className="flex flex-col sm:flex-row  gap-2 justify-center max-w-xs mx-auto">
          <input 
            className="rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none px-4 py-2 sm:py-3 border border-gray-400 flex-grow" 
            type="text" 
            placeholder="Enter your email" 
          />
          <button className="font-bold border rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none px-4 py-2 sm:py-3 border-gray-400 bg-gradient-to-r from-fuchsia-600 to-purple-600 whitespace-nowrap">
            <a onClick={(e) => e.preventDefault()} href="#">Subscribe</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

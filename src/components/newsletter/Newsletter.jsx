

const Newsletter = () => {
    return (
        <div className="absolute z-10 -mt-44 border-2 p-5 rounded-3xl border-white">
            <div className="border-1 text-center py-20 rounded-3xl bg-gradient-to-r from-violet-200 to-pink-200 border-lime-50 min-w-[1280px] space-y-4">
                <h2 className="font-bold text-3xl">Subscribe to our Newsletter</h2>
                <p>Get the latest updates and news right in your inbox!</p>
                <input className="rounded-xl px-4 py-3 mr-2 border-1 border-gray-400" type="text" placeholder="Enter your email" />
                <button className="font-bold border-1 rounded-xl px-4 py-3 border-gray-400 bg-gradient-to-r from-fuchsia-600 to-purple-600"><a href="#">Subscribe</a></button>
            </div>
        </div>
    );
};

export default Newsletter;

// absolute left-[150px] top-[3700px] 
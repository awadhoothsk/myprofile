export default function Contact() {
    return (
      <div className="min-50vh-screen bg-[#1a1a1a] text-white flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
  
        <div className="w-full max-w-4xl bg-[#2a2a2a] rounded-xl shadow-lg p-6">
          <h2 className="text-1xl font-semibold text-yellow-400 mb-6">Contact Form</h2>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="p-3 w-full rounded bg-[#333333] text-white outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="p-3 w-full rounded bg-[#333333] text-white outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Subject"
                className="p-3 w-full rounded bg-[#333333] text-white outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                placeholder="Message"
                className="p-3 w-full rounded bg-[#333333] text-white outline-none focus:ring-2 focus:ring-yellow-500"
                rows={6}
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full p-3 rounded bg-yellow-500 hover:bg-yellow-600 text-black font-semibold focus:ring-2 focus:ring-yellow-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
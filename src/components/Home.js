export default function Home() {
    return (
      <section className="flex flex-col items-center justify-center h-screen text-center space-y-8 bg-gray-100">
        {/* Main Heading and Image */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <img
            src="/Users/tasnimfatimachowdhury/my-portfolio/src/components/Image/Tasnim.jpeg" 
            className="w-40 h-40 rounded-full shadow-lg"
          />
          <div>
            <h1 className="text-5xl font-extrabold text-gray-800">
              Tasnim Fatima Chowdhury
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              With over 2 years of industry experience specializing in IT for healthcare and health insurance, I bring expertise in delivering innovative solutions that enhance operational efficiency and improve patient outcomes.
            </p>
          </div>
        </div>
  
        {/* Buttons */}
        <div className="space-x-4">
          <a
            href="/about"
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
          >
            About
          </a>
          <a
            href="/education"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Education
          </a>
          <a
            href="/skills"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Skills
          </a>
          <a
            href="/work"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Work Experience
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition"
          >
            Contact
          </a>
        </div>
      </section>
    );
  }
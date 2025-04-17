export default function About() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center space-y-6 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-gray-800">
        Tasnim Fatima Chowdhury
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
        A versatile and results-driven professional with a strong foundation in Information Systems. My experience spans software development, data analytics, business strategy, and project management, enabling me to approach technical challenges with a well-rounded, strategic perspective. Whether it’s developing APIs, building data dashboards, managing complex projects, or contributing to AI-driven solutions, I thrive at the intersection of technology, innovation, and impact. I’m committed to continuous learning, adaptability, and delivering meaningful results across diverse business environments.
      </p>
      <div className="space-x-4">
        <a
          href="/education"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Education
        </a>
        <a
          href="/skills"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Skills
        </a>
        <a
          href="/work"
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          Work Experience
        </a>
        <a
          href="/volunteer"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Volunteer
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
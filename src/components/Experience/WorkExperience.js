import { Link } from 'react-router-dom';
export default function WorkExperience() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Work Experience Categories</h2>
      <ul className="list-disc pl-5 text-blue-500 underline">
        <li><Link to="/work/software-development">Software Development</Link></li>
        <li><Link to="/work/data-analytics">Data Analytics</Link></li>
        <li><Link to="/work/ai-ml">AI & Machine Learning</Link></li>
        <li><Link to="/work/project-management">Project & Operations Management</Link></li>
        <li><Link to="/work/strategy-business">Strategy & Business</Link></li>
      </ul>
    </section>
  );
}
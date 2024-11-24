import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { fetchData } from "../utils/fetcher";
const TeachingAndSupervisionPage = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData(`${import.meta.env.VITE_API_URL}/teaching.json`);
        setData(result);  // Store the fetched data in the state
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Teaching & Supervision
      </h1>

      {/* Courses Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Courses Conducted</h2>
        <div className="flex flex-wrap gap-4">
          {data?.courses.map((course, index) => (
            <span
              key={index}
              className="inline-block px-4 py-2 bg-secondary text-white text-sm font-medium rounded-full shadow-sm"
            >
              {course.code} - {course.name}
            </span>
          ))}
        </div>
      </section>

      {/* Students Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Students Supervised</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.students.map((student, index) => (
            <div
              key={index}
              className="max-w-xs mx-auto p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h3>
              <p className="text-gray-600 mb-2">Thesis Title: {student.thesisTitle}</p>
              <p className="text-sm text-gray-500">Year: {student.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeachingAndSupervisionPage;

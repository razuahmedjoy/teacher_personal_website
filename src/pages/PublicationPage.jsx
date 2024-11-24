import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetcher";
import LoadingScreen from "../components/LoadingScreen";
export function PublicationPage() {
  // Sample publications data

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData(`${import.meta.env.VITE_API_URL}/publications.json`);
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
    <section id="publications" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-medium text-gray-800 dark:text-gray-100 mb-8">
          Publications
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Journal Publications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Journal Publications
            </h3>
            <ul className="space-y-4">
              {data?.journal.map((pub, index) => (
                <li
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {pub.title}
                  </a>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    <span className="font-semibold">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Year:</span> {pub.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* Conference Publications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Conference Publications
            </h3>
            <ul className="space-y-4">
              {data?.conference.map((pub, index) => (
                <li
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {pub.title}
                  </a>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    <span className="font-semibold">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Year:</span> {pub.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

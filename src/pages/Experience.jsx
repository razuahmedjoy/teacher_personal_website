import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetcher";
import LoadingScreen from "../components/LoadingScreen";
export function ExperiencePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const result = await fetchData(`${import.meta.env.VITE_API_URL}/experience.json`);
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
        <section id="job-experiences" className=" py-12">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-medium text-gray-800 dark:text-gray-100 mb-8">
                    Experiences
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {data?.map((exp, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105"
                        >
                            <div className="w-full flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    {exp.position}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {exp.duration}
                                </p>
                            </div>

                            <p>{exp.institution}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {exp?.department}
                            </p>

                            <ul className="mt-4 space-y-2">
                                {exp.responsibilities.map((resp, respIndex) => (
                                    <li
                                        key={respIndex}
                                        className="text-sm text-gray-700 dark:text-gray-200 flex gap-2 items-start"
                                    >
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-1"></span>
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

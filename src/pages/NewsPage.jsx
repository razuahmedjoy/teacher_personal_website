import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetcher";
import LoadingScreen from "../components/LoadingScreen";
const NewsPage = () => {


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          setLoading(true);
          const result = await fetchData(`${import.meta.env.VITE_API_URL}/news.json`);
          setData(result);  // Store the fetched data in the state
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchDataFromAPI();
    }, []);
  
    if (loading && !data) return <LoadingScreen />;
    

    return (
        <section className="bg-white">

            <div className="container mx-auto py-8">

                <h2 className="text-center text-4xl font-medium text-gray-800 dark:text-gray-100 mb-8">
                    News
                </h2>
                <div className="max-w-4xl mx-auto p-6">
                    <div className="space-y-6">
                        {data?.map((news, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
                                <p className="text-sm text-gray-500 mb-2">Published on: {news.date}</p>
                                <p className="text-gray-700 mb-3">{news.description}</p>
                                {news.link && (
                                    <a
                                        href={news.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline font-medium"
                                    >
                                        Read More
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default NewsPage;

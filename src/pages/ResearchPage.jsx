import React from "react";
import data from "../data/research.json";
const ResearchPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">

            <h2 className="text-center text-4xl font-medium text-gray-800 dark:text-gray-100 my-8">
                Research and Projects
            </h2>
            {/* Research Interests Section */}
            <section className="mb-12 bg-white shadow-md rounded-md p-5">
                <h2 className="text-2xl font-bold text-black mb-4">Research Interests</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {data.researchInterests.map((interest, index) => (
                        <li key={index} className="text-gray-700">
                            {interest}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Projects Section */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
                <div className="space-y-6">
                    {data.projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-4 border bg-white border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mb-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mb-3">Year: {project.year}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ResearchPage;

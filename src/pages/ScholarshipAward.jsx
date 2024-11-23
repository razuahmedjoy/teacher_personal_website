import React from "react";
import scholarshipsAndAwards from "../data/scholarshipAndAward.json";
export function ScholarshipAndAwardsPage() {
  

  return (
    <section id="scholarships-awards" className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-medium text-gray-800 dark:text-gray-100 mb-8">
          Scholarships & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {scholarshipsAndAwards.map((award, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {award.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Year:</span> {award.year}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Organization:</span> {award.organization}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200 mt-3">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
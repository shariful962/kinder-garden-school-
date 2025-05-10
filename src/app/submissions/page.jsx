"use client"; // Required for localStorage

import { useEffect, useState } from "react";

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("admissions")) || [];
    setSubmissions(data);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Admission Submissions</h2>
      {submissions.length === 0 ? (
        <p className="text-center text-gray-500">No submissions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-pink-200">
            <thead>
              <tr className="bg-pink-100 text-pink-800">
                <th className="border px-4 py-2">Child's Name</th>
                <th className="border px-4 py-2">Parent's Name</th>
                <th className="border px-4 py-2">Age</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((entry, index) => (
                <tr key={index} className="hover:bg-pink-50">
                  <td className="border px-4 py-2">{entry.childName}</td>
                  <td className="border px-4 py-2">{entry.parentName}</td>
                  <td className="border px-4 py-2">{entry.age}</td>
                  <td className="border px-4 py-2">{entry.email}</td>
                  <td className="border px-4 py-2">{entry.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

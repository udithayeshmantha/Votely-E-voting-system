import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Trash } from "lucide-react";

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("/api/candidates");
        setCandidates(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch candidates.");
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleDelete = async (candidateId) => {
    if (window.confirm("Are you sure you want to delete this candidate?")) {
      try {
        await axios.delete(`/api/candidates/${candidateId}`);
        setCandidates(candidates.filter((candidate) => candidate.id !== candidateId));
        alert("Candidate deleted successfully.");
      } catch (err) {
        alert("Failed to delete candidate.");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Candidates</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Position</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{candidate.name}</td>
              <td className="px-4 py-2 border-b">{candidate.position}</td>
              <td className="px-4 py-2 border-b flex gap-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => alert(`Edit candidate: ${candidate.name}`)}
                >
                  <Edit size={20} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(candidate.id)}
                >
                  <Trash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCandidates;

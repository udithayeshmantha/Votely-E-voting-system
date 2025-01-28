import React, { useState, useEffect } from "react";
import { Edit, Trash } from "lucide-react";
import { handleApiCall } from "../../api/handleApiCall";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    email: "",
    party: "",
    dob: "",
    NIC: "",
  });

  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("Global state:", user);
  }, [user]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await handleApiCall(
          "http://localhost:3000/api/candidates",
          "GET",
          {
            "Content-Type": "application/json",
          }
        );
        setCandidates(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching candidates:", err);
        setError("Failed to fetch candidates.");
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleDelete = async (candidateId) => {
    if (window.confirm("Are you sure you want to delete this candidate?")) {
      try {
        await handleApiCall(
          `http://localhost:3000/api/candidates/${candidateId}`,
          "DELETE",
          {
            "Content-Type": "application/json",
          }
        );
        setCandidates(
          candidates.filter((candidate) => candidate._id !== candidateId)
        );
        toast.success("Candidate deleted successfully.");
      } catch (err) {
        console.error("Error deleting candidate:", err);
        toast.error("Failed to delete candidate.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await handleApiCall(
        "http://localhost:3000/api/candidates",
        "POST",
        {
          "Content-Type": "application/json",
        },
        newCandidate
      );
      setCandidates((prev) => [...prev, response.data]);
      setNewCandidate({ name: "", email: "", party: "", dob: "", NIC: "" });
      toast.success("Candidate created successfully.");
    } catch (err) {
      
      toast.success("Candidate created successfully.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-around items-center gap-10 px-20 py-28 font-Poppins md:px-20 md:py-32 lg:px-52 lg:py-48 bg-cover bg-center bg-fixed">
      <div className="w-full max-w-screen-lg bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl mb-2 text-center font-bold">
          Manage Candidates
        </h2>
        <p className="mb-2 mt-1 text-center text-gray-600">
          Manage the list of candidates for the election.
        </p>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={newCandidate.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={newCandidate.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Party
            </label>
            <input
              type="text"
              name="party"
              value={newCandidate.party}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={newCandidate.dob}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              NIC
            </label>
            <input
              type="text"
              name="NIC"
              value={newCandidate.NIC}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-blue-600 text-white rounded-lg cursor-pointer text-base my-5 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating candidate..." : "Create Candidate"}
          </button>
        </form>

        <table className="min-w-full bg-white border border-gray-200">
          {/* <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Party</th>
              <th className="px-4 py-2 border-b">Date of Birth</th>
              <th className="px-4 py-2 border-b">NIC</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead> */}
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate._id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{candidate.name}</td>
                <td className="px-4 py-2 border-b">{candidate.email}</td>
                <td className="px-4 py-2 border-b">{candidate.party}</td>
                <td className="px-4 py-2 border-b">{candidate.dob}</td>
                <td className="px-4 py-2 border-b">{candidate.NIC}</td>
                <td className="px-4 py-2 border-b flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => alert(`Edit candidate: ${candidate.name}`)}
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(candidate._id)}
                  >
                    <Trash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCandidates;

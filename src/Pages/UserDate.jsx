import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const { token } = useOutletContext(); 
  const [fundraisers, setFundraisers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedFundraiser, setSelectedFundraiser] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();

  const fetchUserFundraisers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://ibm-server.onrender.com/api/fundraisers/user",
        {
          headers: {
            Authorization: `${token}`, // Use the token with 'Bearer' prefix
            "Content-Type": "application/json",
          },
        }
      );
      setFundraisers(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch user fundraisers");
      setLoading(false);
      console.error("Error fetching fundraisers:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserFundraisers(); // Fetch data only if token exists
    }
  }, [token]);

  const handleUpdateClick = (fundraiser) => {
    setSelectedFundraiser(fundraiser);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setSelectedFundraiser(null);
    setFormOpen(false);
  };

  const handleFormSubmit = async (updatedFundraiser) => {
    try {
      // Check if updatedFundraiser has a valid _id
      console.log("Updated Fundraiser ID:", updatedFundraiser._id);

      const response = await axios.put(
        `http://ibm-server.onrender.com/api/fundraisers/${updatedFundraiser._id}`,
        updatedFundraiser,
        {
          headers: {
            Authorization: `${token}`, // Make sure 'Bearer' is included
            "Content-Type": "application/json",
          },
        }
      );

      setFormOpen(false);
      toast.success("Fundraiser updated successfully");
      fetchUserFundraisers(); // Refresh the page immediately after update
    } catch (error) {
      console.error(
        "Error updating fundraiser:",
        error.response?.data || error.message
      );
      toast.error("Failed to update fundraiser");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(
        `http://ibm-server.onrender.com/api/fundraisers/${id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      toast.success(response.data.message);
      fetchUserFundraisers(); // Refresh the page immediately after deletion
    } catch (error) {
      console.error("Error deleting fundraiser:", error);
      toast.error("Failed to delete fundraiser");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedFundraiser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        User Fundraisers
      </h2>
      {fundraisers.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No fundraisers found for this user.
        </p>
      ) : (
        <ul className="space-y-6">
          {fundraisers.map((fundraiser) => (
            <li
              key={fundraiser._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {fundraiser.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span className="font-medium">Category:</span>{" "}
                  {fundraiser.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span className="font-medium">Details:</span>{" "}
                  {fundraiser.details}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span className="font-medium">Location:</span>{" "}
                  {fundraiser.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-medium">Created At:</span>{" "}
                  {new Date(fundraiser.createdAt).toLocaleDateString()}
                </p>
                {token && (
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleUpdateClick(fundraiser)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteClick(fundraiser._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      {isFormOpen && selectedFundraiser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Edit Fundraiser
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(selectedFundraiser);
              }}
            >
              <input
                type="text"
                name="name"
                value={selectedFundraiser.name}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                name="category"
                value={selectedFundraiser.category}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
              />
              <textarea
                name="details"
                value={selectedFundraiser.details}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                name="location"
                value={selectedFundraiser.location}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleFormClose}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserData;

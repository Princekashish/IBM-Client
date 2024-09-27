import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = ({ token }) => {
  const [fundraisers, setFundraisers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserFundraisers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:3000/api/fundraisers/user",
          {
            headers: {
              Authorization: `${token}`, // Pass the token directly
              "Content-Type": "application/json",
            },
          }
        );
        setFundraisers(response.data); // Set fundraisers data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user fundraisers");
        setLoading(false);
      }
    };

    fetchUserFundraisers();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>User Fundraisers</h2>
      {fundraisers.length === 0 ? (
        <p>No fundraisers found for this user.</p>
      ) : (
        <ul>
          {fundraisers.map((fundraiser) => (
            <li key={fundraiser._id}>
              <h3>{fundraiser.name}</h3>
              <p>Category: {fundraiser.category}</p>
              <p>Details: {fundraiser.details}</p>
              <p>Location: {fundraiser.location}</p>
              <p>
                Created At:{" "}
                {new Date(fundraiser.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserData;

import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch users from the API endpoint
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://plantalife-node-server.onrender.com/api/v1/users/sortByTreesPlanted');
        if (response.ok) {
          const users = await response.json();
          setUsers(users.data); // Assuming the response contains an array of users
        } else {
          console.error('Failed to fetch users:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const topThreeUsers = users.slice(0, 3);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mt-8 mb-4">PlantALife Leaderboard</h2>
      <p className='text-2xl font-semibold text-center mb-4'>Plant a tree, grow a future</p>
      <div className="flex justify-center">
      {topThreeUsers.map((user, index) => (
          <div key={index} className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-lg mr-8">
            <img src={user.avatar} alt={user.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{user.name}</h3>
            <p className="text-gray-600">{user.treesPlanted.length} trees planted</p>
            <p className="text-gray-600">Accumulated {user.accBalance} coins</p>
          </div>
        ))}
      </div>
      <table className="table-auto w-full m-6">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Trees Planted</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{indexOfFirstItem + index + 1}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.treesPlanted.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4 mb-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 py-2 px-3 rounded-full focus:outline-none ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIphone from '../pages/DeleteIphone';

const IPhoneList = () => {
  const [iphones, setIphones] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchIphones();
  }, []);

  const fetchIphones = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/iphone`);
      const data = await response.json();
      setIphones(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this iPhone?')) {
      const result = await DeleteIphone(id);
      if (result.success) {
        setIphones((prev) => prev.filter((iphone) => iphone._id !== id));
        setMessage('iPhone deleted successfully!');
      } else {
        setMessage('Error deleting iPhone: ' + result.error);
      }
    }
  };

  const filteredIphones = iphones.filter((iphone) =>
    iphone.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center justify-center w-full pt-10 px-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='text-2xl font-bold text-gray-800'>iPhone Overview</h1>

      {message && (
        <div className="mb-4 p-4 bg-green-500 text-white rounded-lg">
          {message}
        </div>
      )}

      <div className="mt-5 w-full max-w-xl">
        <input
          type="text"
          placeholder="Search by model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="w-full max-w-4xl mx-auto overflow-x-auto mt-5">
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Model</th>
              <th className="border border-gray-300 px-4 py-2">Storage</th>
              <th className="border border-gray-300 px-4 py-2">Color</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredIphones.map((iphone) => (
              <tr key={iphone._id} className="text-gray-700">
                <td className="border border-gray-300 px-4 py-2">{iphone.model}</td>
                <td className="border border-gray-300 px-4 py-2">{iphone.storage}GB</td>
                <td className="border border-gray-300 px-4 py-2">{iphone.color}</td>
                <td className="border border-gray-300 px-4 py-2">${iphone.price}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src={iphone.image} alt={iphone.model} className="w-20 h-auto mx-auto" />
                </td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
                  <button
                    onClick={() => navigate(`/show/${iphone._id}`)}
                    style={{ backgroundColor: "blue", padding: '8px', borderRadius: '10px', color: 'white' }}
                  >
                    Show
                  </button>
                  <button
                    onClick={() => navigate(`/edit/${iphone._id}`)}
                    style={{ backgroundColor: "red", padding: '8px', borderRadius: '10px', color: 'white' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(iphone._id)}
                    style={{ backgroundColor: "green", padding: '8px', borderRadius: '10px', color: 'white' }}
                  >
                    Delete
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

export default IPhoneList;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Showiphone = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [iphone, setIphone] = useState({
    model: '',
    storage: '',
    price: '',
    color: '',
    releaseDate: ''
  });

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/iphone/${id}`)
        .then(response => response.json())
        .then(data => setIphone(data))
        .catch(error => console.error('Error fetching iPhone data:', error));
    }
  }, [id]);

  const fields = [
    { label: 'Model', key: 'model', type: 'text' },
    { label: 'Storage (GB)', key: 'storage', type: 'number' },
    { label: 'Price ($)', key: 'price', type: 'number' },
    { label: 'Color', key: 'color', type: 'text' },
    { label: 'Release Date', key: 'releaseDate', type: 'date' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-2xl font-bold text-blue-600">iPhone Details</h1>
      <form className="mt-5 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {fields.map(({ label, key, type }) => (
          <div key={key} className="mb-4 flex flex-col items-center sm:gap-4">
            <label htmlFor={key} className="w-full text-gray-700 font-bold mb-2 sm:mb-0">{label}</label>
            <input
              type={type}
              id={key}
              value={iphone[key]}
              readOnly
              className="w-3/4 p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => navigate(`/edit/${id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit iPhone
          </button>
        </div>
      </form>
    </div>
  );
};

export default Showiphone;

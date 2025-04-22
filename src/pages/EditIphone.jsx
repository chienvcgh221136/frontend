import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditIphone = () => {
  const { id } = useParams();
  const [iphone, setIphone] = useState({
    model: '',
    storage: '',
    color: '',
    price: '',
    releaseDate: ''
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/iphone/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setIphone(data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching iPhone data:', error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedIphone = { ...iphone };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/iphone/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedIphone),
      });
      const result = await response.json();
      if (result.message === 'iPhone updated successfully!') {
        alert('iPhone updated successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error updating iPhone:', error);
    }
  };

  if (loading) {
    return <div className="text-center text-xl font-semibold mt-10">Loading...</div>;
  }

  const fields = [
    { label: 'Model', key: 'model', type: 'text', placeholder: 'iPhone 13 Pro' },
    { label: 'Storage (GB)', key: 'storage', type: 'select', placeholder: '' },
    { label: 'Price ($)', key: 'price', type: 'number', placeholder: '999' },
    { label: 'Color', key: 'color', type: 'text', placeholder: 'Graphite' },
    { label: 'Release Date', key: 'releaseDate', type: 'date', placeholder: '' },
  ];

  const storageOptions = ['16', '32', '64', '128', '256', '512', '1T', '2T'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-2xl font-bold text-blue-600">Edit iPhone</h1>
      <form onSubmit={handleSubmit} className="mt-5 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {fields.map(({ label, key, type, placeholder }) => (
          <div key={key} className="mb-4 flex flex-col items-center sm:gap-4">
            <label htmlFor={key} className="w-full text-gray-700 font-bold mb-2 sm:mb-0">{label}</label>

            {key === 'storage' ? (
              <select
                id={key}
                value={iphone[key]}
                onChange={(e) => setIphone({ ...iphone, [key]: e.target.value })}
                required
                className="w-3/4 p-2 border border-gray-300 rounded-md"
              >
                <option value="">-- Select Storage --</option>
                {storageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === '1T' ? '1 TB' : `${option} GB`}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                id={key}
                value={iphone[key]}
                onChange={(e) => setIphone({ ...iphone, [key]: e.target.value })}
                required
                placeholder={placeholder}
                className="w-3/4 p-2 border border-gray-300 rounded-md"
              />
            )}
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            style={{ backgroundColor: 'blue', padding: '8px', borderRadius: '10px', color: 'white' }}
          >
            Update iPhone
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditIphone;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddIphone = () => {
  const { id } = useParams();

  const [iphone, setIphone] = useState({
    model: '',
    storage: '',
    price: '',
    color: '',
    releaseDate: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/iphone/${id}`)
        .then(response => response.json())
        .then(data => setIphone(data))  
        .catch(error => console.error('Error fetching iPhone data:', error)); 
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedIphone = { ...iphone }; 

    const method = id ? 'PUT' : 'POST';
    const url = id ? `${import.meta.env.VITE_BACKEND_URL}/iphone/${id}` : `${import.meta.env.VITE_BACKEND_URL}/iphone`;
    const successMessage = id ? 'iPhone updated successfully!' : 'iPhone added successfully!';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedIphone),
      });

      const result = await response.json();  
      if (result.message === successMessage) {
        alert(successMessage);  
        navigate('/');
      }
    } catch (error) {
      console.error('Error processing iPhone:', error); 
    }
  };

  const fields = [
    { label: 'Model', key: 'model', type: 'text', placeholder: 'iPhone 13 Pro' },
    { label: 'Storage (GB)', key: 'storage', type: 'select', placeholder: '' },
    { label: 'Price ($)', key: 'price', type: 'number', placeholder: '999' },
    { label: 'Color', key: 'color', type: 'text', placeholder: 'Graphite' },
    { label:'Image',key:'image', type: 'text', placeholder: ''},
    { label: 'Release Date', key: 'releaseDate', type: 'date', placeholder: '' },
  ];


  const storageOptions = ['16', '32', '64', '128', '256', '512', '1T', '2T'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-7 text-center bg-gradient-to-b from-cyan-100/70">
  
      <h1 className="text-2xl font-bold text-blue-600">{id ? 'Edit iPhone' : 'Add iPhone'}</h1>

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
            style={{
              backgroundColor: 'blue',  
              padding: '8px',
              borderRadius: '10px',
              color: 'white'
            }}
          >
            {id ? 'Update iPhone' : 'Add iPhone'}  
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddIphone;

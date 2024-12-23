
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Newiteam = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState({});
  const categories = ['piza', 'icecream', 'noodles', 'snacks']; // Predefined categories

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/forms');
        setForms(response.data); // Save fetched data to state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching forms:', error);
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  const toggleVisibility = (category) => {
    setVisibleCards((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row p-6 relative gap-5">
      <h1 className="text-3xl md:text-5xl font-bold">New</h1>
      <strong className="font-sans font-thin text-2xl md:text-3xl">Disease...</strong>

      {categories.map((category) => {
        const filteredForms = forms.filter((form) => form.category === category);
        const showAll = visibleCards[category];

        return (
          <div key={category} className="mb-10 mt-10 font-bold">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 hover:underline">{category}</h2>
            {filteredForms.length > 0 ? (
              <div className="flex flex-wrap gap-4 justify-start lg:flex-row sm:flex-col">
                {filteredForms.slice(0, showAll ? filteredForms.length : 4).map((form) => (
                  <div
                    key={form._id}
                    className="bg-white rounded-[20px] shadow-md overflow-hidden "
                    style={{ width: '225px', height: '250px' }}
                  >
                    {form.imageUrl && (
                      <img
                        src={form.imageUrl}
                        alt={form.description || 'Uploaded Image'}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <p className="text-gray-700 text-sm">{form.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-sm">No data available in {category} category.</div>
            )}
            {filteredForms.length > 4 && (
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => toggleVisibility(category)}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Newiteam;

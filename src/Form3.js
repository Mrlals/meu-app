import React, { useState } from 'react';

function Form3() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    city: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '400px' }}>
      <h2>Form3</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
      </form>
      <p>
        <strong>{formData.title}</strong> by {formData.name} (located in{' '}
        {formData.city})
      </p>
      {formData.imageUrl && (
        <img
          src={formData.imageUrl}
          alt={formData.title}
          style={{ width: '100%', height: 'auto', marginTop: '10px' }}
        />
      )}
    </div>
  );
}

export default Form3;

/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import GoogleMapContact from './GoogleMap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <GoogleMapContact />

      <div
        className="contact-container"
        style={{ display: 'flex', padding: '20px' }}
      >
        <div className="contact-info" style={{ flex: 1, marginRight: '20px' }}>
          <h2
            style={{
              color: '#0e7490',
              textTransform: 'uppercase',
              fontWeight: 500,
              textAlign: 'left',
              fontSize: '1.5rem',
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingLeft: '250px',
            }}
          >
            Contact Info
          </h2>
          <p>
            Had land. Days so Kind also. Of beginning night sixth. Man day in.
            Fruitful female called firmament from, make meat multiply to image
            tree midst day don't under open waters.
          </p>
          <p>
            <strong className="text-cyan-700">Address:</strong> 145 Oliveshka
            Street, Los Angeles, LA 90003
          </p>
          <p>
            <strong className="text-cyan-700">Phone:</strong> +44 987 065 901
          </p>
          <p>
            <strong className="text-cyan-700">Email:</strong> info@example.com
          </p>
          <p>
            <strong className="text-cyan-700">Fax:</strong> +44 987 065 901
          </p>
        </div>
        <fieldset className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4">
          <form
            onSubmit={handleSubmit}
            className="contact-form my-7 lg:w-4/8"
            style={{ flex: 1 }}
          >
            <div className="flex flex-col lg:flex-row gap-4 w-full mb-3">
              <input
                className="border border-cyan-700 rounded-md p-2 lg:w-3/6"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className="border border-cyan-700 rounded-md p-2 lg:w-3/6"
                type="text"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="border border-cyan-700 rounded-md p-2 w-full mb-3"
              type="text"
              name="title"
              placeholder="Your Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <textarea
              className="border border-cyan-700 rounded-md p-2 w-full mb-3"
              name="comment"
              placeholder="Your Comment"
              value={formData.comment}
              onChange={handleChange}
            />

            <button
              className="bg-cyan-700 text-white uppercase font-medium text-sm py-3 px-6 hover:bg-cyan-500 transition-colors p-2 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default ContactPage;

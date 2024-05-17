import React from 'react';

const GoogleMapContact = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5859490276866!2d26.103840474999735!3d44.441654901082494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff49beac5971%3A0xeef633dc1e0d59ea!2sMaria%20Rosetti%20Tower%2C%20Strada%20Maria%20Rosetti%206%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1715762090562!5m2!1sen!2sro"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default React.memo(GoogleMapContact);

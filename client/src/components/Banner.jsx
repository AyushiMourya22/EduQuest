import React from 'react';

function Banner() {
  const banner = require('../assests/Banner.jpg');
  return (
    <div>
      <img src={banner} alt="" className="w-full h-[500px]" />
    </div>
  );
}

export default Banner;

import React from 'react';
import Slider from "react-slick";

const Hero = () => {
  // Carousel configuration settings
  const settings = {
    dots: true,              // Show navigation dots
    infinite: true,          // Loop the slides infinitely
    speed: 1000,             // Slide transition speed in milliseconds
    slidesToShow: 1,         // Show one slide at a time
    slidesToScroll: 1,       // Scroll one slide at a time
    autoplay: true,          // Enable automatic sliding
    autoplaySpeed: 2500,     // Time between slides (2.5 seconds)
    fade: true,              // Use fade transition effect
  };

  return (
    <div className='flex flex-col items-center justify-center w-full pt-10 px-7 text-center bg-gradient-to-b from-cyan-100/70'>
      {/* Section Title */}
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>About iPhone</h1>
      
      {/* Description paragraph */}
      <div className="mt-5">
        <p className="text-lg text-gray-700 max-w-2xl">
          Discover the latest iPhones with elegant design, powerful performance and the most advanced technology from Apple. Enjoy a great experience with iOS!
        </p>
      </div>

      {/* Carousel Slider Section */}
      <div className="w-full max-w-2xl mx-auto mt-5">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <img className="mx-auto w-72 h-72 object-cover rounded-lg shadow-md"
              src="https://www.apple.com/id/iphone-16/images/overview/welcome/hero_alt__ey5khbzf04eq_xlarge.png"
              alt="iPhone 16" />
          </div>
          {/* Slide 2 */}
          <div>
            <img className="mx-auto w-72 h-72 object-cover rounded-lg shadow-md"
              src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/01/iphone-16-rumores-3258898.jpg"
              alt="iPhone 16 ProMax" />
          </div>
          {/* Slide 3 */}
          <div>
            <img className="mx-auto w-72 h-72 object-cover rounded-lg shadow-md"
              src="https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_color-green_10132020_big_carousel.jpg.large_2x.jpg"
              alt="iPhone 12" />
          </div>
          {/* Slide 4 */}
          <div>
            <img className="mx-auto w-72 h-72 object-cover rounded-lg shadow-md"
              src="https://tidbits.com/uploads/2019/09/iPhone-11-4.jpg"
              alt="iPhone 11" />
          </div>
          {/* Slide 5 */}
          <div>
            <img className="mx-auto w-72 h-72 object-cover rounded-lg shadow-md"
              src="https://cdn.mos.cms.futurecdn.net/vNe8fiNztw5ztmfwk6EfRi.jpg"
              alt="iPhone 16 Pro Max" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

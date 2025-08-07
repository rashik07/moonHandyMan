import React from "react";

const FooterLayout = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* <!-- About Us --> */}
          <div>
            <h2 className="text-lg font-semibold mb-3">ABOUT US</h2>
            <p className="text-sm leading-relaxed">
              moon handyman is a professional handyman service dedicated to
              providing high-quality home repair and maintenance solutions. Our
              team of skilled professionals is committed to delivering
              exceptional service with a focus on customer satisfaction.
            </p>
            <img
              src="/logo_handyman.jpg"
              alt="ACHC Accredited"
              className="mt-4 w-30"
            />
            <div className="flex space-x-2 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          {/* <!-- Navigation --> */}
          <div>
            <h2 className="text-lg font-semibold mb-3">NAVIGATION</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Surveys
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Our Rates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Download Flyer
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Navigation 2 --> */}
          <div>
            <h2 className="text-lg font-semibold mb-3 invisible md:visible">
              &nbsp;
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Download Brochure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  &raquo; Recommend Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact Us --> */}
          <div>
            <h2 className="text-lg font-semibold mb-3">CONTACT US</h2>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span>&#x1F4CD;</span> 1180 Lovejoy St, Buffalo-14206
              </li>
              <li className="flex items-start gap-2">
                <span>&#x2709;&#xFE0F;</span> moonboutique125@yahoo.com
              </li>
              <li className="flex items-start gap-2">
                <span>&#x260E;&#xFE0F;</span> (716) 259-4849  
              </li>
              <li className="flex items-start gap-2">
                <span>&#x1F4DE;</span> (716) 349-9602
              </li>
            
            </ul>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="border-t border-gray-800 mt-10 pt-4 text-sm text-center text-gray-400">
          <p>Copyright © 2025, All Right Reserved by Moon Handyman</p>
          <p>
            Developed By{" "}
            <a
              href="https://northbytesolution.com/"
              className="text-blue-400 hover:underline"
            >
              NorthByte Solution
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterLayout;

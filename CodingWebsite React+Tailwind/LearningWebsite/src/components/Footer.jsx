import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-300 to-sky-800 text-white py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-neutral-100">
              We are dedicated to providing top-notch educational resources and courses to help you grow and succeed. Whether you're a student, professional, or lifelong learner, we have the right tools for you.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#courses" className="hover:underline text-neutral-100">Courses</a></li>
              <li><a href="#about" className="hover:underline text-neutral-100">About Us</a></li>
              <li><a href="#blog" className="hover:underline text-neutral-100">Blog</a></li>
              <li><a href="#contact" className="hover:underline text-neutral-100">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-neutral-300 mb-4">Follow us on social media and subscribe to our newsletter for the latest updates.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-neutral-600 pt-6">
          <p className="text-neutral-100 text-lg">&copy; {new Date().getFullYear()} Muhammad Ateeb Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

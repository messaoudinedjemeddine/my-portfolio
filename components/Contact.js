import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn, 
  faTwitter, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhoneAlt, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const socialLinks = [
    { name: 'Facebook', icon: faFacebookF, url: 'https://www.facebook.com/kh1tab/' },
    { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/messaoudi_nedjemeddine/' },
    { name: 'LinkedIn', icon: faLinkedinIn, url: 'https://www.linkedin.com/in/messaoudinedjemeddine/' },
    { name: 'Twitter', icon: faTwitter, url: 'https://twitter.com/yourprofile' },
    { name: 'WhatsApp', icon: faWhatsapp, url: 'https://wa.me/213664900980' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-background">
      <div className="container mx-auto max-w-lg">
        {/* Direct Messages Form */}
        <h2 className="text-center text-primary text-xl font-bold mb-[40px]">Direct Messages</h2>
        <form 
          action="https://formspree.io/f/xovekvog" // Your Formspree endpoint
          method="POST"
          className="space-y-6"
        >
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-600 bg-dark-card text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg border border-gray-600 bg-dark-card text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 hover:text-dark transition-all duration-200 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links Card */}
        <div className="mt-10 bg-dark-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Social Media Accounts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-primary hover:text-dark transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon icon={social.icon} className="text-white text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="mt-10 bg-dark-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              <span>messaoudinedjemeddine@gmail.com</span>
            </li>
            <li className="flex items-center gap-x-4">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-primary" />
              <span>+213664900980</span>
            </li>
            <li className="flex items-center gap-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
              <span>Batna, Algeria</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

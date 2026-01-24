import {
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function SocialIcons({ iconSize = 24, iconGap }) {
  const gapClasses = {
    2: "space-x-2",
    3: "space-x-3",
    4: "space-x-4",
    5: "space-x-5",
    6: "space-x-6",
  };

  const gapClass = gapClasses[iconGap] || "space-x-6";

  return (
    <div className={`flex ${gapClass}`}>
      <a
        href="https://www.facebook.com/abusufian.mahin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-primary transition-colors duration-200"
      >
        <FaFacebookF size={iconSize} />
      </a>
      <a
        href="https://github.com/AbuSufianMahin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-primary transition-colors duration-200"
      >
        <FaGithub size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/abu-sufian-mahin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-primary transition-colors duration-200"
      >
        <FaLinkedinIn size={iconSize} />
      </a>
      <a
        href="https://wa.me/+8801629519313"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:text-primary transition-colors duration-200"
      >
        <FaWhatsapp size={iconSize} />
      </a>
    </div>
  );
}

export default SocialIcons;

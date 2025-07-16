import carlZeissLogo from "../assets/carl_zeiss_logo.svg"
import "./Logo.scss";

/**
 * @param {string} variant - "light" or "dark"
 */
const Logo = ({ variant }) => {
  const icon = variant === "carlZeissLogo" ? carlZeissLogo : carlZeissLogo;
  return (
    <a href="/" className="hover-effect logo-wrapper">
      <img src={icon} alt="British Airways" className={"icon " + variant} />
    </a>
  );
};

export default Logo;

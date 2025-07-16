import React from "react";
import Logo from "../Logo";
import "./Header.scss";

const Header = () => {
  const navigations = [
    { label: "About Us", href: "/services" },
    { label: "Products and Solutions", href: "/articles" },
    { label: "Careers", href: "/flightlist" },
    { label: "Contact", href: "/articles" }
  ];

  return (
    <header className="">
      <div className="container header">
        <div className="navigations-wrapper">
          <Logo variant="carlZeissLogo" />
          <nav>
            {navigations.map(({ label, href }, index) => (
              <a
                key={`${href}_${index}`}
                href={href}
                className="font-size-large font-weight-medium color-light hover-effect"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

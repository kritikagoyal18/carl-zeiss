import React, { useMemo } from "react";
import copyright from "../../assets/copyright.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import { useArticles, useServices } from "../../api";
import "./Footer.scss";

const hardcodedCategories = {
  About: [
    {
      label: "Comparny",
      href: "/",
    },
    {
      label: "Careers",
      href: "/",
    },
    {
      label: "FAQ",
      href: "/",
    },
    {
      label: "Contact Us",
      href: "/",
    },
  ],
};

const Footer = () => {
  const { data: articlesData } = useArticles(3);
  const { data: servicesData } = useServices(3);

  const categories = useMemo(() => {
    const map = {};

    if (articlesData && servicesData) {
      const articles = articlesData.map((node) => ({
        label: node.node.title,
        href: `/articles/${node.node.slug}`,
      }));
      const services = servicesData.map((node) => ({
        label: node.node.title,
        href: `/services/${node.node.slug}`,
      }));

      map["Articles"] = articles;
      map["Services"] = services;
    }

    return { ...map, ...hardcodedCategories };
  }, [articlesData, servicesData]);

  return (
    <footer>
      <div className="container footer">
        <div className="bottom-wrapper">
          <div className="rights-wrapper">
            <img src={copyright} alt="Copyright icon" className="icon" />
            <p className="font-size-large font-weight-regular">
              All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

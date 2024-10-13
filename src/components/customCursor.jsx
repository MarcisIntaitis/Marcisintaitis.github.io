// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/customCursor.css";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -600, y: -600 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // add event listeners to detect hover over text tags
    const handleMouseEnterContainer = () => setIsWindow(true);
    const handleMouseLeaveContainer = () => setIsWindow(false);
    const handleMouseEnterLink = () => setIsHoveringLink(true);
    const handleMouseLeaveLink = () => setIsHoveringLink(false);
    const handleMouseEnter = () => setIsHoveringText(true);
    const handleMouseLeave = () => setIsHoveringText(false);

    const textTags = document.querySelectorAll("h1, h2, h3, p, span, img, p"); // tags that the cursor reacts to

    const containerTags = document.querySelectorAll("section");

    const linkTags = document.querySelectorAll("a, Link");

    textTags.forEach((tag) => {
      tag.addEventListener("mouseenter", handleMouseEnter);
      tag.addEventListener("mouseleave", handleMouseLeave);
    });
    containerTags.forEach((tag) => {
      tag.addEventListener("mouseenter", handleMouseEnterContainer);
      tag.addEventListener("mouseleave", handleMouseLeaveContainer);
    });
    linkTags.forEach((tag) => {
      tag.addEventListener("mouseenter", handleMouseEnterLink);
      tag.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      textTags.forEach((tag) => {
        tag.removeEventListener("mouseenter", handleMouseEnter);
        tag.removeEventListener("mouseleave", handleMouseLeave);
      });
      containerTags.forEach((tag) => {
        tag.removeEventListener("mouseenter", handleMouseEnterContainer);
        tag.removeEventListener("mouseleave", handleMouseLeaveContainer);
      });
      linkTags.forEach((tag) => {
        tag.removeEventListener("mouseenter", handleMouseEnterLink);
        tag.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        translate: "(-50% -50%)",
        width: isHoveringLink ? "0" : isHoveringText ? "4px" : "15px", // set width and height to 0 when showing triangle
        height: isHoveringLink ? "0" : isHoveringText ? "20px" : "15px",
        borderLeft: isHoveringLink ? "7px solid transparent" : "none",
        borderRight: isHoveringLink ? "7px solid transparent" : "none",
        borderBottom: isHoveringLink ? "18px solid #fff" : "none", // triangle shape when hovering
        rotateZ: isHoveringText ? "none" : "-45deg",
      }}
      className="custom-cursor"
      style={{
        zIndex: "1000",
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,

        backgroundColor: !isWindow
          ? "#500"
          : isHoveringLink
          ? "transparent" // Set transparent background when showing triangle
          : "#fff",
      }}
    />
  );
};

export default CustomCursor;

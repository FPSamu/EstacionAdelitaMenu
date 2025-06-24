import "../assets/styles/Separator.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Separator({ variant }) {
  const notHome = variant !== "home";
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const isBebida = ["bebidasfrias", "bebidascalientes", "bebidastizanas", "bebidastes"].includes(variant);
  const isFromBebida = ["/bebidasfrias", "/bebidascalientes", "/bebidastizanas", "/bebidastes"].includes(prevPath);
  const isFromHome = prevPath === "/";
  const shouldAnimate = isFromHome || !isBebida || !isFromBebida;

  useEffect(() => {
    setPrevPath(location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className={`separator ${variant}`}
      initial={notHome ? { left: "50%", x: "-50%" } : { left: "20px", x: "0%" }}
      animate={notHome ? { left: "20px", x: "0%" } : {left: "50%", x: "-50%"}}
      transition={shouldAnimate ? { duration: 0.6, ease: "easeInOut" } : { duration: 0 }}
    >
    </motion.div>
  );
}

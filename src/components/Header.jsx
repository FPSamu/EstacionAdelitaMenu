import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Header({ logo, cup, label }) {
  const navigate = useNavigate();
  const location = useLocation();

  const notDesayunos = location.pathname !== "/desayunos";
  const isHome = location.pathname === "/";

  const handleClick = () => {
    navigate(isHome ? "/desayunos" : "/");
  };

  const sendHome = () => {
    navigate(isHome ? "/" : "/");
  };

  return (
    <header className={notDesayunos ? "header-home" : "header-desayunos"}>
      <div className={notDesayunos ? "header-content home" : "header-content desayunos"}>
        <img src={logo} alt="Estación Adelita" className="logo" onClick={sendHome}/>
        <div
          className={notDesayunos ? "menu-toggle home" : "menu-toggle desayunos"}
          onClick={handleClick}
        >
          {cup}
          <span>{label}</span>
        </div>
      </div>
    </header>
  );
}

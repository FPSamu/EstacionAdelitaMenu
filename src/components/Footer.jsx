import { useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();
    const notDesayunos = location.pathname !== "/desayunos";
    const isHome = location.pathname === "/";
    const footerClass = notDesayunos ? "footer-home" : "footer-desayunos";

    return (
        <footer className={footerClass}>
            <div className="footer-title">Estación Adelita</div>
            <div className="footer-subtitle">Gran sabor a tu vida</div>
            <div className="social-icons">
                <a href="https://www.facebook.com/LADELITAHDOC/">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 0C6.04463 0 0 6.07576 0 13.5695C0 20.3724 4.986 25.9902 11.4818 26.9717V17.1655H8.14163V13.5989H11.4818V11.2254C11.4818 7.29589 13.3864 5.57143 16.6354 5.57143C18.1913 5.57143 19.0147 5.6879 19.404 5.73992V8.853H17.1877C15.8085 8.853 15.327 10.1681 15.327 11.6495V13.5989H19.3691L18.8212 17.1655H15.327V27C21.9161 26.1021 27 20.4391 27 13.5695C27 6.07576 20.9554 0 13.5 0Z" fill="#FFF7CC" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/estacionadelita/">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.9" d="M7.45192 0.0464478C3.33697 0.0464478 0 3.38342 0 7.49837V19.4214C0 23.5364 3.33697 26.8734 7.45192 26.8734H19.375C23.49 26.8734 26.8269 23.5364 26.8269 19.4214V7.49837C26.8269 3.38342 23.49 0.0464478 19.375 0.0464478H7.45192ZM22.3558 3.02722C23.1785 3.02722 23.8462 3.69491 23.8462 4.5176C23.8462 5.34029 23.1785 6.00799 22.3558 6.00799C21.5331 6.00799 20.8654 5.34029 20.8654 4.5176C20.8654 3.69491 21.5331 3.02722 22.3558 3.02722ZM13.4135 6.00799C17.5284 6.00799 20.8654 9.34496 20.8654 13.4599C20.8654 17.5749 17.5284 20.9118 13.4135 20.9118C9.29851 20.9118 5.96154 17.5749 5.96154 13.4599C5.96154 9.34496 9.29851 6.00799 13.4135 6.00799ZM13.4135 8.98876C12.2276 8.98876 11.0904 9.45982 10.2519 10.2983C9.41337 11.1368 8.94231 12.2741 8.94231 13.4599C8.94231 14.6457 9.41337 15.783 10.2519 16.6215C11.0904 17.46 12.2276 17.9311 13.4135 17.9311C14.5993 17.9311 15.7365 17.46 16.575 16.6215C17.4135 15.783 17.8846 14.6457 17.8846 13.4599C17.8846 12.2741 17.4135 11.1368 16.575 10.2983C15.7365 9.45982 14.5993 8.98876 13.4135 8.98876Z" fill="#FFF7CC" />
                    </svg>
                </a>
            </div>
            <div className="copyright">
                &copy; Estación Adelita. Todos los derechos reservados
            </div>
        </footer>
    );
}

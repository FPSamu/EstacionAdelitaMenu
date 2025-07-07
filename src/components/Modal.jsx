// src/components/Modal.jsx
import { motion } from "framer-motion";
import styles from "../assets/styles/Modal.module.css";

export default function Modal({ modalAbierto, onClose, children }) {
    if (!modalAbierto) return null;

    return (
        <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className={styles.modal}
                initial={{ y: "-50%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-50%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // Evita que al hacer click dentro se cierre
            >
                <button className={styles.close} onClick={onClose}>×</button>
                {children}
            </motion.div>
        </motion.div>
    );
}

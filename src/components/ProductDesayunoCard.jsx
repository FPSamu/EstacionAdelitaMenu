import styles from "../assets/styles/Desayunos.module.css"

export default function ProductDesayunoCard({title, desc, precio, image, onClick }) {
    return (
        <div className={styles["menu-card"]} onClick={onClick}>
            <div className={styles["menu-image"]}>
                <img src={image} alt={title} />
            </div>
            <div className={styles["menu-title"]}>{title}</div>
            {desc && <div className={styles["menu-desc"]}>{desc}</div>}
            {precio && <div className={styles["menu-price"]}>{precio}</div>}
        </div>
    );
}
  
export default function CategoryCard({ icon, label, onClick }) {
  return (
    <div className="menu-card" onClick={onClick}>
      <div className="menu-card-icon">
        {icon}
      </div>

      <span>{label}</span>
      <div className="card-separator"></div>
    </div>
  );
}

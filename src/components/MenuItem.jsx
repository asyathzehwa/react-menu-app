function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <div className="menu-card">
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p>{description}</p>

      {isVegetarian && <span className="veg-badge">Vegetarian</span>}
    </div>
  );
}

export default MenuItem;

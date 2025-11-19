import MenuItem from "./components/MenuItem";
import "./App.css";

function App() {
  const mainCourses = [
    { name: "Chicken Biryani", category: "Main Course", price: 250, description: "Spicy and flavorful biryani.", isVegetarian: false },
    { name: "Veg Pulao", category: "Main Course", price: 150, description: "Light and aromatic rice.", isVegetarian: true },
    { name: "Paneer Butter Masala", category: "Main Course", price: 200, description: "Creamy paneer gravy.", isVegetarian: true },
    { name: "Fish Curry", category: "Main Course", price: 300, description: "Traditional coastal curry.", isVegetarian: false }
  ];

  const desserts = [
    { name: "Gulab Jamun", category: "Dessert", price: 80, description: "Sweet and soft dessert.", isVegetarian: true },
    { name: "Ice Cream", category: "Dessert", price: 120, description: "Cold creamy scoop.", isVegetarian: true },
    { name: "Brownie", category: "Dessert", price: 150, description: "Warm chocolate brownie.", isVegetarian: true }
  ];

  const totalItems = mainCourses.length + desserts.length;

  return (
    <div>
      <header>
        <h1>Sunrise Restaurant</h1>
        <p>Delicious Food, Made Fresh Daily</p>
      </header>

      <h2>Main Courses</h2>
      <div className="menu-grid">
        {mainCourses.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      <h2>Desserts</h2>
      <div className="menu-grid">
        {desserts.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      <section>
        <h3>Total Items: {totalItems}</h3>
        <p>Open Daily: 11 AM – 10 PM</p>
        <p>Contact: +91 9876543210</p>
      </section>

      <footer>
        <p>© 2025 Sunrise Restaurant</p>
      </footer>
    </div>
  );
}

export default App;


import "./components/SkyTheme.css";
import "./components/ShivamUI.css";
import ShivamAdvancedPortfolio from "./components/ShivamAdvancedPortfolio";
import AdminDashboard from "./components/AdminDashboard";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  if (window.location.pathname.startsWith("/admin")) return <div className="admin-shell"><AdminDashboard /></div>;
  if (window.location.pathname.startsWith("/profile")) return <ProfilePage />;
  return <ShivamAdvancedPortfolio />;
}

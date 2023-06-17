import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-slate-900 w-60 h-screen text-white text-center">
      <h1 className="py-8 text-3xl">FINANCIAL <br /> MANAGEMENT</h1>
      <ul>
        <li
          className={`py-2 ${selectedItem === "spend" ? "bg-gray-700" : ""}`}
          onClick={() => handleItemSelected("spend")}
        >
          <Link to="/">Spend</Link>
        </li>
        <li
          className={`py-2 ${selectedItem === "wallet" ? "bg-gray-700" : ""}`}
          onClick={() => handleItemSelected("wallet")}
        >
          <Link to="/funding">Wallet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// PlantList.js
import React, { useEffect, useState } from "react";
import { db, collection, getDocs, addDoc, deleteDoc, doc } from "./firebase";
import { useNavigate } from "react-router-dom";
import './App.css'; // นำเข้าไฟล์ CSS ที่ตกแต่งไว้

function PlantList() {
  const [plants, setPlants] = useState([]);
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");
  const navigate = useNavigate();

  const fetchPlants = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "plants"));
      setPlants(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error fetching plants: ", error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const handleAddPlant = async () => {
    if (!newPlantName || !newPlantPrice) {
      alert("Please fill in both name and price.");
      return;
    }

    try {
      await addDoc(collection(db, "plants"), {
        name: newPlantName,
        price: parseFloat(newPlantPrice),
      });
      fetchPlants();
      setNewPlantName("");
      setNewPlantPrice("");
    } catch (error) {
      console.error("Error adding plant: ", error);
    }
  };

  const handleDeletePlant = async (id) => {
    try {
      const plantDoc = doc(db, "plants", id);
      await deleteDoc(plantDoc);
      fetchPlants();
    } catch (error) {
      console.error("Error deleting plant: ", error);
    }
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Plant List</h1>
      <input
        type="text"
        value={newPlantName}
        onChange={(e) => setNewPlantName(e.target.value)}
        placeholder="Enter plant name"
      />
      <input
        type="number"
        value={newPlantPrice}
        onChange={(e) => setNewPlantPrice(e.target.value)}
        placeholder="Enter plant price"
      />
      <button onClick={handleAddPlant}>Add Plant</button>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            {plant.name} - ${plant.price}
            <button className="delete" onClick={() => handleDeletePlant(plant.id)}>
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
      <button className="back-to-login" onClick={handleBackToLogin}>
        Back to Login
      </button>
    </div>
  );
}

export default PlantList;

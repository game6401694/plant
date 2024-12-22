const express = require("express");
const { db, collection, doc, deleteDoc } = require("./firebase");
const app = express();

app.use(express.json());

// API สำหรับลบสินค้า
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // หาสินค้าที่ต้องการลบ
    const productRef = doc(db, "products", id);
    
    // ลบสินค้า
    await deleteDoc(productRef);

    res.status(200).send("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Error deleting product");
  }
});

// ฟังเซิร์ฟเวอร์ที่พอร์ต 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

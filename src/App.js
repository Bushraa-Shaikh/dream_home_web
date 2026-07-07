import React from "react";
import PropertyCard from "./components/PropertyCard";

function App() {
  const sampleProperty = {
    title: "Dream Villa",
    description: "Luxury villa with pool",
    price: 50000,
    location: "Main Road, Larkana",
    bedrooms: 4,
    bathrooms: 3,
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/house-1867187_960_720.jpg"
    ]
  };

  return (
    <div>
      <h1>Properties</h1>
      <PropertyCard property={sampleProperty} />
    </div>
  );
}

export default App;

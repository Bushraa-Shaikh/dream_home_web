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
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/2189456762/photo/minimalist-living-room-with-desert-view.webp?s=2048x2048&w=is&k=20&c=sFEj_GLk_uV_u4-w6ZU1D7F5-aB9bc6Nva3hDI4V5sE=",
      "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661963201626-2c69cfbe4f8a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1767348922879-a5cade5cceff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

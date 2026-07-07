import React from "react";

function PropertyCard({ property }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Status: {property.status}</p>

      {property.images?.map((url, index) => (
        <img key={index} src={url} alt="Property" style={{ width: "200px", marginRight: "10px" }} />
      ))}
    </div>
  );
}

export default PropertyCard;

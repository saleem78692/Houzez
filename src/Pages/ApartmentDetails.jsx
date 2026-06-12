import React from "react";
import CategoryDetailTemplate from "./CategoryDetailTemplate";
import { propertiesData } from "../assets/propertiesData";

function ApartmentDetails() {
  // Filter apartment-like properties (e.g. Duplex, Penthouse, Townhouse, or any fallback if none)
  let apartments = propertiesData.filter(
    (p) =>
      p.type.toLowerCase() === "apartment" ||
      p.type.toLowerCase() === "duplex" ||
      p.type.toLowerCase() === "penthouse" ||
      p.type.toLowerCase() === "townhouse"
  );

  // Fallback/Mock if none found (but Duplex, Penthouse, Townhouse exist in propertiesData)
  return (
    <CategoryDetailTemplate
      title="Apartment Properties"
      description="Explore our finest selection of modern apartments, luxury penthouses, duplexes, and contemporary townhouses."
      categoryProperties={apartments}
    />
  );
}

export default ApartmentDetails;

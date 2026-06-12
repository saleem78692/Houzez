import React from "react";
import CategoryDetailTemplate from "./CategoryDetailTemplate";
import { propertiesData } from "../assets/propertiesData";

function VillaDetails() {
  const villas = propertiesData.filter(
    (p) => p.type.toLowerCase() === "villa" || p.type.toLowerCase() === "estate" || p.type.toLowerCase() === "mansion"
  );

  return (
    <CategoryDetailTemplate
      title="Villa Properties"
      description="Indulge in luxury living with our top-tier villas, spacious estates, and elegant mansions."
      categoryProperties={villas}
    />
  );
}

export default VillaDetails;

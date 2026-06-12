import React from "react";
import CategoryDetailTemplate from "./CategoryDetailTemplate";
import { propertiesData } from "../assets/propertiesData";

function SingleFamilyDetails() {
  const singleFamilyHomes = propertiesData.filter(
    (p) => p.type.toLowerCase() === "single family home"
  );

  return (
    <CategoryDetailTemplate
      title="Single Family Homes"
      description="Find the perfect standalone residential homes, perfect for families seeking comfort, space, and privacy."
      categoryProperties={singleFamilyHomes}
    />
  );
}

export default SingleFamilyDetails;

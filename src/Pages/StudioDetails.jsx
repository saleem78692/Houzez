import React from "react";
import CategoryDetailTemplate from "./CategoryDetailTemplate";
import { propertiesData } from "../assets/propertiesData";

function StudioDetails() {
  // Filter studio-like properties or small units (e.g. Bungalow, Cottage or fallback)
  let studios = propertiesData.filter(
    (p) =>
      p.type.toLowerCase() === "studio" ||
      p.type.toLowerCase() === "bungalow" ||
      p.type.toLowerCase() === "cottage"
  );

  // If none matched, provide some mock studios
  if (studios.length === 0) {
    studios = [
      {
        id: 101,
        title: "Cozy Modern Studio Apartment",
        address: "142 Brickell Ave, Miami, FL 33131, USA",
        price: "$280,000",
        sqFtPrice: "$1,850/sq ft",
        beds: 1,
        baths: 1,
        cars: 1,
        area: "750 Sq Ft",
        type: "STUDIO",
        status: "FOR SALE",
        isFeatured: true,
        isHot: false,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
        agent: {
          name: "Samuel Palmer",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          addedTime: "1 week ago"
        }
      }
    ];
  }

  return (
    <CategoryDetailTemplate
      title="Studio Properties"
      description="Discover elegant studio spaces, compact apartments, and cozy cottages perfect for modern minimalists."
      categoryProperties={studios}
    />
  );
}

export default StudioDetails;

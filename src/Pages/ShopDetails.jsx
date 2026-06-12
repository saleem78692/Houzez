import React from "react";
import CategoryDetailTemplate from "./CategoryDetailTemplate";
import { propertiesData } from "../assets/propertiesData";

function ShopDetails() {
  let shops = propertiesData.filter(
    (p) => p.type.toLowerCase() === "shop" || p.type.toLowerCase() === "commercial"
  );

  if (shops.length === 0) {
    shops = [
      {
        id: 104,
        title: "High-Traffic Retail Showroom",
        address: "102 Collins Avenue, Miami Beach, FL 33139, USA",
        price: "$2,100,000",
        sqFtPrice: "$1,050/sq ft",
        beds: 0,
        baths: 1,
        cars: 2,
        area: "2000 Sq Ft",
        type: "SHOP",
        status: "FOR SALE",
        isFeatured: true,
        isHot: false,
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
        agent: {
          name: "Samuel Palmer",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          addedTime: "3 months ago"
        }
      },
      {
        id: 105,
        title: "Boutique Retail Space",
        address: "740 Ocean Dr, Miami Beach, FL 33139, USA",
        price: "$4,500 / month",
        sqFtPrice: "$30/sq ft",
        beds: 0,
        baths: 1,
        cars: 0,
        area: "1500 Sq Ft",
        type: "SHOP",
        status: "FOR RENT",
        isFeatured: false,
        isHot: true,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        agent: {
          name: "Michelle Ramirez",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          addedTime: "2 months ago"
        }
      }
    ];
  }

  return (
    <CategoryDetailTemplate
      title="Commercial Shops"
      description="Select commercial shop spaces, premium retail storefronts, and boutiques in top locations."
      categoryProperties={shops}
    />
  );
}

export default ShopDetails;

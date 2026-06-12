import React from "react";
import CategoryDetailTemplate from "./CategoryDetailTemplate";
import { propertiesData } from "../assets/propertiesData";

function OfficeDetails() {
  let offices = propertiesData.filter(
    (p) => p.type.toLowerCase() === "office" || p.type.toLowerCase() === "commercial"
  );

  if (offices.length === 0) {
    offices = [
      {
        id: 102,
        title: "Prime Downtown Office Space",
        address: "801 Brickell Ave Penthouse, Miami, FL 33131, USA",
        price: "$1,450,000",
        sqFtPrice: "$4,200/sq ft",
        beds: 0,
        baths: 2,
        cars: 4,
        area: "3200 Sq Ft",
        type: "OFFICE",
        status: "FOR SALE",
        isFeatured: true,
        isHot: true,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        agent: {
          name: "Michelle Ramirez",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          addedTime: "2 weeks ago"
        }
      },
      {
        id: 103,
        title: "Modern Co-working Hub",
        address: "45 Broadway, New York, NY 10006, USA",
        price: "$8,500 / month",
        sqFtPrice: "$35/sq ft",
        beds: 0,
        baths: 4,
        cars: 2,
        area: "4500 Sq Ft",
        type: "OFFICE",
        status: "FOR RENT",
        isFeatured: false,
        isHot: false,
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
        agent: {
          name: "John Doe",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg",
          addedTime: "1 month ago"
        }
      }
    ];
  }

  return (
    <CategoryDetailTemplate
      title="Office Spaces"
      description="Professional and state-of-the-art office spaces, commercial suites, and corporate headquarters."
      categoryProperties={offices}
    />
  );
}

export default OfficeDetails;

export const locationsData = [
  { 
    id: 1,
    name: "Edgewater Mall", 
    city: "Biloxi, MS",
    address: "2600 Beach Blvd, Biloxi, MS 39531",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional", "Black Santa"],
    image: "/images/edgewatermall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$55",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$45",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$40",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$25" },
        { name: "1(5x7) OR 1(6x8)", price: "$22" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" } // Note: intentionally duplicated as per original menu
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  },
  { 
    id: 2,
    name: "Almeda Mall", 
    city: "Houston, TX",
    address: "12200 Gulf Fwy, Houston, TX 77034",
    dates: "Nov 17 - Dec 24",
    experiences: ["Black Santa"],
    image: "/images/almedamall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$45",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$40",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$35",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$15" },
        { name: "1(5x7) OR 1(6x8)", price: "$12" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" }
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  },
  { 
    id: 3,
    name: "Central Mall", 
    city: "Texarkana, TX",
    address: "2400 Richmond Rd, Texarkana, TX 75503",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional"],
    image: "/images/centralmall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$50",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$45",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$40",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$25" },
        { name: "1(5x7) OR 1(6x8)", price: "$22" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" }
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  },
  { 
    id: 4,
    name: "Outlets at Little Rock", 
    city: "Little Rock, AR",
    address: "11201 Bass Pro Pkwy, Little Rock, AR 72210",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional", "Black Santa"],
    image: "/images/outletsmall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$45",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$40",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$35",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$15" },
        { name: "1(5x7) OR 1(6x8)", price: "$12" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" }
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  },
  { 
    id: 5,
    name: "Omaha Mall", 
    city: "Omaha, NE",
    address: "10000 California St, Omaha, NE 68114",
    dates: "Nov 17 - Dec 24",
    experiences: ["Traditional"],
    image: "/images/omahamall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$45",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$40",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$35",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$15" },
        { name: "1(5x7) OR 1(6x8)", price: "$12" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" }
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  },
  { 
    id: 6,
    name: "Northtown Mall", 
    city: "Blaine, MN",
    address: "398 Northtown Dr, Blaine, MN 55434",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional", "Black Santa"],
    image: "/images/northmall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$45",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$40",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$35",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$15" },
        { name: "1(5x7) OR 1(6x8)", price: "$12" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" }
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  },
  { 
    id: 7,
    name: "Clearview Mall", 
    city: "Butler, PA",
    address: "101 Clearview Cir, Butler, PA 16001",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional"],
    image: "/images/clearviewmall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$45",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$40",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$35",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$15" },
        { name: "1(5x7) OR 1(6x8)", price: "$12" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" }
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  },
  { 
    id: 8,
    name: "The Shoppes at Bel Air", 
    city: "Mobile, AL",
    address: "3299 Bel Air Mall, Mobile, AL 36606",
    dates: "Nov 17 - Dec 24",
    experiences: ["Traditional", "Black Santa"],
    image: "/images/belairmall.png",
    pricing: {
      packages: [
        {
          name: "Rudolph",
          price: "$50",
          inclusions: ["2(4x6), 1(5x7), 1(6x8)", "All Digital"]
        },
        {
          name: "Blitzen",
          price: "$45",
          inclusions: ["8 Digital Photos"]
        },
        {
          name: "Dasher",
          price: "$40",
          inclusions: ["2(4x6) and 1 Digital Image"]
        }
      ],
      addOns: [
        { name: "2(4x6)", price: "$25" },
        { name: "1(5x7) OR 1(6x8)", price: "$22" }
      ],
      frames: [
        { name: "4X6 NUTCRACKER", price: "$39" },
        { name: "5X7/4X6 GREEN LIGHT", price: "$24" },
        { name: "5X7 LIGHTED HAND-PAINTED", price: "$39" },
        { name: "4X6 SNOWFLAKE", price: "$15" },
        { name: "4X6 WOOD REINDEER", price: "$24" },
        { name: "4X6 NUTCRACKER", price: "$15" }
      ],
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    }
  }
];

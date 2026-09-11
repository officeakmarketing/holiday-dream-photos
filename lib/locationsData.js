export const locationsData = [
  { 
    id: 1,
    name: "Edgewater Mall", 
    city: "Biloxi, MS",
    address: "2600 Beach Blvd, Biloxi, MS 39531",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional Santa", "Black Santa"],
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
    },
    schedule: {
      regularHours: [
        { dates: "Nov 7", hours: "11:00 AM - 6:00 PM" },
        { dates: "Nov 8", hours: "12:00 PM - 6:00 PM" },
        { dates: "Nov 9 - Nov 12", hours: "Closed" },
        { dates: "Nov 13 - Nov 15", hours: "12:00 PM - 6:00 PM" },
        { dates: "Nov 16", hours: "Closed" },
        { dates: "Nov 17 - Nov 28", hours: "12:00 PM - 6:00 PM" },
        { dates: "Nov 29", hours: "Closed" },
        { dates: "Nov 30 - Dec 23", hours: "11:00 AM - 7:00 PM", break: "Break: 3:00 PM - 3:30 PM" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM", break: "Break: 1:00 PM - 1:30 PM" }
      ],
      specialEvents: [
        { date: "Nov 7 (Sat)", event: "Santa Arrival @ 11:00 AM" },
        { date: "Nov 20 (Fri)", event: "Soulful Santa (3:00 PM - 7:00 PM)" },
        { date: "Nov 21 (Sat)", event: "Grinch Hours (11:00 AM - 4:00 PM)" },
        { date: "Nov 22 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM)" },
        { date: "Nov 27 (Sat)", event: "Grinch Hours (11:00 AM - 4:00 PM)" },
        { date: "Dec 4 (Sat)", event: "Grinch Hours (11:00 AM - 4:00 PM)" },
        { date: "Dec 5 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM)" },
        { date: "Dec 10 (Fri)", event: "Soulful Santa (3:00 PM - 7:00 PM)" },
        { date: "Dec 11 (Sat)", event: "Grinch Only (9:00 AM - 11:00 AM)" },
        { date: "Dec 12 (Sun)", event: "Pet Night (6:00 PM - 8:00 PM) & Grinch Hours" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540184"
  },
  { 
    id: 2,
    name: "Almeda Mall", 
    city: "Houston, TX",
    address: "12200 Gulf Fwy, Houston, TX 77034",
    dates: "Nov 17 - Dec 24",
    experiences: ["Traditional Santa only"],
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

      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    },
    schedule: {
      regularHours: [
        { dates: "Nov 27 - Nov 29 (Fri-Sun)", hours: "1:00 PM - 6:00 PM" },
        { dates: "Dec 3 - Dec 6 (Thu-Sun)", hours: "1:00 PM - 6:00 PM" },
        { dates: "Dec 10 - Dec 13 (Thu-Sun)", hours: "1:00 PM - 6:00 PM" },
        { dates: "Dec 17 - Dec 18 (Thu-Fri)", hours: "1:00 PM - 6:00 PM" },
        { dates: "Dec 19 - Dec 23", hours: "11:00 AM - 7:00 PM", break: "Holiday Hours (Break: 3:00 - 3:30 PM)" },
        { dates: "Dec 24 (Christmas Eve)", hours: "11:00 AM - 4:00 PM" }
      ],
      specialEvents: [
        { date: "Dec 6 (Sun)", event: "Pet Night (6:00 PM - 8:00 PM)" },
        { date: "Dec 13 (Sun)", event: "Sweet Moments (9:30 AM - 11:30 AM)" },
        { date: "Dec 19 (Sat)", event: "Cookies with Santa (2:00 PM - 4:00 PM)" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540199"
  },
  { 
    id: 3,
    name: "Central Mall", 
    city: "Texarkana, TX",
    address: "2400 Richmond Rd, Texarkana, TX 75503",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional Santa only"],
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
    },
    schedule: {
      regularHours: [
        { dates: "Nov 21 - Nov 24", hours: "1:00 PM - 7:00 PM" },
        { dates: "Nov 25", hours: "1:00 PM - 5:00 PM" },
        { dates: "Nov 26", hours: "Closed (Thanksgiving)" },
        { dates: "Nov 27 - Nov 28", hours: "1:00 PM - 7:00 PM" },
        { dates: "Nov 29 (Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Nov 30 - Dec 1", hours: "Closed" },
        { dates: "Dec 2 - Dec 5", hours: "1:00 PM - 7:00 PM" },
        { dates: "Dec 6 (Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Dec 7 - Dec 8", hours: "Closed" },
        { dates: "Dec 9 - Dec 12", hours: "1:00 PM - 7:00 PM" },
        { dates: "Dec 13 (Sun)", hours: "12:00 PM - 6:00 PM", break: "Break: 3:00 - 3:30 PM" },
        { dates: "Dec 14 - Dec 19", hours: "1:00 PM - 7:00 PM" },
        { dates: "Dec 20 (Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Dec 21 - Dec 23", hours: "11:00 AM - 7:00 PM", break: "Holiday Hours (Break 3:00-3:30 PM)" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM", break: "Holiday Hours (Break 1:00-1:30 PM)" }
      ],
      specialEvents: [
        { date: "Nov 21", event: "Santa Arrival" },
        { date: "Dec 6 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM)" },
        { date: "Dec 13 (Sun)", event: "Pet Night (6:00 PM - 8:00 PM)" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540200"
  },
  { 
    id: 4,
    name: "Outlets at Little Rock", 
    city: "Little Rock, AR",
    address: "11201 Bass Pro Pkwy, Little Rock, AR 72210",
    dates: "Nov 24 - Dec 24",
    experiences: ["Black Santa only"],
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
    },
    schedule: {
      regularHours: [
        { dates: "Nov 27 (Fri)", hours: "2:00 PM - 7:00 PM" },
        { dates: "Nov 28 - Nov 29 (Sat-Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Dec 3 - Dec 4 (Thu-Fri)", hours: "2:00 PM - 7:00 PM" },
        { dates: "Dec 5 - Dec 6 (Sat-Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Dec 10 - Dec 11 (Thu-Fri)", hours: "2:00 PM - 7:00 PM" },
        { dates: "Dec 12 - Dec 13 (Sat-Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Dec 17 - Dec 18 (Thu-Fri)", hours: "2:00 PM - 7:00 PM" },
        { dates: "Dec 19 (Sat)", hours: "11:00 AM - 7:00 PM", break: "Break: 3:00 - 3:30 PM (Extended Holiday Hours)" },
        { dates: "Dec 20 (Sun)", hours: "4:00 PM - 8:00 PM", break: "Holiday Hours" },
        { dates: "Dec 21 - Dec 23", hours: "11:00 AM - 7:00 PM", break: "Break: 3:00 - 3:30 PM (Holiday Hours)" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM", break: "Break: 1:00 - 1:30 PM" }
      ],
      specialEvents: [
        { date: "Dec 6 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM) & Pet Night (6:00 PM - 8:00 PM)" },
        { date: "Dec 13 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM)" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540201"
  },
  { 
    id: 5,
    name: "Oakview Mall", 
    city: "Omaha, NE",
    address: "10000 California St, Omaha, NE 68114",
    dates: "Nov 17 - Dec 24",
    experiences: ["Traditional Santa only"],
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

      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    },
    schedule: {
      regularHours: [
        { dates: "Nov 27 - Dec 20 (Fridays & Saturdays)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Nov 29 - Dec 20 (Sundays)", hours: "12:00 PM - 5:00 PM" },
        { dates: "Dec 21 - Dec 23", hours: "12:00 PM - 6:00 PM", break: "Holiday Hours" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM" }
      ],
      specialEvents: [
        { date: "Dec 6 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM)" },
        { date: "Dec 13 (Sun)", event: "Pet Night (5:00 PM - 7:00 PM)" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540204"
  },
  { 
    id: 6,
    name: "Northtown Mall", 
    city: "Blaine, MN",
    address: "398 Northtown Dr, Blaine, MN 55434",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional Santa only"],
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
    },
    schedule: {
      regularHours: [
        { dates: "Wednesdays - Fridays", hours: "1:00 PM - 7:00 PM" },
        { dates: "Saturdays", hours: "12:00 PM - 7:00 PM" },
        { dates: "Sundays", hours: "12:00 PM - 6:00 PM" },
        { dates: "Mondays & Tuesdays", hours: "Closed" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM" }
      ],
      specialEvents: [
        { date: "Dec 6 (Sun)", event: "Pet Night (6:00 PM - 8:00 PM)" },
        { date: "Dec 13 (Sun)", event: "Sweet Moments (9:30 AM - 11:30 AM)" },
        { date: "Dec 19 (Sat)", event: "Cookies with Santa (2:00 PM - 4:00 PM)" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540206"
  },
  { 
    id: 7,
    name: "Clearview Mall", 
    city: "Butler, PA",
    address: "101 Clearview Cir, Butler, PA 16001",
    dates: "Nov 24 - Dec 24",
    experiences: ["Traditional Santa only"],
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

      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    },
    schedule: {
      regularHours: [
        { dates: "Nov 27 - Dec 20 (Fridays & Saturdays)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Nov 29 - Dec 20 (Sundays)", hours: "12:00 PM - 5:00 PM" },
        { dates: "Dec 21 - Dec 23", hours: "12:00 PM - 6:00 PM", break: "Holiday Hours" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM" }
      ],
      specialEvents: [
        { date: "Dec 6 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM)" },
        { date: "Dec 13 (Sun)", event: "Pet Night (5:00 PM - 7:00 PM)" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540208"
  },
  { 
    id: 8,
    name: "The Shoppes at Bel Air", 
    city: "Mobile, AL",
    address: "3299 Bel Air Mall, Mobile, AL 36606",
    dates: "Nov 17 - Dec 24",
    experiences: ["Black Santa only"],
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
    },
    schedule: {
      regularHours: [
        { dates: "Nov 21 - Nov 24", hours: "1:00 PM - 7:00 PM" },
        { dates: "Nov 25", hours: "1:00 PM - 5:00 PM" },
        { dates: "Nov 26", hours: "Closed (Thanksgiving)" },
        { dates: "Nov 27 - Nov 28", hours: "1:00 PM - 7:00 PM" },
        { dates: "Nov 29 (Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Nov 30 - Dec 1", hours: "Closed" },
        { dates: "Dec 2 - Dec 5", hours: "1:00 PM - 7:00 PM" },
        { dates: "Dec 6 (Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Dec 7 - Dec 8", hours: "Closed" },
        { dates: "Dec 9 - Dec 12", hours: "1:00 PM - 7:00 PM" },
        { dates: "Dec 13 (Sun)", hours: "12:00 PM - 6:00 PM", break: "Break: 3:00 - 3:30 PM" },
        { dates: "Dec 14 - Dec 19", hours: "1:00 PM - 7:00 PM" },
        { dates: "Dec 20 (Sun)", hours: "12:00 PM - 6:00 PM" },
        { dates: "Dec 21 - Dec 23", hours: "11:00 AM - 7:00 PM", break: "Holiday Hours (Break 3:00-3:30 PM)" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM", break: "Holiday Hours (Break 1:00-1:30 PM)" }
      ],
      specialEvents: [
        { date: "Nov 20 (Fri)", event: "Parade (5:00 PM - 9:00 PM)" },
        { date: "Dec 6 (Sun)", event: "Sweet Moments (9:00 AM - 11:00 AM)" },
        { date: "Dec 13 (Sun)", event: "Pet Night (6:00 PM - 8:00 PM)" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540211"
  },
  { 
    id: 9,
    name: "Greenbriar Mall", 
    city: "Atlanta, GA",
    address: "PENDING FROM CLIENT",
    dates: "Nov 21 - Dec 24",
    experiences: ["Black Santa only"],
    image: "/images/greenbrair.jpeg",
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
      disclaimer: "NO PERSONAL PHOTOGRAPHY ALLOWED"
    },
    schedule: {
      regularHours: [
        { dates: "Nov 21, Nov 23 - Nov 28", hours: "12:00 PM - 7:00 PM", break: "Break: 3:00 - 3:30 PM" },
        { dates: "Nov 22 & Nov 29 (Sundays)", hours: "12:00 PM - 6:00 PM", break: "Break: 3:00 - 3:30 PM" },
        { dates: "Nov 30 (Mon)", hours: "Closed" },
        { dates: "Dec 1 - Dec 5", hours: "12:00 PM - 7:00 PM", break: "Break: 3:00 - 3:30 PM" },
        { dates: "Dec 6 (Sun)", hours: "12:00 PM - 6:00 PM", break: "Break: 3:00 - 3:30 PM" },
        { dates: "Dec 7 (Mon)", hours: "Closed" },
        { dates: "Dec 8 - Dec 12", hours: "12:00 PM - 7:00 PM", break: "Break: 3:00 - 3:30 PM" },
        { dates: "Dec 13 - Dec 23", hours: "11:00 AM - 7:00 PM", break: "Break: 3:00 - 3:45 PM" },
        { dates: "Dec 24 (Christmas Eve)", hours: "10:00 AM - 4:00 PM", break: "Break: 1:00 - 1:30 PM" }
      ],
      specialEvents: [
        { date: "Nov 21 (Sat)", event: "Santa Arrival Event (12:00 PM - 3:00 PM)" },
        { date: "Nov 24 (Tue)", event: "Pet Night (5:00 PM - 7:00 PM)" },
        { date: "Nov 28 (Sat)", event: "Cookies with Santa (2:00 PM - 4:00 PM)" },
        { date: "Dec 1 (Tue)", event: "Pet Night (5:00 PM - 7:00 PM)" },
        { date: "Dec 5 (Sat)", event: "Cookies with Santa (2:00 PM - 4:00 PM)" },
        { date: "Dec 6 (Sun)", event: "Sweet Moments (9:30 AM - 11:30 AM)" },
        { date: "Dec 8 (Tue)", event: "Pet Night (5:00 PM - 7:00 PM)" },
        { date: "Dec 12 (Sat)", event: "Cookies with Santa (2:00 PM - 4:00 PM)" },
        { date: "Dec 15 (Tue)", event: "Pet Night (5:00 PM - 7:00 PM)" },
        { date: "Dec 19 (Sat)", event: "Cookies with Santa (2:00 PM - 4:00 PM)" },
        { date: "Dec 22 (Tue)", event: "Pet Night (5:00 PM - 7:00 PM)" },
        { date: "Dec 24 (Thu)", event: "Christmas Eve" }
      ],
      acuityLink: ""
    },
    acuityCalendarId: "14540214"
  }
];

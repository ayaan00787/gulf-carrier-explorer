const gulfCarriersData = [
  {
    id: "emirates",
    name: "Emirates",
    country: "United Arab Emirates",
    logoUrl: "https://logos.hunter.io/emirates.com",
    flagUrl: "https://flagcdn.com/ae.svg",
    alliance: "Independent",
    destinationsCount: 144,
    hubAirport: { name: "Dubai International Airport", code: "DXB", coordinates: [25.2532, 55.3657] },
    fleetSummary: { total: 260, airbus: 118, boeing: 142 },
    specificFleet: [
      { model: "Airbus A380-800", count: 118 },
      { model: "Boeing 777-300ER", count: 123 },
      { model: "Boeing 777-200LR", count: 10 },
      { model: "Boeing 777F", count: 9 }
    ]
  },
  {
    id: "etihad",
    name: "Etihad Airways",
    country: "United Arab Emirates",
    logoUrl: "https://logos.hunter.io/etihad.com",
    flagUrl: "https://flagcdn.com/ae.svg",
    alliance: "Independent",
    destinationsCount: 75,
    hubAirport: { name: "Zayed International Airport", code: "AUH", coordinates: [24.4284, 54.6511] },
    fleetSummary: { total: 90, airbus: 45, boeing: 45 },
    specificFleet: [
      { model: "Airbus A380-800", count: 5 },
      { model: "Airbus A350-1000", count: 5 },
      { model: "Airbus A321neo / A320", count: 35 },
      { model: "Boeing 787-9 / 10", count: 40 },
      { model: "Boeing 777-300ER", count: 5 }
    ]
  },
  {
    id: "flydubai",
    name: "flydubai",
    country: "United Arab Emirates",
    logoUrl: "https://logos.hunter.io/flydubai.com",
    flagUrl: "https://flagcdn.com/ae.svg",
    alliance: "Independent",
    destinationsCount: 120,
    hubAirport: { name: "Dubai International Airport", code: "DXB", coordinates: [25.2532, 55.3657] },
    fleetSummary: { total: 85, airbus: 0, boeing: 85 },
    specificFleet: [
      { model: "Boeing 737 MAX 8", count: 53 },
      { model: "Boeing 737 MAX 9", count: 3 },
      { model: "Boeing 737-800", count: 29 }
    ]
  },
  {
    id: "airarabia",
    name: "Air Arabia",
    country: "United Arab Emirates",
    logoUrl: "https://logos.hunter.io/airarabia.com",
    flagUrl: "https://flagcdn.com/ae.svg",
    alliance: "Independent",
    destinationsCount: 170,
    hubAirport: { name: "Sharjah International Airport", code: "SHJ", coordinates: [25.3286, 55.5172] },
    fleetSummary: { total: 73, airbus: 73, boeing: 0 },
    specificFleet: [
      { model: "Airbus A320-200", count: 64 },
      { model: "Airbus A321neo LR", count: 9 }
    ]
  },
  {
    id: "wizzairauh",
    name: "Wizz Air Abu Dhabi",
    country: "United Arab Emirates",
    logoUrl: "https://logos.hunter.io/wizzair.com",
    flagUrl: "https://flagcdn.com/ae.svg",
    alliance: "Independent",
    destinationsCount: 40,
    hubAirport: { name: "Zayed International Airport", code: "AUH", coordinates: [24.4284, 54.6511] },
    fleetSummary: { total: 12, airbus: 12, boeing: 0 },
    specificFleet: [
      { model: "Airbus A321neo", count: 12 }
    ]
  },
  {
    id: "qatar",
    name: "Qatar Airways",
    country: "Qatar",
    logoUrl: "https://logos.hunter.io/qatarairways.com",
    flagUrl: "https://flagcdn.com/qa.svg",
    alliance: "oneworld",
    destinationsCount: 170,
    hubAirport: { name: "Hamad International Airport", code: "DOH", coordinates: [25.2731, 51.6081] },
    fleetSummary: { total: 258, airbus: 110, boeing: 148 },
    specificFleet: [
      { model: "Airbus A350-900 / 1000", count: 58 },
      { model: "Airbus A380-800", count: 10 },
      { model: "Airbus A320-200", count: 42 },
      { model: "Boeing 777-300ER", count: 57 },
      { model: "Boeing 787-8 / 9", count: 48 },
      { model: "Boeing 777-200LR / Freighter", count: 43 }
    ]
  },
  {
    id: "saudia",
    name: "Saudia",
    country: "Saudi Arabia",
    logoUrl: "https://logos.hunter.io/saudia.com",
    flagUrl: "https://flagcdn.com/sa.svg",
    alliance: "SkyTeam",
    destinationsCount: 102,
    hubAirport: { name: "King Abdulaziz International Airport", code: "JED", coordinates: [21.6796, 39.1565] },
    fleetSummary: { total: 156, airbus: 93, boeing: 63 },
    specificFleet: [
      { model: "Airbus A330-300", count: 33 },
      { model: "Airbus A320-200 / neo", count: 60 },
      { model: "Boeing 777-300ER", count: 35 },
      { model: "Boeing 787-9 / 10", count: 28 }
    ]
  },
  {
    id: "flynas",
    name: "flynas",
    country: "Saudi Arabia",
    logoUrl: "https://logos.hunter.io/flynas.com",
    flagUrl: "https://flagcdn.com/sa.svg",
    alliance: "Independent",
    destinationsCount: 70,
    hubAirport: { name: "King Khalid International Airport", code: "RUH", coordinates: [24.9576, 46.6988] },
    fleetSummary: { total: 60, airbus: 60, boeing: 0 },
    specificFleet: [
      { model: "Airbus A320neo", count: 50 },
      { model: "Airbus A320-200", count: 4 },
      { model: "Airbus A330-300", count: 6 }
    ]
  },
  {
    id: "flyadeal",
    name: "flyadeal",
    country: "Saudi Arabia",
    logoUrl: "https://logos.hunter.io/flyadeal.com",
    flagUrl: "https://flagcdn.com/sa.svg",
    alliance: "Independent",
    destinationsCount: 30,
    hubAirport: { name: "King Abdulaziz International Airport", code: "JED", coordinates: [21.6796, 39.1565] },
    fleetSummary: { total: 32, airbus: 32, boeing: 0 },
    specificFleet: [
      { model: "Airbus A320neo", count: 21 },
      { model: "Airbus A320-200", count: 11 }
    ]
  },
  {
    id: "riyadhair",
    name: "Riyadh Air",
    country: "Saudi Arabia",
    logoUrl: "https://logos.hunter.io/riyadhair.com",
    flagUrl: "https://flagcdn.com/sa.svg",
    alliance: "Independent",
    destinationsCount: 0,
    hubAirport: { name: "King Khalid International Airport", code: "RUH", coordinates: [24.9576, 46.6988] },
    fleetSummary: { total: 39, airbus: 0, boeing: 39 },
    specificFleet: [
      { model: "Boeing 787-9 (On Order)", count: 39 }
    ]
  },
  {
    id: "omanair",
    name: "Oman Air",
    country: "Oman",
    logoUrl: "https://logos.hunter.io/omanair.com",
    flagUrl: "https://flagcdn.com/om.svg",
    alliance: "oneworld (Joining)",
    destinationsCount: 50,
    hubAirport: { name: "Muscat International Airport", code: "MCT", coordinates: [23.5933, 58.2844] },
    fleetSummary: { total: 44, airbus: 6, boeing: 38 },
    specificFleet: [
      { model: "Airbus A330-200 / 300", count: 6 },
      { model: "Boeing 737 MAX 8", count: 13 },
      { model: "Boeing 737-800 / 900ER", count: 16 },
      { model: "Boeing 787-8 / 9", count: 9 }
    ]
  },
  {
    id: "salamair",
    name: "SalamAir",
    country: "Oman",
    logoUrl: "https://logos.hunter.io/salamair.com",
    flagUrl: "https://flagcdn.com/om.svg",
    alliance: "Independent",
    destinationsCount: 40,
    hubAirport: { name: "Muscat International Airport", code: "MCT", coordinates: [23.5933, 58.2844] },
    fleetSummary: { total: 11, airbus: 11, boeing: 0 },
    specificFleet: [
      { model: "Airbus A320neo", count: 6 },
      { model: "Airbus A321neo", count: 5 }
    ]
  },
  {
    id: "gulfair",
    name: "Gulf Air",
    country: "Bahrain",
    logoUrl: "https://logos.hunter.io/gulfair.com",
    flagUrl: "https://flagcdn.com/bh.svg",
    alliance: "Independent",
    destinationsCount: 60,
    hubAirport: { name: "Bahrain International Airport", code: "BAH", coordinates: [26.2708, 50.6336] },
    fleetSummary: { total: 38, airbus: 29, boeing: 9 },
    specificFleet: [
      { model: "Airbus A320neo", count: 6 },
      { model: "Airbus A321neo", count: 11 },
      { model: "Airbus A320-200", count: 12 },
      { model: "Boeing 787-9", count: 9 }
    ]
  },
  {
    id: "kuwaitairways",
    name: "Kuwait Airways",
    country: "Kuwait",
    logoUrl: "https://logos.hunter.io/kuwaitairways.com",
    flagUrl: "https://flagcdn.com/kw.svg",
    alliance: "Independent",
    destinationsCount: 55,
    hubAirport: { name: "Kuwait International Airport", code: "KWI", coordinates: [29.2266, 47.9689] },
    fleetSummary: { total: 32, airbus: 22, boeing: 10 },
    specificFleet: [
      { model: "Boeing 777-300ER", count: 10 },
      { model: "Airbus A330-800neo", count: 4 },
      { model: "Airbus A320neo", count: 8 },
      { model: "Airbus A320-200", count: 10 }
    ]
  },
  {
    id: "jazeera",
    name: "Jazeera Airways",
    country: "Kuwait",
    logoUrl: "https://logos.hunter.io/jazeeraairways.com",
    flagUrl: "https://flagcdn.com/kw.svg",
    alliance: "Independent",
    destinationsCount: 65,
    hubAirport: { name: "Kuwait International Airport", code: "KWI", coordinates: [29.2266, 47.9689] },
    fleetSummary: { total: 23, airbus: 23, boeing: 0 },
    specificFleet: [
      { model: "Airbus A320neo", count: 11 },
      { model: "Airbus A320-200", count: 12 }
    ]
  }
];
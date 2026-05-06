const NOT_PUBLIC = "Not publicly stated";

const companies = [
  {
    "name": "NetJets",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.netjets.com",
    "source": "https://www.netjets.com",
    "region": "USA / Global",
    "hq": "Columbus, Ohio, USA",
    "serviceType": "Private Aviation",
    "target": "UHNW / HNW / Corporate",
    "membership": "Fractional Ownership / Full Ownership / Charter",
    "positioning": "World's largest private aviation company. First-mover in fractional ownership. Safety-first brand positioning.",
    "summary": "NetJets pioneered fractional private jet ownership in 1986. Owned by Berkshire Hathaway. Operates over 750 aircraft across 5 continents. Serves both individuals and corporations.",
    "services": [
      "Fractional jet ownership",
      "Full jet ownership",
      "Lease programs",
      "Global reach 55+ countries"
    ],
    "relevance": "Primary reference for structured aviation access models. Fractional ownership concept can inspire WOSOL's tiered access framework.",
    "lesson": "Packaging access into ownership-like structures creates client commitment and recurring revenue."
  },
  {
    "name": "VistaJet",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.vistajet.com",
    "source": "https://www.vistajet.com",
    "region": "Global (100+ countries)",
    "hq": "London, UK / Malta",
    "serviceType": "Private Aviation",
    "target": "UHNW / Global nomads / Corporate leaders",
    "membership": "Membership / Program (no ownership)",
    "positioning": "The alternative to ownership. UHNW-focused brand with a Private Office concierge team. Global consistent experience.",
    "summary": "VistaJet founded in 2004. Operates 360+ aircraft. The only company offering a guaranteed global fleet on a membership basis. Pioneered the membership model without fractional ownership.",
    "services": [
      "Guaranteed availability",
      "No ownership required",
      "Consistent cabin experience",
      "Global Private Office"
    ],
    "relevance": "VistaJet's \"Private Office\" is a direct parallel to WOSOL's Lifestyle Manager model. No-ownership membership is a key inspiration.",
    "lesson": "Premium access without asset ownership - the future of UHNW services. Their Private Office concept maps directly to WOSOL Membership."
  },
  {
    "name": "Flexjet",
    "category": "Private Jets",
    "tags": [
      "Private Jets",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.flexjet.com",
    "source": "https://www.flexjet.com",
    "region": "USA / Europe / Middle East",
    "hq": "Cleveland, Ohio, USA",
    "serviceType": "Private Aviation",
    "target": "HNW / UHNW / Corporate",
    "membership": "Fractional Ownership / Leasing / Charter",
    "positioning": "Luxury positioning within fractional ownership. \"Owner is the only one who flies\" - dedicated aircraft allocation.",
    "summary": "Flexjet was founded in 1995 as a Bombardier subsidiary, now independently owned. Operates premium jets including Gulfstream and Embraer Praetor. Known for dedicated aircraft allocation.",
    "services": [
      "Fractional shares",
      "Lease programs",
      "Owner exchanges",
      "Red Label fleet"
    ],
    "relevance": "Dedicated aircraft model (dedicated share = your aircraft) illustrates value of personalization in access-based services.",
    "lesson": "Personalization and consistency of experience - the client should feel the service was built around them."
  },
  {
    "name": "Air Charter Service",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.aircharterservice.com",
    "source": "https://www.aircharterservice.com",
    "region": "Global",
    "hq": "London, UK",
    "serviceType": "Private Aviation",
    "target": "Corporate / HNW / Events / Sports",
    "membership": "On-demand charter / Contract charter",
    "positioning": "Largest independent charter broker globally. Expert advisory for complex group and VIP requirements.",
    "summary": "ACS is the world's largest private charter broker, operating since 1990. Specializes in group, VIP, and cargo. Offices in 30+ countries.",
    "services": [
      "Private jet charter",
      "Group charter",
      "Cargo charter",
      "Sports and events"
    ],
    "relevance": "Partnership model - no owned fleet, pure expertise-based access. Relevant as a WOSOL aviation partner.",
    "lesson": "Expertise without asset ownership can command premium fees. Broker model for WOSOL aviation partnerships."
  },
  {
    "name": "XO (XOJET)",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.flyxo.com",
    "source": "https://www.flyxo.com",
    "region": "USA / Global",
    "hq": "New York, USA",
    "serviceType": "Private Aviation",
    "target": "HNW / Frequent flyers / Entrepreneurs",
    "membership": "App-based charter / Membership",
    "positioning": "Tech-first private aviation. Transparent pricing, app-based booking. Positioned as the Uber of private jets for HNW.",
    "summary": "XO, backed by Vista Global, combines app technology with charter access. Serves a wider HNW audience than UHNW-only brands. Known for shared flight options.",
    "services": [
      "On-demand charter via app",
      "Shared flights",
      "Guaranteed pricing",
      "Fleet access"
    ],
    "relevance": "Technology-enabled luxury access - reference for WOSOL app-based service infrastructure.",
    "lesson": "Digital-first experience without compromising luxury. App as a premium service gateway."
  },
  {
    "name": "Wheels Up",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://wheelsup.com",
    "source": "https://wheelsup.com",
    "region": "USA / Europe",
    "hq": "New York, USA",
    "serviceType": "Private Aviation",
    "target": "HNW / Frequent corporate travelers",
    "membership": "Membership-based charter",
    "positioning": "Membership community model. Private aviation as a social and lifestyle brand. Partners include Delta Air Lines.",
    "summary": "Wheels Up launched in 2013, pioneering a more accessible private aviation membership. Delta invested in 2020. Balances luxury with community. Operating primarily in USA.",
    "services": [
      "Membership tiers",
      "Guaranteed flight access",
      "Corporate programs",
      "Events and experiences"
    ],
    "relevance": "Membership community positioning - relevant for WOSOL's Premier tier design and events strategy.",
    "lesson": "Community elements and events add belonging beyond the core service. Membership becomes a lifestyle identity."
  },
  {
    "name": "Royal Jet",
    "category": "Private Jets",
    "tags": [
      "Private Jets",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.royaljetgroup.com",
    "source": "https://www.royaljetgroup.com",
    "region": "UAE / Middle East / Global",
    "hq": "Abu Dhabi, UAE",
    "serviceType": "Private Aviation",
    "target": "Royal families / Governments / UHNW / Corporate",
    "membership": "Charter / Full aircraft management",
    "positioning": "Royal-grade private aviation in the Gulf. Protocol-aware. Serves royal families and heads of state.",
    "summary": "Royal Jet is Abu Dhabi's premier private aviation provider, majority owned by Abu Dhabi Aviation. Renowned for handling state visits, royal family travel, and VIP heads of state.",
    "services": [
      "VIP charter",
      "Head of state flights",
      "Aircraft management",
      "Medical evacuations"
    ],
    "relevance": "Protocol-level service and royal discretion - direct reference for WOSOL Imperial tier aviation partnerships.",
    "lesson": "How to serve royalty and heads of state: protocol, zero compromise on privacy, command presence."
  },
  {
    "name": "NasJet",
    "category": "Private Jets",
    "tags": [
      "Private Jets",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.nasjet.com.sa",
    "source": "https://www.nasjet.com.sa",
    "region": "Saudi Arabia / GCC",
    "hq": "Riyadh, Saudi Arabia",
    "serviceType": "Private Aviation",
    "target": "Saudi UHNW / Royal / Corporate",
    "membership": "Charter / Aircraft management",
    "positioning": "Saudi Arabia's leading private aviation brand. Deep roots in KSA royal and UHNW market.",
    "summary": "NasJet operates since 2000, headquartered in Riyadh. Part of the National Air Services Group. Largest private aviation operator in Saudi Arabia. Manages over 60 aircraft.",
    "services": [
      "Private jet charter",
      "Aircraft management",
      "FBO services",
      "VIP ground handling"
    ],
    "relevance": "Primary local aviation partner reference for WOSOL Saudi clients. NasJet understands the Saudi UHNW client profile.",
    "lesson": "Local market expertise in KSA aviation - cultural sensitivity, royal protocol, and Arabic-language service."
  },
  {
    "name": "Jetex",
    "category": "Private Jets",
    "tags": [
      "Private Jets",
      "GCC / Saudi Relevant",
      "Luxury Concierge"
    ],
    "url": "https://www.jetex.com",
    "source": "https://www.jetex.com",
    "region": "UAE / Global (60+ FBOs)",
    "hq": "Dubai, UAE",
    "serviceType": "Private Aviation",
    "target": "UHNW / Corporate / Governments",
    "membership": "FBO / Ground handling / Charter",
    "positioning": "Premium private terminal experience. \"The Journey Begins on the Ground.\" Global FBO network.",
    "summary": "Jetex founded in Dubai in 2005. Now operates 60+ global FBOs. Provides premium private terminal lounges, concierge, and luxury ground transport. Strong GCC and Saudi presence.",
    "services": [
      "Private terminal FBO",
      "Ground handling",
      "Charter",
      "Concierge ground services"
    ],
    "relevance": "Ground experience is part of the journey - Jetex shows how pre-/post-flight concierge adds membership value.",
    "lesson": "The terminal experience is as important as the flight. End-to-end journey management from door to airstairs."
  },
  {
    "name": "ExecuJet",
    "category": "Private Jets",
    "tags": [
      "Private Jets",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.execujet.com",
    "source": "https://www.execujet.com",
    "region": "Global / Strong ME presence",
    "hq": "Switzerland (Zurich)",
    "serviceType": "Private Aviation",
    "target": "Corporate / UHNW / Government",
    "membership": "Aircraft management / Charter / MRO",
    "positioning": "Full-service aviation management. Trusted by corporate and UHNW owners who want aircraft managed professionally.",
    "summary": "ExecuJet, part of Luxaviation Group, operates globally with strong Middle East presence via ExecuJet Middle East (EJME) based in Dubai. Specializes in corporate aviation management.",
    "services": [
      "Aircraft management",
      "Charter",
      "FBO / terminal services",
      "Maintenance MRO"
    ],
    "relevance": "Aircraft management model - relevant if WOSOL's Imperial clients own private jets and need management.",
    "lesson": "Aircraft owners need trusted managers - an extension of WOSOL lifestyle management into aviation assets."
  },
  {
    "name": "Qatar Executive",
    "category": "Private Jets",
    "tags": [
      "Private Jets",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.qatarexec.com.qa",
    "source": "https://www.qatarexec.com.qa",
    "region": "Qatar / Middle East / Global",
    "hq": "Doha, Qatar",
    "serviceType": "Private Aviation",
    "target": "UHNW / Government / Corporate / Medical",
    "membership": "On-demand charter",
    "positioning": "Premium Qatar Airways subsidiary. Largest ultra-long-range business jet fleet in the world. Used by heads of state.",
    "summary": "Qatar Executive operated by Qatar Airways. Operates one of the world's largest ultra-long-range fleets including Gulfstream G650ER. Serves royalty, heads of state, and UHNW globally.",
    "services": [
      "Ultra-long-range charter",
      "Medical evacuation",
      "VIP air ambulance",
      "Custom interiors"
    ],
    "relevance": "Ultra-long-range capability for WOSOL Imperial clients. Relevant for Saudi and Qatari UHNW flight requirements.",
    "lesson": "State-backed aviation brands command absolute trust. Ultra-range capability is a key differentiator for global UHNW."
  },
  {
    "name": "Burgess Yachts",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.burgessyachts.com",
    "source": "https://www.burgessyachts.com",
    "region": "Monaco / Global",
    "hq": "Monaco",
    "serviceType": "Superyacht",
    "target": "UHNW / Ultra-wealthy families",
    "membership": "Charter / Sale / Management",
    "positioning": "Most prestigious superyacht broker globally. Handles yachts 30-100m+. Legacy brand since 1975.",
    "summary": "Founded in 1975, Burgess is considered the world's leading superyacht specialist. Known for discretion and handling the most significant yachts globally. Strong UHNW and HNWI clientele.",
    "services": [
      "Superyacht charter",
      "Sales & purchase",
      "Yacht management",
      "New build consulting"
    ],
    "relevance": "Primary reference for WOSOL yacht partnerships. Burgess-level access gives Imperial and Black tier clients water-based luxury.",
    "lesson": "Yachts as floating estates - the language of \"home at sea\" resonates with UHNW clients who own or charter."
  },
  {
    "name": "Fraser Yachts",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.fraseryachts.com",
    "source": "https://www.fraseryachts.com",
    "region": "Monaco / Global",
    "hq": "Monaco / Fort Lauderdale",
    "serviceType": "Superyacht",
    "target": "HNW / UHNW / Corporate",
    "membership": "Charter / Sales / Management",
    "positioning": "One of the oldest superyacht brokerages. Global network. Charter fleet 40m-90m+.",
    "summary": "Fraser Yachts founded in 1947 in Monaco. One of the world's most established yacht companies. Represented at major yacht shows. Services HNWI and corporate clients worldwide.",
    "services": [
      "Luxury yacht charter",
      "Yacht sales",
      "Yacht management",
      "New build"
    ],
    "relevance": "Partnership reference for WOSOL yacht access - particularly Mediterranean and Caribbean experiences.",
    "lesson": "Legacy and global reach are trust signals for UHNW clients. Age and experience build credibility in yacht services."
  },
  {
    "name": "Camper & Nicholsons",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.camperandnicholsons.com",
    "source": "https://www.camperandnicholsons.com",
    "region": "Monaco / London / Global",
    "hq": "Monaco",
    "serviceType": "Superyacht",
    "target": "UHNW / Royal clientele",
    "membership": "Charter / Sales / Management",
    "positioning": "World's oldest yacht brokerage (est. 1782). Royal warrants. Heritage positioning in UHNW market.",
    "summary": "Camper & Nicholsons is the world's oldest yacht company, founded in 1782. Has held Royal Warrants. Specializes in large yacht charter and sales to the most discerning UHNW clients.",
    "services": [
      "Charter (40m-100m+)",
      "Brokerage sales",
      "Yacht management",
      "Race yachts"
    ],
    "relevance": "Heritage and royal endorsement - relevant for WOSOL Imperial tier. C&N has managed royal yachts.",
    "lesson": "Heritage is a luxury asset. 240+ years of trust is a brand statement no competitor can replicate."
  },
  {
    "name": "Northrop & Johnson",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.northropandjohnson.com",
    "source": "https://www.northropandjohnson.com",
    "region": "USA / Global",
    "hq": "Fort Lauderdale, Florida",
    "serviceType": "Superyacht",
    "target": "HNW / UHNW / Corporate",
    "membership": "Charter / Sales / Management",
    "positioning": "Premium American superyacht brokerage. Strong Caribbean and Atlantic presence.",
    "summary": "Northrop & Johnson, part of the Fraser Yachts group, is a full-service yacht company with 40+ years of experience. Specializes in luxury charter in the Caribbean and beyond.",
    "services": [
      "Superyacht charter",
      "Sales & purchase",
      "Management"
    ],
    "relevance": "Useful reference for WOSOL yacht access in the Americas and Caribbean for Saudi clients traveling west.",
    "lesson": "Geographic specialization builds deep expertise and trust in specific cruising regions."
  },
  {
    "name": "Edmiston",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts",
      "Luxury Concierge"
    ],
    "url": "https://www.edmiston.com",
    "source": "https://www.edmiston.com",
    "region": "Monaco / London / Madrid",
    "hq": "Monaco",
    "serviceType": "Superyacht",
    "target": "UHNW / Ultra-high-end families",
    "membership": "Charter / Sale / New build consulting",
    "positioning": "Ultra-exclusive. Positioned at the absolute top of UHNW yacht services. Also offers private jet brokerage - total lifestyle access.",
    "summary": "Edmiston operates exclusively in the top-tier superyacht segment (50m+). Their Private Aviation division offers charter services alongside yachts. A true lifestyle access company for UHNW.",
    "services": [
      "Elite yacht charter",
      "Superyacht sales",
      "New construction",
      "Aviation brokerage"
    ],
    "relevance": "Edmiston's cross-category approach (jets + yachts) is a direct model for WOSOL's integrated access offering.",
    "lesson": "UHNW clients want one trusted source for all lifestyle access. Bundling yacht and aviation under one relationship is powerful."
  },
  {
    "name": "IYC (International Yacht Co.)",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.iyc.com",
    "source": "https://www.iyc.com",
    "region": "USA / Caribbean / Mediterranean",
    "hq": "Fort Lauderdale / Miami",
    "serviceType": "Superyacht",
    "target": "HNW / UHNW",
    "membership": "Charter / Sales / Management",
    "positioning": "Full-service superyacht services with strong crew expertise. Known for charter management excellence.",
    "summary": "IYC is an internationally recognized yacht brokerage with offices in USA, Spain, Turkey, and the Caribbean. Strong in charter management and known for crew placement expertise.",
    "services": [
      "Yacht charter",
      "Sales",
      "Crew placement",
      "Insurance"
    ],
    "relevance": "Reference for WOSOL yacht service standards - crew quality, onboard experience protocols.",
    "lesson": "Crew quality determines the onboard experience. WOSOL's Lifestyle Manager equivalent on water."
  },
  {
    "name": "Hill Robinson",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.hill-robinson.com",
    "source": "https://www.hill-robinson.com",
    "region": "Monaco / Global",
    "hq": "Monaco",
    "serviceType": "Superyacht",
    "target": "UHNW yacht owners",
    "membership": "Yacht management only",
    "positioning": "Pure yacht management specialist. Does not broker. Manages some of the world's largest private yachts.",
    "summary": "Hill Robinson is one of the world's leading independent yacht management companies, founded 2001 in Monaco. Manages 100+ yachts including some of the largest superyachts afloat.",
    "services": [
      "Full yacht management",
      "Owner support",
      "Charter management",
      "Technical management"
    ],
    "relevance": "Lifestyle Manager model applied to yachts. Hill Robinson manages assets so owners can simply enjoy them.",
    "lesson": "Asset management as a service mirrors WOSOL's core value: manage so the client lives, not manages."
  },
  {
    "name": "Quintessentially",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://quintessentially.com",
    "source": "https://quintessentially.com",
    "region": "Global (60+ offices)",
    "hq": "London, UK",
    "serviceType": "Luxury Concierge",
    "target": "HNW / UHNW / Corporate / Family Office",
    "membership": "Membership (tiered)",
    "positioning": "World's largest luxury concierge. A-Z lifestyle management. Members include royalty, celebrities, and billionaires.",
    "summary": "Founded 2000 in London by Aaron Simpson and Ben Elliot. Now 60+ offices globally. Offers tiered memberships including Ambassador level. Revenue from memberships and service commissions.",
    "services": [
      "Dedicated lifestyle manager",
      "Travel & events",
      "Property management",
      "Health & wellness",
      "Art & culture"
    ],
    "relevance": "Primary competitive benchmark for WOSOL. Their Dedicated Lifestyle Manager model is the global reference for WOSOL Premier.",
    "lesson": "A-Z scope with a dedicated human at the center. The breadth and depth model is what WOSOL strives for."
  },
  {
    "name": "Knightsbridge Circle",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://www.knightsbridgecircle.com",
    "source": "https://www.knightsbridgecircle.com",
    "region": "UK / International",
    "hq": "London, UK",
    "serviceType": "Luxury Concierge",
    "target": "UHNW only - ultra-exclusive",
    "membership": "Invitation only membership",
    "positioning": "The most exclusive concierge in the world. Deliberately limited members. \"No is not in our vocabulary.\"",
    "summary": "Knightsbridge Circle is a purely invitation-only lifestyle concierge. No public pricing. No public membership list. Handles extraordinary requests for the world's most wealthy and powerful.",
    "services": [
      "Impossible requests",
      "Ultra-private travel",
      "Exclusive access",
      "Discreet lifestyle management"
    ],
    "relevance": "Primary reference for WOSOL Imperial tier. Invitation-only model, impossible requests, zero publicity.",
    "lesson": "Scarcity and invitation-only positioning creates the highest perceived value. The fewer who can access, the more valuable the access."
  },
  {
    "name": "Ten Lifestyle Group",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://www.tenlifestylegroup.com",
    "source": "https://www.tenlifestylegroup.com",
    "region": "Global (20+ cities)",
    "hq": "London, UK (LSE listed)",
    "serviceType": "Luxury Concierge",
    "target": "HNW / Corporate / Premium banking clients",
    "membership": "B2B membership (via banks/cards) + Direct membership",
    "positioning": "Technology-enabled concierge. Scalable model. Partners with major banks (Coutts, Visa). Listed on London Stock Exchange.",
    "summary": "Ten Lifestyle Group (LSE: TENG) provides concierge services to banks, financial institutions, and directly to members. Operates in 60 markets, 20+ cities. Pioneered B2B concierge distribution.",
    "services": [
      "Travel",
      "Dining",
      "Entertainment",
      "Sports",
      "Lifestyle requests"
    ],
    "relevance": "Tech + human hybrid model. Relevant for WOSOL app architecture and banking partnership strategy.",
    "lesson": "Scaling concierge through technology while maintaining human relationships is the future. Banking partnerships are revenue multipliers."
  },
  {
    "name": "John Paul",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.johnpaul.com",
    "source": "https://www.johnpaul.com",
    "region": "Global / Strong Europe",
    "hq": "Paris, France",
    "serviceType": "Luxury Concierge",
    "target": "Corporate / HNW / Loyalty programs",
    "membership": "B2B corporate concierge / Loyalty integration",
    "positioning": "Corporate concierge for large enterprises. Helps brands differentiate through lifestyle services for their customers.",
    "summary": "John Paul (owned by AccorHotels) provides B2B concierge services to large corporate clients and luxury brands. Used by banks, luxury retailers, and automotive brands globally.",
    "services": [
      "Corporate lifestyle programs",
      "Customer loyalty concierge",
      "Travel & hospitality"
    ],
    "relevance": "B2B concierge model - relevant for WOSOL corporate partnerships. Help Saudi businesses offer WOSOL-style services to their VIPs.",
    "lesson": "Corporate concierge partnerships are a volume and revenue diversification strategy. White-label potential."
  },
  {
    "name": "Sienna Charles",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge",
      "Private Jets"
    ],
    "url": "https://siennacharles.com",
    "source": "https://siennacharles.com",
    "region": "USA / Global",
    "hq": "New York, USA",
    "serviceType": "Luxury Concierge",
    "target": "UHNW / Private jet travelers",
    "membership": "Application-based membership",
    "positioning": "\"Where the world's elite travel.\" Application-only. No unsolicited inquiries. Ultra-curated experience.",
    "summary": "Sienna Charles is a New York-based luxury travel concierge that exclusively serves UHNW clients. Founded by Jaclyn Sienna India. Known for impossible-to-book reservations and bespoke travel.",
    "services": [
      "Luxury travel",
      "Private aviation integration",
      "Exclusive hotel access",
      "Bespoke experiences"
    ],
    "relevance": "Direct reference for WOSOL Premier - application-based, travel-focused, UHNW-only positioning.",
    "lesson": "Integration of private aviation into travel concierge is a natural value-add for UHNW clients who fly privately."
  },
  {
    "name": "Velocity Black",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://velocityblack.com",
    "source": "https://velocityblack.com",
    "region": "USA / UK / Global",
    "hq": "New York / London",
    "serviceType": "Luxury Concierge",
    "target": "HNW / Digital-native wealth / Tech founders",
    "membership": "App-based membership",
    "positioning": "Digital-native luxury concierge. Blends AI and human expertise. Acquired by Capital One in 2022.",
    "summary": "Velocity Black started as a pure digital concierge. Acquired by Capital One in 2022. Known for its app-based 24/7 chat interface, combining AI with human concierges for seamless requests.",
    "services": [
      "24/7 chat-based requests",
      "Travel & dining",
      "Events & experiences",
      "AI-enhanced service"
    ],
    "relevance": "App-first concierge model - reference for WOSOL's technology and app interface design.",
    "lesson": "The next generation of UHNW clients expects app-based access. Digital convenience with human depth wins."
  },
  {
    "name": "Aspire Lifestyles",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://www.aspirelifestyles.com",
    "source": "https://www.aspirelifestyles.com",
    "region": "Global (40+ countries)",
    "hq": "USA (multiple offices)",
    "serviceType": "Luxury Concierge",
    "target": "Corporate / Premium banking / Insurance",
    "membership": "B2B only",
    "positioning": "Leading global B2B concierge company. Powers premium concierge for credit cards, banks, and insurance.",
    "summary": "Aspire Lifestyles is a global B2B concierge provider owned by International SOS. Serves 40+ countries, powers concierge for major financial institutions. Won awards for luxury concierge excellence.",
    "services": [
      "Lifestyle concierge for financial institutions",
      "VIP travel",
      "Loyalty program management"
    ],
    "relevance": "Reference for WOSOL B2B and corporate partnership strategy - potential model for WOSOL corporate memberships.",
    "lesson": "White-label concierge for financial partners scales reach without brand dilution if structured correctly."
  },
  {
    "name": "The Sincura Group",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://thesincuragroup.com",
    "source": "https://thesincuragroup.com",
    "region": "UK / International",
    "hq": "London, UK",
    "serviceType": "Luxury Concierge",
    "target": "HNW / Celebrities / Sports / Entertainment",
    "membership": "Concierge membership / VIP event access",
    "positioning": "Specializes in \"impossible\" and rare access - sports events, fashion, entertainment. Access-first brand.",
    "summary": "The Sincura Group focuses on rare access - sporting events (F1, Wimbledon, Champions League), fashion weeks, and exclusive cultural events. Growing UHNW membership base in UK.",
    "services": [
      "VIP access",
      "Rare experiences",
      "Events concierge",
      "Personal shopping"
    ],
    "relevance": "VIP events access model - relevant for WOSOL's exclusive events tier and Premier member benefits.",
    "lesson": "\"Access to the inaccessible\" is a compelling value proposition. WOSOL can build similar language around Saudi experiences."
  },
  {
    "name": "Club ELM",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://clubelm.com",
    "source": "https://clubelm.com",
    "region": "UK",
    "hq": "London, UK",
    "serviceType": "Luxury Concierge",
    "target": "HNW / Professionals / Lifestyle-focused",
    "membership": "Private membership club",
    "positioning": "Exclusive dining and lifestyle club. Members-only access to London's most exclusive tables.",
    "summary": "Club ELM is a London-based private lifestyle club focused on dining and curated experiences. Members gain access to fully booked restaurants and private events. Growing niche luxury brand.",
    "services": [
      "Dining reservations",
      "Event access",
      "Lifestyle management",
      "Restaurant partnerships"
    ],
    "relevance": "Dining and exclusivity model - how WOSOL can position F&B access as a membership benefit.",
    "lesson": "Exclusive dining access is a high-value, low-cost benefit that creates daily touchpoints with members."
  },
  {
    "name": "Black Tomato",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.blacktomato.com",
    "source": "https://www.blacktomato.com",
    "region": "UK / USA / Global",
    "hq": "London, UK",
    "serviceType": "Bespoke Travel",
    "target": "HNW / Experience-driven wealthy",
    "membership": "Bespoke itinerary / Project-based",
    "positioning": "\"Travel is an art.\" Transformative experiences, not tourist trips. Award-winning bespoke design.",
    "summary": "Black Tomato founded 2005 in London. Award-winning bespoke travel for HNW. Known for \"Get Lost\" program - curated mystery journeys. Serves clients globally with highly creative travel narratives.",
    "services": [
      "Bespoke travel design",
      "Private expeditions",
      "Honeymoon planning",
      "Get Lost program"
    ],
    "relevance": "WOSOL Journeys sub-brand reference. Journey design language and emotional positioning are highly transferable.",
    "lesson": "Journey design as storytelling. The experience should be described as a \"chapter of life\" not an itinerary."
  },
  {
    "name": "Pelorus",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel",
      "Private Yachts"
    ],
    "url": "https://pelorousyachts.com",
    "source": "https://pelorousyachts.com",
    "region": "UK / Global",
    "hq": "London, UK",
    "serviceType": "Bespoke Travel",
    "target": "UHNW / Expedition seekers",
    "membership": "Bespoke expedition design",
    "positioning": "The most ambitious journeys. Private yachts + remote destinations. \"Any destination, any experience.\"",
    "summary": "Pelorus designs ambitious, bespoke travel using private yachts and customized itineraries. Serves UHNW clients seeking remote, exceptional, and exclusive adventures globally.",
    "services": [
      "Private yacht expeditions",
      "Expedition travel design",
      "Wildlife experiences",
      "Remote access"
    ],
    "relevance": "Expedition-level bespoke travel - premium layer for WOSOL Journeys. Remote and rare access positioning.",
    "lesson": "UHNW clients increasingly seek remote, meaningful experiences over traditional luxury hotels. Exclusivity through rarity."
  },
  {
    "name": "Abercrombie & Kent",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel",
      "Private Jets"
    ],
    "url": "https://www.abercrombiekent.com",
    "source": "https://www.abercrombiekent.com",
    "region": "USA / UK / Global",
    "hq": "Downers Grove, Illinois / London",
    "serviceType": "Bespoke Travel",
    "target": "HNW / Luxury group travel",
    "membership": "Luxury tour operator / Private journeys",
    "positioning": "Heritage luxury travel brand since 1962. Considered the gold standard for safari and expedition luxury travel.",
    "summary": "Abercrombie & Kent founded 1962 by Geoffrey and Jorie Kent in Kenya. Pioneer of luxury safari. Now serves HNW clients globally with private journeys, small group tours, and chartered expeditions.",
    "services": [
      "Private journeys",
      "Luxury safaris",
      "River cruises",
      "Group expedition travel"
    ],
    "relevance": "Reference for WOSOL safari and expedition travel partnerships. Long history of UHNW travel management.",
    "lesson": "Heritage in travel = trust with UHNW clients. 60+ years of service in luxury travel is a powerful brand asset."
  },
  {
    "name": "Scott Dunn Private",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.scottdunn.com",
    "source": "https://www.scottdunn.com",
    "region": "UK / USA / Global",
    "hq": "London, UK",
    "serviceType": "Bespoke Travel",
    "target": "HNW / Family / Honeymoon",
    "membership": "Bespoke private travel design",
    "positioning": "Award-winning bespoke travel for discerning families and couples. Strong in family ultra-luxury.",
    "summary": "Scott Dunn founded 1986. One of the UK's leading luxury travel companies. Known for ski chalets, family specialists, and honeymoon design. Wins multiple industry travel awards annually.",
    "services": [
      "Tailor-made holidays",
      "Luxury ski chalets",
      "Family travel",
      "Honeymoon design"
    ],
    "relevance": "Family travel design reference - relevant for WOSOL Black tier estate family travel planning.",
    "lesson": "Family luxury travel has distinct needs: space, discretion, safety, flexibility. Designing for families requires a different expertise."
  },
  {
    "name": "Remote Lands",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel",
      "GCC / Saudi Relevant",
      "Private Jets"
    ],
    "url": "https://www.remotelands.com",
    "source": "https://www.remotelands.com",
    "region": "Asia specialist / Global",
    "hq": "New York / Bangkok",
    "serviceType": "Bespoke Travel",
    "target": "UHNW / Asia explorers",
    "membership": "Bespoke luxury Asia travel",
    "positioning": "Asia specialist for UHNW private jet travelers. Custom itineraries across Asia and the Middle East.",
    "summary": "Remote Lands is the premier bespoke luxury travel company for Asia. Founded 2004 in Bangkok. Designs private jet tours across Asia for UHNW clients. Also covers the Middle East.",
    "services": [
      "Private Asia journeys",
      "Private jet tours",
      "River cruise",
      "Expedition travel"
    ],
    "relevance": "Asia access for Saudi UHNW clients - WOSOL can partner for curated Asian journeys.",
    "lesson": "Regional expertise is a meaningful differentiator - being the deepest expert in a geography wins UHNW trust."
  },
  {
    "name": "Four Seasons Private Jet",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel",
      "Private Jets"
    ],
    "url": "https://www.fourseasons.com/privatejet",
    "source": "https://www.fourseasons.com/privatejet",
    "region": "Global",
    "hq": "Toronto, Canada (Four Seasons HQ)",
    "serviceType": "Bespoke Travel",
    "target": "UHNW / Luxury hotel loyalists",
    "membership": "Curated jet journey (annual itinerary)",
    "positioning": "The definitive luxury hotel brand launching its own private jet journey. \"An adventure like no other.\"",
    "summary": "Four Seasons Private Jet Experiences are curated annual journeys aboard a dedicated Four Seasons jet. Guests stay exclusively at Four Seasons properties. Journey includes 9+ destinations.",
    "services": [
      "Private jet world journey",
      "Four Seasons hotel access",
      "Curated experiences",
      "Onboard wellness"
    ],
    "relevance": "Hotel + aviation bundling model. Relevant for WOSOL multi-experience packaging in travel tier.",
    "lesson": "Trusted hotel brands entering aviation shows the future of luxury - seamless ecosystem of stay + flight + experience."
  },
  {
    "name": "CORE: Club",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://coreclub.com",
    "source": "https://coreclub.com",
    "region": "New York, USA",
    "hq": "New York, USA",
    "serviceType": "Private Members Club",
    "target": "UHNW / C-Suite / Tech founders / Family offices",
    "membership": "Invitation-only members club",
    "positioning": "\"The most exclusive club in New York.\" Curated membership. Business community of top 1%. Designed by Rafael Viñoly.",
    "summary": "CORE: Club opened 2005 in Midtown Manhattan. One of the most exclusive private clubs in the US. Application requires sponsor recommendations and committee approval. Members: top business leaders.",
    "services": [
      "Members dining",
      "Wellness",
      "Business lounge",
      "Events",
      "Reciprocal global clubs"
    ],
    "relevance": "Ultimate invitation-only private club reference for WOSOL Imperial. CORE's application process inspires WOSOL's assessment model.",
    "lesson": "Exclusivity of the membership elevates the value of every touchpoint. Who you sit next to is as valuable as the service."
  },
  {
    "name": "R360",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://r360.org",
    "source": "https://r360.org",
    "region": "USA / International",
    "hq": "New York, USA",
    "serviceType": "Private Members Club",
    "target": "UHNW only - $25M+ net worth required",
    "membership": "Invitation-only community",
    "positioning": "Invitation-only UHNW community with minimum net worth thresholds. Peer-to-peer wealth community.",
    "summary": "R360 is a peer community for families with $25M+ in net assets. Focused on multi-generational wealth management, education, and philanthropy. Events-based engagement with privacy at core.",
    "services": [
      "Peer community",
      "Family office education",
      "Events",
      "Philanthropy advisory"
    ],
    "relevance": "Community model for UHNW - how exclusive communities retain members beyond pure service delivery.",
    "lesson": "Community belonging is a powerful retention tool. UHNW clients want peers, not just service providers."
  },
  {
    "name": "Annabel's",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs",
      "GCC / Saudi Relevant"
    ],
    "url": "https://www.annabels.co.uk",
    "source": "https://www.annabels.co.uk",
    "region": "London, UK",
    "hq": "Mayfair, London",
    "serviceType": "Private Members Club",
    "target": "HNW / British elite / International UHNW",
    "membership": "Members club (annual fee, waiting list)",
    "positioning": "London's most iconic and oldest private members club. Founded 1963. Five floors of immersive luxury in Mayfair.",
    "summary": "Annabel's at 46 Berkeley Square, Mayfair. Founded 1963 by Mark Birley. Membership by introduction. Now owned by Richard Caring. Hosts royalty, celebrities, and international elite annually.",
    "services": [
      "Fine dining",
      "Cocktail bars",
      "Events",
      "Private rooms",
      "Art collection"
    ],
    "relevance": "Luxury club culture reference - relevant for WOSOL events and partnerships in London for Saudi members traveling.",
    "lesson": "Iconic spaces and heritage drive belonging. The physical environment is as powerful as the service."
  },
  {
    "name": "Alpha Star Aviation",
    "category": "GCC / Saudi Relevant",
    "tags": [
      "GCC / Saudi Relevant",
      "Private Jets"
    ],
    "url": "https://www.alphastar.com.sa",
    "source": "https://www.alphastar.com.sa",
    "region": "Saudi Arabia",
    "hq": "Riyadh, Saudi Arabia",
    "serviceType": "GCC / Saudi Aviation",
    "target": "Saudi UHNW / Corporate / Government",
    "membership": "Private charter / Aircraft management",
    "positioning": "Saudi-specific aviation with deep government and royal connections. Local market expertise.",
    "summary": "Alpha Star Aviation Services, based in Riyadh, is a leading Saudi private aviation company. Handles VIP charters, aircraft management, and specialized Saudi government aviation requirements.",
    "services": [
      "Private aviation charter",
      "VIP cabin configuration",
      "Hajj & Umrah charters",
      "Government aviation"
    ],
    "relevance": "Key local aviation partner for WOSOL Saudi clients. Alpha Star understands KSA regulatory and cultural context.",
    "lesson": "Local aviation partnerships in Saudi Arabia must understand Hajj seasons, royal protocol, and government aviation rules."
  },
  {
    "name": "Empire Aviation Group",
    "category": "GCC / Saudi Relevant",
    "tags": [
      "GCC / Saudi Relevant",
      "Private Jets"
    ],
    "url": "https://www.empireaviation.com",
    "source": "https://www.empireaviation.com",
    "region": "UAE / GCC / Global",
    "hq": "Dubai, UAE",
    "serviceType": "GCC / Dubai Aviation",
    "target": "GCC UHNW / Corporate / Sovereign wealth",
    "membership": "Aircraft management / Charter",
    "positioning": "UAE's premium independent aircraft management company. Manages some of the region's largest business jets.",
    "summary": "Empire Aviation Group was founded 2007 in Dubai. Manages 70+ aircraft. Offers aircraft acquisition advisory, full management, and charter. Serves GCC sovereign and UHNW clients.",
    "services": [
      "Aircraft management",
      "Charter",
      "Aircraft acquisition advisory",
      "Crew training"
    ],
    "relevance": "Key UAE aviation partner. Serves GCC clients who travel between KSA and UAE - WOSOL's core market.",
    "lesson": "UAE is the aviation hub for GCC UHNW travel. Dubai-based partner gives WOSOL access to the regional aviation ecosystem."
  },
  {
    "name": "Luxaviation Group (ME)",
    "category": "GCC / Saudi Relevant",
    "tags": [
      "GCC / Saudi Relevant",
      "Private Jets"
    ],
    "url": "https://www.luxaviation.com",
    "source": "https://www.luxaviation.com",
    "region": "Luxembourg / Dubai / Global",
    "hq": "Luxembourg / Dubai regional office",
    "serviceType": "GCC / Global Aviation",
    "target": "UHNW / Corporate / European & GCC",
    "membership": "Aircraft management / Charter / FBO",
    "positioning": "Pan-European aviation group with GCC expansion. One of Europe's largest independent aviation companies.",
    "summary": "Luxaviation Group manages 250+ aircraft across Europe and is expanding in the GCC. Operates ExecuJet globally. Strong in Eurozone private aviation with growing Middle East presence.",
    "services": [
      "Aircraft management",
      "Charter",
      "FBO operations",
      "Helicopter services"
    ],
    "relevance": "International aviation network covering Europe-GCC routes - key for WOSOL members traveling between Saudi Arabia and Europe.",
    "lesson": "Seamless cross-continent aviation requires a network, not just a local partner. Europe-GCC routing is critical for Saudi UHNW."
  },
  {
    "name": "DC Aviation Al-Futtaim",
    "category": "GCC / Saudi Relevant",
    "tags": [
      "GCC / Saudi Relevant",
      "Private Jets"
    ],
    "url": "https://www.dc-aviation.ae",
    "source": "https://www.dc-aviation.ae",
    "region": "Dubai, UAE",
    "hq": "Al Maktoum International Airport, Dubai",
    "serviceType": "GCC / UAE Aviation",
    "target": "GCC HNW / Corporate / Sovereign",
    "membership": "Aircraft management / MRO / Charter",
    "positioning": "Germany's DC Aviation + UAE's Al-Futtaim. Premium aviation JV with European quality standards in Dubai.",
    "summary": "DC Aviation Al-Futtaim (DCAF) operates from Dubai South. Partnership between DC Aviation Group (Germany) and Al-Futtaim (UAE). Offers aircraft management, MRO, and charter to GCC clients.",
    "services": [
      "Aircraft management",
      "Maintenance MRO",
      "Charter",
      "Ground handling"
    ],
    "relevance": "Dubai-based maintenance and management - relevant for WOSOL members who base aircraft in UAE.",
    "lesson": "Joint ventures between European quality and local GCC relationships produce trusted brands in aviation."
  },
  {
    "name": "Saudia Private",
    "category": "GCC / Saudi Relevant",
    "tags": [
      "GCC / Saudi Relevant",
      "Private Jets"
    ],
    "url": "https://www.saudiaspa.com",
    "source": "https://www.saudiaspa.com",
    "region": "Saudi Arabia",
    "hq": "Jeddah, Saudi Arabia",
    "serviceType": "Saudi Aviation",
    "target": "Saudi HNW / Corporate / Government",
    "membership": "On-demand charter / Aircraft management",
    "positioning": "National carrier's private aviation division. GACA-compliant. Trusted Saudi brand for domestic and regional UHNW.",
    "summary": "Saudia Private is the private aviation arm of Saudia (Saudi Arabian Airlines). Offers charter flights, aircraft management, and VIP travel services across Saudi Arabia and GCC.",
    "services": [
      "Private jet charter",
      "Aircraft management",
      "Hajj and Umrah VIP packages"
    ],
    "relevance": "Saudi-trusted private aviation - WOSOL Premier tier travel partner for domestic KSA clients.",
    "lesson": "National carrier brand equity (Saudia) transfers to private aviation trust - especially in government and semi-government client segments."
  },
  {
    "name": "PrivateFly",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.privatefly.com/",
    "source": "https://www.privatefly.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Private jet charter brokerage and digital charter access",
    "target": "Private clients, executives, business travelers",
    "membership": "Not publicly stated",
    "positioning": "Private jet charter experts with online quote and charter support.",
    "summary": "PrivateFly provides private jet charter services with expert broker support and a digital booking-oriented experience.",
    "services": [
      "Private jet charter",
      "Aircraft comparison",
      "Flight quotes",
      "Charter support"
    ],
    "relevance": "Useful reference for combining speed, transparency, and aviation expertise in a member request flow.",
    "lesson": "WOSOL can use digital intake while keeping final recommendations advisor-led."
  },
  {
    "name": "Victor",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.flyvictor.com/",
    "source": "https://www.flyvictor.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "On-demand private jet charter marketplace",
    "target": "Private clients and corporate flyers",
    "membership": "Membership / on-demand access is publicly promoted",
    "positioning": "Transparent private jet charter with aircraft and operator visibility.",
    "summary": "Victor provides on-demand private jet charter and emphasizes transparency in quotes and operator details.",
    "services": [
      "Private jet charter",
      "On-demand charter",
      "Aircraft comparison",
      "Member rewards"
    ],
    "relevance": "Relevant for studying transparent aviation sourcing and trust-building.",
    "lesson": "WOSOL can compare options internally while presenting a refined shortlist."
  },
  {
    "name": "LunaJets",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.lunajets.com/",
    "source": "https://www.lunajets.com/",
    "region": "Switzerland / Global",
    "hq": "Not publicly stated",
    "serviceType": "Private jet charter brokerage and booking platform",
    "target": "Private flyers, executives, families",
    "membership": "Not publicly stated",
    "positioning": "Independent, flexible private jet charter with advisor support and app-enabled access.",
    "summary": "LunaJets is a Geneva-based private jet charter company offering global aircraft access and private aviation advisors.",
    "services": [
      "Private jet charter",
      "Aviation advisors",
      "Empty legs",
      "Mobile app"
    ],
    "relevance": "Useful for advisor-led charter brokerage and European private aviation standards.",
    "lesson": "Aviation advisors can become a model for WOSOL request owners."
  },
  {
    "name": "Sentient Jet",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://sentient.com/",
    "source": "https://sentient.com/",
    "region": "United States",
    "hq": "Not publicly stated",
    "serviceType": "Private jet card access",
    "target": "Frequent private flyers, executives, families",
    "membership": "Jet Card model is publicly promoted",
    "positioning": "Original jet card positioning with safety and service emphasis.",
    "summary": "Sentient Jet provides private jet card access with client management, safety checks, and aircraft category options.",
    "services": [
      "Jet cards",
      "Private jet access",
      "Client management",
      "Partner benefits"
    ],
    "relevance": "Strong benchmark for prepaid access and member benefits around aviation.",
    "lesson": "WOSOL can study card-style access privileges without operating aircraft."
  },
  {
    "name": "Magellan Jets",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://magellanjets.com/",
    "source": "https://magellanjets.com/",
    "region": "United States",
    "hq": "Not publicly stated",
    "serviceType": "Jet cards, charter, fractional ownership, business aviation",
    "target": "Private flyers, corporate clients, families",
    "membership": "Jet Card and private aviation solutions are publicly promoted",
    "positioning": "Advisor-led private aviation with flexible jet cards and curated journeys.",
    "summary": "Magellan Jets offers jet cards, on-demand charter, fractional ownership, business aviation, and client journey experiences.",
    "services": [
      "Jet Cards",
      "On-demand charter",
      "Fractional ownership",
      "Business aviation"
    ],
    "relevance": "Useful for linking aviation access with curated luxury experiences.",
    "lesson": "WOSOL can pair aviation requests with destination and hospitality design."
  },
  {
    "name": "Air Partner",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.airpartner.com/",
    "source": "https://www.airpartner.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Private jets, group charter, freight and aviation services",
    "target": "Private clients, corporates, governments, groups",
    "membership": "JetCard is publicly promoted",
    "positioning": "Global aviation services with private jet, group and freight capability.",
    "summary": "Air Partner provides private jet charter, JetCard, group charter, freight and specialist aviation services.",
    "services": [
      "Private jet charter",
      "JetCard",
      "Group charter",
      "Freight"
    ],
    "relevance": "Useful for separating private, group, and urgent aviation request types.",
    "lesson": "WOSOL should create different aviation protocols by mission type."
  },
  {
    "name": "Jettly",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://jettly.com/",
    "source": "https://jettly.com/",
    "region": "Canada / Global",
    "hq": "Not publicly stated",
    "serviceType": "Private jet charter marketplace and membership platform",
    "target": "Private flyers and business travelers",
    "membership": "Membership-style access is publicly promoted",
    "positioning": "Digital private jet marketplace with aircraft quote access.",
    "summary": "Jettly provides private jet charter access through a marketplace and membership-oriented platform.",
    "services": [
      "Private jet charter",
      "Membership access",
      "Aircraft quotes",
      "Marketplace search"
    ],
    "relevance": "Useful for digital request architecture and quote comparison.",
    "lesson": "Digital comparison should support concierge judgment, not replace it."
  },
  {
    "name": "Paramount Business Jets",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.paramountbusinessjets.com/",
    "source": "https://www.paramountbusinessjets.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Private jet charter brokerage",
    "target": "Private clients, corporations, government and group travelers",
    "membership": "Not publicly stated",
    "positioning": "Global private jet charter brokerage with aircraft sourcing.",
    "summary": "Paramount Business Jets arranges private jet charter solutions for business, private, and specialist travel.",
    "services": [
      "Private jet charter",
      "Aircraft sourcing",
      "International charter",
      "Group charter"
    ],
    "relevance": "Useful for global aircraft sourcing partner mapping.",
    "lesson": "WOSOL needs supplier qualification before aviation referrals."
  },
  {
    "name": "Jet Aviation",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.jetaviation.com/",
    "source": "https://www.jetaviation.com/",
    "region": "Switzerland / Global",
    "hq": "Not publicly stated",
    "serviceType": "Aircraft management, charter, FBO, maintenance and completions",
    "target": "Aircraft owners, private clients, corporate aviation",
    "membership": "Not publicly stated",
    "positioning": "End-to-end business aviation services with global infrastructure.",
    "summary": "Jet Aviation provides aircraft management, charter, FBO, maintenance and completions services.",
    "services": [
      "Aircraft management",
      "Private jet charter",
      "FBO",
      "Maintenance"
    ],
    "relevance": "Relevant for complex aviation partnerships and owner-side service scope.",
    "lesson": "Aviation access needs vetted operational infrastructure."
  },
  {
    "name": "TAG Aviation",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.tagaviation.com/",
    "source": "https://www.tagaviation.com/",
    "region": "Switzerland / Europe / Asia",
    "hq": "Not publicly stated",
    "serviceType": "Aircraft management, charter, maintenance and aviation services",
    "target": "Aircraft owners, private clients, corporate aviation",
    "membership": "Not publicly stated",
    "positioning": "Business aviation management and private jet services.",
    "summary": "TAG Aviation offers aircraft management, charter, maintenance and aviation support services.",
    "services": [
      "Aircraft management",
      "Private jet charter",
      "Maintenance",
      "Aviation support"
    ],
    "relevance": "Relevant to aircraft-owner service standards and operator partnerships.",
    "lesson": "Post-booking handling is as important as booking access."
  },
  {
    "name": "Chapman Freeborn",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.chapman-freeborn.com/",
    "source": "https://www.chapman-freeborn.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Aircraft charter brokerage for private, group, cargo and specialist missions",
    "target": "Private clients, corporations, governments, groups",
    "membership": "Not publicly stated",
    "positioning": "Global aircraft charter specialist across passenger and cargo requirements.",
    "summary": "Chapman Freeborn arranges aircraft charter services including private jets, group charter, cargo and emergency missions.",
    "services": [
      "Private jet charter",
      "Group charter",
      "Cargo charter",
      "Emergency charter"
    ],
    "relevance": "Useful for complex and urgent aviation request protocols.",
    "lesson": "WOSOL can create escalation paths for unusual travel requirements."
  },
  {
    "name": "Stratos Jets",
    "category": "Private Jets",
    "tags": [
      "Private Jets"
    ],
    "url": "https://www.stratosjets.com/",
    "source": "https://www.stratosjets.com/",
    "region": "United States",
    "hq": "Not publicly stated",
    "serviceType": "Private jet charter brokerage",
    "target": "Private and corporate travelers",
    "membership": "Not publicly stated",
    "positioning": "Private jet charter brokerage with aviation consulting support.",
    "summary": "Stratos Jets arranges private jet charter and aviation advisory services.",
    "services": [
      "Private jet charter",
      "Aircraft sourcing",
      "Trip planning",
      "Charter advisory"
    ],
    "relevance": "Useful for client education around charter options.",
    "lesson": "Private education can raise trust before aviation decisions."
  },
  {
    "name": "Y.CO",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://y.co/",
    "source": "https://y.co/",
    "region": "Monaco / United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht sales, purchase, charter, management and build projects",
    "target": "UHNW yacht owners and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Modern superyacht company with experience-forward brand language.",
    "summary": "Y.CO provides yacht brokerage, charter, management and build project services for yacht clients.",
    "services": [
      "Yacht charter",
      "Yacht brokerage",
      "Yacht management",
      "Build projects"
    ],
    "relevance": "Strong inspiration for modern curated yacht access.",
    "lesson": "WOSOL can balance discretion with contemporary experience design."
  },
  {
    "name": "Ocean Independence",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.oceanindependence.com/",
    "source": "https://www.oceanindependence.com/",
    "region": "Switzerland / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht charter, brokerage, management and new build",
    "target": "Yacht owners and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Independent yacht services with global fleet and advisory scope.",
    "summary": "Ocean Independence offers yacht charter, sales, management and new build support.",
    "services": [
      "Yacht charter",
      "Yacht sales",
      "Yacht management",
      "New build"
    ],
    "relevance": "Useful for independent advisory positioning in yacht services.",
    "lesson": "Independent partner selection can be a trust signal."
  },
  {
    "name": "Moran Yacht & Ship",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.moranyachts.com/",
    "source": "https://www.moranyachts.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht brokerage, charter, management and new construction",
    "target": "UHNW yacht owners and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Superyacht brokerage and construction advisory.",
    "summary": "Moran Yacht & Ship offers yacht sales, charter, management and new construction services.",
    "services": [
      "Yacht brokerage",
      "Yacht charter",
      "Yacht management",
      "New construction"
    ],
    "relevance": "Useful for structuring charter, ownership and build requests separately.",
    "lesson": "Yacht requests should have different intake tracks by need."
  },
  {
    "name": "SuperYachtsMonaco",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.superyachtsmonaco.com/",
    "source": "https://www.superyachtsmonaco.com/",
    "region": "Monaco / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht brokerage, charter, build and advisory",
    "target": "UHNW yacht owners and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Boutique Monaco superyacht brokerage with global reach.",
    "summary": "SuperYachtsMonaco is a Monaco-headquartered boutique brokerage helping clients buy, sell, build and charter superyachts.",
    "services": [
      "Yacht brokerage",
      "Yacht charter",
      "New build advisory",
      "Yacht sales"
    ],
    "relevance": "Monaco is a key UHNW yacht hub for WOSOL partner mapping.",
    "lesson": "WOSOL should map destination hubs by yacht market strength."
  },
  {
    "name": "Yachtzoo",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.yacht-zoo.com/",
    "source": "https://www.yacht-zoo.com/",
    "region": "Monaco / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht brokerage, charter, management and consulting",
    "target": "Yacht owners and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Boutique yacht brokerage and charter services.",
    "summary": "Yachtzoo provides yacht sales, charter, management and yacht consultancy services.",
    "services": [
      "Yacht charter",
      "Yacht brokerage",
      "Yacht management",
      "Consultancy"
    ],
    "relevance": "Useful reference for boutique yacht advisory positioning.",
    "lesson": "Boutique positioning can support discretion and fit."
  },
  {
    "name": "TWW Yachts",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.twwyachts.com/",
    "source": "https://www.twwyachts.com/",
    "region": "Monaco / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht brokerage, charter, management and new build",
    "target": "Yacht owners and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Superyacht brokerage and charter advisory.",
    "summary": "TWW Yachts provides yacht sales, charter, management and new build services.",
    "services": [
      "Yacht brokerage",
      "Yacht charter",
      "Yacht management",
      "New build"
    ],
    "relevance": "Useful for brokerage-led yacht access and ownership services.",
    "lesson": "Partner criteria should separate brokerage, charter, management and destination expertise."
  },
  {
    "name": "Worth Avenue Yachts",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.worthavenueyachts.com/",
    "source": "https://www.worthavenueyachts.com/",
    "region": "United States / Monaco / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht brokerage, charter, management and new construction",
    "target": "Yacht owners, buyers, sellers and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Luxury yacht brokerage and charter advisory.",
    "summary": "Worth Avenue Yachts offers yacht sales, charter, management and new construction support.",
    "services": [
      "Yacht sales",
      "Yacht charter",
      "Yacht management",
      "New construction"
    ],
    "relevance": "Useful for luxury sales language and yacht advisory models.",
    "lesson": "Premium introductions need context, fit and expectation management."
  },
  {
    "name": "Denison Yachting",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.denisonyachtsales.com/",
    "source": "https://www.denisonyachtsales.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht sales, brokerage, charter and related services",
    "target": "Yacht buyers, sellers, owners and charter clients",
    "membership": "Not publicly stated",
    "positioning": "Broad yacht brokerage and charter marketplace.",
    "summary": "Denison Yachting provides yacht sales, brokerage, charter and related services across yacht segments.",
    "services": [
      "Yacht brokerage",
      "Yacht charter",
      "Yacht marketing",
      "New yacht sales"
    ],
    "relevance": "Useful for inventory presentation and brokerage workflows.",
    "lesson": "WOSOL should curate shortlists rather than expose raw inventory."
  },
  {
    "name": "Bluewater Yachting",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.bluewateryachting.com/",
    "source": "https://www.bluewateryachting.com/",
    "region": "France / Global",
    "hq": "Not publicly stated",
    "serviceType": "Yacht charter, sales, management, crew and training",
    "target": "Yacht owners, charter clients and crew stakeholders",
    "membership": "Not publicly stated",
    "positioning": "Integrated yacht services including crew and training capability.",
    "summary": "Bluewater Yachting provides yacht charter, sales, management, crew placement and crew training.",
    "services": [
      "Yacht charter",
      "Yacht brokerage",
      "Yacht management",
      "Crew",
      "Training"
    ],
    "relevance": "Useful for understanding human infrastructure behind yacht experiences.",
    "lesson": "Crew quality affects the client experience as much as the asset."
  },
  {
    "name": "Ahoy Club",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://ahoyclub.com/",
    "source": "https://ahoyclub.com/",
    "region": "Australia / Global",
    "hq": "Not publicly stated",
    "serviceType": "Digital yacht charter marketplace and charter management",
    "target": "Yacht charter clients and yacht owners",
    "membership": "Not publicly stated",
    "positioning": "Technology-led yacht charter access and inventory discovery.",
    "summary": "Ahoy Club presents a digital approach to yacht charter search and charter management.",
    "services": [
      "Yacht charter",
      "Yacht search",
      "Charter management",
      "Digital inquiry"
    ],
    "relevance": "Useful for yacht discovery with WOSOL adding curation.",
    "lesson": "Digital discovery should be followed by private shortlist validation."
  },
  {
    "name": "Boat International",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts"
    ],
    "url": "https://www.boatinternational.com/",
    "source": "https://www.boatinternational.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Superyacht media, intelligence, listings and market reference",
    "target": "Yacht owners, buyers, charterers and industry stakeholders",
    "membership": "Not publicly stated",
    "positioning": "Superyacht authority and market intelligence platform.",
    "summary": "Boat International is a superyacht media and intelligence reference with listings and industry coverage.",
    "services": [
      "Yacht listings",
      "Market intelligence",
      "Editorial coverage",
      "Industry data"
    ],
    "relevance": "Important source layer for yacht market research and partner discovery.",
    "lesson": "WOSOL can separate market intelligence sources from fulfillment partners."
  },
  {
    "name": "Insignia",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://www.insignia.com/",
    "source": "https://www.insignia.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury lifestyle management, travel, concierge and premium card services",
    "target": "HNW and UHNW clients, financial institutions, premium members",
    "membership": "Membership and card-related access are publicly promoted",
    "positioning": "Lifestyle management connected to premium financial access and concierge.",
    "summary": "Insignia combines luxury lifestyle management, concierge, travel and premium financial lifestyle products.",
    "services": [
      "Lifestyle management",
      "Concierge",
      "Travel",
      "Premium cards",
      "Experiences"
    ],
    "relevance": "Relevant for membership design and financial-institution collaboration.",
    "lesson": "Luxury access can integrate with payment, identity and privilege systems."
  },
  {
    "name": "Pure Entertainment Group",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://pureentertainmentgroup.com/",
    "source": "https://pureentertainmentgroup.com/",
    "region": "Canada / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury concierge, bespoke travel, experiences and events",
    "target": "HNW and UHNW private clients, corporations",
    "membership": "Not publicly stated",
    "positioning": "Bespoke luxury concierge and experience design.",
    "summary": "Pure Entertainment Group provides luxury concierge, travel, events and exclusive experiences for private and corporate clients.",
    "services": [
      "Luxury concierge",
      "Bespoke travel",
      "Events",
      "VIP experiences"
    ],
    "relevance": "Relevant for experience design and event access mapping.",
    "lesson": "Experience design should be treated as a managed project."
  },
  {
    "name": "Bon Vivant",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://bonvivant.co.uk/",
    "source": "https://bonvivant.co.uk/",
    "region": "United Kingdom",
    "hq": "Not publicly stated",
    "serviceType": "Luxury lifestyle concierge and travel planning",
    "target": "Private members and corporate clients",
    "membership": "Membership is publicly promoted",
    "positioning": "London-focused luxury concierge with lifestyle and travel support.",
    "summary": "Bon Vivant offers lifestyle concierge, travel, dining and event support with a London private client emphasis.",
    "services": [
      "Lifestyle concierge",
      "Travel",
      "Dining",
      "Events",
      "Corporate concierge"
    ],
    "relevance": "Useful for city-based concierge positioning and member benefits.",
    "lesson": "WOSOL can build city playbooks for Riyadh, Jeddah, Dubai and London."
  },
  {
    "name": "Innerplace",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://www.innerplace.co.uk/",
    "source": "https://www.innerplace.co.uk/",
    "region": "United Kingdom",
    "hq": "Not publicly stated",
    "serviceType": "London concierge, nightlife, dining, events and members access",
    "target": "Members seeking London lifestyle access",
    "membership": "Membership is publicly promoted",
    "positioning": "London access concierge for restaurants, nightlife, events and private members benefits.",
    "summary": "Innerplace provides member concierge access focused on London restaurants, nightlife, events and lifestyle experiences.",
    "services": [
      "Restaurant access",
      "Nightlife",
      "Events",
      "Members concierge",
      "London experiences"
    ],
    "relevance": "Relevant for local access and restaurant/event relationship models.",
    "lesson": "Local access density can be a defensible concierge advantage."
  },
  {
    "name": "The Billionaire Concierge",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://www.thebillionaireconcierge.com/",
    "source": "https://www.thebillionaireconcierge.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury concierge, travel, lifestyle and access services",
    "target": "HNW and UHNW private clients",
    "membership": "Not publicly stated",
    "positioning": "Ultra-luxury concierge and access positioning.",
    "summary": "The Billionaire Concierge presents luxury concierge, travel, lifestyle and access services for high-net-worth private clients.",
    "services": [
      "Luxury concierge",
      "Travel",
      "VIP access",
      "Lifestyle services"
    ],
    "relevance": "Useful for studying overt UHNW positioning and access language.",
    "lesson": "WOSOL should use premium confidence without exaggerated claims."
  },
  {
    "name": "Luxury Attache",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://luxuryattache.com/",
    "source": "https://luxuryattache.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury concierge, corporate concierge, residential and hospitality services",
    "target": "Private clients, residences, hospitality and corporations",
    "membership": "Not publicly stated",
    "positioning": "Concierge services across private, corporate and residential contexts.",
    "summary": "Luxury Attache provides concierge and lifestyle services for individuals, properties, hospitality and corporate clients.",
    "services": [
      "Private concierge",
      "Corporate concierge",
      "Residential services",
      "Hospitality support"
    ],
    "relevance": "Relevant for estate, residential and hospitality-linked WOSOL services.",
    "lesson": "WOSOL can create concierge models for residences and estates."
  },
  {
    "name": "One Concierge",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://www.oneconcierge.com/",
    "source": "https://www.oneconcierge.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Concierge, lifestyle management, travel, events and corporate services",
    "target": "Private clients, corporate clients and travelers",
    "membership": "Not publicly stated",
    "positioning": "Global concierge and lifestyle management across many service categories.",
    "summary": "One Concierge offers concierge, lifestyle management, travel, event and corporate services through a global network.",
    "services": [
      "Concierge",
      "Lifestyle management",
      "Travel",
      "Events",
      "Corporate services"
    ],
    "relevance": "Useful for broad service catalog mapping.",
    "lesson": "Structure breadth internally while presenting concise pathways."
  },
  {
    "name": "Nota Bene Global",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge",
      "Bespoke Travel"
    ],
    "url": "https://notabeneglobal.com/",
    "source": "https://notabeneglobal.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury travel intelligence, real estate and lifestyle management",
    "target": "UHNW private clients",
    "membership": "Private membership / subscription details are not fully public",
    "positioning": "Curated intelligence and advisory for ultra-high-net-worth private clients.",
    "summary": "Nota Bene Global presents international travel, real estate and lifestyle management services for UHNW private clients.",
    "services": [
      "Travel intelligence",
      "Private advisory",
      "Luxury hotels and villas",
      "Lifestyle access"
    ],
    "relevance": "Strong model for WOSOL as a trusted taste and intelligence layer.",
    "lesson": "Research quality and opinionated curation can become member value."
  },
  {
    "name": "The Prelude",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge"
    ],
    "url": "https://theprelude.com/",
    "source": "https://theprelude.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury lifestyle management, travel and private experiences",
    "target": "Private clients, families and executives",
    "membership": "Not publicly stated",
    "positioning": "Lifestyle management and bespoke experiences for discerning clients.",
    "summary": "The Prelude provides lifestyle management, travel, event and experience design services for private clients.",
    "services": [
      "Lifestyle management",
      "Travel",
      "Events",
      "Experiences",
      "Concierge"
    ],
    "relevance": "Useful for translating lifestyle needs into managed member journeys.",
    "lesson": "Concierge should feel proactive and anticipation-led."
  },
  {
    "name": "Jacada Travel",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.jacadatravel.com/",
    "source": "https://www.jacadatravel.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury tailor-made travel and private journeys",
    "target": "Affluent private travelers, couples and families",
    "membership": "Not publicly stated",
    "positioning": "Personalized luxury travel with destination experts.",
    "summary": "Jacada Travel designs luxury tailor-made trips with expert planning and private arrangements.",
    "services": [
      "Tailor-made travel",
      "Private journeys",
      "Honeymoons",
      "Family travel",
      "Safaris"
    ],
    "relevance": "Useful for destination expert models.",
    "lesson": "Destination expert allocation can improve confidence and quality."
  },
  {
    "name": "Brown + Hudson",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.brownandhudson.com/",
    "source": "https://www.brownandhudson.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Bespoke private travel design and life-enriching experiences",
    "target": "HNW and UHNW travelers seeking deeply personalized travel",
    "membership": "Not publicly stated",
    "positioning": "Highly personalized, research-led travel design.",
    "summary": "Brown + Hudson positions travel as deeply bespoke design based on client motives and personal context.",
    "services": [
      "Bespoke travel design",
      "Private experiences",
      "Family travel",
      "Adventure travel"
    ],
    "relevance": "Strong reference for lifestyle assessment before recommendations.",
    "lesson": "WOSOL can formalize discovery interviews before premium travel recommendations."
  },
  {
    "name": "cazenove+loyd",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://cazloyd.com/",
    "source": "https://cazloyd.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury tailor-made holidays, safaris, villas and private travel",
    "target": "Affluent private travelers and families",
    "membership": "Not publicly stated",
    "positioning": "Expert-led tailor-made travel with destination depth.",
    "summary": "cazenove+loyd designs luxury tailor-made holidays, safaris, villas and journeys with specialist destination knowledge.",
    "services": [
      "Tailor-made holidays",
      "Safaris",
      "Private villas",
      "Family travel",
      "Adventure travel"
    ],
    "relevance": "Useful benchmark for expert-led itinerary curation.",
    "lesson": "WOSOL can build trusted expert panels for specialist categories."
  },
  {
    "name": "Original Travel",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.originaltravel.co.uk/",
    "source": "https://www.originaltravel.co.uk/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Tailor-made luxury holidays and private travel planning",
    "target": "Affluent private travelers and families",
    "membership": "Not publicly stated",
    "positioning": "Tailor-made luxury travel with original experience design.",
    "summary": "Original Travel creates tailor-made holidays and luxury travel experiences across global destinations.",
    "services": [
      "Tailor-made travel",
      "Luxury holidays",
      "Family travel",
      "Honeymoons",
      "Specialist trips"
    ],
    "relevance": "Useful for itinerary category structures and request templates.",
    "lesson": "Organize travel requests by motive, traveler profile and access level."
  },
  {
    "name": "Red Savannah",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.redsavannah.com/",
    "source": "https://www.redsavannah.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury tailor-made travel, villas and private journeys",
    "target": "Affluent travelers, families and groups",
    "membership": "Not publicly stated",
    "positioning": "Luxury tailor-made travel with villas and private journeys.",
    "summary": "Red Savannah designs tailor-made luxury holidays, villa stays and private journeys.",
    "services": [
      "Tailor-made travel",
      "Villa holidays",
      "Private journeys",
      "Family travel"
    ],
    "relevance": "Useful for villa and private accommodation partner mapping.",
    "lesson": "Villa access should be curated with security, staffing and privacy checks."
  },
  {
    "name": "TCS World Travel",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel",
      "Private Jets"
    ],
    "url": "https://www.tcsworldtravel.com/",
    "source": "https://www.tcsworldtravel.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Private jet expeditions and luxury group journeys",
    "target": "Affluent travelers, private groups and families",
    "membership": "Not publicly stated",
    "positioning": "Around-the-world and expedition travel by private jet.",
    "summary": "TCS World Travel creates luxury private jet expeditions and custom journeys.",
    "services": [
      "Private jet expeditions",
      "Custom travel",
      "Group journeys",
      "Luxury itineraries"
    ],
    "relevance": "Relevant for top-tier concepts combining aviation and experience design.",
    "lesson": "WOSOL can create signature journeys through partners without operating aircraft."
  },
  {
    "name": "Aman",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.aman.com/",
    "source": "https://www.aman.com/",
    "region": "Global",
    "hq": "Not publicly stated",
    "serviceType": "Ultra-luxury hospitality, private journeys, villas and experiences",
    "target": "HNW and UHNW luxury travelers",
    "membership": "Not publicly stated",
    "positioning": "Discreet ultra-luxury hospitality and restorative private experiences.",
    "summary": "Aman is a global ultra-luxury hospitality brand relevant to private journeys, villas, wellness and destination access.",
    "services": [
      "Luxury resorts",
      "Private villas",
      "Wellness",
      "Private experiences",
      "Journeys"
    ],
    "relevance": "Useful for WOSOL tone of privacy, calm and ultra-luxury hospitality.",
    "lesson": "Quiet confidence can be more powerful than overt luxury language."
  },
  {
    "name": "Belmond",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel"
    ],
    "url": "https://www.belmond.com/",
    "source": "https://www.belmond.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury hotels, trains, river cruises, safaris and journeys",
    "target": "Affluent luxury travelers",
    "membership": "Not publicly stated",
    "positioning": "Legendary travel experiences across hotels, trains, cruises and safaris.",
    "summary": "Belmond operates luxury hotels, trains, river cruises, safaris and travel experiences with heritage positioning.",
    "services": [
      "Luxury hotels",
      "Luxury trains",
      "River cruises",
      "Safaris",
      "Experiences"
    ],
    "relevance": "Useful for iconic journey and hospitality partner mapping.",
    "lesson": "Heritage assets can be woven into member journeys and corporate hospitality."
  },
  {
    "name": "Virtuoso",
    "category": "Bespoke Travel",
    "tags": [
      "Bespoke Travel",
      "Luxury Concierge"
    ],
    "url": "https://www.virtuoso.com/",
    "source": "https://www.virtuoso.com/",
    "region": "United States / Global",
    "hq": "Not publicly stated",
    "serviceType": "Luxury travel advisor network and preferred partner ecosystem",
    "target": "Luxury travelers, travel advisors and luxury partners",
    "membership": "Advisor/network model; client access is through affiliated advisors",
    "positioning": "Global luxury travel network connecting advisors, clients and partners.",
    "summary": "Virtuoso is a global luxury travel network of advisors and preferred partners rather than a single concierge operator.",
    "services": [
      "Travel advisor network",
      "Preferred partners",
      "Luxury travel planning",
      "Hotel benefits"
    ],
    "relevance": "Important model for WOSOL partner network and referral strategy.",
    "lesson": "A vetted network can become a strategic asset if standards are clear."
  },
  {
    "name": "Yellowstone Club",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://yellowstoneclub.com/",
    "source": "https://yellowstoneclub.com/",
    "region": "United States",
    "hq": "Not publicly stated",
    "serviceType": "Private residential club, ski, golf, recreation and real estate community",
    "target": "UHNW families and private club members",
    "membership": "Private residential club membership is publicly promoted",
    "positioning": "Private mountain community with recreation, residence and family lifestyle.",
    "summary": "Yellowstone Club is a private residential club in Montana with skiing, golf, real estate and family-oriented private community services.",
    "services": [
      "Private club membership",
      "Skiing",
      "Golf",
      "Real estate",
      "Family recreation"
    ],
    "relevance": "Useful for estate, family and private community service thinking.",
    "lesson": "Lifestyle infrastructure can combine real estate, recreation, privacy and family experience."
  },
  {
    "name": "Oswald's",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://www.oswaldsclub.com/",
    "source": "https://www.oswaldsclub.com/",
    "region": "London / United Kingdom",
    "hq": "Not publicly stated",
    "serviceType": "Private members club and dining",
    "target": "Private members and high-profile clients",
    "membership": "Private membership details are not publicly stated in depth",
    "positioning": "Discreet Mayfair private club with intentionally limited public information.",
    "summary": "Oswald's is a private members club in Mayfair. Public information is limited, which itself signals discretion.",
    "services": [
      "Private club membership",
      "Dining",
      "Wine-focused private hospitality"
    ],
    "relevance": "Relevant as a case study in scarcity and discretion.",
    "lesson": "Some ultra-premium offerings should disclose less publicly and explain more privately."
  },
  {
    "name": "Soho House",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://www.sohohouse.com/",
    "source": "https://www.sohohouse.com/",
    "region": "United Kingdom / Global",
    "hq": "Not publicly stated",
    "serviceType": "Private members clubs, hospitality, residences, events and creative community",
    "target": "Creative professionals, members and travelers",
    "membership": "Membership is publicly promoted",
    "positioning": "Global private members club network with hospitality and creative community.",
    "summary": "Soho House operates private members clubs, hotels, workspaces and hospitality experiences across many cities.",
    "services": [
      "Club membership",
      "Hotels",
      "Dining",
      "Events",
      "Creative community"
    ],
    "relevance": "Useful network model, though more lifestyle/creative than UHNW private office.",
    "lesson": "WOSOL should study network scale while avoiding mass-premium dilution."
  },
  {
    "name": "The Arts Club",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://www.theartsclub.co.uk/",
    "source": "https://www.theartsclub.co.uk/",
    "region": "London / United Kingdom",
    "hq": "Not publicly stated",
    "serviceType": "Private members club, dining, arts, events and hospitality",
    "target": "Private members, cultural and business circles",
    "membership": "Membership is publicly promoted",
    "positioning": "Private members club with cultural heritage and hospitality.",
    "summary": "The Arts Club is a Mayfair private members club offering dining, events, cultural programming and hospitality.",
    "services": [
      "Private club membership",
      "Dining",
      "Events",
      "Arts programming",
      "Hospitality"
    ],
    "relevance": "Relevant for cultural access and member programming ideas.",
    "lesson": "Curated programming can make membership active and meaningful."
  },
  {
    "name": "Home House",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://www.homehouse.co.uk/",
    "source": "https://www.homehouse.co.uk/",
    "region": "London / United Kingdom",
    "hq": "Not publicly stated",
    "serviceType": "Private members club, dining, events, hotel rooms and social access",
    "target": "Private members, professionals and social circles",
    "membership": "Membership is publicly promoted",
    "positioning": "Private members club with townhouse hospitality and event spaces.",
    "summary": "Home House is a private members club in London with dining, events, bedrooms and social spaces.",
    "services": [
      "Private club membership",
      "Dining",
      "Events",
      "Hotel rooms",
      "Private hire"
    ],
    "relevance": "Useful for member hospitality and private event concepts.",
    "lesson": "Physical spaces can anchor membership identity and engagement."
  },
  {
    "name": "5 Hertford Street",
    "category": "Private Clubs",
    "tags": [
      "Private Clubs"
    ],
    "url": "https://www.5hertfordstreet.com/",
    "source": "https://www.5hertfordstreet.com/",
    "region": "London / United Kingdom",
    "hq": "Not publicly stated",
    "serviceType": "Private members club, dining, bars and events",
    "target": "Private members and high-profile social circles",
    "membership": "Private membership is publicly referenced; detailed access terms are limited",
    "positioning": "Highly discreet Mayfair private members club.",
    "summary": "5 Hertford Street is a private members club in Mayfair known for discreet hospitality and limited public-facing detail.",
    "services": [
      "Private club membership",
      "Dining",
      "Bars",
      "Events",
      "Private hospitality"
    ],
    "relevance": "Useful as a reference for discretion, selective access and understated prestige.",
    "lesson": "Define which services are intentionally private and not over-explained publicly."
  },
  {
    "name": "Xclusive Yachts",
    "category": "Private Yachts",
    "tags": [
      "Private Yachts",
      "GCC / Saudi Relevant"
    ],
    "url": "https://xclusiveyachts.com/",
    "source": "https://xclusiveyachts.com/",
    "region": "Dubai / GCC",
    "hq": "Not publicly stated",
    "serviceType": "Dubai yacht charter and private yacht experiences",
    "target": "Private clients, groups, corporate hospitality, tourists",
    "membership": "Not publicly stated",
    "positioning": "Dubai yacht charter and private event experiences.",
    "summary": "Xclusive Yachts is a Dubai yacht charter company relevant to GCC yacht experience mapping.",
    "services": [
      "Yacht charter",
      "Private events",
      "Corporate yacht experiences",
      "Dubai cruises"
    ],
    "relevance": "Relevant for UAE yacht access and group experience partner mapping.",
    "lesson": "Segment casual yacht experiences from UHNW superyacht charter."
  },
  {
    "name": "Exclusive Local Experience",
    "category": "Luxury Concierge",
    "tags": [
      "Luxury Concierge",
      "GCC / Saudi Relevant"
    ],
    "url": "https://exclusivelocalexperience.com/",
    "source": "https://exclusivelocalexperience.com/",
    "region": "United Arab Emirates",
    "hq": "Not publicly stated",
    "serviceType": "Private club and luxury concierge in the UAE",
    "target": "Private members and luxury lifestyle clients",
    "membership": "Private club / membership language is publicly promoted",
    "positioning": "UAE private club and luxury concierge focused on exclusive local access.",
    "summary": "Exclusive Local Experience is a UAE-focused private club and luxury concierge reference for regional access models.",
    "services": [
      "Luxury concierge",
      "Private club access",
      "Wellness",
      "VIP experiences",
      "Lifestyle access"
    ],
    "relevance": "Relevant regional benchmark for combining private community and concierge access in the GCC.",
    "lesson": "WOSOL can develop a Saudi-rooted private access network with selective GCC reach."
  }
];

let activeFilter = "All";
let searchTerm = "";
let sortKey = "name";
let sortDirection = 1;
let currentLanguage = localStorage.getItem("wosolLanguage") === "ar" ? "ar" : "en";
let activeCompanySlug = null;

const companyGrid = document.getElementById("companyGrid");
const comparisonBody = document.getElementById("comparisonBody");
const sourcesList = document.getElementById("sourcesList");
const resultCount = document.getElementById("resultCount");
const totalCompanies = document.getElementById("totalCompanies");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("companyModal");
const modalContent = document.getElementById("modalContent");
const backToTop = document.getElementById("backToTop");
const languageToggle = document.getElementById("languageToggle");

const uiText = {
  en: {
    pageTitle: "Global UHNW Luxury Access Directory | WOSOL Concierge",
    pageDescription: "A premium WOSOL research hub mapping global UHNW luxury access providers across private aviation, superyachts, concierge, bespoke travel, private clubs, and GCC services.",
    switchLanguage: "Switch to Arabic",
    resultCount: (visible, total) => `Showing ${visible} of ${total} companies`,
    emptyState: "No companies match the current filter. Clear the search or choose All.",
    searchPlaceholder: "Search NetJets, yacht charter, Saudi, family office...",
    services: "Services",
    target: "Target",
    relevance: "WOSOL relevance",
    website: "Website",
    viewDetails: "View Details",
    open: "Open",
    close: "Close",
    top: "Top",
    region: "Region",
    serviceType: "Service Type",
    targetSegment: "Target Segment",
    membershipAccess: "Membership / Access",
    executiveSummary: "Executive Summary",
    publicServices: "Public Services Listed",
    relevantToWosol: "What makes it relevant to WOSOL",
    strategicLesson: "Strategic lesson for WOSOL",
    sourceLink: "Source Link",
    visitWebsite: "Visit Website",
    copyCompanyLink: "Copy Company Link",
    copied: "Copied"
  },
  ar: {
    pageTitle: "دليل الوصول الفاخر لعملاء UHNW | WOSOL Concierge",
    pageDescription: "مرجع بحثي تنفيذي من WOSOL يرصد مزودي خدمات الوصول الفاخر عالميًا في الطيران الخاص، اليخوت، الكونسيرج، السفر المصمم، النوادي الخاصة، والخدمات المرتبطة بالسعودية والخليج.",
    switchLanguage: "Switch to English",
    resultCount: (visible, total) => `عرض ${visible} من أصل ${total} شركة`,
    emptyState: "لا توجد شركات مطابقة للبحث الحالي. امسح البحث أو اختر الكل.",
    searchPlaceholder: "ابحث باسم الشركة أو الخدمة أو السوق، مثل NetJets أو yacht charter أو Saudi...",
    services: "الخدمات",
    target: "الشريحة المستهدفة",
    relevance: "صلة النموذج بـ WOSOL",
    website: "الموقع",
    viewDetails: "عرض التفاصيل",
    open: "فتح",
    close: "إغلاق",
    top: "أعلى",
    region: "النطاق الجغرافي",
    serviceType: "نوع الخدمة",
    targetSegment: "الشريحة المستهدفة",
    membershipAccess: "نموذج العضوية والوصول",
    executiveSummary: "ملخص تنفيذي",
    publicServices: "الخدمات المعلنة",
    relevantToWosol: "لماذا يهم WOSOL",
    strategicLesson: "الدرس الاستراتيجي لـ WOSOL",
    sourceLink: "رابط المصدر",
    visitWebsite: "زيارة الموقع",
    copyCompanyLink: "نسخ رابط الشركة",
    copied: "تم النسخ"
  }
};

const categoryLabelsAr = {
  "All": "الكل",
  "Private Jets": "الطيران الخاص",
  "Private Yachts": "اليخوت الخاصة",
  "Luxury Concierge": "الكونسيرج الفاخر",
  "Bespoke Travel": "السفر المصمم",
  "Private Clubs": "النوادي الخاصة",
  "GCC / Saudi Relevant": "مرتبط بالسعودية والخليج"
};

const staticArabic = {
  "Internal Research Hub - Confidential - 2026": "مرجع بحثي داخلي - سري - 2026",
  "Directory": "الدليل",
  "Comparison": "المقارنة",
  "Patterns": "الأنماط",
  "WOSOL Insights": "رؤى WOSOL",
  "Sources": "المصادر",
  "UHNW Access Research Layer": "طبقة بحث الوصول الفاخر",
  "Global UHNW Luxury Access Directory": "دليل الوصول الفاخر لعملاء UHNW عالميًا",
  "A strategic research hub for private aviation, superyachts, luxury concierge, and bespoke lifestyle services.": "مرجع استراتيجي لفهم الطيران الخاص، اليخوت الفاخرة، الكونسيرج، وتجارب الحياة المصممة لعملاء الثروات العالية جدًا.",
  "Private Aviation": "الطيران الخاص",
  "Superyachts": "اليخوت الفاخرة",
  "Lifestyle Management": "إدارة أسلوب الحياة",
  "Bespoke Travel": "السفر المصمم",
  "UHNW Access": "وصول UHNW",
  "Explore Companies": "استعراض الشركات",
  "View by Category": "عرض حسب التصنيف",
  "WOSOL Strategic Insights": "رؤى WOSOL الاستراتيجية",
  "Executive Summary": "ملخص تنفيذي",
  "Companies Mapped": "شركة مرصودة",
  "Research Categories": "تصنيفات بحثية",
  "Saudi-Relevant Layer": "طبقة مرتبطة بالسعودية",
  "Sources Only": "مصادر عامة فقط",
  "Company Directory": "دليل الشركات",
  "Filterable research cards": "بطاقات بحث قابلة للتصفية",
  "Search by company, service, region, or WOSOL relevance": "ابحث حسب الشركة أو الخدمة أو السوق أو صلة النموذج بـ WOSOL",
  "Clear": "مسح",
  "All": "الكل",
  "Private Jets": "الطيران الخاص",
  "Private Yachts": "اليخوت الخاصة",
  "Luxury Concierge": "الكونسيرج الفاخر",
  "Private Clubs": "النوادي الخاصة",
  "GCC / Saudi Relevant": "مرتبط بالسعودية والخليج",
  "Comparison Table": "جدول المقارنة",
  "Sortable provider intelligence": "قراءة مقارنة قابلة للفرز",
  "Click a column heading to sort. Use the filters above to narrow the company cards; the comparison table remains a full reference layer.": "يمكن فرز الجدول من عناوين الأعمدة. استخدم الفلاتر لتضييق بطاقات الشركات، بينما يبقى جدول المقارنة مرجعًا كاملًا.",
  "Company": "الشركة",
  "Category": "التصنيف",
  "Region": "النطاق",
  "Service Type": "نوع الخدمة",
  "Membership / Access Model": "نموذج العضوية والوصول",
  "Target Segment": "الشريحة المستهدفة",
  "WOSOL Relevance": "صلة النموذج بـ WOSOL",
  "Website": "الموقع",
  "Strategic Patterns": "الأنماط الاستراتيجية",
  "Signals across global luxury access providers": "إشارات متكررة لدى مزودي الوصول الفاخر عالميًا",
  "Pattern 01": "النمط 01",
  "Invitation-Only Positioning": "تموضع قائم على الدعوة فقط",
  "The highest-tier providers, including Knightsbridge Circle, CORE Club, and R360, never publish how to join. The mystery of access is itself a product.": "العلامات الأعلى مستوى مثل Knightsbridge Circle و CORE Club و R360 لا تشرح الانضمام علنًا. الغموض هنا ليس نقصًا في المعلومات، بل جزء من قيمة الوصول نفسه.",
  "Pattern 02": "النمط 02",
  "Membership Over Booking": "العضوية قبل الحجز",
  "VistaJet, Wheels Up, and Ten Lifestyle all repackage service delivery into membership language. Member implies relationship; customer implies transaction.": "VistaJet و Wheels Up و Ten Lifestyle يعيدون تقديم الخدمة بلغة العضوية. كلمة عضو تصنع علاقة طويلة، بينما كلمة عميل توحي بتعامل منفصل.",
  "Pattern 03": "النمط 03",
  "Dedicated Advisors": "مستشارون مخصصون",
  "Every major concierge brand centers its offer around a dedicated human: Quintessentially's Lifestyle Manager, VistaJet's Private Office, and NetJets' Account Manager.": "كل علامة كونسيرج قوية تتمحور حول شخص مخصص: Lifestyle Manager لدى Quintessentially، و Private Office لدى VistaJet، و Account Manager لدى NetJets.",
  "Pattern 04": "النمط 04",
  "Aviation & Yachts as Infrastructure": "الطيران واليخوت كبنية تشغيلية",
  "Private aviation and superyachts are not services. They are infrastructure. The best brands treat them as utilities for UHNW lifestyles, not aspirational bookings.": "الطيران الخاص واليخوت ليست خدمات ترفيهية فقط، بل بنية تشغيلية لنمط حياة UHNW. العلامات الأفضل تتعامل معها كأدوات جاهزية لا كحجوزات استعراضية.",
  "Pattern 05": "النمط 05",
  "Discretion Language": "لغة الخصوصية والتحفظ",
  "Discreet, private, confidential, and zero-footprint vocabulary signals trust. Brands that lead with discretion capture UHNW clients others cannot reach.": "مفردات مثل discreet و private و confidential و zero-footprint تبني الثقة. العلامات التي تقود بالخصوصية تصل إلى عملاء لا تصل إليهم المنصات العامة.",
  "Pattern 06": "النمط 06",
  "Access Instead of Booking": "الوصول بدل الحجز",
  "Access implies curated, relationship-based delivery. Booking implies a marketplace. Top brands use access language, not transactional verbs.": "كلمة access تعني وصولًا منسقًا قائمًا على العلاقة. أما booking فتشبه السوق المفتوح. العلامات الأعلى تستخدم لغة الوصول لا لغة المعاملة.",
  "Pattern 07": "النمط 07",
  "Bespoke Over Packages": "التصميم الخاص بدل الباقات",
  "No fixed menus. No package pages. The language is tailored, curated, and designed around you: the opposite of catalog-based selling.": "لا قوائم ثابتة ولا صفحات باقات. اللغة تدور حول tailoring وcuration والتصميم حول العميل، بعكس البيع من كتالوج.",
  "Pattern 08": "النمط 08",
  "Global Partner Networks": "شبكات شركاء عالمية",
  "No single company does everything. The strongest brands partner deeply, creating the impression of unlimited capability through trusted relationships.": "لا توجد شركة تفعل كل شيء وحدها. العلامات الأقوى تبني شبكة شركاء عميقة تعطي انطباع القدرة اللامحدودة عبر علاقات موثوقة.",
  "Pattern 09": "النمط 09",
  "Family Office Thinking": "تفكير يشبه مكاتب العائلات",
  "The best UHNW brands think like family offices: multi-generational, comprehensive, and proactive. They manage wealth of time, not just wealth of money.": "أفضل علامات UHNW تفكر مثل Family Offices: شمولية، استمرارية، واستباقية. هي لا تدير المال فقط، بل تدير ثروة الوقت.",
  "What WOSOL Can Learn": "ما الذي يمكن أن تتعلمه WOSOL",
  "Strategic opportunity map": "خريطة فرص استراتيجية",
  "Build a Private Access Network": "بناء شبكة وصول خاصة",
  "Partner with vetted aviation, yacht, hotel, dining, and event providers, creating the impression of unlimited access without owning any assets.": "بناء شراكات مع مزودي طيران ويخوت وفنادق ومطاعم وفعاليات بعد التحقق منهم، لخلق قدرة وصول واسعة دون امتلاك الأصول.",
  "Create Saudi Aviation Partnerships": "تأسيس شراكات طيران سعودية",
  "Form preferred-partner agreements with NasJet, Alpha Star, and Saudia Private. Aviation access is non-negotiable for WOSOL Premier and Imperial clients.": "تأسيس اتفاقيات شريك مفضل مع NasJet و Alpha Star و Saudia Private. الوصول للطيران الخاص عنصر أساسي لعملاء Premier و Imperial.",
  "Add UHNW Request Protocols": "إضافة بروتوكولات طلبات UHNW",
  "Define a clear protocol for extraordinary requests, the kind Knightsbridge Circle and Sienna Charles are known for. Train Lifestyle Managers on impossible request management.": "وضع بروتوكول واضح للطلبات غير الاعتيادية، من النوع الذي تشتهر به Knightsbridge Circle و Sienna Charles، وتدريب Lifestyle Managers على إدارة الطلبات المعقدة.",
  "Membership-Based Access Only": "الوصول عبر العضوية فقط",
  "Never build a public service catalog. Every service is accessed through membership. Assessment precedes access. This separates WOSOL from booking platforms.": "عدم بناء كتالوج خدمات عام. كل خدمة تمر عبر العضوية، والتقييم يسبق الوصول. هذا ما يفصل WOSOL عن منصات الحجز.",
  "Build Client Intelligence Profiles": "بناء ملفات ذكاء للعميل",
  "Like VistaJet's Private Office tracks preferences, WOSOL's app should build a growing profile, turning every interaction into a data point for proactive service.": "كما يتتبع Private Office لدى VistaJet تفضيلات العميل، يجب أن يبني تطبيق WOSOL ملفًا متناميًا يحول كل تفاعل إلى إشارة لخدمة استباقية.",
  "Lifestyle Assessment First": "تقييم أسلوب الحياة أولًا",
  "Before recommending a membership tier, conduct a Lifestyle Assessment. This is standard in top-tier financial services and concierge, and signals sophistication.": "قبل اقتراح مستوى العضوية، يبدأ المسار بتقييم أسلوب الحياة. هذا معيار مألوف في الخدمات المالية والكونسيرج الراقية ويعكس نضج الخدمة.",
  "Develop Yacht Access for Imperial": "تطوير وصول اليخوت لعضوية Imperial",
  "Partner with Burgess, Fraser, or Edmiston for superyacht access. Yacht experiences are a natural extension for WOSOL's Saudi royal and estate-level clients.": "بناء شراكات مع Burgess أو Fraser أو Edmiston للوصول إلى اليخوت الفاخرة. تجارب اليخوت امتداد طبيعي لعملاء WOSOL من المستوى الملكي وإدارة الأملاك.",
  "Create By Request Services": "تفعيل خدمات عند الطلب فقط",
  "Some services should not be listed. They should only be available upon request to create mystique and prevent commoditization of WOSOL's highest-value offerings.": "بعض الخدمات لا ينبغي أن تُعرض علنًا. توفرها عند الطلب فقط يحافظ على الندرة ويمنع تحويل أعلى عروض WOSOL إلى خدمات عادية.",
  "Position as a Trusted Access Partner": "التموضع كشريك وصول موثوق",
  "Not a concierge. Not a booking service. A trusted access partner, like a Chief of Staff for life. This reframe changes the pricing conversation entirely.": "ليست كونسيرج فقط وليست خدمة حجز. WOSOL يجب أن تتموضع كشريك وصول موثوق، أقرب إلى Chief of Staff للحياة الخاصة. هذا يعيد تعريف القيمة والسعر.",
  "GCC-First, Globally Capable": "خليجي الجذور، عالمي القدرة",
  "Lead with deep Saudi and GCC market expertise: cultural, linguistic, and protocol knowledge that global brands cannot replicate. Expand globally through partner networks.": "الانطلاق من فهم عميق للسعودية والخليج: ثقافة، لغة، وبروتوكول لا تستطيع العلامات العالمية نسخه بسهولة، مع التوسع عالميًا عبر شبكة شركاء.",
  "Service Mapping for WOSOL": "مواءمة الخدمات مع WOSOL",
  "Global categories into local operating ideas": "تحويل التصنيفات العالمية إلى أفكار تشغيل محلية",
  "Global Service Category": "تصنيف الخدمة عالميًا",
  "Example Providers": "أمثلة مزودين",
  "How WOSOL Can Adapt It": "كيف يمكن لـ WOSOL تكييفها",
  "Private Jet Charter": "استئجار الطائرات الخاصة",
  "Partner-based aviation request handling for all membership tiers. No fleet ownership required.": "إدارة طلبات الطيران عبر شركاء موثوقين لكل مستويات العضوية، دون الحاجة لامتلاك أسطول.",
  "Private Jet Experience": "تجربة الطيران الخاص",
  "Ground concierge coordination: private terminals, transfers, and journey preparation as a WOSOL service layer.": "تنسيق كونسيرج أرضي يشمل الصالات الخاصة، التنقلات، وتجهيز الرحلة كطبقة خدمة من WOSOL.",
  "Superyacht Charter": "استئجار اليخوت الفاخرة",
  "Curated access to yacht experiences via vetted broker partnerships. Red Sea and Mediterranean initially.": "وصول منسق لتجارب اليخوت عبر وسطاء موثوقين، مع البدء بالبحر الأحمر والمتوسط.",
  "Yacht Management": "إدارة اليخوت",
  "Estate-level yacht management coordination for Black tier clients who own yachts.": "تنسيق إدارة اليخوت لعملاء Black الذين يمتلكون يخوتًا ضمن منطق إدارة الأملاك.",
  "Lifestyle Concierge": "كونسيرج أسلوب الحياة",
  "Core membership model. Dedicated Lifestyle Manager. A-Z lifestyle management. WOSOL Premier direct equivalent.": "نموذج العضوية الأساسي: Lifestyle Manager مخصص وإدارة شاملة لأسلوب الحياة، وهو أقرب نموذج لـ WOSOL Premier.",
  "WOSOL Journeys sub-brand: bespoke journey design through trusted travel design partners.": "علامة فرعية باسم WOSOL Journeys لتصميم رحلات خاصة عبر شركاء سفر موثوقين.",
  "Private Members Clubs": "النوادي الخاصة",
  "Reciprocal access: WOSOL members gain access to global private clubs through partner relationships.": "وصول تبادلي يمنح أعضاء WOSOL دخولًا إلى نوادٍ خاصة عالمية عبر علاقات شراكة.",
  "Corporate Concierge": "كونسيرج الشركات",
  "B2B revenue: WOSOL corporate membership for Saudi companies to offer to their VIP clients.": "إيراد B2B عبر عضوية WOSOL للشركات السعودية لتقديمها لعملائها المهمين.",
  "UHNW Community": "مجتمع UHNW",
  "Member events: curated WOSOL member events to build belonging and community beyond service delivery.": "فعاليات أعضاء مصممة لبناء الانتماء والمجتمع، بما يتجاوز تقديم الخدمة فقط.",
  "Membership Implications": "انعكاسات ذلك على العضويات",
  "How research can shape WOSOL tiers": "كيف يشكل البحث مستويات WOSOL",
  "Individual Lifestyle Management": "إدارة أسلوب حياة فردية",
  "Inspired by Quintessentially, Ten Lifestyle, and Sienna Charles. Dedicated Lifestyle Manager with proactive intelligence.": "مستوحاة من Quintessentially و Ten Lifestyle و Sienna Charles: مدير أسلوب حياة مخصص مع ذكاء استباقي.",
  "Estate & Family Coordination": "تنسيق الأسرة والأملاك",
  "Inspired by Quintessentially Estates, Hill Robinson yacht management, and Scott Dunn family travel. Private Estate Operating System for up to 10 named users.": "مستوحاة من Quintessentially Estates و Hill Robinson و Scott Dunn: نظام تشغيل خاص للأسرة والأملاك حتى 10 مستخدمين محددين.",
  "Royal Protocol & Absolute Discretion": "بروتوكول ملكي وخصوصية مطلقة",
  "Inspired by Knightsbridge Circle, Royal Jet, and Burgess superyacht services. 1:1 or 1:2 dedicated support. Zero digital footprint.": "مستوحاة من Knightsbridge Circle و Royal Jet و Burgess: دعم مخصص 1:1 أو 1:2 مع أثر رقمي شبه معدوم.",
  "B2B & Institutional Access": "وصول مؤسسي و B2B",
  "Inspired by John Paul, Aspire Lifestyles, and Ten Lifestyle's banking partnerships. WOSOL as a white-label lifestyle partner for Saudi corporations.": "مستوحاة من John Paul و Aspire Lifestyles وشراكات Ten Lifestyle البنكية: WOSOL كشريك أسلوب حياة بعلامة بيضاء للشركات السعودية.",
  "Research Sources": "مصادر البحث",
  "Public source links used for the directory": "روابط المصادر العامة المستخدمة في الدليل",
  "View company source links": "عرض روابط مصادر الشركات",
  "Final Recommendation Layer": "طبقة التوصية النهائية",
  "This directory is designed as a reference layer for partnership mapping, membership development, and UHNW service positioning.": "صُمم هذا الدليل كطبقة مرجعية لرسم خريطة الشراكات، وتطوير العضويات، وتموضع خدمات UHNW.",
  "It should be used to study positioning, access models, service language, and partner categories before WOSOL makes commercial or operating decisions.": "يُستخدم هذا المرجع لدراسة التموضع، ونماذج الوصول، ولغة الخدمة، وتصنيفات الشركاء قبل اتخاذ قرارات تجارية أو تشغيلية داخل WOSOL.",
  "Prepared for Executive Review - Public sources only - 2026": "أُعد للمراجعة التنفيذية - مصادر عامة فقط - 2026",
  "Close": "إغلاق",
  "Top": "أعلى"
};

const staticEnglish = Object.fromEntries(
  Object.entries(staticArabic).map(([english, arabic]) => [normalizeText(arabic), english])
);

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function t(key) {
  return uiText[currentLanguage][key] || uiText.en[key] || key;
}

function localizeCategory(value) {
  return currentLanguage === "ar" ? categoryLabelsAr[value] || value : value;
}

function translateTextNodes() {
  const map = currentLanguage === "ar" ? staticArabic : staticEnglish;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!normalizeText(node.nodeValue)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const normalized = normalizeText(node.nodeValue);
    const replacement = map[normalized];
    if (!replacement) return;
    const leading = node.nodeValue.match(/^\s*/)[0];
    const trailing = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = `${leading}${replacement}${trailing}`;
  });
}

function applyRichTranslations() {
  const summaryParagraphs = document.querySelectorAll(".exec-summary p");
  if (summaryParagraphs[0]) {
    summaryParagraphs[0].innerHTML = currentLanguage === "ar"
      ? 'عملاء UHNW لا يشترون خدمة منفصلة؛ هم يشترون <strong>وصولًا موثوقًا، خصوصية، وقتًا، يقينًا، وتحفظًا مهنيًا</strong>. الطيران الخاص واليخوت الفاخرة ليست فئات رفاهية فقط، بل بنية تشغيلية لحياة المؤسسين ومكاتب العائلات وكبار التنفيذيين والعملاء الخاصين. هذا الدليل يساعد WOSOL على فهم كيف تُبنى خدمات الوصول عالميًا من حيث التغليف، الحوكمة، التسعير، ولغة العرض، دون نسخ أي مزود بعينه.'
      : 'UHNW clients do not simply buy services. They buy <strong>access, privacy, time, certainty, and trusted discretion</strong>. Private aviation and superyachts are not only luxury categories; they operate as lifestyle infrastructure for founders, family offices, senior executives, and private clients. This directory is designed to help WOSOL study how global luxury access is packaged, governed, priced, and communicated without copying any one provider.';
  }

  if (summaryParagraphs[1]) {
    summaryParagraphs[1].setAttribute("dir", currentLanguage === "ar" ? "rtl" : "ltr");
    summaryParagraphs[1].setAttribute("lang", currentLanguage === "ar" ? "ar" : "en");
    summaryParagraphs[1].textContent = currentLanguage === "ar"
      ? "الهدف العملي من هذا المرجع هو تحويل الملاحظات العالمية إلى عضويات، شراكات، وبروتوكولات خدمة تناسب WOSOL Concierge في السوق السعودي والخليجي، مع قدرة تنفيذ عالمية عبر شركاء موثوقين."
      : "This reference layer converts global luxury-access patterns into membership logic, partner strategy, and operating protocols that WOSOL Concierge can adapt for Saudi and GCC clients.";
  }
}

function applyLanguage(render = true) {
  document.documentElement.lang = currentLanguage === "ar" ? "ar" : "en";
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.title = t("pageTitle");

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.setAttribute("content", t("pageDescription"));
  if (ogTitle) ogTitle.setAttribute("content", currentLanguage === "ar" ? "دليل الوصول الفاخر لعملاء UHNW" : "Global UHNW Luxury Access Directory");
  if (ogDescription) ogDescription.setAttribute("content", t("pageDescription"));

  languageToggle.textContent = currentLanguage === "ar" ? "EN" : "AR";
  languageToggle.setAttribute("aria-label", t("switchLanguage"));
  searchInput.setAttribute("placeholder", t("searchPlaceholder"));
  backToTop.textContent = t("top");
  backToTop.setAttribute("aria-label", currentLanguage === "ar" ? "العودة إلى أعلى الصفحة" : "Back to top");

  translateTextNodes();
  applyRichTranslations();

  if (render) {
    renderCompanyCards();
    renderComparisonTable();
    renderSources();
    if (modal.classList.contains("active") && activeCompanySlug) {
      openCompany(activeCompanySlug, false);
    }
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "ar" ? "en" : "ar";
  localStorage.setItem("wosolLanguage", currentLanguage);
  applyLanguage(true);
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function textMatch(company, term) {
  if (!term) return true;
  const haystack = [
    company.name,
    company.category,
    company.region,
    company.serviceType,
    company.target,
    company.membership,
    company.positioning,
    company.summary,
    company.relevance,
    company.lesson,
    company.services.join(" ")
  ].join(" ").toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function filterMatch(company) {
  return activeFilter === "All" || company.tags.includes(activeFilter) || company.category === activeFilter;
}

function visibleCompanies() {
  return companies.filter((company) => filterMatch(company) && textMatch(company, searchTerm));
}

function renderCompanyCards() {
  const visible = visibleCompanies();
  resultCount.textContent = t("resultCount")(visible.length, companies.length);

  if (!visible.length) {
    companyGrid.innerHTML = `<div class="empty-state">${t("emptyState")}</div>`;
    return;
  }

  companyGrid.innerHTML = visible.map((company) => {
    const slug = slugify(company.name);
    return `
      <article class="company-card" id="company-${slug}">
        <span class="category-badge">${localizeCategory(company.category)}</span>
        <span class="region-pill provider-copy">${company.region}</span>
        <h3 class="provider-name">${company.name}</h3>
        <p class="provider-copy">${company.summary}</p>
        <div class="company-meta">
          <span><strong>${t("services")}:</strong> <span class="provider-copy">${company.services.slice(0, 3).join(", ")}</span></span>
          <span><strong>${t("target")}:</strong> <span class="provider-copy">${company.target}</span></span>
          <span><strong>${t("relevance")}:</strong> <span class="provider-copy">${company.relevance}</span></span>
        </div>
        <div class="company-actions">
          <a href="${company.url}" target="_blank" rel="noopener">${t("website")}</a>
          <button type="button" data-company="${slug}">${t("viewDetails")}</button>
        </div>
      </article>
    `;
  }).join("");

  companyGrid.querySelectorAll("[data-company]").forEach((button) => {
    button.addEventListener("click", () => openCompany(button.dataset.company, true));
  });
}

function renderComparisonTable() {
  const sorted = [...companies].sort((a, b) => {
    const aValue = String(a[sortKey] || "").toLowerCase();
    const bValue = String(b[sortKey] || "").toLowerCase();
    return aValue.localeCompare(bValue) * sortDirection;
  });

  comparisonBody.innerHTML = sorted.map((company) => `
    <tr>
      <td>${company.name}</td>
      <td>${localizeCategory(company.category)}</td>
      <td>${company.region}</td>
      <td>${company.serviceType}</td>
      <td>${company.membership}</td>
      <td>${company.target}</td>
      <td>${company.relevance}</td>
      <td><a href="${company.url}" target="_blank" rel="noopener">${t("open")}</a></td>
    </tr>
  `).join("");
}

function renderSources() {
  sourcesList.innerHTML = companies.map((company) => `
    <div class="source-item">
      <strong>${company.name}</strong>
      <span>${localizeCategory(company.category)}</span>
      <a href="${company.source}" target="_blank" rel="noopener">${company.source}</a>
    </div>
  `).join("");
}

function openCompany(slug, updateHash = false) {
  const company = companies.find((item) => slugify(item.name) === slug);
  if (!company) return;
  activeCompanySlug = slug;

  if (updateHash) {
    history.replaceState(null, "", `#company-${slug}`);
  }

  modalContent.innerHTML = `
    <span class="category-badge">${localizeCategory(company.category)}</span>
    <h2 class="modal-title provider-name" id="modalTitle">${company.name}</h2>
    <p class="modal-subtitle provider-copy">${company.positioning}</p>
    <div class="detail-grid">
      <div class="detail-cell"><strong>${t("region")}</strong><span class="provider-copy">${company.region}</span></div>
      <div class="detail-cell"><strong>${t("serviceType")}</strong><span class="provider-copy">${company.serviceType}</span></div>
      <div class="detail-cell"><strong>${t("targetSegment")}</strong><span class="provider-copy">${company.target}</span></div>
      <div class="detail-cell"><strong>${t("membershipAccess")}</strong><span class="provider-copy">${company.membership}</span></div>
    </div>
    <div class="modal-body">
      <h3>${t("executiveSummary")}</h3>
      <p class="provider-copy">${company.summary}</p>
      <h3>${t("publicServices")}</h3>
      <ul class="provider-copy">${company.services.map((service) => `<li>${service}</li>`).join("")}</ul>
      <h3>${t("relevantToWosol")}</h3>
      <p class="provider-copy">${company.relevance}</p>
      <h3>${t("strategicLesson")}</h3>
      <p class="provider-copy">${company.lesson}</p>
      <h3>${t("sourceLink")}</h3>
      <p class="provider-copy"><a href="${company.source}" target="_blank" rel="noopener">${company.source}</a></p>
    </div>
    <div class="modal-actions">
      <a href="${company.url}" target="_blank" rel="noopener">${t("visitWebsite")}</a>
      <button type="button" data-copy-link="${slug}">${t("copyCompanyLink")}</button>
    </div>
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  modalContent.querySelector("[data-copy-link]").addEventListener("click", () => copyCompanyLink(slug));
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeCompanySlug = null;
}

function copyCompanyLink(slug) {
  const link = `${window.location.origin}${window.location.pathname}#company-${slug}`;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(link);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = link;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function applyFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderCompanyCards();
}

function initEvents() {
  languageToggle.addEventListener("click", toggleLanguage);

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderCompanyCards();
  });

  document.getElementById("clearSearch").addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    renderCompanyCards();
    searchInput.focus();
  });

  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextKey = button.dataset.sort;
      sortDirection = sortKey === nextKey ? sortDirection * -1 : 1;
      sortKey = nextKey;
      renderComparisonTable();
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((item) => {
    item.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 700);
  });
}

function openFromHash() {
  if (!window.location.hash.startsWith("#company-")) return;
  const slug = window.location.hash.replace("#company-", "");
  openCompany(slug, false);
}

function init() {
  totalCompanies.textContent = companies.length;
  applyLanguage(false);
  renderCompanyCards();
  renderComparisonTable();
  renderSources();
  initEvents();
  openFromHash();
}

init();

materials = Material.create([
  {
    name: "Batteries",
    tips: "Dry-Cell Batteries.Types of Batteries.Separate Collection",
    facts: "Lead-acid batteries are the most recycled type of battery with a 97% reuse rate.Americans purchase ~3 billion dry-cell batteries every year."
  },
  {
    name: "Cardboard",
    tips: "Avoid Contamination.Break it Down.Consider a Baler",
    facts: "Recycled cardboard uses 25% less energy than that needed to create new cardboard.Approximately 100 billion cardboard boxes are produced each year in the US.One ton of recycled cardboard saves 46 gallons of oil.One ton of recycled cardboard also equals 9 cubic yards of landfill space avoided"
  },
  {
    name: "Commingled",
    tips: "Avoid Contamination.Read the Label",
    facts: "Americans use 2,500,000 plastic bottles every hour.About 65% of American's aluminum is currently recycled.Glass is 100% recyclable and can be recycled forever without loss in quality or purity"
  },
  {
    name: "E-Waste",
    tips: "Go To The Experts.Give Back To Your Communities",
    facts: "The US produces the second largest amount of e-waste in the world at 7,9 million tons (2019).Only 17,4% of e-waste was collected and recycled.E-waste will double over the next 16 years"
  },
  {
    name: "Organics",
    tips: "Track It.Give Back To Your Communities",
    facts: "The US produces approximately 34 million tons of food waste each year.24% of this food waste is organic material that can be composted.Composting our yearly food waste can reduce greenhouse gas equivalent to taking 2 million cars off the road.In 2018, 12,2 million tons of wood ended up in the US landfills"
  },
  {
    name: "Paper",
    tips: "Avoid Contamination.Types of Paper",
    facts: "Recycled paper uses 30-50% less energy than making paper from trees.Every year, the average American uses approximately 700 lbs of paper products.One ton of recycled paper can save 17 trees a year and 380 gallons of oil"
  },
  {
    name: "Plastic Film",
    tips: "Go To The Experts.Included Types.Not Included Types",
    facts: "The US consumed approximately 14,5 million tons of plastic packaging (2018).The US generated about 4,2 million tons of plastic bags, sacks and wraps.The recycling rate for plastic film is ~12% (2018)"
  },
  {
    name: "Styrofoam",
    tips: "Go To The Experts.Included Types",
    facts: "15 million tons of styrofoam is produced every year.That's enough to fill more than 700 Empire State Buildings every year.Only 1% of EPS is recycled.Styrofoam is actually a trademarked brand name for expanded polystyrene (EPS) that is owned by the Dow Chemical Company, but it is commonly used when talking about a variety of foamed polystyrene products"
  },
]);

industries = Industry.create([
  {
    name: "Automotive",
    recyclables: "Office Paper.Packing.Cardboard.Auto Glass.Engines.Car Batteries.Rubber Tires",
    companies: "Porsche.Younger Nissan.Easterns Automotive Group"
  },
  {
    name: "Bank Branch",
    recyclables: "Confidential Customer Documents and Equipment.Computers.Hard Drives.Networking Equipment",
    companies: "NexTier Bank.PNC"
  },
  {
    name: "Education",
    recyclables: "Food Waste.Large Event Waste.Lab and Art Supplies",
    companies: "Howard University.GP.Kipp:Houston Public Schools.Penn State.MU"
  },
  {
    name: "Grocery",
    recyclables: "Food Waste.Cardboard.Packaging.Glass.Plastics.Metals",
    companies: "MOM's Organic Market.Natural Grocers"
  },
  {
    name: "Healthcare Facilities",
    recyclables: "Office Supplies.Hazardous Waste.Non-Hazardous Waste.Paper.Plastic.Organics.E-Waste",
    companies: "UPMC.Vi.Allegheny.LCS.ConMed.Highmark.Lincare.United Healthcare"
  },
  {
    name: "Hospitality",
    recyclables: "Food Waste.Construction and Demolition Debris",
    companies: "Marriott.Sheraton.Best Western.Embassy Suites.Homewood Suites.Hyatt.Kimpton"
  },
  {
    name: "Logistics",
    recyclables: "Ceva Logistics.Hellmann.DHL.Pittohio",
    companies: "Pallets.Shrink Wrap.Cardboard"
  },
  {
    name: "Manufacturing",
    recyclables: "Industrial Waste.Metals.Pallets",
    companies: "PPG.Novolex.Pilgrim's.Mary Kay.Avery Dennison.Kennametal.Schaffner"
  },
  {
    name: "Multi-Family Housing",
    recyclables: "Bulky Items.Furniture.Move-In/Move-Out Items",
    companies: "FirstService Residential.PMC Property Group.Brookfield Properties"
  },
  {
    name: "Office Building",
    recyclables: "Cardboard.E-Waste.Paper.Plastic Film",
    companies: "Apple.Brookfield Properties.CBRE.Safeway"
  },
  {
    name: "Property Management",
    recyclables: "Cardboard.E-Waste.Paper.Plastic Film",
    companies: "Colliers International.Cushman & Wakefield.CBRE.The World Bank"
  },
  {
    name: "Restaurants",
    recyclables: "Food Waste",
    companies: "Chic-Fil-A.Dark Matter Coffee.Dunkin.McDonalds.Popeyes"
  },
  {
    name: "Retail",
    recyclables: "Cardboard.Paper.Plastic Film",
    companies: "ACE Hardware.Forman Mills.Giant Eagle.Lazyboy.PPG"
  },
]);

emissions = Emission.create([
  {
    name: "Scope 1",
    emissionType: "Direct Emissions",
    cause: "Sources that an organisation owns or controls directly.Example: Burning fuels in vehicles"
  },
  {
    name: "Scope 2",
    emissionType: "Indirect Emissions",
    cause: "Sources a ompany causes indirectly and come from where the energy it purchases and uses is produced.Example: Generating electricity used in buildings"
  },
  {
    name: "Scope 3",
    emissionType: "Indirect Emissions",
    cause: "Sources not produced by a company or a results from owned assets but still hold responsibility for emissions.Example: Buying, using, and disposing of products from suppliers"
  },
]);
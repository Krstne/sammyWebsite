const products = [
    {
        id: 1,
        image: 'https://www.highamylosestarch.com/photo/pl115356662-e1422_modified_starch_acetylated_distarch_adipate.jpg',
        qty: 1,
        gram: '500g',
        brand: 'Sinoright',
        description: 'Modified Starch E1422',
        unitPrice: 3500,
        buyQty: 0
    },
    {
        id: 2,
        image: 'https://www.greenhouse2u.com/image/mrngnatural/image/data/all_product_images/product-255/BrQweasu1742389343.png',
        qty: 1,
        gram: '150g',
        brand: 'LOHAS',
        description: 'Lecithin (soy)',
        unitPrice: 790,
        buyQty: 0
    },
    {
        id: 3,
        image: 'https://www.jindeal.com/wp-content/uploads/2024/04/potassium-sorbate-food-grade.jpeg',
        qty: 1,
        gram: '250g',
        brand: 'Kemrad',
        description: 'Potassium Sorbate',
        unitPrice: 1150,
        buyQty: 0
    },
    {
        id: 4,
        image: 'https://image.made-in-china.com/2f0j00mfjbtEsdhUca/Food-Grade-97-Smbs-White-Powder-Sodium-Metabisulfite.webp',
        qty: 1,
        gram: '500g',
        brand: 'Kemrad',
        description: 'Sodium Metabisulfite',
        unitPrice: 390,
        buyQty: 0
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Citrus+Pectin',
        qty: 1,
        gram: '250g',
        brand: 'Dalkem',
        description: 'Citrus Pectin',
        unitPrice: 2150,
        buyQty: 0
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Gum+Arabic',
        qty: 1,
        gram: '250g',
        brand: 'PureChem',
        description: 'Gum Arabic',
        unitPrice: 650,
        buyQty: 0
    },
    {
        id: 7,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Xantham+Gum',
        qty: 1,
        gram: '500g',
        brand: 'Asteria Apothecary',
        description: 'Xantham Gum',
        unitPrice: 790,
        buyQty: 0
    },
    {
        id: 8,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Citric+Acid',
        qty: 1,
        gram: '500g',
        brand: 'GreenLands',
        description: 'Citric Acid',
        unitPrice: 190,
        buyQty: 0
    },
    {
        id: 9,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Wheat+Gluten',
        qty: 1,
        gram: '250g',
        brand: 'Vital',
        description: 'Vital Wheat Gluten',
        unitPrice: 350,
        buyQty: 0
    },
    {
        id: 10,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=TVP+Granules',
        qty: 1,
        gram: '1kg',
        brand: 'RLB',
        description: 'Textured Vegetable Protein (TVP) Granules',
        unitPrice: 390,
        buyQty: 0
    },
    {
        id: 11,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Ammonium+Oxalate',
        qty: 1,
        gram: '500ml',
        brand: 'Profame',
        description: 'Ammonium Oxalate',
        unitPrice: 3400,
        buyQty: 0
    },
    {
        id: 12,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Benedict+Reagent',
        qty: 1,
        gram: '1liter',
        brand: 'MEDIC',
        description: 'Benedict\'s Reagent',
        unitPrice: 1700,
        buyQty: 0
    },
    {
        id: 13,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Phenolphthalein',
        qty: 1,
        gram: '1liter',
        brand: 'Dalkem',
        description: 'Phenolphthalein Solution',
        unitPrice: 1500,
        buyQty: 0
    },
    {
        id: 14,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Methylene+Blue',
        qty: 1,
        gram: '1liter',
        brand: 'AQUAMAGE',
        description: 'Methylene Blue',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 15,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Lithium+Chloride',
        qty: 1,
        gram: '500g',
        brand: 'Xilong',
        description: 'Lithium Chloride',
        unitPrice: 5400,
        buyQty: 0
    },
    {
        id: 16,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Sucrose',
        qty: 1,
        gram: '500g',
        brand: 'Xilong',
        description: 'Sucrose',
        unitPrice: 1900,
        buyQty: 0
    },
    {
        id: 17,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Glucose+Solution',
        qty: 1,
        gram: '500ml',
        brand: 'Scientific Phygene',
        description: 'Glucose Solution 10%',
        unitPrice: 3900,
        buyQty: 0
    },
    // Chemical Reagents - 2531 Cetrade
    {
        id: 18,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Hydrochloric+Acid',
        qty: 1,
        gram: '500ml',
        brand: 'LabChem',
        description: 'Concentrated Hydrochloric Acid 500ml',
        unitPrice: 8500,
        buyQty: 0
    },
    {
        id: 19,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Sodium+Nitrate',
        qty: 1,
        gram: '50ml',
        brand: 'Bendonsen',
        description: 'Sodium nitrate solution 500g',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 20,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Potassium+Nitrate',
        qty: 1,
        gram: '50ml',
        brand: 'High Purity',
        description: 'Potassium nitrate solution 1kg',
        unitPrice: 1600,
        buyQty: 0
    },
    {
        id: 21,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Calcium+Nitrate',
        qty: 1,
        gram: '50ml',
        brand: 'High Purity',
        description: 'Calcium nitrate solution 1kg',
        unitPrice: 1750,
        buyQty: 0
    },
    {
        id: 22,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Nickel+Nitrate',
        qty: 1,
        gram: '50ml',
        brand: 'Bendonsen',
        description: 'Nickle nitrate solution 500g',
        unitPrice: 4700,
        buyQty: 0
    },
    {
        id: 23,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Cobalt+Nitrate',
        qty: 1,
        gram: '50ml',
        brand: 'Maklin',
        description: 'Cobalt nitrate solution; 5 g solid',
        unitPrice: 3950,
        buyQty: 0
    },
    {
        id: 24,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Iron+Nitrate',
        qty: 1,
        gram: '50ml',
        brand: 'Bendonsen',
        description: 'Iron nitrate solution 500g',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 25,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Lead+Nitrate',
        qty: 1,
        gram: '50ml',
        brand: 'Codow',
        description: 'Lead nitrate solution 500ml',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 26,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Iron+Fillings',
        qty: 1,
        gram: '10g',
        brand: 'High Purity',
        description: 'Iron fillings 20g',
        unitPrice: 350,
        buyQty: 0
    },
    {
        id: 27,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Mercury+Metal',
        qty: 1,
        gram: '10g',
        brand: 'N/A',
        description: 'Mercury metal',
        unitPrice: 1300,
        buyQty: 0
    },
    {
        id: 28,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Sulfur+Powder',
        qty: 1,
        gram: '10g',
        brand: 'AR',
        description: 'Sulfur powder 200g',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 29,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Iodine+Crystals',
        qty: 1,
        gram: '10g',
        brand: 'High Purity',
        description: 'Iodine cratals/ Iodine crystals 50g',
        unitPrice: 1990,
        buyQty: 0
    },
    {
        id: 30,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Sugar',
        qty: 1,
        gram: '100g',
        brand: 'Raw Cane',
        description: 'Sugar',
        unitPrice: 170,
        buyQty: 0
    },
    {
        id: 31,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Starch',
        qty: 1,
        gram: '100g',
        brand: 'Bendonsen',
        description: 'Starch 500g',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 32,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Flour',
        qty: 1,
        gram: '100g',
        brand: 'High Purity',
        description: 'Flour 500g',
        unitPrice: 250,
        buyQty: 0
    },
    {
        id: 33,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Sand',
        qty: 1,
        gram: '100g',
        brand: 'Elon\'s',
        description: 'Sand 1kg',
        unitPrice: 180,
        buyQty: 0
    },
    {
        id: 34,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Copper+Wire',
        qty: 1,
        gram: '10pcs',
        brand: 'N/A',
        description: 'Copper wire 4 inches',
        unitPrice: 750,
        buyQty: 0
    },
    {
        id: 35,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Sandpaper',
        qty: 1,
        gram: '10pcs',
        brand: 'N/A',
        description: 'Sandpaper',
        unitPrice: 35,
        buyQty: 0
    },
    {
        id: 36,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Ethanol',
        qty: 1,
        gram: '50ml',
        brand: 'TLS',
        description: 'Ethanol 95%',
        unitPrice: 540,
        buyQty: 0
    },
    {
        id: 37,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Magnesium+Ribbon',
        qty: 1,
        gram: '10pcs',
        brand: 'N/A',
        description: 'Magnesium ribbon 4 inches',
        unitPrice: 350,
        buyQty: 0
    },
    {
        id: 38,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Mossy+Zinc',
        qty: 1,
        gram: '10pcs',
        brand: 'Kwality',
        description: 'Mossy zinc 500g',
        unitPrice: 2100,
        buyQty: 0
    },
    {
        id: 39,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Calcium+Chloride',
        qty: 1,
        gram: '10ml',
        brand: 'Codow',
        description: '1M Calcium chloride solution',
        unitPrice: 2990,
        buyQty: 0
    },
    {
        id: 40,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Sodium+Carbonate',
        qty: 1,
        gram: '10ml',
        brand: 'Huasheng',
        description: '1M Sodium carbonate solution 500ml',
        unitPrice: 1800,
        buyQty: 0
    },
    {
        id: 41,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Food+Color',
        qty: 1,
        gram: '500ml',
        brand: 'Mc Cormick',
        description: 'Food color solution-yellow,red,blue,green,orange',
        unitPrice: 150,
        buyQty: 0
    },
    {
        id: 42,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Polystyrene+Cups',
        qty: 1,
        gram: '10pcs',
        brand: 'N/A',
        description: 'Polystyrene drinking cup',
        unitPrice: 10,
        buyQty: 0
    },
    {
        id: 43,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Propanone',
        qty: 1,
        gram: '500ml',
        brand: 'AR',
        description: 'Propanone 250ml',
        unitPrice: 350,
        buyQty: 0
    },
    {
        id: 44,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Glycerin',
        qty: 1,
        gram: '100ml',
        brand: 'Chemie',
        description: 'Glycerin 120ml',
        unitPrice: 450,
        buyQty: 0
    },
    {
        id: 45,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Simple+Syrup',
        qty: 1,
        gram: '500ml',
        brand: 'Lakanto',
        description: 'Simple syrup 500ml',
        unitPrice: 5950,
        buyQty: 0
    },
    {
        id: 46,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Sodium+Chloride',
        qty: 1,
        gram: '300g',
        brand: 'Xilong GR',
        description: 'Sodium chloride 500g',
        unitPrice: 1800,
        buyQty: 0
    },
    {
        id: 47,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Methyl+Salicylate',
        qty: 1,
        gram: '300g',
        brand: 'High Purity',
        description: 'Methyl salicylate 500ml',
        unitPrice: 900,
        buyQty: 0
    },
    {
        id: 48,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Glucose',
        qty: 1,
        gram: '300g',
        brand: 'Chem Supply',
        description: 'Glucose 500g',
        unitPrice: 2800,
        buyQty: 0
    },
    {
        id: 49,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Atropine+Sulfate',
        qty: 1,
        gram: '50g',
        brand: 'Alcori',
        description: 'Atropine sulfate 10g',
        unitPrice: 750,
        buyQty: 0
    },
    {
        id: 50,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Lactose',
        qty: 1,
        gram: '300g',
        brand: 'Dalkem',
        description: 'Lactose 250g',
        unitPrice: 500,
        buyQty: 0
    },
    {
        id: 51,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Clove+Oil',
        qty: 1,
        gram: '20ml',
        brand: 'Bendonsen',
        description: 'Clove oil 100ml',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 52,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Clonidine',
        qty: 1,
        gram: '50g',
        brand: 'Ritemed',
        description: 'Clonidine 75mcg',
        unitPrice: 35,
        buyQty: 0
    },
    {
        id: 53,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Microcrystalline+Cellulose',
        qty: 1,
        gram: '20g',
        brand: 'High Purity',
        description: 'Microcrystalline cellulose',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 54,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Aspirin+Powder',
        qty: 1,
        gram: '50g',
        brand: 'HuaSheng',
        description: 'Aspirin powder 250g',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 55,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Acetaminophen',
        qty: 1,
        gram: '300g',
        brand: 'High Purity',
        description: 'Acetaminophen powder 500g',
        unitPrice: 4500,
        buyQty: 0
    },
    {
        id: 56,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Pregelatinized+Starch',
        qty: 1,
        gram: '300g',
        brand: 'Dalkem',
        description: 'Pregelatinized starch 500g',
        unitPrice: 1950,
        buyQty: 0
    },
    // Medical Supplies - 2543 Cetrade
    {
        id: 57,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Hemoglobin+Microcuvette',
        qty: 1,
        gram: '1bot',
        brand: 'Hemocue',
        description: 'Hemoglobin Microcuvette 50\'s/bot (Spectrophotometry) Code 50',
        unitPrice: 15500,
        buyQty: 0
    },
    {
        id: 58,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Urinalysis+Reagent',
        qty: 1,
        gram: '5bot',
        brand: 'RightSign',
        description: 'Urinalysis Reagent 4 Para Strips 100\'s',
        unitPrice: 520,
        buyQty: 0
    },
    {
        id: 59,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=HbsAg+Test+Kit',
        qty: 1,
        gram: '25box',
        brand: 'RightSign',
        description: 'HbsAg Determination Rapid Test Kit pack/30\'s Cassette',
        unitPrice: 1950,
        buyQty: 0
    },
    {
        id: 60,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Blood+Typing+Anti-A',
        qty: 1,
        gram: '1bot',
        brand: 'Trusera',
        description: 'Blood typing Sera Anti-A 10ml',
        unitPrice: 990,
        buyQty: 0
    },
    {
        id: 61,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Blood+Typing+Anti-B',
        qty: 1,
        gram: '1bot',
        brand: 'Trusera',
        description: 'Blood Typing Sera Anti-B 10 ml',
        unitPrice: 990,
        buyQty: 0
    },
    {
        id: 62,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Blood+Typing+Anti-D',
        qty: 1,
        gram: '1bot',
        brand: 'Trusera',
        description: 'Blood Typing Sera Anill-D 10ml',
        unitPrice: 1550,
        buyQty: 0
    },
    {
        id: 63,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Glacial+Acetic',
        qty: 1,
        gram: '1bot',
        brand: 'CHEM',
        description: 'Glacial Acetic 500ml TM-10 201',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 64,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=M-10+Diluent',
        qty: 1,
        gram: '4box',
        brand: 'MINDRAY',
        description: 'M- 10 Diluent 20L',
        unitPrice: 7550,
        buyQty: 0
    },
    {
        id: 65,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Lyse',
        qty: 1,
        gram: '4box',
        brand: 'MINDRAY',
        description: 'Lyse 500ml',
        unitPrice: 6950,
        buyQty: 0
    },
    {
        id: 66,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Hema+Quick+Stain',
        qty: 1,
        gram: '1bot',
        brand: 'MEDIC',
        description: 'Hema Quick Stain set (4 bottles)',
        unitPrice: 5550,
        buyQty: 0
    },
    {
        id: 67,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=WBC+Diluting+Fluid',
        qty: 1,
        gram: '1bot',
        brand: 'MEDIC',
        description: 'WBC Diluting Fluid 500g',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 68,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Immersion+Oil',
        qty: 1,
        gram: '1bot',
        brand: 'MEDIC',
        description: 'Immersion oil 30ml',
        unitPrice: 3800,
        buyQty: 0
    },
    {
        id: 69,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Microscope+Slides',
        qty: 1,
        gram: '5box',
        brand: 'Sail brand',
        description: 'Microscope Plain Slides 72s',
        unitPrice: 85,
        buyQty: 0
    },
    {
        id: 70,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=EDTA+Tubes',
        qty: 1,
        gram: '20tray',
        brand: 'Surgitect',
        description: 'EDTA Tubes 2cc (100%',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 71,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Red+Top+Tubes',
        qty: 1,
        gram: '5tray',
        brand: 'Surgitect',
        description: 'Plan Red Top) Tubes 3ml (100%)',
        unitPrice: 530,
        buyQty: 0
    },
    {
        id: 72,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Syringe+3cc',
        qty: 1,
        gram: '5box',
        brand: 'Cardinal',
        description: 'Syringe 3 cc 100\'s (3ml)',
        unitPrice: 250,
        buyQty: 0
    },
    {
        id: 73,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Lancet+23g',
        qty: 1,
        gram: '1box',
        brand: 'Surgitect',
        description: 'Lancet 23g',
        unitPrice: 130,
        buyQty: 0
    },
    {
        id: 74,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Capillary+Tubes',
        qty: 1,
        gram: '1bot',
        brand: 'Kingmed',
        description: 'Capillary Plain Tubes 100s/bottle',
        unitPrice: 170,
        buyQty: 0
    },
    {
        id: 75,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Capillary+Clay+Sealer',
        qty: 1,
        gram: '1pc',
        brand: 'Vitrex',
        description: 'Capillary Clay Sealer',
        unitPrice: 345,
        buyQty: 0
    },
    {
        id: 76,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Yellow+Pipette+Tips',
        qty: 1,
        gram: '1pack',
        brand: 'Gilson',
        description: 'Yellow Pipette tips 1000\'s',
        unitPrice: 405,
        buyQty: 0
    },
    {
        id: 77,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Blue+Pipette+Tips',
        qty: 1,
        gram: '1pack',
        brand: 'Gilson',
        description: 'Blue Pipetle Tips 500\'s',
        unitPrice: 405,
        buyQty: 0
    },
    {
        id: 78,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=SGPT+Reagent',
        qty: 1,
        gram: '2pack',
        brand: 'SPINREACT',
        description: 'SGPT 8X50 ml',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 79,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Uric+Acid+Reagent',
        qty: 1,
        gram: '1pack',
        brand: 'SPINREACT',
        description: 'Uric Acid (Unicase reagent 8x50',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 80,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Creatinine+Kinetic',
        qty: 1,
        gram: '2pack',
        brand: 'SPINREACT',
        description: 'Creatinine Kinetic 4x120 mi',
        unitPrice: 3400,
        buyQty: 0
    },
    {
        id: 81,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Glucose+Trinder',
        qty: 1,
        gram: '3pack',
        brand: 'SPINREACT',
        description: 'Glucose Trinder 5x50ml',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 82,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Total+Cholesterol',
        qty: 1,
        gram: '1pack',
        brand: 'SPINREACT',
        description: 'Total Cholesterol 8x50 ml',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 83,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Triglycerides',
        qty: 1,
        gram: '2pack',
        brand: 'SPINREACT',
        description: 'Triglycerides 200ml',
        unitPrice: 3900,
        buyQty: 0
    },
    {
        id: 84,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=HDL+Cholesterol',
        qty: 1,
        gram: '2pack',
        brand: 'SPINREACT',
        description: 'HDL-Cholesterol 1x20m',
        unitPrice: 20000,
        buyQty: 0
    },
    {
        id: 85,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Sodium+Reagent',
        qty: 1,
        gram: '2pack',
        brand: 'FAME',
        description: 'Sodium Reagent',
        unitPrice: 2950,
        buyQty: 0
    },
    {
        id: 86,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Potassium+Reagent',
        qty: 1,
        gram: '2pack',
        brand: 'FAME',
        description: 'Potassium Reagent',
        unitPrice: 2950,
        buyQty: 0
    },
    {
        id: 87,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Hema+Control+Set',
        qty: 1,
        gram: '1set',
        brand: 'MINDRAY',
        description: 'Hema Control Set',
        unitPrice: 18000,
        buyQty: 0
    },
    {
        id: 88,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Normal+Blood+Chem+Control',
        qty: 1,
        gram: '1pack',
        brand: 'MINDRAY',
        description: 'Normal Blood Chem Control 10x5ml',
        unitPrice: 20000,
        buyQty: 0
    },
    {
        id: 89,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=White+Thoma+Pipet',
        qty: 1,
        gram: '2set',
        brand: 'Steriglass',
        description: 'White Thoma(WBC) Pipet with rubber',
        unitPrice: 390,
        buyQty: 0
    },
    // More Chemical Reagents - 2548 Cetrade
    {
        id: 90,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Lead+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'LabChem',
        description: 'lead(II) nitrate',
        unitPrice: 10500,
        buyQty: 0
    },
    {
        id: 91,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Silver+Nitrate',
        qty: 1,
        gram: '100ml',
        brand: 'Fujin',
        description: 'silver(I) nitrate solution',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 92,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Hydrochloric+Acid',
        qty: 1,
        gram: '500ml',
        brand: 'Aldon',
        description: 'Concentrated Hydrochloric Acid',
        unitPrice: 5900,
        buyQty: 0
    },
    {
        id: 93,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Red+Litmus+Paper',
        qty: 1,
        gram: '1box',
        brand: 'Litmus',
        description: 'Red litmus paper',
        unitPrice: 160,
        buyQty: 0
    },
    {
        id: 94,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Blue+Litmus+Paper',
        qty: 1,
        gram: '1box',
        brand: 'Litmus',
        description: 'Blue litmus paper',
        unitPrice: 160,
        buyQty: 0
    },
    {
        id: 95,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Potassium+Chromate',
        qty: 1,
        gram: '500g',
        brand: 'LabChem',
        description: 'Potassium chromate',
        unitPrice: 4900,
        buyQty: 0
    },
    {
        id: 96,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Sulfuric+Acid',
        qty: 1,
        gram: '1liter',
        brand: 'LabChem',
        description: 'Concentrated sulfuric acid (H₂SO₄)',
        unitPrice: 2990,
        buyQty: 0
    },
    {
        id: 97,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Ammonium+Hydroxide',
        qty: 1,
        gram: '2.5liter',
        brand: 'AR LAB',
        description: 'Ammonium hydroxide',
        unitPrice: 5900,
        buyQty: 0
    },
    {
        id: 98,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Nitric+Acid',
        qty: 1,
        gram: '500ml',
        brand: 'Bolinda',
        description: 'Concentrated nitric acid (HNO3)',
        unitPrice: 4990,
        buyQty: 0
    },
    {
        id: 99,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Bismuth+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'LabChem',
        description: 'Bismuth(III) nitrate',
        unitPrice: 4100,
        buyQty: 0
    },
    {
        id: 100,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Copper+Nitrate',
        qty: 1,
        gram: '1liter',
        brand: 'Bolinda',
        description: 'Copper(II) nitrate solution',
        unitPrice: 5900,
        buyQty: 0
    },
    {
        id: 101,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Cadmium+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'LabChem',
        description: 'Cadmium(II) nitrate',
        unitPrice: 9900,
        buyQty: 0
    },
    {
        id: 102,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Ferrous+Sulfide',
        qty: 1,
        gram: '500g',
        brand: 'LabChem',
        description: 'Ferrous sulfide',
        unitPrice: 1990,
        buyQty: 0
    },
    {
        id: 103,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Tin+Chloride',
        qty: 1,
        gram: '250g',
        brand: 'JVHengDa',
        description: 'Tin (II) choride',
        unitPrice: 4100,
        buyQty: 0
    },
    {
        id: 104,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Ethanol',
        qty: 1,
        gram: '2.5liter',
        brand: 'LabChem',
        description: 'Ethanol',
        unitPrice: 6500,
        buyQty: 0
    },
    {
        id: 105,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Ammonium+Acetate',
        qty: 1,
        gram: '500g',
        brand: 'HiMedia',
        description: 'Ammonium acetate',
        unitPrice: 3300,
        buyQty: 0
    },
    {
        id: 106,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Glacial+Acetic+Acid',
        qty: 1,
        gram: '2.5liter',
        brand: 'Macron',
        description: 'Glacial acetic acid, AR',
        unitPrice: 5500,
        buyQty: 0
    },
    {
        id: 107,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Potassium+Cyanide',
        qty: 1,
        gram: '100g',
        brand: 'Macklin',
        description: 'Potassium cyanide',
        unitPrice: 4100,
        buyQty: 0
    },
    {
        id: 108,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Arsenic+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'LabChem',
        description: 'Arsenic(III) nitrate',
        unitPrice: 3900,
        buyQty: 0
    },
    {
        id: 109,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Hydrogen+Peroxide',
        qty: 1,
        gram: '500ml',
        brand: 'JChem',
        description: '3% hydrogen peroxide',
        unitPrice: 180,
        buyQty: 0
    },
    {
        id: 110,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Silver+Nitrate+Powder',
        qty: 1,
        gram: '100g',
        brand: 'LabChem',
        description: 'Silver nitrate',
        unitPrice: 32000,
        buyQty: 0
    },
    {
        id: 111,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Oxalic+Acid',
        qty: 1,
        gram: '500g',
        brand: 'Queen\'s',
        description: 'Oxalic acid, AR',
        unitPrice: 250,
        buyQty: 0
    },
    {
        id: 112,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Sodium+Nitrite',
        qty: 1,
        gram: '500g',
        brand: 'Xiong',
        description: 'Sodium nitrite',
        unitPrice: 5900,
        buyQty: 0
    },
    {
        id: 113,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Rhodamine-B',
        qty: 1,
        gram: '100g',
        brand: 'Sigma Aldrich',
        description: 'Rhodamine-B reagent (tetraethylrhodamine)',
        unitPrice: 9500,
        buyQty: 0
    },
    {
        id: 114,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Iron+Wire',
        qty: 1,
        gram: '500cm',
        brand: 'N/A',
        description: 'Iron wire 500 cm',
        unitPrice: 5700,
        buyQty: 0
    },
    {
        id: 115,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Mercury+Chloride',
        qty: 1,
        gram: '100g',
        brand: 'Sigma Aldrich',
        description: 'Mercury(II) chloride',
        unitPrice: 14500,
        buyQty: 0
    },
    {
        id: 116,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Iron+Nitrate',
        qty: 1,
        gram: '500g',
        brand: 'Zhanyun',
        description: 'Iron(III) nitrate',
        unitPrice: 4900,
        buyQty: 0
    },
    {
        id: 117,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Aluminium+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'Sigma Aldrich',
        description: 'Aluminium(III) nitrate',
        unitPrice: 11200,
        buyQty: 0
    },
    {
        id: 118,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Ammonium+Sulfate',
        qty: 1,
        gram: '500g',
        brand: 'SCR',
        description: 'Ammonium sulfate',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 119,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Ammonium+Chloride',
        qty: 1,
        gram: '500g',
        brand: 'Kemrad',
        description: 'Ammonium chloride',
        unitPrice: 650,
        buyQty: 0
    },
    {
        id: 120,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Sodium+Peroxide',
        qty: 1,
        gram: '100g',
        brand: 'HiMedia',
        description: 'Sodium peroxide pellets',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 121,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Bromine+Water',
        qty: 1,
        gram: '100ml',
        brand: 'LabChem',
        description: 'Bromine water',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 122,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Potassium+Hexacyanoferrate',
        qty: 1,
        gram: '500g',
        brand: 'Scharlau',
        description: 'Potassium hexacyanoferrate',
        unitPrice: 7500,
        buyQty: 0
    },
    {
        id: 123,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Sulfurous+Acid',
        qty: 1,
        gram: '100ml',
        brand: 'Scharlau',
        description: 'Sulfurous acid',
        unitPrice: 10500,
        buyQty: 0
    },
    {
        id: 124,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Sodium+Bismuthate',
        qty: 1,
        gram: '500g',
        brand: 'HiMedia',
        description: 'Sodium bismuthate',
        unitPrice: 9500,
        buyQty: 0
    },
    {
        id: 125,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Lead+Acetate',
        qty: 1,
        gram: '500g',
        brand: 'LabChem',
        description: 'Lead acetate',
        unitPrice: 3200,
        buyQty: 0
    },
    {
        id: 126,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Aluminon+Reagent',
        qty: 1,
        gram: '25g',
        brand: 'Scharlau',
        description: 'Aluminon (tri-ammonium arurine- tricarboxylate) reagent 50 g',
        unitPrice: 14500,
        buyQty: 0
    },
    {
        id: 127,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Cobalt+Nitrate+Powder',
        qty: 1,
        gram: '100g',
        brand: 'Chem',
        description: 'Cobalt(II) nitrate powder',
        unitPrice: 9500,
        buyQty: 0
    },
    {
        id: 128,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Nickel+Nitrate+Powder',
        qty: 1,
        gram: '500g',
        brand: 'Bendosen',
        description: 'Nickel(II) nitrate powder',
        unitPrice: 4900,
        buyQty: 0
    },
    {
        id: 129,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Dimethylglyoxime',
        qty: 1,
        gram: '100g',
        brand: 'Merck',
        description: 'Dimethylglyoxime reagent',
        unitPrice: 190,
        buyQty: 0
    },
    {
        id: 130,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Ammonium+Thiocyanate',
        qty: 1,
        gram: '500g',
        brand: 'Scharlau',
        description: 'Ammonium thiocyanate',
        unitPrice: 290,
        buyQty: 0
    },
    {
        id: 131,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Lead+Acetate+Paper',
        qty: 1,
        gram: '20pcs',
        brand: 'Newstar',
        description: 'Lead acetate paper',
        unitPrice: 150,
        buyQty: 0
    },
    {
        id: 132,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Cobalt+Acetate',
        qty: 1,
        gram: '100g',
        brand: 'Hawn',
        description: 'Cobalt acetate',
        unitPrice: 3900,
        buyQty: 0
    },
    {
        id: 133,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Calcium+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'Merck',
        description: 'Calcium(II) nitrate, AR',
        unitPrice: 6700,
        buyQty: 0
    },
    {
        id: 134,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Strontium+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'Merck',
        description: 'Strontium(II) nitrate',
        unitPrice: 8900,
        buyQty: 0
    },
    {
        id: 135,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Barium+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'Merck',
        description: 'Barium(II) nitrate',
        unitPrice: 15900,
        buyQty: 0
    },
    {
        id: 136,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Ammonium+Carbonate',
        qty: 1,
        gram: '500g',
        brand: 'Damad',
        description: 'Ammonium carbonate',
        unitPrice: 2850,
        buyQty: 0
    },
    {
        id: 137,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Sodium+Hydroxide',
        qty: 1,
        gram: '500g',
        brand: 'HiMedia',
        description: 'Sodium hydroxide pellets',
        unitPrice: 2780,
        buyQty: 0
    },
    {
        id: 138,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Sodium+Carbonate',
        qty: 1,
        gram: '500g',
        brand: 'HiMedia',
        description: 'Sodium carbonate',
        unitPrice: 2800,
        buyQty: 0
    },
    {
        id: 139,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Ammonium+Sulfate+HiMedia',
        qty: 1,
        gram: '500g',
        brand: 'Loba Chemie',
        description: 'Ammonium sulfate',
        unitPrice: 3950,
        buyQty: 0
    },
    {
        id: 140,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Sodium+Thiosulfate',
        qty: 1,
        gram: '100g',
        brand: 'Dalkem',
        description: 'Sodium thiosulfate',
        unitPrice: 350,
        buyQty: 0
    },
    {
        id: 141,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Ammonium+Oxalate',
        qty: 1,
        gram: '500g',
        brand: 'Damao',
        description: 'Ammonium oxalate',
        unitPrice: 2000,
        buyQty: 0
    },
    {
        id: 142,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Sodium+Nitrate',
        qty: 1,
        gram: '500g',
        brand: 'Bendosen',
        description: 'Sodium(I) nitrate',
        unitPrice: 1900,
        buyQty: 0
    },
    {
        id: 143,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Potassium+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'Merck',
        description: 'Potassium(I) nitrate',
        unitPrice: 10500,
        buyQty: 0
    },
    {
        id: 144,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Ammonium+Nitrate',
        qty: 1,
        gram: '100g',
        brand: 'Loba Chemie',
        description: 'Ammonium nitrate',
        unitPrice: 4500,
        buyQty: 0
    },
    {
        id: 145,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=8-Hydroxyquinoline',
        qty: 1,
        gram: '50g',
        brand: 'Merck',
        description: '8-hHdroxyquinoline',
        unitPrice: 11500,
        buyQty: 0
    },
    {
        id: 146,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Sodium+Hexanitritocobaltate',
        qty: 1,
        gram: '50g',
        brand: 'Sigma Aldrich',
        description: 'Sodium hexanitritocobaltate(III)',
        unitPrice: 14100,
        buyQty: 0
    },
    {
        id: 147,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Microscope+Slides+Set',
        qty: 1,
        gram: '1set',
        brand: 'N/A',
        description: '100 Microscope Slides with Specimens Set, Lab-Grade Prepared Microscope Slides for Animal/Plant/Microbe/Tissue/ Cells, STEM Biology Kit',
        unitPrice: 15500,
        buyQty: 0
    },
    {
        id: 148,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Spot+Plate',
        qty: 1,
        gram: '1pc',
        brand: 'Staila',
        description: 'Spot plate, 12 holes',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 149,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Inoculating+Loop',
        qty: 1,
        gram: '1pc',
        brand: 'N/A',
        description: 'Inoculating loop, metal(nichrome wire)',
        unitPrice: 150,
        buyQty: 0
    },
    {
        id: 150,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Graduated+Glass+Dropper',
        qty: 1,
        gram: '1pc',
        brand: 'Chuan',
        description: 'Graduated glass dropper, 10 ml',
        unitPrice: 140,
        buyQty: 0
    },
    {
        id: 151,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Cotton+Wick',
        qty: 1,
        gram: '1pc',
        brand: 'N/A',
        description: 'Rope Cotton Wick for alcohol lamp, 3 mm x 10 m',
        unitPrice: 370,
        buyQty: 0
    },
    {
        id: 152,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Benadryl',
        qty: 1,
        gram: '1bot',
        brand: 'Benadryl',
        description: 'Diphenyhramine HCl (Benadryl)',
        unitPrice: 550,
        buyQty: 0
    },
    {
        id: 153,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Lithium+Chloride+2548',
        qty: 1,
        gram: '25g',
        brand: 'Macklin',
        description: 'Lithium chloride',
        unitPrice: 2800,
        buyQty: 0
    },
    {
        id: 154,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Copper+Sulfate',
        qty: 1,
        gram: '500g',
        brand: 'Dalkem',
        description: 'Copper sulfate',
        unitPrice: 1400,
        buyQty: 0
    },
    {
        id: 155,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Hydrogen+Peroxide+35',
        qty: 1,
        gram: '500ml',
        brand: 'PURE',
        description: 'Hydrogen peroxide (35%)',
        unitPrice: 2900,
        buyQty: 0
    },
    {
        id: 156,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Fehling+Reagent',
        qty: 1,
        gram: '500ml',
        brand: 'Labcoms',
        description: 'Fehling\'s reagent',
        unitPrice: 5500,
        buyQty: 0
    },
    {
        id: 157,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Benedict+Reagent+2548',
        qty: 1,
        gram: '500ml',
        brand: 'Medic',
        description: 'Benedict\'s reagent',
        unitPrice: 880,
        buyQty: 0
    },
    {
        id: 158,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Molisch+Reagent',
        qty: 1,
        gram: '100ml',
        brand: 'Scientific Phygene',
        description: 'Molisch reagent',
        unitPrice: 3000,
        buyQty: 0
    },
    {
        id: 159,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Millon+Reagent',
        qty: 1,
        gram: '100ml',
        brand: 'LabChem',
        description: 'Millon reagent',
        unitPrice: 5400,
        buyQty: 0
    },
    {
        id: 160,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Lactose+FG',
        qty: 1,
        gram: '250g',
        brand: 'Dalkem',
        description: 'Lactose, FG',
        unitPrice: 500,
        buyQty: 0
    },
    {
        id: 161,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Litmus+Paper+Set',
        qty: 1,
        gram: '1set',
        brand: 'Litmus',
        description: 'Litmus paper (red and blue)',
        unitPrice: 300,
        buyQty: 0
    },
    {
        id: 162,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=PH+Paper',
        qty: 1,
        gram: '1unit',
        brand: 'Strips',
        description: 'PH paper box 100\'s',
        unitPrice: 250,
        buyQty: 0
    },
    // Lab Equipment - 2550 Cetrade
    {
        id: 163,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Hair+Net',
        qty: 1,
        gram: '1pack',
        brand: 'N/A',
        description: 'Disposable Hair net 100\'s (blue color)',
        unitPrice: 150,
        buyQty: 0
    },
    {
        id: 164,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Nitrile+Gloves',
        qty: 1,
        gram: '1box',
        brand: 'Indoplas',
        description: 'Nitrile disposable gloves 100\'s',
        unitPrice: 190,
        buyQty: 0
    },
    {
        id: 165,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Plastic+Tray',
        qty: 1,
        gram: '1pc',
        brand: 'N/A',
        description: 'Perforated plastic tray 600*400*120mm',
        unitPrice: 210,
        buyQty: 0
    },
    {
        id: 166,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Waxed+Paper',
        qty: 1,
        gram: '1pc',
        brand: 'AE Cart',
        description: 'Waxed paper 20x30/ sheet 100\'s',
        unitPrice: 2,
        buyQty: 0
    },
    {
        id: 167,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Distilled+Water',
        qty: 1,
        gram: '1gal',
        brand: 'Fame',
        description: 'Distilled Water, 4L per gallon, Analytical',
        unitPrice: 1300,
        buyQty: 0
    },
    {
        id: 168,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Aluminum+Foil',
        qty: 1,
        gram: '1roll',
        brand: 'Savers',
        description: 'Roll Aluminum Foil Size: 12in x 300m',
        unitPrice: 400,
        buyQty: 0
    },
    {
        id: 169,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Filter+Paper',
        qty: 1,
        gram: '1pack',
        brand: 'Filter paper',
        description: 'Filter Paper (90mm), 100\'s',
        unitPrice: 850,
        buyQty: 0
    },
    {
        id: 170,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Cotton+Roll',
        qty: 1,
        gram: '1roll',
        brand: 'Indoplas',
        description: 'Cotton roll 400grm/roll',
        unitPrice: 190,
        buyQty: 0
    },
    {
        id: 171,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Scalpel',
        qty: 1,
        gram: '1pc',
        brand: 'Bolinda',
        description: 'Scalpel, Handle with blade',
        unitPrice: 180,
        buyQty: 0
    },
    {
        id: 172,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Wire+Loop',
        qty: 1,
        gram: '1pack',
        brand: 'Officom',
        description: 'Wire looр* Double 7.9mm 60\'s',
        unitPrice: 300,
        buyQty: 0
    },
    {
        id: 173,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Biology+Slides',
        qty: 1,
        gram: '1set',
        brand: 'ScienceLife',
        description: 'Prepared Glass Slides Microscope Biology Specimen 25\'s',
        unitPrice: 1100,
        buyQty: 0
    },
    {
        id: 174,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Insect+Slides',
        qty: 1,
        gram: '1set',
        brand: 'ScienceLife',
        description: 'Prepared Glass Slides Insect Anatomy 25\'s',
        unitPrice: 1100,
        buyQty: 0
    },
    {
        id: 175,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Animal+Cell+Slides',
        qty: 1,
        gram: '1set',
        brand: 'ScienceLife',
        description: 'Prepared Glass Slides of Basic Animal Cell 25\'s',
        unitPrice: 1500,
        buyQty: 0
    },
    {
        id: 176,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Chef+Knife',
        qty: 1,
        gram: '1pc',
        brand: 'JVHengDa',
        description: 'Knives 8"chef knife (Stainless)',
        unitPrice: 780,
        buyQty: 0
    },
    {
        id: 177,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=Plastic+Gloves',
        qty: 1,
        gram: '1box',
        brand: 'TPE',
        description: 'Plastic Gloves Disposable Latex Free Food Prep Gloves, 100-Pack',
        unitPrice: 95,
        buyQty: 0
    },
    // Patmo Spharma - 2551
    {
        id: 178,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Hydrochloric+Acid+33',
        qty: 1,
        gram: '250ml',
        brand: 'PUREChem',
        description: 'Hydrochloric acid 33%',
        unitPrice: 1100,
        buyQty: 0
    },
    {
        id: 179,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Sulfuric+Acid+96',
        qty: 1,
        gram: '1gallon',
        brand: 'PUREChem',
        description: 'Sulfuric Acid 96%-98%',
        unitPrice: 1500,
        buyQty: 0
    },
    {
        id: 180,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Nitric+Acid+68',
        qty: 1,
        gram: '4liters',
        brand: 'PUREChem',
        description: 'Nitric Acid 68%',
        unitPrice: 4900,
        buyQty: 0
    },
    {
        id: 181,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Acetic+Acid+Glacial',
        qty: 1,
        gram: '1liter',
        brand: 'LabChem',
        description: 'Acetic Acid Glacial 99.5%',
        unitPrice: 750,
        buyQty: 0
    },
    {
        id: 182,
        image: 'https://via.placeholder.com/300x250/fd7e14/ffffff?text=Sodium+Hydroxide+2551',
        qty: 1,
        gram: '100g',
        brand: 'Dalkem',
        description: 'Sodim Hydroxide',
        unitPrice: 750,
        buyQty: 0
    },
    {
        id: 183,
        image: 'https://via.placeholder.com/300x250/20c997/ffffff?text=Ammonium+Hydroxide+2551',
        qty: 1,
        gram: '2.5liters',
        brand: 'AR/AS',
        description: 'Ammonium Hydroxide',
        unitPrice: 4900,
        buyQty: 0
    },
    {
        id: 184,
        image: 'https://via.placeholder.com/300x250/6c757d/ffffff?text=Sodium+Chloride+Analytical',
        qty: 1,
        gram: '500g',
        brand: 'HiMedia',
        description: 'Sodium Chloride, Analytical Grade',
        unitPrice: 2500,
        buyQty: 0
    },
    {
        id: 185,
        image: 'https://via.placeholder.com/300x250/0dcaf0/ffffff?text=Copper+Sulfate+Pentahydrate',
        qty: 1,
        gram: '500g',
        brand: 'Kemrad',
        description: 'Copper sulfate pentahydrate',
        unitPrice: 780,
        buyQty: 0
    },
    {
        id: 186,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Calcium+Chloride+Flakes',
        qty: 1,
        gram: '500g',
        brand: 'Dalkem',
        description: 'Calcium Chloride flakes',
        unitPrice: 450,
        buyQty: 0
    },
    {
        id: 187,
        image: 'https://via.placeholder.com/300x250/198754/ffffff?text=Phenolphthalein+Solution',
        qty: 1,
        gram: '500ml',
        brand: 'PUREChem',
        description: 'Phenolphthalein solution 1%',
        unitPrice: 1500,
        buyQty: 0
    },
    {
        id: 188,
        image: 'https://via.placeholder.com/300x250/6610f2/ffffff?text=Universal+Indicator',
        qty: 1,
        gram: '500ml',
        brand: 'PC Lab Reagent',
        description: 'Universal Indicator',
        unitPrice: 1200,
        buyQty: 0
    },
    {
        id: 189,
        image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Iodine+Solution',
        qty: 1,
        gram: '100ml',
        brand: 'Puhuifen',
        description: 'Iodine Solution',
        unitPrice: 1200,
        buyQty: 0
    },
    // Medical Test Kits - 2552 Patmo
    {
        id: 190,
        image: 'https://via.placeholder.com/300x250/28a745/ffffff?text=SARS+COV+2+Test',
        qty: 1,
        gram: '200kit',
        brand: 'Indoplas',
        description: 'SARS COV 2 Rapid Antigen Test combo w/ Influena A and B/ Idenovirus/ RSV (6IN1)',
        unitPrice: 450,
        buyQty: 0
    },
    {
        id: 191,
        image: 'https://via.placeholder.com/300x250/ffc107/000000?text=Dengue+Duo+Test',
        qty: 1,
        gram: '950kit',
        brand: 'SD BIOSENSOR',
        description: 'Dengue Duo ( NS1, IgM & IgG) 10\'s',
        unitPrice: 4900,
        buyQty: 0
    },
    {
        id: 192,
        image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Syphilis+Test',
        qty: 1,
        gram: '1200kit',
        brand: 'Rapiquick',
        description: 'Syphilis Treponema Pallidum 50\'s',
        unitPrice: 2700,
        buyQty: 0
    },
    {
        id: 193,
        image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Hepatitis+B+Vaccine',
        qty: 1,
        gram: '1100vials',
        brand: 'Bevac',
        description: 'Hepatitis B recombinant 10mcg/0.5',
        unitPrice: 750,
        buyQty: 0
    },
    {
        id: 194,
        image: 'https://via.placeholder.com/300x250/e83e8c/ffffff?text=Calibration+Kit',
        qty: 1,
        gram: '3box',
        brand: 'Balance Measurement',
        description: 'Calibration Kit 1',
        unitPrice: 2900,
        buyQty: 0
    }
];

// Function to create a simple product display card (catalog view)
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card catalog-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.description}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="placeholder-image" style="display: none;">
                <i class="fas fa-image"></i>
            </div>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-description">${product.description}</div>
            
            <div class="product-details">
                <div class="detail-item">
                    <span class="detail-label">Available Qty:</span>
                    <span class="detail-value">${product.qty}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Weight:</span>
                    <span class="detail-value">${product.gram}</span>
                </div>
            </div>
            
            <div class="unit-price">
                ₱${product.unitPrice.toFixed(2)} per unit
            </div>
        </div>
    `;
    
    return card;
}

// Function to create a product card with buying controls (shopping view)
function createShoppingProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card shopping-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.description}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="placeholder-image" style="display: none;">
                <i class="fas fa-image"></i>
            </div>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-description">${product.description}</div>
            
            <div class="product-details">
                <div class="detail-item">
                    <span class="detail-label">Available Qty:</span>
                    <span class="detail-value">${product.qty}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Weight:</span>
                    <span class="detail-value">${product.gram}</span>
                </div>
            </div>
            
            <div class="unit-price">
                ₱${product.unitPrice.toFixed(2)} per unit
            </div>
            
            <div class="quantity-section">
                <span class="quantity-label">Buy Quantity:</span>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)" id="decrease-${product.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" id="qty-${product.id}" value="${product.buyQty}" min="0" max="${product.qty}" onchange="updateQuantityFromInput(${product.id})">
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)" id="increase-${product.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            
            <div class="total-price" id="total-${product.id}">
                Total: ₱${(product.buyQty * product.unitPrice).toFixed(2)}
            </div>
        </div>
    `;
    
    return card;
}

// Function to update quantity
function updateQuantity(productId, change) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const newQty = Math.max(0, Math.min(product.qty, product.buyQty + change));
    product.buyQty = newQty;
    
    // Update the input field
    const qtyInput = document.getElementById(`qty-${productId}`);
    if (qtyInput) {
        qtyInput.value = newQty;
    }
    
    // Update the total price
    updateTotalPrice(productId);
    
    // Update button states
    updateButtonStates(productId);
    
    // Update cart if it's currently visible
    const cartTab = document.getElementById('cart-tab');
    if (cartTab && cartTab.classList.contains('active')) {
        renderCart();
    }
}

// Function to update quantity from input field
function updateQuantityFromInput(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    
    if (!product || !qtyInput) return;
    
    let newQty = parseInt(qtyInput.value) || 0;
    newQty = Math.max(0, Math.min(product.qty, newQty));
    
    product.buyQty = newQty;
    qtyInput.value = newQty;
    
    updateTotalPrice(productId);
    updateButtonStates(productId);
    
    // Update cart if it's currently visible
    const cartTab = document.getElementById('cart-tab');
    if (cartTab && cartTab.classList.contains('active')) {
        renderCart();
    }
}

// Function to update total price
function updateTotalPrice(productId) {
    const product = products.find(p => p.id === productId);
    const totalElement = document.getElementById(`total-${productId}`);
    
    if (product && totalElement) {
        const total = product.buyQty * product.unitPrice;
        totalElement.textContent = `Total: ₱${total.toFixed(2)}`;
    }
}

// Function to update button states
function updateButtonStates(productId) {
    const product = products.find(p => p.id === productId);
    const decreaseBtn = document.getElementById(`decrease-${productId}`);
    const increaseBtn = document.getElementById(`increase-${productId}`);
    
    if (product && decreaseBtn && increaseBtn) {
        decreaseBtn.disabled = product.buyQty <= 0;
        increaseBtn.disabled = product.buyQty >= product.qty;
    }
}

let currentSearchQuery = '';
let currentFilters = {
    brand: '',
    weight: '',
    priceRange: ''
};

// Function to populate filter options
function populateFilterOptions() {
    // Get unique brands
    const brands = [...new Set(products.map(p => p.brand))].sort();
    const brandFilter = document.getElementById('brandFilter');
    if (brandFilter) {
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
    }

    // Get unique weights
    const weights = [...new Set(products.map(p => p.gram))].sort((a, b) => {
        // Sort by numeric value if possible
        const aNum = parseFloat(a);
        const bNum = parseFloat(b);
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return aNum - bNum;
        }
        return a.localeCompare(b);
    });
    const weightFilter = document.getElementById('weightFilter');
    if (weightFilter) {
        weights.forEach(weight => {
            const option = document.createElement('option');
            option.value = weight;
            option.textContent = weight;
            weightFilter.appendChild(option);
        });
    }
}

// Function to apply filters
function applyFilters() {
    const catalogGrid = document.getElementById('catalogGrid');
    
    if (!catalogGrid) {
        console.error('Catalog grid element not found');
        return;
    }
    
    // Clear existing content
    catalogGrid.innerHTML = '';
    
    // Add loading state
    catalogGrid.innerHTML = '<div class="loading">Loading products...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        catalogGrid.innerHTML = '';
        
        let filtered = products;
        
        // Apply search filter
        const query = currentSearchQuery.trim().toLowerCase();
        if (query) {
            filtered = filtered.filter(p => {
                const text = `${p.brand} ${p.description} ${p.gram}`.toLowerCase();
                return text.includes(query);
            });
        }
        
        // Apply brand filter
        if (currentFilters.brand) {
            filtered = filtered.filter(p => p.brand === currentFilters.brand);
        }
        
        // Apply weight filter
        if (currentFilters.weight) {
            filtered = filtered.filter(p => p.gram === currentFilters.weight);
        }
        
        // Apply price range filter
        if (currentFilters.priceRange) {
            filtered = filtered.filter(p => {
                const price = p.unitPrice;
                switch (currentFilters.priceRange) {
                    case '0-500':
                        return price < 500;
                    case '500-1000':
                        return price >= 500 && price < 1000;
                    case '1000-2000':
                        return price >= 1000 && price < 2000;
                    case '2000-5000':
                        return price >= 2000 && price < 5000;
                    case '5000+':
                        return price >= 5000;
                    default:
                        return true;
                }
            });
        }

        if (filtered.length === 0) {
            catalogGrid.innerHTML = '<div class="loading">No products match your filters</div>';
            return;
        }

        filtered.forEach(product => {
            const card = createProductCard(product);
            catalogGrid.appendChild(card);
        });
    }, 500);
}

// Function to render all products (catalog view - simple display)
function renderProducts() {
    applyFilters();
}

// Function to clear all filters
function clearFilters() {
    currentFilters = {
        brand: '',
        weight: '',
        priceRange: ''
    };
    
    // Reset filter controls
    const brandFilter = document.getElementById('brandFilter');
    const weightFilter = document.getElementById('weightFilter');
    const priceRange = document.getElementById('priceRange');
    
    if (brandFilter) brandFilter.value = '';
    if (weightFilter) weightFilter.value = '';
    if (priceRange) priceRange.value = '';
    
    // Re-render products
    applyFilters();
}

// Function to render shopping products (with buying controls)
function renderShoppingProducts() {
    const shoppingGrid = document.getElementById('shoppingGrid');
    
    if (!shoppingGrid) {
        console.error('Shopping grid element not found');
        return;
    }
    
    // Clear existing content
    shoppingGrid.innerHTML = '';
    
    // Add loading state
    shoppingGrid.innerHTML = '<div class="loading">Loading products...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        shoppingGrid.innerHTML = '';
        
        const query = currentSearchQuery.trim().toLowerCase();
        const filtered = query ? products.filter(p => {
            const text = `${p.brand} ${p.description} ${p.gram}`.toLowerCase();
            return text.includes(query);
        }) : products;

        if (filtered.length === 0) {
            shoppingGrid.innerHTML = '<div class="loading">No matching products</div>';
            return;
        }

        filtered.forEach(product => {
            const card = createShoppingProductCard(product);
            shoppingGrid.appendChild(card);
            updateButtonStates(product.id);
        });
    }, 500);
}

// Function to get cart summary
function getCartSummary() {
    const cartItems = products.filter(p => p.buyQty > 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.buyQty, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.buyQty * item.unitPrice), 0);
    
    return {
        items: cartItems,
        totalItems,
        totalAmount
    };
}

// Helper: build a CORS proxy URL (images.weserv.nl) for remote images that block CORS
function toCorsProxyUrl(url) {
    try {
        const u = new URL(url);
        const noProtocol = `${u.host}${u.pathname}${u.search}`;
        // Force png output to ensure jsPDF compatibility
        return `https://images.weserv.nl/?url=${encodeURIComponent(noProtocol)}&output=png&w=256&h=256&fit=inside&we=1`;
    } catch (e) {
        return null;
    }
}

// Helper: fetch as DataURL
async function fetchAsDataUrl(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
        const response = await fetch(url, { mode: 'cors', signal: controller.signal });
        if (!response.ok) return null;
        const blob = await response.blob();
        return await new Promise(resolve => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        return null;
    } finally {
        clearTimeout(timeout);
    }
}

// Helper: load remote image as data URL with CORS fallback
async function loadImageAsDataUrl(imageUrl) {
    // If already data URL, return directly
    if (typeof imageUrl === 'string' && imageUrl.startsWith('data:image/')) {
        return imageUrl;
    }
    // Try direct fetch first
    let dataUrl = await fetchAsDataUrl(imageUrl);
    if (dataUrl) return dataUrl;
    // Fallback via CORS proxy
    const proxied = toCorsProxyUrl(imageUrl);
    if (proxied) {
        dataUrl = await fetchAsDataUrl(proxied);
        if (dataUrl) return dataUrl;
    }
    return null;
}

// Generate a Quotation PDF using jsPDF + autoTable (now async to embed images)
async function generateQuotationPDF(details, summary) {
    // Support both UMD and legacy globals
    const jsPDFCtor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!jsPDFCtor) {
        alert('PDF generator not loaded. Please check your internet connection.');
        return null;
    }

    const doc = new jsPDFCtor();

    const companyName = 'LanRoss Consumer Goods Trading';
    const companyAddress = '083 Sitio Lubigan Plaza Aldea, Tanay Rizal / Victoria Sports Tower';
    const companyContact = '09175179996';
    const companyEmail = 'lanrossconsumergoodstrading@gmail.com';

    // Add background color for header (#2A7AAF)
    doc.setFillColor(42, 122, 175);
    doc.rect(0, 0, 210, 35, 'F');

    // Company name in header (white text)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(companyName, 14, 16);

    // Company details in header (white text)
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(companyAddress, 14, 22);
    doc.text(`Contact: ${companyContact} | Email: ${companyEmail}`, 14, 27);

    // Reset text color for rest of document
    doc.setTextColor(0, 0, 0);

    // Add decorative line (#2A7AAF)
    doc.setDrawColor(42, 122, 175);
    doc.setLineWidth(2);
    doc.line(14, 40, 196, 40);

    // Title section
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('QUOTATION REQUEST', 14, 50);

    // Customer details box (#E2EFF8)
    doc.setFillColor(226, 239, 248);
    doc.rect(14, 55, 182, 30, 'F');
    doc.setDrawColor(42, 122, 175);
    doc.rect(14, 55, 182, 30, 'S');

    // Customer details
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Customer Information:', 18, 62);
    doc.setFont('helvetica', 'normal');
    
    const customerDetails = [
        `PI No.: ${details.piNo}`,
        `Issuing Date: ${details.issuingDate}`,
        `Term of Payment: ${details.termOfPayment}`,
        `Delivery Place: ${details.deliveryPlace}`
    ];
    
    customerDetails.forEach((line, idx) => {
        doc.text(line, 18, 68 + idx * 4);
    });

    // Preload images for items (best-effort)
    const imageDataUrls = await Promise.all(
        summary.items.map(item => loadImageAsDataUrl(item.image))
    );

    // Currency helper for PDF (avoid Unicode peso sign to prevent glyph issues)
    const formatPdfCurrency = (amount) => `PHP ${Number(amount).toFixed(2)}`;

    // Items table with enhanced styling
    const tableBody = summary.items.map((item, idx) => [
        String(idx + 1),
        '', // image placeholder, drawn via didDrawCell
        `${item.brand}`,
        `${item.description}`,
        `${item.gram}`,
        String(item.buyQty),
        formatPdfCurrency(item.unitPrice),
        formatPdfCurrency(item.buyQty * item.unitPrice)
    ]);

    if (doc.autoTable) {
        doc.autoTable({
            startY: 95,
            head: [["#", "Img", "Brand", "Description", "Size", "Qty", "Unit Price", "Total"]],
            body: tableBody,
            tableWidth: 'auto',
            margin: { left: 14, right: 14 },
            styles: { 
                fontSize: 8, 
                minCellHeight: 20,
                cellPadding: 3,
                lineColor: [220, 220, 220],
                lineWidth: 0.5,
                font: 'helvetica',
                overflow: 'linebreak',
                halign: 'left'
            },
            headStyles: { 
                fillColor: [42, 122, 175],
                textColor: [255, 255, 255],
                fontStyle: 'bold',
                halign: 'center',
                font: 'helvetica',
                fontSize: 8,
                cellPadding: 3
            },
            alternateRowStyles: {
                fillColor: [226, 239, 248]
            },
            columnStyles: {
                0: { cellWidth: 8, halign: 'center', font: 'helvetica' }, // #
                1: { cellWidth: 12, halign: 'center', font: 'helvetica' }, // Img
                2: { cellWidth: 25, fontStyle: 'bold', font: 'helvetica' }, // Brand
                3: { cellWidth: 60, font: 'helvetica' }, // Description
                4: { cellWidth: 15, halign: 'center', font: 'helvetica' }, // Size
                5: { cellWidth: 12, halign: 'center', font: 'helvetica' }, // Qty
                6: { cellWidth: 22, halign: 'right', font: 'helvetica' }, // Unit Price
                7: { cellWidth: 22, halign: 'right', fontStyle: 'bold', font: 'helvetica' } // Total
            },
            didDrawCell: (data) => {
                const { column, row, cell, section } = data;
                if (section === 'body' && column.index === 1) {
                    const imgDataUrl = imageDataUrls[row.index];
                    if (imgDataUrl) {
                        const padding = 2;
                        const imgHeight = cell.height - padding * 2;
                        const imgWidth = imgHeight; // square thumbnail
                        try {
                            doc.addImage(
                                imgDataUrl,
                                imgDataUrl.startsWith('data:image/png') ? 'PNG' : 'JPEG',
                                cell.x + padding,
                                cell.y + padding,
                                imgWidth,
                                imgHeight
                            );
                        } catch (e) {
                            // Draw placeholder if image fails (#E2EFF8)
                            doc.setFillColor(226, 239, 248);
                            doc.rect(cell.x + padding, cell.y + padding, imgWidth, imgHeight, 'F');
                            doc.setFontSize(7);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(42, 122, 175);
                            doc.text('IMG', cell.x + padding + 2, cell.y + padding + 8);
                        }
                    } else {
                        // Draw placeholder box (#E2EFF8)
                        doc.setFillColor(226, 239, 248);
                        doc.rect(cell.x + 2, cell.y + 2, cell.height - 4, cell.height - 4, 'F');
                        doc.setFontSize(7);
                        doc.setFont('helvetica', 'normal');
                        doc.setTextColor(42, 122, 175);
                        doc.text('IMG', cell.x + 4, cell.y + 8);
                    }
                }
            }
        });
    }

    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY : 95;
    
    // Summary section (#EBE68D)
    doc.setFillColor(235, 230, 141);
    doc.rect(14, finalY + 10, 182, 25, 'F');
    
    // Summary text (black)
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`Total Items: ${summary.totalItems}`, 18, finalY + 20);
    doc.text(`Grand Total: ${formatPdfCurrency(summary.totalAmount)}`, 18, finalY + 28);
    
    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for your business!', 14, pageHeight - 20);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, pageHeight - 15);
    doc.text('For inquiries, contact us at: ' + companyEmail, 14, pageHeight - 10);

    const filename = `Quotation-${details.piNo}.pdf`;
    doc.save(filename);
    return filename;
}

// Function to display cart summary (you can call this when needed)
function displayCartSummary() {
    const summary = getCartSummary();
    console.log('Cart Summary:', summary);
    
    if (summary.totalItems > 0) {
        alert(`Cart Summary:\nItems: ${summary.totalItems}\nTotal: ₱${summary.totalAmount.toFixed(2)}`);
    } else {
        alert('Your cart is empty');
    }
}

// Function to send quotation request via email
async function sendQuotationRequest() {
    const summary = getCartSummary();
    if (summary.totalItems === 0) {
        alert('Your cart is empty');
        return;
    }
    
    const formValues = await showQuotationForm();
    if (!formValues) return; // cancelled
    const { piNo, issuingDate, termOfPayment, deliveryPlace } = formValues;
    
    // Company details
    const companyName = 'LanRoss Consumer Goods Trading';
    const companyAddress = 'Victoria Sports Tower';
    const companyContact = '09175179996';
    const companyEmail = 'anrossconsumergoodstrading@gmail.com';
    
    // Build email subject and body
    const subject = `QUOTATION REQUEST - PI No. ${piNo}`;
    
    const itemLines = summary.items.map((item, idx) => {
        return `${idx + 1}. ${item.brand} - ${item.description} (${item.gram})\n   Qty: ${item.buyQty} @ ₱${item.unitPrice.toFixed(2)} = ₱${(item.buyQty * item.unitPrice).toFixed(2)}`;
    }).join('\n');
    
    // Generate PDF first so user can attach it in email (includes item images)
    const generatedFilename = await generateQuotationPDF({ piNo, issuingDate, termOfPayment, deliveryPlace }, summary);

    const body = [
        'QUOTATION REQUEST',
        '',
        `PI No.: ${piNo}`,
        `Issuing Date: ${issuingDate}`,
        `Term of Payment: ${termOfPayment}`,
        `Delivery Place: ${deliveryPlace}`,
        '',
        'Company Details:',
        `Company: ${companyName}`,
        `Address: ${companyAddress}`,
        `Contact: ${companyContact}`,
        `Email: ${companyEmail}`,
        '',
        'Requested Items (see attached PDF):',
        itemLines,
        '',
        `Total Items: ${summary.totalItems}`,
        `Grand Total: ₱${summary.totalAmount.toFixed(2)}`,
        '',
        'Please confirm price, availability, and lead time. Thank you.',
        '',
        generatedFilename ? `(Attached: ${generatedFilename})` : ''
    ].join('\n');
    
    const mailto = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Prefer Gmail compose in a new tab; fall back to mailto if blocked or unavailable
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const popup = window.open(gmailUrl, '_blank');
    if (!popup) {
        window.location.href = mailto;
    }
}

// Creates and shows a modal form to collect quotation details
function showQuotationForm() {
    return new Promise(resolve => {
        // Overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        // Modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <h3 class="modal-title"><i class="fas fa-file-invoice"></i> Quotation Details</h3>
            <div class="modal-grid">
                <label class="modal-field">
                    <span>PI No.</span>
                    <input type="text" id="piNoInput" placeholder="PI-" value="PI-" />
                </label>
                <label class="modal-field">
                    <span>Issuing Date</span>
                    <input type="date" id="issuingDateInput" value="${new Date().toISOString().slice(0, 10)}" />
                </label>
                <label class="modal-field">
                    <span>Term of Payment</span>
                    <input type="text" id="termPaymentInput" placeholder="COD/NET 30" value="COD/NET 30" />
                </label>
                <label class="modal-field">
                    <span>Delivery Place</span>
                    <input type="text" id="deliveryPlaceInput" placeholder="Victoria Sports Tower" value="Victoria Sports Tower" />
                </label>
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" id="cancelModalBtn">Cancel</button>
                <button class="btn btn-primary" id="submitModalBtn">Send</button>
            </div>
        `;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        function close(returnValue) {
            document.body.removeChild(overlay);
            resolve(returnValue);
        }
        
        // Wire actions
        const cancelBtn = modal.querySelector('#cancelModalBtn');
        const submitBtn = modal.querySelector('#submitModalBtn');
        const piNoInput = modal.querySelector('#piNoInput');
        const issuingDateInput = modal.querySelector('#issuingDateInput');
        const termPaymentInput = modal.querySelector('#termPaymentInput');
        const deliveryPlaceInput = modal.querySelector('#deliveryPlaceInput');
        
        cancelBtn.addEventListener('click', () => close(null));
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                close(null);
            }
        });
        
        function submit() {
            const piNo = (piNoInput.value || '').trim();
            const issuingDate = (issuingDateInput.value || '').trim();
            const termOfPayment = (termPaymentInput.value || '').trim();
            const deliveryPlace = (deliveryPlaceInput.value || '').trim();
            
            if (!piNo || !issuingDate || !termOfPayment || !deliveryPlace) {
                alert('Please fill in all fields.');
                return;
            }
            close({ piNo, issuingDate, termOfPayment, deliveryPlace });
        }
        
        submitBtn.addEventListener('click', submit);
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') submit();
            if (e.key === 'Escape') close(null);
        });
        
        // Autofocus first input
        setTimeout(() => piNoInput.focus(), 0);
    });
}

// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs and panes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Add active class to selected tab and pane
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Update displays based on tab
    if (tabName === 'catalog') {
        renderProducts();
    } else if (tabName === 'shopping') {
        renderShoppingProducts();
    } else if (tabName === 'cart') {
        renderCart();
    }
}

// Function to render cart items
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const summary = getCartSummary();
    
    if (summary.totalItems === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><br>Your cart is empty</div>';
        cartSummary.innerHTML = '';
        return;
    }
    
    // Render cart items
    cartItems.innerHTML = summary.items.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.description}" class="cart-item-image" onerror="this.style.display='none'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.brand} - ${item.description}</div>
                <div class="cart-item-details">${item.gram} | ₱${item.unitPrice.toFixed(2)} each</div>
                <div class="cart-item-price">Total: ₱${(item.buyQty * item.unitPrice).toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" ${item.buyQty <= 0 ? 'disabled' : ''}>
                    <i class="fas fa-minus"></i>
                </button>
                <span style="margin: 0 0.5rem; font-weight: 600;">${item.buyQty}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" ${item.buyQty >= item.qty ? 'disabled' : ''}>
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Render cart summary
    cartSummary.innerHTML = `
        <h3><i class="fas fa-receipt"></i> Order Summary</h3>
        <div class="cart-summary-item">
            <span>Total Items:</span>
            <span>${summary.totalItems}</span>
        </div>
        <div class="cart-summary-item">
            <span>Subtotal:</span>
            <span>₱${summary.totalAmount.toFixed(2)}</span>
        </div>
        <div class="cart-summary-total">
            <span>Grand Total: ₱${summary.totalAmount.toFixed(2)}</span>
        </div>
    `;
}

// Initialize the catalog when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Populate filter options
    populateFilterOptions();
    
    renderProducts();
    
    // Add tab event listeners
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Add quotation button event listener
    const generateQuotationBtn = document.getElementById('generateQuotationBtn');
    if (generateQuotationBtn) {
        generateQuotationBtn.addEventListener('click', sendQuotationRequest);
    }

    // Wire search input for live filtering
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value || '';
            applyFilters();
        });
    }
    
    // Add filter event listeners
    const brandFilter = document.getElementById('brandFilter');
    const weightFilter = document.getElementById('weightFilter');
    const priceRange = document.getElementById('priceRange');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    if (brandFilter) {
        brandFilter.addEventListener('change', function() {
            currentFilters.brand = this.value;
            applyFilters();
        });
    }
    
    if (weightFilter) {
        weightFilter.addEventListener('change', function() {
            currentFilters.weight = this.value;
            applyFilters();
        });
    }
    
    if (priceRange) {
        priceRange.addEventListener('change', function() {
            currentFilters.priceRange = this.value;
            applyFilters();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
});

// Export functions for potential external use
window.updateQuantity = updateQuantity;
window.updateQuantityFromInput = updateQuantityFromInput;
window.getCartSummary = getCartSummary;
window.displayCartSummary = displayCartSummary;
window.sendQuotationRequest = sendQuotationRequest;

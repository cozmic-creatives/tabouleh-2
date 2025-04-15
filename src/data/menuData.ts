
// Menu categories
export const menuCategories = ['Alle', 'BBQ Gerechten', 'Onze Gerechten', 'Mezze', 'Soepen', 'Sandwiches', 'Menu Combinaties', 'Dranken'];

// Menu item type definition
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  popular: boolean;
  image: string;
  serves?: number; // Optional property to indicate how many people the dish serves
}

// Menu items data
export const menuItems: MenuItem[] = [
  // BBQ Gerechten
  {
    id: 1,
    name: '1KG Grills Mix',
    description: 'Gemengd vlees met bijgerechten.',
    price: '€45,00',
    category: 'BBQ Gerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    serves: 4
  },
  {
    id: 2,
    name: 'Mix Grilled',
    description: 'Lam brochette, gehakt, kipfilet (met rijst, bulgur met tomatensaus of friet).',
    price: '€18,00',
    category: 'BBQ Gerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Lam en Kebab',
    description: 'Lam brochette, gehakt (met rijst, bulgur met tomatensaus of friet).',
    price: '€16,00',
    category: 'BBQ Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Kebab',
    description: '2 stuks gehakt (met rijst, bulgur met tomatensaus of friet).',
    price: '€16,00',
    category: 'BBQ Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1527305850-5c5f1c4068a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Shish Taouk',
    description: 'Kipfilet (met rijst, bulgur met tomatensaus of friet).',
    price: '€16,00',
    category: 'BBQ Gerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1527305850-5c5f1c4068a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Lahme Mishwy',
    description: 'Vlees saté, hapjes (met rijst, bulgur met tomatensaus of friet).',
    price: '€17,00',
    category: 'BBQ Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1564675494604-c29facff0f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // Onze Gerechten
  {
    id: 7,
    name: 'Quzi',
    description: 'Lamspotje met rijst en 3 soepen (okra met tomatensaus, bonen met tomatensaus, aubergine met tomatensaus).',
    price: '€18,00',
    category: 'Onze Gerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    serves: 1
  },
  {
    id: 8,
    name: 'Tashrip Lahem',
    description: 'Lamspotje met tomatensaus.',
    price: '€16,00',
    category: 'Onze Gerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    name: 'Rijst Met Soep',
    description: 'Rijst met soep, 4 stukjes carbonade (met rijst/bulgur met tomatensaus of friet).',
    price: '€10,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 10,
    name: 'Dolma',
    description: 'Druivenbladeren, aubergine en courgette met rijst, vlees en groenten.',
    price: '€15,00',
    category: 'Onze Gerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1601050591250-cb3d01d35c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 11,
    name: 'Shish Taouk en Kebab',
    description: 'Kipfilet en gehakt (met rijst/bulgur met tomatensaus of friet).',
    price: '€16,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    name: 'Half Kip',
    description: 'Halve kip, houtskool gegrild (met rijst en friet).',
    price: '€13,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    name: 'Cotelette',
    description: '4 stuks varkenskoteletten (met rijst/bulgur met tomatensaus of friet).',
    price: '€18,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1598514983318-2f64f55639e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    name: 'Zalm',
    description: '200g zalm (met rijst/bulgur met tomatensaus of friet).',
    price: '€15,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 15,
    name: 'Kippenvleugels',
    description: '8 kippenvleugels (met rijst/bulgur met tomatensaus of friet).',
    price: '€13,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1588615419973-58e54f2046d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 16,
    name: 'Gefrituurde Kibbeh',
    description: 'Gefrituurd, gehakt, ui en bulgur, 4 stuks.',
    price: '€8,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1603279542617-84df654a1d84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 17,
    name: 'Shish Taouk',
    description: '1 stuk shish taouk (met rijst, bulgur met tomatensaus of friet).',
    price: '€10,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 18,
    name: 'Shish Kebab',
    description: 'Shish kebab (met rijst, bulgur met tomatensaus of friet).',
    price: '€10,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1633237308644-596d1d17475d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 19,
    name: 'Lam BBQ',
    description: 'Met rijst, bulgur met tomatensaus of friet.',
    price: '€10,00',
    category: 'Onze Gerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // Mezze
  {
    id: 20,
    name: 'Cheken Nuget',
    description: '6 chicken nuggets.',
    price: '€7,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 21,
    name: 'Burger',
    description: 'Met friet en saus.',
    price: '€7,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 22,
    name: 'Friet (Klein)',
    description: 'Kleine portie friet.',
    price: '€3,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 23,
    name: 'Friet (Medium)',
    description: 'Medium portie friet.',
    price: '€5,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 24,
    name: 'Friet (Groot)',
    description: 'Grote portie friet.',
    price: '€7,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 25,
    name: 'Musaka',
    description: 'Aubergine, tomaten, uien.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1622542086387-907436a6e51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 26,
    name: 'Foul',
    description: 'Bruine bonen salade.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1611612744957-ba6a8b6efac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 27,
    name: 'Labneh',
    description: 'Geconcentreerde yoghurt, olijfolie.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 28,
    name: 'Hummus bi Lahme',
    description: 'Hummus met gehakt.',
    price: '€7,50',
    category: 'Mezze',
    popular: true,
    image: 'https://images.unsplash.com/photo-1593001933664-3738a8418263?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 29,
    name: 'Haloumi met Brood',
    description: 'Kaas, boter, brood.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1598452139917-36357ccf9f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 30,
    name: 'Haloumi',
    description: 'BBQ kaas met salade.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1532103030939-ad637f099aaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 31,
    name: 'Falafel',
    description: 'Kikkererwten, kruiden, 6 stuks falafel met hummus met salade.',
    price: '€7,50',
    category: 'Mezze',
    popular: true,
    image: 'https://images.unsplash.com/photo-1553030070-8c94e69d3891?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 32,
    name: 'Hummus',
    description: 'Kikkererwten, tahini, citroensap.',
    price: '€7,50',
    category: 'Mezze',
    popular: true,
    image: 'https://images.unsplash.com/photo-1622542086387-907436a6e51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 33,
    name: 'Mettabal',
    description: 'Gegrilde aubergine, tahini, citroensap.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1541592795542-3b2c63d0ebb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 34,
    name: 'Warak Einab',
    description: 'Druivenbladeren, groenten, rijst, granaatappelstroop. 8 stuks.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1601050591250-cb3d01d35c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 35,
    name: 'Fatouch',
    description: 'Oosterse salade, gefrituurde brood.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1551729006-2e9ac7af8622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 36,
    name: 'Baba Ghanouj',
    description: 'Gegrilde aubergine, tahini, olijfolie, citroensap.',
    price: '€7,50',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1588612553750-d0641481bd89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 37,
    name: 'Bulgur met Tomatensaus',
    description: 'Bulgur, groenten, pikante tomatensaus.',
    price: '€7,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1609436773760-6b77ca6f3806?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 38,
    name: 'Beriane',
    description: 'Kruidige rijstgerecht.',
    price: '€7,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 39,
    name: 'Batata Hara',
    description: 'Aardappelen met koriander en kruiden.',
    price: '€7,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1601620743969-cc27ae93dd49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 40,
    name: 'Makali',
    description: 'Gefrituurde bloemkool, aubergine.',
    price: '€7,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 41,
    name: 'Tabouleh',
    description: 'Gehakte peterselie, tomaten, munt, met uien, bulgur.',
    price: '€7,50',
    category: 'Mezze',
    popular: true,
    image: 'https://images.unsplash.com/photo-1605709239047-824038e4d49b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 42,
    name: 'Burak',
    description: 'Met kaas of gehakt, 4 stuks.',
    price: '€6,00',
    category: 'Mezze',
    popular: false,
    image: 'https://images.unsplash.com/photo-1548653658-af2e62a84341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // Soepen
  {
    id: 43,
    name: 'Okra Soep',
    description: 'Traditionele soep met okra.',
    price: '€5,00',
    category: 'Soepen',
    popular: false,
    image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 44,
    name: 'Bonen Soep',
    description: 'Traditionele bonensoep.',
    price: '€5,00',
    category: 'Soepen',
    popular: false,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 45,
    name: 'Aubergine Soep',
    description: 'Auberginesoep.',
    price: '€5,00',
    category: 'Soepen',
    popular: false,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // Sandwiches
  {
    id: 46,
    name: 'Falafel',
    description: 'Libanees brood.',
    price: '€6,00',
    category: 'Sandwiches',
    popular: false,
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 47,
    name: 'Shoarma',
    description: 'Libanees brood.',
    price: '€7,50',
    category: 'Sandwiches',
    popular: true,
    image: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 48,
    name: 'Gegrilde Kip',
    description: 'Libanees brood.',
    price: '€7,50',
    category: 'Sandwiches',
    popular: false,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 49,
    name: 'Kufta',
    description: 'Libanees brood.',
    price: '€7,50',
    category: 'Sandwiches',
    popular: false,
    image: 'https://images.unsplash.com/photo-1633237308644-596d1d17475d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 50,
    name: 'Vlees',
    description: 'Lam brochettes met Libanees brood.',
    price: '€7,50',
    category: 'Sandwiches',
    popular: false,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 51,
    name: 'Marine',
    description: 'Libanees brood met gehakt en kaas.',
    price: '€12,00',
    category: 'Sandwiches',
    popular: false,
    image: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  
  // Menu Combinaties
  {
    id: 52,
    name: 'Menu Tabouleh',
    description: 'Koude hapjes (fattoush, hummus, moutabal, baba ganoush) en warme hapjes (friet/grills), voor 4-5 personen.',
    price: '€65,00',
    category: 'Menu Combinaties',
    popular: true,
    image: 'https://images.unsplash.com/photo-1622542086387-907436a6e51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    serves: 5
  },
  {
    id: 53,
    name: 'Menu Vegetarische',
    description: 'Assortiment koude hapjes (fattoush, hummus, moutabal, baba ganoush, makali, zoete aardappel en bloemkool), voor 1 persoon.',
    price: '€14,00',
    category: 'Menu Combinaties',
    popular: false,
    image: 'https://images.unsplash.com/photo-1544681280-d257afe2735c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    serves: 1
  },
  {
    id: 54,
    name: 'Schotel Shawerma met Friet',
    description: 'Kipfilet met knoflooksaus, granaatappel en friet.',
    price: '€12,00',
    category: 'Menu Combinaties',
    popular: true,
    image: 'https://images.unsplash.com/photo-1527305850-5c5f1c4068a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    serves: 1
  },
  {
    id: 55,
    name: 'Schotel Shawerma met Rijst',
    description: 'Kipfilet met knoflooksaus, granaatappel met rijst.',
    price: '€12,00',
    category: 'Menu Combinaties',
    popular: false,
    image: 'https://images.unsplash.com/photo-1527305850-5c5f1c4068a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    serves: 1
  },
  
  // Dranken
  {
    id: 56,
    name: 'Ayran',
    description: 'Traditionele yoghurtdrank.',
    price: '€2,50',
    category: 'Dranken',
    popular: false,
    image: 'https://images.unsplash.com/photo-1620447920815-a35a7a06c3c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 57,
    name: 'Water',
    description: 'Fles water.',
    price: '€2,50',
    category: 'Dranken',
    popular: false,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

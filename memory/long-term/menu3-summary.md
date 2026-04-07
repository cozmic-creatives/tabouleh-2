# Menu 3 — Working Draft

Built from WhatsApp menu photos (8 pages) + menu3 dish images (48 JPEGs).
Full data in `menu3-data.json`.

## Stats
- 50 items, 5 categories
- Images in `public/images/menu3/` (48 JPEGs)

## Categories
| Category | Items | Price Range |
|---|---|---|
| BBQ | 15 | €15–€80 |
| Shoarma | 3 | €10–€18 |
| Mezze | 18 | €7.50–€10 |
| Snacks | 3 | €7–€10 |
| Dranken | 11 | €2.50–€3.50 |

## Price Sources
Each item has a `_priceSource` field:
- **confirmed** — read directly from WhatsApp menu photos (23 items)
- **menu2** — carried over from menu2, needs verification (19 items)
- **estimated** — new items not in previous menus, price guessed from similar items (8 items)

## Items needing price confirmation
- Qozi (€18 from menu2)
- Menu Vegetarisch (€15 from menu2)
- All Mezze items 22-36 except Hummus bi Lahme/Hummus/Baba Ganoush
- All Dranken (carried from menu2)
- Bulgur met Citroen, Witte Bonen, Arayes, Kaasrolletjes, Lipton teas, Spa (estimated)

## Skipped from WhatsApp images
- **Menu Kipfilet** (item 10 on physical menu) — appeared crossed out with X marks

## Missing WhatsApp pages
Physical menu numbering has gaps: items 15-16, 20-24, 28-31 were not visible.
These were reconstructed from menu3 image names + menu2 data.

## Unlinked menu3 images (alternate shots, available for swapping)
- hummus-bi-lahme-2.jpeg (alt shot for Hummus bi Lahme)
- kibbeh-2.jpeg (alt shot for Kibbeh)
- vegetarische-mezze-plank.jpeg (alt shot for Menu Vegetarisch)
- warak-enab-met-pita-en-augurk.jpeg (alt shot for Warak Einab)

## Items with no menu3 image
- Menu Lamskotelet, Menu Kalffilet, Menu Zalm (no dish photo taken)
- Menu Tabouleh (large platter — could reuse mix-grill-met-mezze-en-arayes.jpeg)
- Hummus, Baba Ganoush (no standalone photos in menu3)

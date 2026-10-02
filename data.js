// Snapshot van Google Sheet "Tracy – order WO10128 / PR2787 (controle werkdagen)"
// Bijwerken: vervang de waarden hieronder met de actuele sheet-inhoud.
window.ORDER = {
  werkorder: "WO10128",
  pr: "PR2787",
  productionRequestId: "51047",
  artikel: "BW.6084.4001.1 Glasbok-Vast Blue Workx (400 st.)",
  totaal: 400, // units in de hele order
  huidigeStap: "Hechten / lassen robot",
  sinds: "2026-10-02",
  laatstGecontroleerd: "2026-10-02",
  status: "Lopend (Tracy in_progress); Exact: Materiaaltekort",
  stappen: [
    { naam: "Hechten / lassen robot", volgorde: 1, open: 384 },
    { naam: "Gereed voor afwerking", volgorde: 2, open: 16 },
    { naam: "Afwerking", volgorde: 3, open: 0 },
    { naam: "Assembleren", volgorde: 4, open: 0 }
  ],
  // Planning zoals getoond in Tracy
  planning: [
    ["Week", "W34 2026"],
    ["Start", "19-08 02:00"],
    ["Werkelijk", "25-09 11:11"],
    ["ERP einde", "31-03 00:00"],
    ["Tijdsduur", "48d 15h 40m"]
  ],

  log: [
    { datum: "2026-10-02", opmerking: "Nulmeting: 18 open batches (sheet) op Label (stap 2 van 6), 0 afgerond. Gecorrigeerd volgens Tracy: de order is 400 units; 384 bij Hechten / lassen robot, 16 bij Gereed voor afwerking. Exact: Materiaaltekort, 9 van 41 materiaalregels op tekort." },
    { datum: "2026-10-02", opmerking: "Geen wijziging (2e controle vandaag, handmatige testrun): nog steeds alles op Label, 0 afgerond; tekortlijst ongewijzigd (9 van 41)." }
  ],
  // [artikel, omschrijving, gepland, eenheid, geplande datum, status, verwachte voorraad, op voorraad, bestelling, tekort]
  materiaal: [
    ["BW.6084.00002.0", "ELVZ ST. KARABIJNHAAK 4X40MM", "800", "Stuk", "2026-09-30", "Ontvangen", "", "", "11598", "nee"],
    ["BW.6084.00001.0", "ELVZ SCHEEPSKETTING D766 3X16X11MM", "4", "Stuk", "2026-09-30", "Ontvangen", "", "", "11598", "nee"],
    ["Sikaflex-221 black C16", "Sikaflex-221 black C16 / 20 UP600", "1016", "Stuk", "2026-09-30", "Gedeeltelijk", "", "", "11570", "nee"],
    ["BW.6084.0220.0", "Sticker geel 200 x 60mm", "1600", "Stuk", "2026-09-23", "Ontvangen", "", "", "11532", "nee"],
    ["BW.6084.0217.0", "Alu typeplaatje glasbok", "1600", "Stuk", "2026-09-30", "In bestelling", "", "", "11526", "nee"],
    ["BW.6084.0188.0", "Anti-heftruck sticker Ø100", "800", "Stuk", "2026-09-09", "Ontvangen", "", "", "11503", "nee"],
    ["Typesticker groot 70x200mm", "TTP 70x200mm A261 Toughsurface extreme (GLOSSY) (per/1000)", "400", "Stuk", "2026-08-19", "Open", "", "", "", "ja"],
    ["BW.6084.0124.0", "Trapezium spindel eindstop", "1600", "Stuk", "2026-09-09", "Gedeeltelijk", "", "", "11418", "nee"],
    ["8040.TP2639.00.00", "trapezium rondmoer TR26x5 Ø50x39 (DIN103)", "1600", "Stuks", "2026-09-10", "Ontvangen", "", "", "11416", "nee"],
    ["BW.6084.0141.0", "Buisbuigdeel S235", "800", "Stuk", "2026-08-31", "Ontvangen", "", "", "11419", "nee"],
    ["9948.300150.01.50", "bl.pl. Kgw DC01 3000x1500x1,5", "2399,4", "Vierkante meter", "2026-08-27", "Ontvangen", "751,89", "751,89", "11447", "nee"],
    ["9941.223150.03.00b. S355", "wg.pl.gebei. 2230x1500x3 (S355MC)", "223", "Vierkante meter", "2026-09-25", "Ontvangen", "579,8", "579,8", "11564", "nee"],
    ["9941.300150.04.00b.S355", "wg.pl.gebei. 3000x1500x4 (S355MC)", "1800", "Vierkante meter", "2026-08-19", "Gedeeltelijk", "1747,12", "2049,59", "", "nee"],
    ["9941.300150.05.00b. S355", "wg.pl.gebei. 3000x1500x5 (S355MC)", "1680", "Vierkante meter", "2026-08-19", "Gedeeltelijk", "710,56", "1386,95", "", "nee"],
    ["9941.300150.06.00b.S355", "wg.pl.gebei. 3000x1500x6 (S355MC)", "72,8", "Vierkante meter", "2026-08-19", "Gedeeltelijk", "401,27", "1550,87", "", "nee"],
    ["9941.300150.08.00b.S355", "wg.pl.gebei. 3000x1500x8 (S355MC)", "1363,2", "Vierkante meter", "2026-08-19", "Gedeeltelijk", "205,38", "1130,86", "", "nee"],
    ["9941.300150.10.00b.S355", "wg.pl.gebei. 3000x1500x10 (S355MC)", "120", "Vierkante meter", "2026-08-19", "Gedeeltelijk", "-118,83", "297,64", "", "ja"],
    ["9941.300150.15.00b.S355", "wg.pl.gebei. 3000x1500x15 (S355MC)", "132", "Vierkante meter", "2026-08-19", "Gedeeltelijk", "-63,99", "53,31", "", "ja"],
    ["5111.005050.15.25", "indop vierkant plastic zwart 50/50x1,5/2,5", "4000", "Stuk", "2026-09-02", "Ontvangen", "1332", "1332", "11414", "nee"],
    ["5211.010050.01.03", "indop rechthoek plastic zwart 100/50x1/3", "800", "Stuk", "2026-09-02", "Ontvangen", "296", "296", "11414", "nee"],
    ["12.250100.04.00.10 S355", "koker rechthoek 250/100x4 (S355)", "3615", "Meter", "2026-08-19", "Gedeeltelijk", "-807,8", "1235,2", "", "ja"],
    ["12.010050.03.00.10 S355", "koker rechthoek 100/50x3 (S355)", "7230", "Meter", "2026-08-19", "Gedeeltelijk", "1965,8", "1752,2", "", "nee"],
    ["11.008080.04.00.10 S355", "koker vierkant 80/80x4 (S355)", "688,57", "Meter", "2026-08-19", "Ontvangen", "393,78", "393,78", "11421", "nee"],
    ["13.000483.08.80.10 S355", "buis (naadloze buis) 48.3Øx8 (S355)", "79,35", "Meter", "2026-08-24", "Ontvangen", "29,45", "29,45", "11422", "nee"],
    ["13.000030.05.00.80", "buis (naadloos) 30Øx5 (S355)", "376", "Meter", "2026-08-24", "Ontvangen", "102,12", "102,12", "11422", "nee"],
    ["12.010050.02.00.10 S355", "koker rechthoek 100/50x2 (S355)", "2410", "Meter", "2026-08-19", "Gedeeltelijk", "312,5", "-1200", "", "ja"],
    ["11.005050.02.00.10 S355", "koker vierkant 50/50x2 (S355)", "12100", "Meter", "2026-08-19", "Open", "3390,82", "9696,82", "", "ja"],
    ["11.005050.02.00.10 S355", "koker vierkant 50/50x2 (S355)", "1452", "Meter", "2026-08-19", "Ontvangen", "3390,82", "9696,82", "", "nee"],
    ["15.000020.00.00.40", "massief rond warmgewalst 20Ø (S235)", "78,06", "Meter", "2026-08-19", "Open", "43,68", "129,8", "", "ja"],
    ["8442.050050.00.94", "Splitpen Ø5x50 verzinkt (DIN94)", "1600", "Stuk", "2026-08-19", "Open", "11463", "16562", "", "ja"],
    ["8022.080025.08.08", "zeskanttapbout M8x25 verzinkt 8.8 (DIN933)", "800", "Stuk", "2026-09-02", "Ontvangen", "498", "498", "11415", "nee"],
    ["8302.080000.90.21", "carrosseriering M8 verzinkt (DIN9021)", "800", "Stuk", "2026-09-02", "Ontvangen", "245", "245", "11415", "nee"],
    ["8052.080000.00.01", "zelfborgende flensmoer M8 verzinkt 8.8 (DIN6926)", "800", "Stuk", "2026-08-19", "Open", "170790", "240322", "", "ja"],
    ["8142.080030.08.08", "binnenzeskantbout M8x30 verzinkt 8.8 (DIN912)", "4800", "Stuk", "2026-09-02", "Ontvangen", "1310", "1310", "11415", "nee"],
    ["BW.6084.0128.1", "Transportband EP630/4 8+3", "800", "Stuk", "2026-09-02", "In bestelling", "", "", "11417", "nee"],
    ["BW.6084.0080.1", "Transportband EP630/4 8+3", "2400", "Stuk", "2026-09-02", "In bestelling", "", "", "11417", "nee"],
    ["BW.6084.0128.2", "Regupol 7210", "800", "Stuk", "2026-10-01", "Ontvangen", "", "", "11565", "nee"],
    ["BW.6084.0185.0", "Regupol 7210 strook 8 x 40 x 1150", "3600", "Stuk", "2026-09-10", "Ontvangen", "", "", "11420", "nee"],
    ["BW.6084.0186.0", "Regupol 7210 strook 8 x 40 x 1410", "2400", "Stuk", "2026-09-10", "Ontvangen", "", "", "11420", "nee"],
    ["BW.6084.0184.0", "Regupol 7210 strook 8 x 40 x 1500", "4000", "Stuk", "2026-09-10", "Ontvangen", "", "", "11420", "nee"],
    ["BW.6084.0187.0", "Regupol 7210 strook 8 x 40 x 950", "2400", "Stuk", "2026-09-10", "Ontvangen", "", "", "11420", "nee"]
  ]
};

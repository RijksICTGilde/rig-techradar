# RIG Techradar

[![Deployed Here](https://img.shields.io/badge/Deployed_Here-brightgreen)](https://RijksICTGilde.github.io/rig-techradar/)

Bij de start van een nieuw project, rijst vaak de vraag welke software stack / technology stack
gebruikt gaat worden. Soms ligt dit voor een deel al vast, bijvoorbeeld omdat een organisatie
bepaalde eisen heeft of technieke heeft waar je op moet aansluiten.

Het is veilig om te kiezen voor oplossingen die je (goed) kent. Maar het kan ook best
verfrissend en soms raadzaam zijn om verder te kijken. Er zijn veel technieken bijgekomen
en afhankelijk van het soort project passen sommige oplossingen beter dan anderen.

Het idee achter dit project is het volgende:
* een overzicht krijgen van technieken gebruikt binnen het RIG
* inzicht krijgen in welke personen kennis hebben van bepaalde technieken
* een label hangen aan technieken, is het hot & happening, of iets wat we niet (meer) moeten doen

Daarnaast is het plan om ook dit te doen:
* een flow kunnen maken, van programmeertaal tot productie, met daartussen alle stadia
  en (mogelijke) tools die kunnen helpen


## Opzet

Het idee is om alle technologies in markdown bestanden te plaatsen in de folder markdown. Elk bestand
bevat een json block met metadata. Denk hierbij aan het soort technologie en de plek op de radar.

Het is verder een javascript/html oplossing. Nadeel nu is dat handmatig de bestanden uit de technologies
map moet worden toegevoegd aan het technologies.json document, aangezien er geen backend is om dit
te automatiseren.

## Local development

You can install live-server with:
```
npm install -g live-server
```

Then run it from the folder gui:

```
live-server
```

# Pràctica curs Angular

## Objectius

* Interioritzar contingut del curs.
* Tractar problemes de desenvolupament reals.
* Adquirir coneixement sobre la metodologia.
* Aprendre a desenvolupar codi TypeScript.
* Reflexar l'aplicació pràctica del curs.
* ~~Avaluar.~~


## Continguts

### 1. Aplicació Angular4.

Es desitja crear un programari web que permeti generar pressupostos online de manera ràpida, posant èmfasi en la usabilitat i escalabilitat per dammunt de la normalització de les dades introduïdes.

Els requeriments són els següents:

* One-page app.
* Alliberar de càrrega al servidor respecte a solucions JSF.
* Client ric.
* Barra de títol fixa.
* Pantalla d'accions on:
  * Es poden introduir les dades de qui fa el pressupost a un formulari de lectura i escriptura.
    * Dades: Nom/Raó social, NIF, adreça, codi postal, població, província, telèfon, e-mail.
    * Al validar-les, el formulari passa a estat de només lectura i s'activa un botó d'edició per retornar-lo a l'estat de lectura i escriptura.
  * Es poden introduir els diferents articles/serveis que formen part del pressupost, digitant-ne el contingut a un conjunt d'inputs.
    * Dades: Concepte/Descripció, preu, quantitat, descompte, import.
    * Al validar-los amb el botó "+" ubicat a la dreta dels inputs, s'afegeix el contingut a una llista dinàmica ubicada tot just a sota i es reinicialitzen els inputs.
  * Es poden modificar els articles/serveis introduits tot clicant-ne el seu concepte/descripció, que serà un hipervincle que carregarà els valors als inputs de la part superior.
  * Es poden esborrar els articles/serveis introduits tot clicant-ne un botó "-" ubicat a la dreta de cadascun dels elements del llistat.
  * La llista és paginable.
  * La llista és ordenable per cadascuna de les seves columnes.
  * Al footer de la llista es totalitza el sumatori dels imports.
* ~~A la part inferior de la pantalla cal habilitar un botó d'impressió que generarà un fitxer PDF.~~


#### 1.1. Estructura de l'aplicació.

Veure imatge layout.png.

#### 1.2. Components.

1. Remitent.
2. Element a afegir.
3. Llista de dades (header, footer, paginació, ordenació).
4. Element de la llista.


#### 1.3. Serveis.

1. Servei CRUD de dades del remitent.
2. Servei CRUD d'elements del pressupost.

#### 1.4. TBC.

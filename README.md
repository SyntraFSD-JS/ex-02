# Oefening 01
## Voorbereiding:
Clone de git-repository uit github en maak je eigen branch.
1. Kopieer de url via github naar je klembord:  
   ![Copy url](https://raw.githubusercontent.com/SyntraFSD-JS/ex-01/master/images/copy_github.png "Copy url to clipboard")

Gebruik de terminal uit VSCode om de volgende commands uit te voeren.
(vervang `[naam]` door je eigen naam)

1. `git clone https://github.com/SyntraFSD-JS/ex-02.git ex-02`
2. `cd ex-01`
3. `git checkout -b [naam]`
4. `git push --set-upstream origin [naam]`

Push regelmatig de changes die je maakt naar github

1. Commit je changes:
   1. Druk `Ctrl-Shift-G` om de Dource Control tab te openen
   2. Geef een beschrijving van de changes die je deed en duw `Ctrl-Enter`
2. Push je changes:
   1. Druk `Ctrl-Shift-P` om het Command Palette te openen
   2. Zoek naar `Git: Push` en druk op `Enter` om uit te voeren 
   
Pull regelmatig om opmerkingen of aanpassingen van mij binnen te halen
1. Druk `Ctrl-Shift-P` om het Command Palette te openen
2. Zoek naar `Git: Pull` en druk op `Enter` om uit te voeren 
     
## Structuur
De oefeningen bevinden zich in een aparte map met de naam `ex[oef. nummer]_[oef. naam]`
Daarin zitten alle bestanden die je nodig hebt om de oefening te maken, meestal is dit een `index.html` en een `script.js` bestand.
Het script bestand zal al gelinkt zijn aan het html bestand. Zie:
```html
<script src="script.js"></script>
```
Normaal moet je niet in het html bestand meer werken maar enkel in `script.js`.
Ook daar zal meestal al een basisstructuur aanwezig zijn waarbij in comments staat waar je zelf dingen moet aanvullen.

Om het resultaat van je oefening te bekijken open je het `index.html` bestand in chrome.
In deze module gebruiken we allemaal chrome zodat we allemaal hetzelfde resultaat hebben.

## Oefeningen:
### Oefening 02: Calculator
#### Doel:

Beschikbaar op de html pagina zijn volgende elementen:
- inputvelden: `<input class="input number-input" type="number" step="1" value="0">`
- de inputvelden zitten in een container: `<div id="input-container" class="container">`
- elk inputveld heeft een delete knop: `<a class="button is-danger delete-number-input">`
- de structuur van de input + knop ziet er als volgt uit:  
   ``` html
   <div class="field has-addons number-input-group">
     <div class="control">
       <input class="input number-input" type="number" step="1" value="0">
     </div>
     <div class="control">
       <a class="button is-danger delete-number-input">X</a>
     </div>
   </div>
   ```  
   onthou vooral dat de root van deze structuur de class `.number-input-group` heeft
- knop om de som te berekenen: `<button id="sum-submit-btn" class="button is-info">Calculate Sum</button>`
- knop om het product te berekenen:`<button id="product-submit-btn" class="button is-info">Calculate Product</button>`
- knop om een inputveld toe te voegen: `<button id="add-input-btn" class="button is-info">Add Input</button>`
- een container voor de som: `<span id="sum-result-container">0</span>`
- een container voor het product: `<span id="product-result-container">0</span>`
- een container om een count van het aantal inputvelden bij te houden: `<span id="number-count-container">2</span>`

Deze oefening bestaat uit 5 delen:
1. Als ik op `#sum-submit-btn` klik verschijnt de som van alle getallen in `#sum-result-container`
2. Als ik op `#product-submit-btn` klik verschijnt het product van alle getallen in `#product-result-container`
3. Als ik op `#add-input-btn` klik wordt er onderaan `#input-container` een nieuw inputveld identiek 
   aan de voorgaande (inclusief delete knop). De initiële waarde is altijd 0
4. Als ik op een `.delete-number-input` klik wordt het bijhorende inputveld verwijderd 
   (vanaf de root `.number-input-group`)
5. Ten allen tijde moet de input count (`number-count-container`) up to date zijn

Voor verdere instructies kijk je in het script.js bestand.

#### Extra
Voor de moedigen onder jullie: zorg dat ten allen tijde de som en het product correct zijn.

#### Wat heb ik nodig:
(Als ik `[test]` vierkante haakjes gebruik is wat er tussen de haakjes staat een beschrijving van het soort waarde er verwacht is. Neem dit nooit letterlijk over.)

- Global functions:
   - `parseInt()` 
- DOM Methods:
   - `document.querySelector()`
   - `document.querySelctorAll()`
   - `[nodeList].forEach()`
   - `[element].matches()`
   - `[element].closest()`
   - `[element].remove()`
   - `[element].textContent`
   - `[element].children`
   - `[element].children.length`
   - `[element].cloneNode()`
   - `[element].appendChild()`
   - `[element].addEventListener()`
- Event:
   - `[event].target`
   
      

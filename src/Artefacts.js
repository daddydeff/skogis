import "./Artefacts.css";

function Artefacts() {
  return (
    <div>
      <div className="Art-header">
        <h2>Artefakter</h2>
      </div>
      <div className="Art-container">
        <div className="Art-list">
          <h3>Produktbacklog</h3>
          <p>
            Produktbacklogen är en ordnad lista som innehåller alla
            utvecklingspunkter som vi i nuläget vet att vi vill förändra på vår
            produkt. Det är ett levande dokument och Produktägaren håller
            ansvaret för dess innehåll och ordning. Både prioritering och
            innehåll kan och bör skifta över tid, men det är alltså enbart
            Produktägaren som tillåter dessa ändringar.
          </p>
        </div>
        <div className="Art-list">
          <h3>Sprintbacklog</h3>
          <p>
            Innehållet i en Sprintbacklog är de uppgifter som Utvecklingsteamet
            bedömt att de kommer att leverera inom ramen för en Sprint. Varje
            enskild uppgift måste vara tydligt definierad. Detta både i vilka
            förväntningar finns på uppgiftens utkomst, men också hur teamet
            själva definierar den som färdig. Genom att följa Sprintbacklogen
            under Sprintens gång, visar vi hur Utvecklingsteamet gör framsteg.
            Den visar också vilka problem som uppstår och när.
          </p>
        </div>
        <div className="Art-list">
          <h3>Inkrement</h3>
          <p>
            Ett inkrement är den samlade produkt som uppstår efter en Sprint, då
            vi uppdaterar produkten med Sprintens uppgifter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Artefacts;

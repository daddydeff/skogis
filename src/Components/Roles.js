import "./Roles.css";

function Roles() {
  return (
    <div>
      <div className="Roller">
        <h2>Roller</h2>
      </div>
      <div className="Roll-lista-container">
        <div className="Roll-lista">
          <h3>Produktägaren</h3>
          <p>
            Det är en produktägare som driver produkten framåt, som ser till att
            den hela tiden genererar värde och som ser till att man väljer rätt
            väg framåt. Produktägaren lever, andas och talar för sin produkt.{" "}
            Produktägarens ansvar och mandat är oinskränkta och besluten som hen
            tar accepteras.
          </p>
        </div>
        <div className="Roll-lista">
          <h3>Scrum Master</h3>
          <p>
            En Scrum Master faciliterar att ramverket för Scrum följs och driver
            teamets ständiga förbättring och utveckling. Det innebär åtaganden
            både mot ett eller flera utvecklingsteam, men också mot
            Produktägarna. Detta kan låta trivialt, men rollen är både vital och
            djup.
          </p>
        </div>
        <div className="Roll-lista">
          <h3>Utvecklingsteamet</h3>
          <p>
            Resten av teamen består av utvecklare som utvecklar produkten efter
            backlogs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roles;

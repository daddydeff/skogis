import "./Activities.css";

function Activities() {
  return (
    <div>
      <div className="Act-header">
        <h2>Aktiviteter enligt Scrum</h2>
        <p>
          För att definiera att rätt saker görs vid rätt tidpunkt, definierar
          Scrum fem stycken aktiviteter eller ceremonier. Dessa ingår alla inom
          varje iteration:
        </p>
      </div>
      <div className="Act-container">
        <div className="Act-list">
          <h3>Sprint</h3>
          <p>
            Det den Agila filosofin kallar iteration, kallas inom Scrum för
            Sprint. En Sprint är alltid tidsbestämd (t ex tre veckor) och inom
            den ryms planering, utveckling och utvärdering. Fördelen med korta
            iterationer är att en tidsrymd mindre än fyra veckor ofta är lättare
            att överblicka än en längre. Det gör både planering lättare och
            möjligheten att förändra större. Dessutom blir den finansiella
            risken mindre, eftersom man kan välja att avbryta eller byta
            inriktning inom ramen för nästa Sprint. Sprintar avlöser varandra
            och efter varje Sprint skall en ny och fungerande version av
            produkten finnas tillgänglig.
          </p>
        </div>
        <div className="Act-list">
          <h3>Sprintplanering</h3>
          <p>
            En Sprint inleds alltid med en tidsbestämd Sprintplanering. Här går
            Utvecklingsteamet igenom Produktbacklogen tillsammans med
            Produktägaren. Utifrån denna dialog beslutas vad som kan genomföras
            och hur. Viktigt att påpeka är att det är Utvecklingsteamet som
            besvarar frågorna om vad och hur. Produktägarens roll är att svara
            på eventuella frågor som kan uppstå kring specifika uppgifter i
            Produktbacklogen.
          </p>
        </div>
        <div className="Act-list">
          <h3>Daily Scrum</h3>
          <p>
            Daily Scrum är ett dagligt återkommande planeringsmöte för
            Utvecklingsteamet. Mötet får inte överstiga 15 minuter i längd. För
            att ingen ska bli för bekväm och dra ut på tiden måste deltagarna
            stå upp under hela mötets längd.
          </p>
        </div>
        <div className="Act-list">
          <h3>Sprint Review/Sprint Demo</h3>
          <p>
            För att kommunicera den utveckling som skett under en Sprint,
            anordnar teamet en Sprint Review i slutet av Sprinten. Ibland kallas
            denna ceremoni även för Sprint Demo. Närvarande, förutom
            Utvecklingsteamet, Scrum Master och Produktägare är alla andra
            intressenter till arbetet som teamet utfört. Detta är ett informellt
            möte med syfte att förklara vad som teamet gör, vad man inte gör och
            hur resultatet påverkar nästa Sprint. Detta är även ett bra
            tillfälle för övriga intressenter att komma med input till hur vi
            bör planera nästa Sprint.
          </p>
        </div>
        <div className="Act-list">
          <h3>Sprint Retrospective</h3>
          <p>
            Ingen Agil metod utan retrospektiv! I detta möte samlar vi enbart
            det agila teamet (dvs Utvecklingsteamet, Scrum Master och
            Produktägare). Tillsammans utvärderar vi den senaste Sprinten
            utifrån arbetssätt, verktyg, relationer och annat värdefullt. Detta
            är ett bra sätt att tidigt upptäcka och åtgärda problem innan de
            blivit för stora, men också ett utmärkt tillfälle att uppmärksamma
            och förstärka positiva erfarenheter inom Scrumteamet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Activities;

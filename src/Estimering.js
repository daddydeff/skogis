import "./Estimering.css";

function Estimering() {
  return (
    <div className="Est">
      <h2>Estimering</h2>
      <p>
        När teamet planerar en Sprint måste det finnas en gemensam uppfattning
        om hur mycket teamet kan prestera under kommande iteration. För att
        kunna ge en sådan uppfattning, bör man för varje uppgift kunna Estimera
        hur pass komplex uppgiften är
      </p>
      <h2>Burndown Chart</h2>
      <p>
        Vissa ser detta som ett bra verktyg för att visualisera hur arbetet
        fortlöper i Sprinten. Det handlar helt enkelt om att skapa en graf som
        visar om utvecklingstempot följer planen. Om inte, kan man på ett tidigt
        stadium prioritera bort arbete.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/SampleBurndownChart.svg/1200px-SampleBurndownChart.svg.png"
        alt="Burndown Chart"
        width="800"
        height="400"
      ></img>
      <p>Expempel på hur en burndown chart kan se ut.</p>
    </div>
  );
}
export default Estimering;

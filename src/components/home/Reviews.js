import Heading from "../layout/Heading";

function Reviews() {
  return (
    <div className="review-container">
        <Heading content="Anmeldelser" />
        <div className="review-container-content">


          <div className="review">
            <img src="../../images/persona/mona.png" alt="Mona Hansen"></img>
            <div className="review-information">
              <h4>Mona Hansen</h4>
              <div className="review-tjeneste">
                <h5>Tjeneste:</h5>
                <p>Oppussing</p>
              </div>
              <div className="review-positivt">
                <h5>Positivt:</h5>
                <p>Kvalitet, Profesjonalisme, Punktlighet, Responsivitet, Verdi</p>
              </div>
              <div className="review-kommentar">
                <h5>Kommentar:</h5>
                <p>100% fornøyd med alt. Gode, oversiktelige tilbud, effektive, proffe og gjør jobben til avtalt pris👍🌷 Kan virkelig anbefales</p>
              </div>
            </div>
          </div>


          <div className="review">
            <img src="../../images/persona/kathrine.png" alt="Kathrine Wergeland"></img>
            <div className="review-information">
              <h4>Kathrine Wergeland</h4>
              <div className="review-tjeneste">
                <h5>Tjeneste:</h5>
                <p>Terrassebygging</p>
              </div>
              <div className="review-positivt">
                <h5>Positivt:</h5>
                <p>Profesjonalisme</p>
              </div>
              <div className="review-kommentar">
                <h5>Kommentar:</h5>
                <p>Effektiv / Punktlig / Godt håndverk / Profesjonell og hyggelig. 100 % fornøyd 👏</p>
              </div>
            </div>
          </div>

          
        </div>  
    </div>
  )
}

export default Reviews;
import Heading from "../layout/Heading";

function Partners() {
  return (
    <div className="partners">
        <Heading content="Samarbeids Partnere" />
        <div className="partners_img_container">
            <img src="../../images/partners/natre.png" alt="Natre" />
            <img src="../../images/partners/fagflis.png" alt="FagFlis" />
            <img src="../../images/partners/maxbo_proff.png" alt="Maxbo Proff" />
            <img src="../../images/partners/stangeskovene.png" alt="Stangeskovene" />
        </div>
    </div>
  )
}

export default Partners;
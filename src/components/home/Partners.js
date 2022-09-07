import Heading from "../layout/Heading";

function Partners() {
  return (
    <div className="partners">
        <Heading content="Samarbeids Partnere" />
        <div className="partners_img_container">
            <img src="../../images/natre.png" alt="Natre" />
            <img src="../../images/fagflis.png" alt="FagFlis" />
            <img src="../../images/maxbo_proff.png" alt="Maxbo Proff" />
            <img src="../../images/stangeskovene.png" alt="Stangeskovene" />
        </div>
    </div>
  )
}

export default Partners;
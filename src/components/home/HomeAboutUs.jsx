import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function HomeAboutUs() {
  return (
    <div className="home-aboutUs">
        <Heading content="Om Oss" />
        <div className="home-aboutUs-content">
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel fringilla. Et malesuada fames ac turpis. Lobortis feugiat vivamus at augue. Arcu vitae elementum curabitur vitae nunc sed velit. Dui ut ornare lectus sit amet est placerat. Enim sit amet venenatis urna cursus eget nunc. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ac ut consequat semper viverra nam libero justo laoreet. In fermentum et sollicitudin ac orci phasellus egestas tellus. Donec et odio pellentesque diam volutpat commodo sed. Venenatis urna cursus eget nunc scelerisque viverra mauris in.
                </p>
                <p>
                    Gravida cum sociis natoque penatibus et magnis. Quis viverra nibh cras pulvinar mattis. Mauris sit amet massa vitae. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo ullamcorper a lacus vestibulum. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Eu ultrices vitae auctor eu. Egestas dui id ornare arcu odio ut sem. Et tortor consequat id porta nibh venenatis cras sed felis. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
                </p>
            </div>
            <img src="../../images/placeholder1-min.jpg" alt="Placeholder" />
        </div>
        <Link to={"/about"}><Button variant="primary" className="about-btn">Les mer</Button></Link>
    </div>
  )
}

export default HomeAboutUs;
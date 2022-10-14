import Heading from "../layout/Heading";
import ReferenceMenu from "./ReferenceMenu";
import BathroomCall from "./sections/BathroomCall";
import DoorsCall from "./sections/DoorsCall";
import GarageCall from "./sections/GarageCall";
import OutdoorsCall from "./sections/OutdoorsCall";
import RehabCall from "./sections/RehabCall";
import { Breadcrumb, Container } from "react-bootstrap";

export default function ReferencesPage() {
	return (
        <Container>
            <div className="references-container">
			<Heading content="Referanser" />
            <Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item active>
        			Referanser
      				</Breadcrumb.Item>
    		</Breadcrumb>
            <ReferenceMenu />
            <div className="references-container-content">
                <BathroomCall />
                <DoorsCall />
                <GarageCall />
                <OutdoorsCall />
                <RehabCall />  
            </div>
		</div>
        </Container>
	);
}
import Dropdown from 'react-bootstrap/Dropdown';

function ReferenceMenu() {
  return (
    <Dropdown className='reference-menu'>
      <Dropdown.Toggle id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/references/sections/doors">Dør og Vindu</Dropdown.Item>
        <Dropdown.Item href="/references/sections/bathroom">Bad</Dropdown.Item>
        <Dropdown.Item href="/references/sections/rehab">Rehabilitering</Dropdown.Item>
		<Dropdown.Item href="/references/sections/outdoors">Uteområde</Dropdown.Item>
		<Dropdown.Item href="/references/sections/garage">Garasje</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ReferenceMenu;
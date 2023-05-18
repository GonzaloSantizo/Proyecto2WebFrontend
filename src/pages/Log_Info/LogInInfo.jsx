
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LogInInfo.scss'

const LogIn_Info = () => {

return(
    <div className="page-wrapper" >
        <div>

<h2><a href="/">Home</a></h2>
<h1>Bienvenido Dr</h1>
</div>



<Container fluid="md">
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
<div>
    <h2>Asignación de medicamentos</h2>
</div>

<div>
    <h2>Asignación de Pacientes</h2>
    <div>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Enfermedad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
</div>
    </div>
    

)
}

export default LogIn_Info;
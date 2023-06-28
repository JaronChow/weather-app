import { Container, Row, Col } from 'react-bootstrap';

const ForecastCard = () => {

    return(
        <Container fluid style={{ width: "90%", padding: 100, }} 
        className="mt-3 p-5 mb-2 bg-info text-white bg-opacity-50 rounded-3">
            <Row>
                <Col>Sat</Col>
                <Col>Sun</Col>
                <Col>Mon</Col>
                <Col>Tue</Col>
                <Col>Wed</Col>
                <Col>Thu</Col>
                <Col>Fri</Col>
            </Row>
        </Container>
    )
}

export default ForecastCard;
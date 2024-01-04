import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Thbox ({ cards }) { 
    return (
        <>
            <Container>
                <Row>
                    {cards.map((card, index) => (
                    <Col key={index} sm={4}>
                        <div className="card">
                            <img src={card.image} alt={`Card ${index}`} />                            
                            <p>{card.text}</p>
                            <p> <span>{card.title}</span> </p>
                            {/* <button>{card.btnImage}</button> */}
                            <a href="#"><img className='btnarow' src={card.btnImage} alt={card.text} /></a>
                        </div>
                    </Col> 
                    ))}                                           
                </Row>  
            </Container>
        </>
    )

}

export default Thbox

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlockExample from './Button';
import {useContext} from 'react';
import {Context} from './App';

function BasicExample() {
    const counter=useContext(Context);
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button >Go somewhere {counter.count}</Button>
      </Card.Body>
    </Card>
    <BlockExample/>
    </>
  );
}

export default BasicExample;
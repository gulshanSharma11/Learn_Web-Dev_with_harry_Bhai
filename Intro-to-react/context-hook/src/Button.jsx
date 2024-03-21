import Button from 'react-bootstrap/Button';
import { Context } from './App';
import {useContext} from 'react';
function BlockExample() {
    const counter=useContext(Context);
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button onClick={() => counter.setCount((count) => count + 1)} variant="secondary" size="lg" Block level button>
          count is {counter.count} 
      </Button>
    </div>
  );
}

export default BlockExample;
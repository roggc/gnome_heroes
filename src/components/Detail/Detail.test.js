
import {Detail} from './';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const gnomeData={
    name:'foo',
    age:22,
    professions:['carpenter'],
    friends:['john','paul']
  }
  ReactDOM.render(<Detail gnomeData={gnomeData}/>, div);
});


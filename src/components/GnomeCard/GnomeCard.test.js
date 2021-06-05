import {GnomeCard} from './';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const gnomeData={
      thumbnail:'foo',
      name:'bar',
      professions:[
          'carpenter',
          'soldier'
      ],
      friends:[
          'john',
          'paul'
      ]
  }
  ReactDOM.render(<GnomeCard gnomeData={gnomeData} />, div);
});
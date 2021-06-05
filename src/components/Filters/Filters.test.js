
import {Filters} from './';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const professions=[{name:'carpenter',selected:false},{name:'soldier',selected:false}]
  ReactDOM.render(<Filters professions={professions} />, div);
});
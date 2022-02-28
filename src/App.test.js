import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store'
import request from "supertest";
import Enzyme from 'enzyme';
// Import Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//use adapter
Enzyme.configure({ adapter: new Adapter() });

test('Renders screen', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const devicesTitle = screen.getByText('Github Search');
  expect(devicesTitle).toBeInTheDocument();
});

const baseUrl = 'https://api.github.com';
describe(`Test if GitHub API's Server is  Up`, () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('/zen');
		expect(response.statusCode).toBe(200);
	});
});
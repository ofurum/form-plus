import { shallow, mount, configure } from "enzyme";
import {Pagination} from "./components/pagination/pagination.component"
import Adapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import fetchedDataReducer, {
  INITIALIZE_STATE,
} from "./redux/fetchedData/fetched.reducer";

import App from './App';

configure({ adapter: new Adapter() });



test('renders learn react link', () => {
  const mockStore = configureMockStore();
  const store = mockStore({ dataFetched: INITIALIZE_STATE });
  let currentPage = 1;
  
  const paginate = ({ newPage, offset }) => {
    currentPage = newPage;
  };

  const wrapper = shallow(
    <Pagination
      currentPage={currentPage}
      paginateData={paginate}
      store={store}
    />
  );
  
  expect(wrapper.exists(".pagination")).toBeTruthy();
  wrapper.find("#next").simulate("click");
  expect(currentPage).toBe(2)
});

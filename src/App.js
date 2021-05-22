import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import Cardlist from './components/cardList/cardList.component';
import Pagination from './components/pagination/pagination.component'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cardlist />
      <Pagination />
    </div>
  );
}

export default App;

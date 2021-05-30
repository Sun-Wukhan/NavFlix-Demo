import requests from "./api/requests";
import './styling/App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import RowContainers from "./components/containers/RowContainers";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <h1>NavFlix Original</h1>

      <RowContainers
        title="NavFlix Original"
        fetchUrl={requests.fetchNetFlixOriginals}
        isLargeRow={true}
      />

      <RowContainers
        title="NavFlix Trending"
        fetchUrl={requests.fetchingTrending}
      />

      <RowContainers
        title="NavFlix Action"
        fetchUrl={requests.fetchActionMovies}
      />

      <RowContainers
        title="NavFlix Comedy"
        fetchUrl={requests.fetchComedyMovies}
      />

      <RowContainers
        title="NavFlix Documentary"
        fetchUrl={requests.fetchDocumentaryMovies}
      />

      <RowContainers
        title="NavFlix Horror"
        fetchUrl={requests.fetchHorrorMovies}
      />

      <RowContainers
        title="NavFlix Top Rated"
        fetchUrl={requests.fetchTopRated}
      />

      <RowContainers
        title="NavFlix Romance"
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;

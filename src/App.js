import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Row title="NETFLIX ORIGINS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="DOCUMENTARIES MOVIES" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;

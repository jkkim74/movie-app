import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
//Render : componentWillMount() -> render() -> componentDidMount()
// Update componentWillReceiveProps() -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
//componentWillMount(){
//    console.log('will mount');
//}
//componentDidMount(){
//    console.log('Did mount');
//}
  state = {
  }
  // ...this.state.movies,것을 붙여야 추가가 됨.. 붙이지 않는 경우, 대체가 됨...
  componentDidMount(){
    this._getMovies();
  }
   _getMovies = async () => {
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
        movies
    })
  }
  _callApi = () => {
     //return fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20180910') // kobis site이용의 경우
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=download_count')
           .then(potato => potato.json())
           //.then(json => json.boxOfficeResult.dailyBoxOfficeList)
           .then(json => json.data.movies)
           .then(json => json)
           .catch(err => console.log(err))
  }
  _renderMovies = () =>{
      const movies = this.state.movies.map(movie => {
            console.log(movie)
             return <Movie title={movie.title_english}
             poster={movie.medium_cover_image}
             genres={movie.genres}
             synopsis={movie.synopsis}
             key={movie.id} />  // yts site 사용의 경우
            // return <Movie title={movie.movieNm} poster={movie.poster} key={movie.id} /> // kobis site이용의 경우
          })
      return movies
  }
  render() {
   //console.log('render act');
    return (
      <div className={this.state.movies ? "App":"App-loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;

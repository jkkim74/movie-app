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
    setTimeout(()=>{
        this.setState({
               movies:[
               {
                   title:"Matrix",
                   poster:"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/matrix_reboot_1000-630x400-1.jpg"
               },
               {
                     title:"Full Metal Jacket",
                     poster:"https://images-na.ssl-images-amazon.com/images/I/811uASZbNXL._SY445_.jpg"
               },
               {
                     title:"Old Boy",
                     poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
               },
               {
                   title:"Star Wars",
                   poster:"https://imagesvc.timeincapp.com/v3/fan/image?url=https://dorksideoftheforce.com/files/2018/06/how-star-wars-the-last-jedi-sets-up-episode-ix-1065996-1280x0.jpg&"
               }
               ,
               {
                    title:'transporting',
                    poster:'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/58c04b0ce4fcb5d05747ab35/1488997145991/new-trailer-for-the-true-story-adventure-of-the-lost-city-of-z1'
                }
            ]
        })
    },5000)

  }
  _renderMovies = () =>{
      const movies = this.state.movies.map((movie,index) => {
             return <Movie title={movie.title} poster={movie.poster} key={index} />
          })
      return movies
  }
  render() {
   //console.log('render act');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;

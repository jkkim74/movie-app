import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
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
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie,index) => {
           return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;

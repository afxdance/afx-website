import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="cover">
        <div class="video-background">
          <div class="video-foreground">
            <iframe title="video-cover" src="https://www.youtube.com/embed/Lf15Llie3WY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

      <div class="vid-info">
        <h1>AFX</h1>
      </div>
    </div>
    );
  }
}

export default App;

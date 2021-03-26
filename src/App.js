import './App.css';
import Flowertemplate from './flowertemplate';
import Flowerpicture from './flowerpicture';
import filippa from './Images/filippa.jpg';
import nikolaj from './Images/nikolaj.jpg';
import twist from './Images/twist.jpg';
import appleblossom from './Images/appleblossom.jpg';

function App() {
  return (
    <div className="App">
      <Flowertemplate
          title = "Prinsesse Filippa"
          img = {filippa}
          text = "A lovely pink rosebud pelargonium of the zonale family."
      />
      <Flowertemplate
          title = "Kronpins Nikolaj"
          img = {nikolaj}
          text = "A white strongly growing double flowered pelargonium of the zonale family."
      />
      <Flowerpicture
          img = {appleblossom}
          alt = "Appleblossom Rosebud"
      />
    </div>
  );
}

export default App;

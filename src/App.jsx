
import './App.css';
import Header from './components/header/Header';
import circle from './assets/img/circle.png'
import About from './pages/about/About';
import Home from './pages/home/Home';
import Circle from './assets/img/left.png'
import Find from './assets/img/text.png'
import Fooot from './assets/img/bottom.png'
import Work from './components/work/Work';
import Chiziq from './assets/img/Rectangle.png'
import Build from './assets/img/build.png'
import Finding from './assets/img/finding.png'
import Rest from './assets/img/restangle.png'
import Man from './assets/img/workman.png'
import Setting from './assets/img/settings.png'
import Graph from './assets/img/graph.png'
import Exper from './assets/img/exper.png'
import Easy from './assets/img/easy.png'
import Enha from './assets/img/enha.png'
import Grov from './assets/img/grov.png'
import Team from './components/team/Team'
import Teaem from './assets/img/teaem.png'
import Deliver from './assets/img/deliver.png'
import Qosh from './assets/img/qosh.png'
import Kady from './assets/img/kady.png'
import Aisha from './assets/img/aisha.png'
import Artur from './assets/img/artur.png'
import Butm from './assets/img/butm.png'
import Contact from './components/contact/Contact'
import Cont from './assets/img/cont.png'
import Redy from './assets/img/redy.png'
import Footer from './components/footer/Footer'
import Foto from './assets/img/foto.png'

function App() {
  return (
    <div className="App">
      <Header/><img className='img' src={circle} alt="" />
      <div className="href">
      <Home/>
      <About/>
      </div>
      <div className="main">
      <img className='circ' src={Circle} alt="" />
      <img className='find' src={Find} alt="" />
      <img className='finding' src={Finding} alt="" />
      <img className='finding1'src={Rest} alt="" />
      </div>
      <img className='fooot' src={Fooot} alt="" />
      <Work></Work>
      <img className='chiziq' src={Chiziq} alt="" />
      <img className='build' src={Build} alt="" />
      <div className="mans">
      <img className='man' src={Man} alt="" />
      <img className='exper' src={Exper} alt="" />
      </div>
      <img className='setting' src={Setting} alt="" />
      <img className='easy' src={Easy} alt="" />
      <img className='graph' src={Graph} alt="" />
      <img className='enha' src={Enha} alt="" />
      <img className='grov' src={Grov} alt="" />
      <Team></Team>
      <img className='teaem' src={Teaem} alt="" />
      <img className='deliver' src={Deliver} alt="" />
      <img className='qosh' src={Qosh} alt="" />
      <img className='qosh1' src={Qosh} alt="" />
      <img className='qosh2' src={Qosh} alt="" />
      <img className='kady' src={Kady} alt="" />
      <img className='aish' src={Aisha} alt="" />
      <img className='artu' src={Artur} alt="" />
      <img className='butm' src={Butm} alt="" />
      <Contact></Contact>
      <img className='cont' src={Cont} alt="" />
      <img className='redy' src={Redy} alt="" />
      <Footer></Footer>
      <img className='imgs' src={circle} alt="" />
      <div className="href1">
      <Home/>
      <About/>
      </div>
      <img className='foto' src={Foto} alt="" />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CollectMap from './components/CollectMap';
import Quiz from './components/Quiz';
import bottle from './components/bottle.png';
import robinet from './components/robinet.png';
import totebag from './components/totebag.png';
import plasticbag from './components/plasticbag.png';
import don from './components/don.png';
import benne from './components/benne.png';
import './App.css';
import Footer from './components/Footer';
import Social from './components/Social';
import Home from './components/Home';
import Header from './components/Header';
import WorkInProgress from './components/WorkInProgress';
import QuizResult from './components/QuizResult';
import TemporaryLinks from './components/TemporaryLinks';
import ProfileCreation from './components/ProfileCreation';
import Slider from './components/Slider';
import Fullscreen from './components/Fullscreen';
import CollectValidation from './components/CollectValidation';

const quizQuestions = [
  {
    key: 0,
    id: 0,
    name: 'Question1',
    question: 'Quand tu as soif tu...',
    image3: bottle,
    answer1: '...prends ta gourde et la remplis au robinet ?',
    value2: '0',
    image2: robinet,
    answer2: "...cours acheter une bouteille d'eau en plastique",
    value1: '10',
  },
  {
    key: 1,
    id: 1,
    name: 'Question2',
    question: 'Quand tu vas faire les courses tu...',
    image2: totebag,
    answer1: '...utilises un cabas ou un tot bag',
    value1: '10',
    image3: plasticbag,
    answer2: '...achètes un sac plastique à chaque fois ?',
    value2: '0',
  },
  {
    key: 2,
    id: 2,
    name: 'Question3',
    question: 'Quand tes vêtements ne sont plus à ton goût tu...',
    image3: benne,
    answer2: '...les jettes, bon débarras !',
    value2: '0',
    image2: don,
    answer1:
      '...les déposes à une benne de recyclage ou les donnes à une association ?',
    value1: '10',
  },
];

const headerDepot = `Dépôt`;

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const [depositPoint, setDepositPoint] = useState({
    type: '',
    adr: '',
    city: '',
    lat: 0,
    lng: 0,
  });
  const [userLoc, setUserLoc] = useState({
    lat: 0,
    lng: 0,
  });
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Fullscreen setShowFooter={setShowFooter} />
            </Route>
            <Route exact path="/slider">
              <Slider />
              <Link to="/quiz0">
                <button type="button">Quiz1</button>
              </Link>
            </Route>
            <Route exact path="/quiz0">
              <Quiz {...quizQuestions[0]} />
            </Route>
            <Route exact path="/quiz1">
              <Quiz {...quizQuestions[1]} />
            </Route>
            <Route exact path="/quiz2">
              <Quiz {...quizQuestions[2]} />
            </Route>
            <Route exact path="/quizResult">
              <QuizResult />
            </Route>
            <Route exact path="/login">
              <WorkInProgress />
            </Route>
            <Route exact path="/home">
              <Header />
              <Home />
              <Social />
            </Route>
            <Route exact path="/map">
              <CollectMap
                setUserLoc={setUserLoc}
                setDepositPoint={setDepositPoint}
              />
            </Route>
            <Route exact path="/deposit">
              <Header titre={headerDepot} />
              <CollectValidation
                userLoc={userLoc}
                depositPoint={depositPoint}
              />
            </Route>
            <Route exact path="/shop">
              <WorkInProgress />
            </Route>
            <Route exact path="/profile">
              <ProfileCreation />
            </Route>
            <Route exact path="/challenge">
              <WorkInProgress />
            </Route>
            <Route exact path="/tips">
              <TemporaryLinks />
            </Route>
            <Route exact path="/about">
              <WorkInProgress />
            </Route>
          </Switch>
        </div>
        {showFooter ? (
          <nav>
            <Footer />
          </nav>
        ) : (
          ''
        )}
      </Router>
    </div>
  );
}

export default App;

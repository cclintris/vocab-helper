import './App.css'
import { Router, Route, hashHistory } from 'react-router'
import Home from './pages/template/Home'
import VocabDisplayer from './components/template/VocabDisplayer'
import DailyHelper from './components/template/DailyHelper'
import AddVocab from './components/template/AddVocab'

function App() {
  return (
    <div className="App">
      <Router history={hashHistory}>
        <Route path="exact" path="/" component={Home}>
          <Route path="/addvocab" component={AddVocab}></Route>
          <Route path="/dailyhelper" component={DailyHelper}></Route>
          <Route path="/A" component={VocabDisplayer}></Route>
          <Route path="/B" component={VocabDisplayer}></Route>
          <Route path="/C" component={VocabDisplayer}></Route>
          <Route path="/D" component={VocabDisplayer}></Route>
          <Route path="/E" component={VocabDisplayer}></Route>
          <Route path="/F" component={VocabDisplayer}></Route>
          <Route path="/G" component={VocabDisplayer}></Route>
          <Route path="/H" component={VocabDisplayer}></Route>
          <Route path="/I" component={VocabDisplayer}></Route>
          <Route path="/J" component={VocabDisplayer}></Route>
          <Route path="/K" component={VocabDisplayer}></Route>
          <Route path="/L" component={VocabDisplayer}></Route>
          <Route path="/M" component={VocabDisplayer}></Route>
          <Route path="/N" component={VocabDisplayer}></Route>
          <Route path="/O" component={VocabDisplayer}></Route>
          <Route path="/P" component={VocabDisplayer}></Route>
          <Route path="/Q" component={VocabDisplayer}></Route>
          <Route path="/R" component={VocabDisplayer}></Route>
          <Route path="/S" component={VocabDisplayer}></Route>
          <Route path="/T" component={VocabDisplayer}></Route>
          <Route path="/U" component={VocabDisplayer}></Route>
          <Route path="/V" component={VocabDisplayer}></Route>
          <Route path="/W" component={VocabDisplayer}></Route>
          <Route path="/X" component={VocabDisplayer}></Route>
          <Route path="/Y" component={VocabDisplayer}></Route>
          <Route path="/Z" component={VocabDisplayer}></Route>
        </Route>
      </Router>
    </div>
  )
}

export default App

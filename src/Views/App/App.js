import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { BusLinesProvider } from "../../Contexts/BusLines";
import { SearchProvider } from "../../Contexts/SearchLines";
import { LotationLinesProvider } from "../../Contexts/LotationLines";
import { ItineraryProvider } from "../../Contexts/ItineraryLines";
import { Home } from "../Home";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchProvider>
          <BusLinesProvider>
            <LotationLinesProvider>
              <ItineraryProvider>
                <Switch>
                  <Route path="/inicio" children={<Home />} />
                  <Route path="/" children={<Redirect to="/inicio" />} />
                </Switch>
              </ItineraryProvider>
            </LotationLinesProvider>
          </BusLinesProvider>
        </SearchProvider>
      </Router>
    </div>
  );
}

export default App;

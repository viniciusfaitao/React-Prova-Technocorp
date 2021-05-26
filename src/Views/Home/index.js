import React, { useContext, useEffect, useState } from "react";
import { BusComponent } from "../../Components/Bus";
import { Footer } from "../../Components/Footer";
import { ItineraryComponent } from "../../Components/Itinerary";
import { LotationComponent } from "../../Components/Lotation";
import { ItineraryContext } from "../../Contexts/ItineraryLines";
import "./style.scss";

export const Home = () => {
  const { id } = useContext(ItineraryContext);

  const [type, setType] = useState({
    bus: false,
    lotation: false,
    itinerary: false,
  });

  useEffect(() => {
    if (id) {
      setType({ itinerary: true });
    }
  }, [id]);

  return (
    <div className="background_home">
      <header className="background_home_header">
        <h3>Selecione a linha que deseja pesquisar</h3>

        <button
          className="background_home_header--button"
          onClick={() => setType({ bus: true })}
        >
          Onibus
        </button>
        <button
          className="background_home_header--button"
          onClick={() => setType({ lotation: true })}
        >
          Lotação
        </button>
      </header>
      <main className="background_home_main">
        {type.bus && <BusComponent />}
        {type.lotation && <LotationComponent />}
        {type.itinerary && <ItineraryComponent />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

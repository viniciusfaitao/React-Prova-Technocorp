import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ItineraryContext } from "../../Contexts/ItineraryLines";
import "./style.scss";

export const ItineraryComponent = () => {
  const { itinerary } = useContext(ItineraryContext);
  return (
    <body className="background_itinerary">
      <header className="background_itinerary_header">
        <h1>Itinerário</h1>
      </header>
      <main className="background_itinerary_main">
        <div className="background_itinerary_main--posts">
          <div className="background_itinerary_main--posts--head">
            <div className="background_itinerary_main--posts--head--tables">
              <p>Trajeto</p>
            </div>
          </div>
          <div>
            {Object.values(itinerary).map((index) => (
              <div
                className="background_itinerary_main--posts--content"
                key={index}
              >
                <div className="background_itinerary_main--posts--content--itinerary">
                  <button
                    onClick={() => {
                      var win = window.open(
                        `https://www.google.com/maps/?q=${index.lat},${index.lng}`,
                        "_blank"
                      );
                      win.focus();
                    }}
                  >
                    Maps <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </body>
  );
};

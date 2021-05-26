import axios from "axios";

const url = "http://www.poatransporte.com.br/";

export const UseItinerary = async (props) => {
  let result = parseInt(props);
  try {
    const response = await axios.get(
      `${url}/php/facades/process.php?a=il&p=${result}`
    );

    return response.data;
  } catch (e) {
    console.error("Error cause:" + e.message);
    return e.message;
  }
};

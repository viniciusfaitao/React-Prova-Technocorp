import axios from "axios";

const url = "http://www.poatransporte.com.br/";

export const UseBusLines = async (filter) => {
  try {
    const response = await axios.get(
      `${url}/php/facades/process.php?a=nc&p=${filter}%&t=o`
    );
    return response.data;
  } catch (e) {
    console.error("Error cause:" + e.message);
    return e.message;
  }
};

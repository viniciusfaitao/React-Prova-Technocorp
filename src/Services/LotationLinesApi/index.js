import axios from "axios";

const url = "http://www.poatransporte.com.br/";

export const UseLotationLines = async (filter) => {
  try {
    const response = await axios.get(
      `${url}/php/facades/process.php?a=nc&p=${filter}%&t=l`
    );

    return response.data;
  } catch (e) {
    console.error("Error cause:" + e.message);
    return e.message;
  }
};

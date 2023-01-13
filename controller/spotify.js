const axios = require("axios");

const Spotify = async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: "<REQUIRED>",
        type: "multi",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
        "X-RapidAPI-Key": "5d5ebf8599msh955600643ea6899p19c312jsn9d5123fba898",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {}
};
module.exports = { Spotify };

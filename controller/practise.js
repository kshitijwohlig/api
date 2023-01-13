const axios = require("axios");

// const liveScore = async (req, res) => {
//   try {

//     // live score starts
//     const options = {
//       method: "GET",
//       url: "https://livescore6.p.rapidapi.com/matches/v2/list-live",
//       params: { Category: "soccer", Timezone: "-7" },
//       headers: {
//         "X-RapidAPI-Key": "5d5ebf8599msh955600643ea6899p19c312jsn9d5123fba898",
//         "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//         res.send(response.data)
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//     // live score ends

//   } catch (err) {
//     res.status(500).json('error:' + err);
//   }
// };

const practise = async(req,res)=>{
   try{
    const result = await axios.get('http://localhost:7200/prac2/');
    console.log(result.data,"results are here");
    // res.status(200).json(result.data)
    res.json(result.data)
    // res.json(result);
   }catch(err){
    res.status(500).json('error:' + err);
   }
}
module.exports = { practise };

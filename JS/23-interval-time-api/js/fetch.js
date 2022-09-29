let url = "https://dad-jokes.p.rapidapi.com/random/joke";
const BASE_URL = "https://dad-jokes.p.rapidapi.com/";
let headers = {
  "X-RapidAPI-Key": "919db76066mshf08a00faa8e7aefp1c8d97jsn88057ed89e90",
  "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
};
let jokeId = "60dd35badf9cadd655935e07";

let fetchJoke = async () => {
  let data = await axios({
    method: "get",
    url: url,
    headers: headers,
  });

  console.log(data.data.body[0]);
  headers["Accept"] = " text/plain";
  let grateJoke = await axios({
    method: "get",
    url: `https://dad-jokes.p.rapidapi.com/joke/5f80ccd641785ba7c7d27b66`,
    headers: headers,
  });

  console.log(grateJoke);
};

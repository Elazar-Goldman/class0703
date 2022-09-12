let url = "http://fs1.co.il/bus/bitcoin.php";
let url2 = "http://fs1.co.il/bus/tv.php";

let doApi = async () => {
  let data = await axios.get(url);
  console.log(data.data);

  let myData = await axios({
    method: "get",

    url: url2,
  });

  console.log(myData);
};

doApi();

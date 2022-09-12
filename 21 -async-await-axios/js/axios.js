let url = "http://fs1.co.il/bus/bitcoin.php";

let doApi = async () => {
  let data = await axios.get(url);
  console.log(data.data);
  
};

doApi();

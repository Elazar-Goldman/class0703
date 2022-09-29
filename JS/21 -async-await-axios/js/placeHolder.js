const Base_Url = "https://jsonplaceholder.typicode.com/";
let fitchData = async () => {
  let iceCream = await axios({
    method: "get",
    url: Base_Url + "posts",
  });
  console.log(iceCream.data);

  let info = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  let jsonIndfo = JSON.stringify(info);

  let myFirstPost = await axios({
    method: "post",
    url: Base_Url + "posts",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "text.plane",
    },
  });

  console.log(myFirstPost.status);
  console.log(myFirstPost);
};

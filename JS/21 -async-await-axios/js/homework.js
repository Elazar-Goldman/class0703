console.log("hello");

let myCalc = async (num1, num2) => {
  // logic

  if (num1 < num2) {
    throw new error("No good");
  }

  // I can place all of my logic, and return what ever
  return num1 + num2;
};

myCalc(2, 4)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("num 1 small");
    console.log(err);
  });

let url = "../js/pageObj.json";
let webPages = "";

// brings data to my project
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    objMaker(data);
    console.log(data);
  })
  .catch();

// make a function to take out the data

let objMaker = (pageObj) => {
  console.log(pageObj);
  webPages = pageObj;
};

const fakeApi = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //destructioring - taking out pages
      let { pages } = webPages;
      if (pages[url]) {
        res(pages[url]);
      } else {
        rej();
      }
    }, 2000);
  });
};

let findData = async () => {
  try {
    let users = await fakeApi("/users");
    console.log(users);
    // destuc\turing of araay
    let [david, Laura, Karim] = users;
    let jsonLaura = JSON.stringify(Laura);
    let newLaura = JSON.parse(jsonLaura);

    newLaura.email = "laura.pizza@gmail.yammy.com";
    console.log(newLaura);
    console.log(webPages.pages["/users"][1]);
    // let tamar = users[1];
    console.log(david);
    let chosenOne = users.filter((item) => item.name === "David");
    //destructioring - taking out id, change name on the right hand side of the :
    let { id: userId } = chosenOne[0];
    console.log(userId);

    try {
      let userInfo = await fakeApi(`/user/${userId}`);
      let [chosenPost] = userInfo.postId;
      try {
        let thePost = await fakeApi(`/post/${chosenPost}`);

        console.log(thePost);
      } catch {
        console.log("ooohhohoooho something didnt work Post");
      }
    } catch {
      console.log("ooohhohoooho something didnt work userId");
    }
  } catch {
    console.log("ooohhohoooho something didnt work user call");
  }
  console.log("after catch");
};

let url = "../js/pageObj.json";
let webPages = "";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    objMaker(data);
    console.log(data);
  })
  .catch();

// make a function to take out the data

let objMaker = (pageJson) => {
  console.log(pageJson);
  webPages = pageJson;
};

console.log(webPages);

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

fakeApi("/users")
  .then((data) => {
    console.log(data);
    // data is giving us an array with obj
    //lets single out David
    let wanted = data.filter((author) => {
      return author.name === "David";
    });
    let wantedId = wanted[0].id;
    // this is for chaning promises 
    return fakeApi(`/user/${wantedId}`);
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Page 404");
  });

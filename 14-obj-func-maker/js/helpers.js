export const UserMaker =(name, email, pass, arr)=>{

    let obj ={
        // this is to populate the values of the object
        name:name,
        // if the key's and value's are the same then we can use just
         email, 
        pass
    }

    arr.push(obj)

}

export const LocalStoreSavior =(item,key, index)=>{
// get VAlue from storage 
    let extArr = window.localStorage.getItem(key);
// parse the value
    let tempArr = JSON.parse(extArr)
// minpulate the data
    tempArr.push(item[index-1])
// save the minpulated data
  let valToStore =  JSON.stringify(tempArr);
    window.localStorage.setItem(key, valToStore)

}


export const getFromStore = key =>{

    let extArr = window.localStorage.getItem(key);
    let tempArr = JSON.parse(extArr);

    return tempArr
}


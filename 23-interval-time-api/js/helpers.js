// use the = 
export const rgbMaker =(more = 0)=>{
    let r = Math.floor(Math.random()*256)
    // this if is for not to be above 255
     r = r+more >255 ? 255 : r+more;
    let g = Math.floor(Math.random()*256)
    g = g+more >255 ? 255 : g+more 
    let b = Math.floor(Math.random()*256)
    b = b+more >255 ? 255 : b+more 

    let color = `rgb(${r},${g},${b})`
    let sum = r+g+b

    let resoults = {
        color,
        sum
    }
    
    return resoults

}
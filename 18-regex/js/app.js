let myReg = /x/g;

// squere brasckts will match any of the icnluded letters

let pregapha = "All Zebras zzz when they are dazed";

let allZ = / [Zz]/g;

let res = pregapha.matchAll(allZ);

console.log(res.next());

// \w any char, so if i want a 3 letter word I can do \w\w\w

// \s any white space

// + sign mathches one or more of what ever came before

let jokes = /ha+/g;

// this will matach ha and also haaaaaa and /h+a+/ will also match hhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaa

// * will match zero or more of the previos token

// {3} specfieies how many of the charcter before

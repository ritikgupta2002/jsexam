const { promises: fsPromises } = require("fs");
var globalarr = [];
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");
    const arr = contents.split(/\r?\n/);
    for (i = 0; i < arr.length; i++) {
      gettheword(arr[i]);
    }
    globalarr.sort();
    str=globalarr.toString();
    await fsPromises.writeFile("output.txt", str, (err) => {
      if (err) throw err;
    });
    return globalarr;
  } catch (err) {
    console.log(err);
  }
}


function gettheword(str) {
  if (str.length >= 2) {
    if (str[1] == "a" && str[str.length - 1] == "a") {
      globalarr.push(str);
    }
  }
}

asyncReadFile("names.txt");

// /* globals require */
// console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyw5v6LxIabKZUt7" }).base(
  "appncfimbiSqlTxDx"
);
console.log('11111===>',base)
//get the collection base, select ALL the records, and specify the functions that will receive the data
base("furnitures").select({}).eachPage(gotPageOfFurnitures, gotAllFurnitures);

// an empty array to hold our data
const furnitures = [];

// callback function that receives our data
function gotPageOfFurnitures(records, fetchNextPage) {
  console.log("gotPageOfFurnitures()");
  // add the records from this page to our books array
  furnitures.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllFurnitures(err) {
  console.log("gotAllFurnitures()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogFurnitures();
  showFurnitures();
}

// just loop through the books and console.log them
function consoleLogFurnitures() {
  console.log("consoleLogFurnitures()");
  furnitures.forEach((furniture) => {
    console.log("Furniture:", furniture);
  });
}

// loop through the furnitures, create an h2 for each one, and add it to the page
function showFurnitures() {
  console.log("showFurnitures()");
  furnitures.forEach((furniture) => {
    //上面部分都是连接airtable需要的代码，从下面开始styling
    //这些都只是非常基础的框架，给出怎么连接api的方法，所有的图片我都连接上了
    //具体的排版样子和动画请参考我给的模版，
    //每个房间应该是独立的一个分类

    //方框
    //图片的方框
    var previewImage = document.createElement("div");
    previewImage.classList.add("image-container");
    document.querySelector(".grid").append(previewImage);

    //连接家具的图片{airtable里的img}
    var furnitureImage = document.createElement("img");
    furnitureImage.classList.add("preview-image");
    //通过array连接
    furnitureImage.src = furniture.fields.image[0].url;
    //append
    previewImage.append(furnitureImage);

    //连接家具的名字[airtable：name]
    var furnitureName = document.createElement("h2");
    furnitureName.innerText = furniture.fields.name;
    furnitureName.classList.add("name");
    previewImage.append(furnitureName);

    //连接设计师的名字（{airtable：designer}
    var nameOfDesigner = document.createElement("h4");
    nameOfDesigner.classList.add("designer");
    nameOfDesigner.innerText = furniture.fields.designer;
    previewImage.append(nameOfDesigner);

    // 连接airtable的“floor”来进行分类
    var furnitureGenre = furniture.fields.floor;
    furnitureGenre.forEach(function (floor) {
      previewImage.classList.add(floor);
    });

    //房间分类
    //连接airtable的每个“floor”里的标签
    var furnitureGenre = furniture.fields.floor;
    furnitureGenre.forEach(function (floor) {
      previewImage.classList.add(floor);
    });

    //分类：101-diningtable
    var filterDiningTable = document.querySelector(".diningtable");
    filterDiningTable.addEventListener("click", function () {
      if (previewImage.classList.contains("diningtable")) {
        previewImage.style.display = "flex";
      } else {
        previewImage.style.display = "none";
      }
    });
    //分类102:coffeetable
    var filterCoffeeTable = document.querySelector(".coffeetable");
    filterCoffeeTable.addEventListener("click", function () {
      if (previewImage.classList.contains("coffeetable")) {
        previewImage.style.display = "flex";
      } else {
        previewImage.style.display = "none";
      }
      //每个别的分类可以根据给的名字复制黏贴这个代码就能连接api了

      //我这里为了方便搞了个重置键，这个作业不需要
    });
    var filterReset = document.querySelector(".reset");
    filterReset.addEventListener("click", function () {
      previewImage.style.display = "flex";
    });

    //点击每张图片显示详细信息的信息框，我这里随便选了颜色
    furnitureImage.addEventListener("click", function () {
      nameOfDesigner.style.opacity = "1";
      nameOfDesigner.style.color = "pink";
      furnitureName.style.opacity = "1";
      furnitureName.style.color = "pink";
      button.style.opacity = "1";
      button.style.color = "pink";
    });

    //信息框的“X”关闭按钮
    //
    var button = document.createElement("h4");
    button.classList.add("button");
    button.innerText = "X";
    previewImage.append(button);
    //按掉“X”之后所有信息消失
    button.addEventListener("click", function () {
      nameOfDesigner.style.opacity = "0";
      furnitureName.style.opacity = "0";
      button.style.opacity = "0";
    });

    furnitureImage.addEventListener("click", function () {
      nameOfDesigner.style.color = "pink";
      furnitureName.style.color = "pink";
      button.style.color = "pink";
    });
  });
}

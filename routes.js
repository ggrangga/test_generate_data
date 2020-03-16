const generateCode = require("./generateCode");
const dateFormat = require("dateformat");
const fs = require("fs");

module.exports = app => {
  app.get("/", function(req, res) {
    res.send("Hello World");
  });
  app.post("/generate", async (req, res) => {
    let param = req.body;

    var arr = [];
    if (param.name === "putra") {
      let _bodyObject = {
        transactionCode: "", //52959-534
        partnerOrg: "", //Bryna Huskisson
        amount: "", //$1.43
        notes: "", //Lacerat unsp blood vessel at lower leg level, unsp leg, init
        transactionDate: "", //5/31/2019
        transactionId: "", //03ff47bb-79da-4300-94b5-b71536a460e4
        transactionDescription: "" //Bypass R Ext Iliac Art to L Ext Ilia, Perc Endo Approach
      };

      for (var x = 0; x < parseInt(param.index); x++) {
        var thisObj = JSON.parse(JSON.stringify(_bodyObject));
        thisObj.transactionCode = generateCode.generateTransactionCode();
        thisObj.partnerOrg = generateCode.generatePartnerOrg();
        thisObj.amount = generateCode.generateAmount();
        thisObj.notes = generateCode.generateStr();
        thisObj.transactionDate = generateCode.generateTransactionDate();
        thisObj.transactionId = generateCode.first();
        thisObj.transactionDescription = generateCode.generateStr();
        arr.push(thisObj);
      }
    } else {
      let _bodyObject = {
        amount: 0, //12345678,
        notes: "", //"Partner A kirim uang {amount}",
        partnerName: "", //"Partner A",
        transactionCode: "", //"TRXC01",
        transactionDate: "", //"16/03/2020",
        transactionId: "" //"TRX0001"
      };

      for (var x = 0; x < parseInt(param.index); x++) {
        var thisObj = JSON.parse(JSON.stringify(_bodyObject));
        thisObj.amount = generateCode.generateAmount01();
        thisObj.notes = generateCode.generateStr();
        thisObj.partnerName = generateCode.generatePartnerOrg();
        thisObj.transactionCode = generateCode.first();
        thisObj.transactionDate = generateCode.generateTransactionDate();
        thisObj.transactionId = generateCode.generateTransactionCode();
        arr.push(thisObj);
      }
    }

    var nameFile =
      param.name +
      "_" +
      dateFormat(new Date(), "ddmmyyyyHHMMssl") +
      "_" +
      param.index +
      ".json";
    //worked
    fs.writeFile(nameFile, JSON.stringify(arr), function(err) {
      if (err) console.log(err);
      console.log(err);
      console.log("complete");
    });
    res.status(200).send({ status: "sukses", idx: x, file: nameFile });
  });
};

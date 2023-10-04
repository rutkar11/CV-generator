const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserResumeData = require("./models/userResumeSchema");
const app = express();
const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");
const fs = require("fs");
const path = require("path");
var convertapi = require("convertapi")("DrsTYK50kZAovpAt");//DrsTYK50kZAovpAt
const axios = require("axios");

app.use(cors());

// require("dotenv").config();
require('dotenv').config({
  path: `${__dirname}/.env`
})

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.use(express.json());

// set the data to DB
app.post("/api", async (req, res) => {
  const data = await UserResumeData.create(req.body);
  res.send({ success: true, resumeData: data });
});

// get UserResumeData from DB
app.get("/api/:id", async (req, res) => {
  const data = await UserResumeData.findById(req.params.id);

  const content = fs.readFileSync(
    path.resolve(__dirname, "resume 1.docx"),
    "binary"
  );
  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });
  doc.render({
    userFirstName: data.userFirstName,
    userSecondName: data.userSecondName,
    userEmail: data.userEmail,
    userPhoneNumber: data.userPhoneNumber,
    userProfession: data.userProfession,
    // userProfileDescription: data.userProfileDescription,
    // userPortfolioWebsite: data.userPortfolioWebsite,
    userGitHubProfile: data.userGitHubProfile,
    userLinkedInProfile: data.userLinkedInProfile,
    userCollegeDegreeName: data.userCollegeDegreeName,
    userCollegeName: data.userCollegeName,
    userCollegeStartingDate: data.userCollegeStartingDate,
    userCollegeEndingDate: data.userCollegeEndingDate,
    userCollegeGpa: data.userCollegeGpa,
    userCollegeLoc: data.userCollegeLoc,
    userHighSchName: data.userHighSchName,
    userHighSchStartDate: data.userHighSchStartDate,
    userHighSchEndDate: data.userHighSchEndDate,
    userHighSchPercentage: data.userHighSchPercentage,
    userHighSchLoc: data.userHighSchLoc,
    userTechSkills: data.userTechSkills,
    userSoftSkills: data.userSoftSkills,
    user1stJobRole: data.user1stJobRole,
    user1stCompanyName: data.user1stCompanyName,
    user1stExpStartDate: data.user1stExpStartDate,
    user1stExpEndDate: data.user1stExpEndDate,
    user1stLoc: data.user1stLoc,
    user1stJobDesc: data.user1stJobDesc,
    user2ndJobRole: data.user2ndJobRole,

    user2ndCompanyName: data.user2ndCompanyName,
    user2ndExpStartDate: data.user2ndExpStartDate,

    user2ndExpEndDate: data.user2ndExpEndDate,

    user2ndLoc: data.user2ndLoc,
    
    user2ndJobDesc: data.user2ndJobDesc,
    userProj1Name: data.userProj1Name,
    userProj1Description: data.userProj1Description,

    userProj2Name: data.userProj2Name,
    userProj2Description: data.userProj2Description,
  });

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });

  // buf is a nodejs Buffer, you can either write it to a
  // file or res.send it with express.
  fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
  res.send({ success: true, resumeData: data });
});

// send pdf file to frontend
app.get("/api/pdf/:id", async (req, res) => {
  await convertapi.convert('pdf', { File: 'output.docx' })
  .then(function(result) {
    // get converted file url
    console.log("Converted file url: " + result.file.url);

    // save to file
    return result.file.save('op.pdf');
  })
  .then(function(file) {
    console.log("File saved: " + file);
  })
  .catch(function(e) {
    console.error(e.toString());
  });
  const pdfFilePath = path.join(__dirname, './op.pdf');
  res.sendFile(pdfFilePath);
});

var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `server is listening at port ${port} in ${process.env.NODE_ENV} environment`
  );
});

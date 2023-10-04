const mongoose = require("mongoose");

const userResumeSchema = mongoose.Schema({
  userFirstName: String,
  userSecondName: String,
  userProfession: String,
  userProfileDescription: String,
  
  userPhoneNumber: String,
  userEmail: String,
  
  userPortfolioWebsite: String,
  userGitHubProfile: String,
  userLinkedInProfile: String,
  
  userCollegeDegreeName: String,
  userCollegeName: String,
  userCollegeStartingDate: String,
  userCollegeEndingDate: String,
  userCollegeGpa: String,
  userCollegeLoc: String,

  userHighSchName: String,
  userHighSchStartDate: String,
  userHighSchEndDate: String,
  userHighSchPercentage: String,
  userHighSchLoc: String,
  
  userTechSkills : String,
  userSoftSkills : String,

  user1stJobRole: String,
  user1stCompanyName: String,
  user1stExpStartDate: String,
  user1stExpEndDate: String,
  user1stLoc: String,
  user1stJobDesc: String,
  user2ndJobRole: String,
  user2ndCompanyName: String,
  user2ndExpStartDate: String,
  user2ndExpEndDate: String,
  user2ndLoc: String,
  user2ndJobDesc: String,


  userProj1Name: String,
  userProj1Description: String,
  userProj1Link: String,
  
  userProj2Name: String,
  userProj2Description: String,
  userProj2Link: String,
});

const UserResumeSchema = mongoose.model("UserResumeData", userResumeSchema);

module.exports = UserResumeSchema;

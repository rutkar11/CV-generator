import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import axios from "axios";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "katex/dist/katex.min.css";
import { saveAs } from "file-saver";
import LoadingScreen from "../Loader";

const ResumeComponent = ({ match }) => {
  const [userResumeData, setUserResumeData] = useState({});
  const [mounted, setMounted] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(
          // `https://guptakeshav0828-ni7v5xkfha-em.a.run.app/api/${match.params.id}`
          // `http://localhost:5000/api/${match.params.id}`
          `https://rutkarcvgen-vnhyhpggya-em.a.run.app/api/${match.params.id}`
        );
        if (res.data.success) {
          setMounted(true);
          setUserResumeData(res.data.resumeData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [match.params.id]);

  const handleOnPrint = () => {
    const element = document.getElementById("resume");

    // Create a function to set up the pdf generation
    const generatePdf = async () => {
      // Calculate the scale factor based on the page size and content size
      const pageWidth = 8.5; // Letter page width in inches
      const pageHeight = 11; // Letter page height in inches
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      const scale = Math.min(
        pageWidth / elementWidth,
        pageHeight / elementHeight
      );

      // Create a canvas element to render the content
      const canvas = document.createElement("canvas");
      canvas.width = pageWidth * 96; // 96 DPI
      canvas.height = pageHeight * 96;
      const context = canvas.getContext("2d");

      // Scale and draw the content on the canvas
      context.scale(scale * 96, scale * 96); // Scale to DPI
      await html2canvas(element, { canvas: canvas });
      // canvas.backgroundColor = "null";

      // Convert the canvas to a PDF
      const pdf = new jsPDF("portrait", "in", [pageWidth, pageHeight]);
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 1.0),
        "JPEG",
        0,
        0,
        pageWidth,
        pageHeight
      );

      // Save or open the PDF
      pdf.save("resume.pdf");
    };

    // Call the generatePdf function to create and save the PDF
    generatePdf();
  };

  const handleOnPrint1 = () => {
    var element = document.getElementById("resume");
    const pageWidth = 8.5; // Letter page width in inches
    const pageHeight = 11; // Letter page height in inches
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
    const scale = Math.min(
      pageWidth / elementWidth,
      pageHeight / elementHeight
    );

    var opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: scale,
        height: pageWidth * 96,
        width: pageWidth * 96,
      },
      // html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
    // html2pdf("hellWorld ").save();
    // window.print();
  };

  const handleOnPrint2 = async () => {
    try {
      setIsFetching(true);
      const response = await axios.get(
        // `http://localhost:5000/api/pdf/${match.params.id}`,
        `https://rutkarcvgen-vnhyhpggya-em.a.run.app/api/pdf/${match.params.id}`,
        {
          responseType: "blob", // Set responseType to 'blob' to receive binary data
        }
      );
      setIsFetching(false);

      // Extract the file name from the response headers (if available)
      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch =
        contentDisposition && contentDisposition.match(/filename="(.+)"/);

      // Determine the file name for saving
      const fileName = fileNameMatch ? fileNameMatch[1] : "Resume.pdf";

      // Use FileSaver.js to trigger the download
      saveAs(new Blob([response.data], { type: "application/pdf" }), fileName);
    } catch (error) {
      setIsFetching(false);
      console.error("Error downloading PDF:", error);
    } finally {
      setIsFetching(false); // Hide the loading overlay
    }
  };
  return (
    <Fragment>
      {mounted ? (
        <Container className="mt-4 mb-2">
          <LoadingScreen isLoading={isFetching} />
          <main id="resume" className="resume-section pl-4">
            <header>
              <Row className="border-bottom border-dark w-100">
                <Col sm={12} md={6} className="py-4 px-4">
                  <h1 className="text-dark font-weight-bold">
                    {userResumeData.userFirstName}{" "}
                    {userResumeData.userSecondName}
                  </h1>
                  <h4 className="h5 text-dark">
                    {userResumeData.userProfession}
                  </h4>
                  <div className="w-25 d-flex justify-content-between user-social-icons">
                    <a
                      href={
                        String(userResumeData.userLinkedInProfile).startsWith(
                          "http"
                        )
                          ? userResumeData.userLinkedInProfile
                          : `https://${userResumeData.userLinkedInProfile}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href={
                        String(userResumeData.userPortfolioWebsite).startsWith(
                          "http"
                        )
                          ? userResumeData.userPortfolioWebsite
                          : `https://${userResumeData.userPortfolioWebsite}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark"
                    >
                      <BiLink />
                    </a>

                    <a
                      href={
                        String(userResumeData.userGitHubProfile).startsWith(
                          "http"
                        )
                          ? userResumeData.userGitHubProfile
                          : `https://${userResumeData.userGitHubProfile}`
                      }
                      target="_blank"
                      className="text-dark"
                      rel="noreferrer"
                    >
                      <FaGithubSquare />
                    </a>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <p className="py-4 text-dark">
                    {userResumeData.userProfileDescription}
                  </p>
                </Col>
                <Col sm={12} md={6} className="my-4">
                  <ul>
                    <li className="d-flex align-items justify-content-start">
                      <h6 className="font-weight-bold text-dark">
                        Email Address:
                      </h6>
                      <p className="px-2">{userResumeData.userEmail}</p>
                    </li>
                  </ul>
                </Col>
                <Col sm={12} md={6} className="my-4">
                  <ul>
                    <li className="d-flex align-items justify-content-start">
                      <h6 className="font-weight-bold text-dark">
                        Phone Number:
                      </h6>
                      <p className="px-2">{userResumeData.userPhoneNumber}</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </header>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Educational Info
              </h1>
              <ul>
                <li>
                  <Col>
                    <h3 className="text-dark font-weight-bold">High School</h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.userHighSchName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      {userResumeData.userHighSchStartDate} -
                      {userResumeData.userHighSchEndDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.userHighSchPercentage}% -{" "}
                      {userResumeData.userHighSchLoc}
                    </p>
                  </Col>
                </li>
                <li>
                  <Col>
                    <h3 className="text-dark font-weight-bold">
                      {userResumeData.userCollegeDegreeName}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.userCollegeName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      {userResumeData.userCollegeStartingDate} -
                      {userResumeData.userCollegeEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      GPA: {userResumeData.userCollegeGpa} -{" "}
                      {userResumeData.userCollegeLoc}
                    </p>
                  </Col>
                </li>
              </ul>
            </Row>
            <Row className="w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Professional Info
              </h1>
              <Col className="py-4">
                <ul>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      {userResumeData.user1stJobRole}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user1stCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      {userResumeData.user1stExpStartDate} -{" "}
                      {userResumeData.user1stExpEndDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user1stJobDesc} -{" "}
                      {userResumeData.user1stLoc}
                    </p>
                  </li>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      {userResumeData.user2ndJobRole}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user2ndCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      {userResumeData.user2ndExpStartDate} -{" "}
                      {userResumeData.user2ndExpEndDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user2ndJobDesc} -{" "}
                      {userResumeData.user2ndLoc}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <h1 className="w-100"> Skills </h1>
              <Col>
                <p>Tech: {userResumeData.userTechSkills}</p>
              </Col>
              <Col>
                <p>Soft: {userResumeData.userSoftSkills}</p>
              </Col>
            </Row>
          </main>

          <Button
            variant="dark"
            as={Col}
            sm={12}
            className="py-2 my-3 text-white font-weight-bold"
            onClick={handleOnPrint2}
          >
            Print
          </Button>
        </Container>
      ) : (
        "Loading....."
      )}
    </Fragment>
  );
};

export default ResumeComponent;

<Container className="mt-5 mb-2">
      <Form className="form-section">
        <h1 className="text-dark font-weight-bold py-3">General Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              placeholder="First Name"
              onChange={(e) => handleChange(e, setUserFirstName)}
              value={userFirstName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Last Name"
              onChange={(e) => handleChange(e, setUserSecondName)}
              value={userSecondName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>user Profession</FormLabel>
            <FormControl
              type="text"
              placeholder="userProfession"
              onChange={(e) => handleChange(e, setUserProfession)}
              value={userProfession}
              required
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl
              type="number"
              placeholder="+01234 56789"
              onChange={(e) => handleChange(e, setUserPhoneNumber)}
              value={userPhoneNumber}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl
              type="email"
              placeholder="info@domain.com"
              onChange={(e) => handleChange(e, setUserEmail)}
              value={userEmail}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Profile description</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={(e) => handleChange(e, setUserProfileDescription)}
              value={userProfileDescription}
              required
            />
          </FormGroup>
        </Form.Row>

        <h1 className="text-dark font-weight-bold py-4">Social Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Portfolio Website URL</FormLabel>
            <FormControl
              type="href"
              onChange={(e) => handleChange(e, setUserPortfolioWebsite)}
              value={userPortfolioWebsite}
              required
            ></FormControl>
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Github Profile URL</FormLabel>
            <FormControl
              type="href"
              onChange={(e) => handleChange(e, setUserGitHubProfile)}
              value={userGitHubProfile}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>LinkedIn Profile URL</FormLabel>
            <FormControl
              type="href"
              onChange={(e) => handleChange(e, setUserLinkedInProfile)}
              value={userLinkedInProfile}
              required
            />
          </FormGroup>
        </Form.Row>

        <h1 className="text-dark font-weight-bold py-4">Education</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> College Name </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserCollegeName)}
              value={userCollegeName}
              required
            ></FormControl>
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> College Degree Name</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserCollegeDegreeName)}
              value={userCollegeDegreeName}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> College Gpa</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserCollegeGpa)}
              value={userCollegeGpa}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> College Location</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserCollegeLoc)}
              value={userCollegeLoc}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Start Date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUserCollegeStartingDate)}
              value={userCollegeStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> End Date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUserCollegeEndingDate)}
              value={userCollegeEndingDate}
              required
            />
          </FormGroup>
        </Form.Row>
        <h3>High school details</h3>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> High School Name </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserHighSchName)}
              value={userHighSchName}
              required
            ></FormControl>
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> High School Percentage</FormLabel>
            <FormControl
              type="number"
              onChange={(e) => handleChange(e, setUserHighSchPercentage)}
              value={userHighSchPercentage}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> High Sc Location</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserHighSchLoc)}
              value={userHighSchLoc}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Start Date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUserHighSchStartDate)}
              value={userHighSchStartDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> End Date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUserHighSchEndDate)}
              value={userHighSchEndDate}
              required
            />
          </FormGroup>
        </Form.Row>

        <h1 className="text-dark font-weight-bold py-4">Education</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Technical Skills</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserTechSkills)}
              value={userTechSkills}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Soft Skills</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserSoftSkills)}
              value={userSoftSkills}
              required
            />
          </FormGroup>
        </Form.Row>

        <h1 className="text-dark font-weight-bold py-4">Experience</h1>
        <h4 className="text-dark font-weight-bold py-4">1st Job</h4>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUser1stCompanyName)}
              value={user1stCompanyName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Job Role</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUser1stJobRole)}
              value={user1stJobRole}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          {/* <FormGroup as={Col} sm={12} md={4}> */}
          <FormLabel> Job description</FormLabel>
          <FormControl
            as="textarea"
            onChange={(e) => handleChange(e, setUser1stJobDesc)}
            value={user1stJobDesc}
            required
          />
          {/* </FormGroup> */}
        </Form.Row>
        <br />
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Start date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUser1stExpStartDate)}
              value={user1stExpStartDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> End date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUser1stExpEndDate)}
              value={user1stExpEndDate}
              required
            />
          </FormGroup>
        </Form.Row>

        <h4 className="text-dark font-weight-bold py-4">2nd Job</h4>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUser2ndCompanyName)}
              value={user2ndCompanyName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Job Role</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUser2ndJobRole)}
              value={user2ndJobRole}
              required
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          {/* <FormGroup as={Col} sm={12} md={4}> */}
          <FormLabel> Job description</FormLabel>
          <FormControl
            as="textarea"
            onChange={(e) => handleChange(e, setUser2ndJobDesc)}
            value={user2ndJobDesc}
            required
          />
          {/* </FormGroup> */}
        </Form.Row>
        <br />
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Start date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUser2ndExpStartDate)}
              value={user2ndExpStartDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> End date</FormLabel>
            <FormControl
              type="date"
              onChange={(e) => handleChange(e, setUser2ndExpEndDate)}
              value={user2ndExpEndDate}
              required
            />
          </FormGroup>
        </Form.Row>

        <h1 className="text-dark font-weight-bold py-4">Projects</h1>
        <h4 className="text-dark font-weight-bold py-4">1st Project</h4>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Project Name </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserProj1Name)}
              value={userProj1Name}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Project Link </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserProj1Link)}
              value={userProj1Link}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          {/* <FormGroup as={Col} sm={12} md={4}> */}
          <FormLabel> Project description</FormLabel>
          <FormControl
            as="textarea"
            onChange={(e) => handleChange(e, setUserProj1Description)}
            value={userProj1Description}
            required
          />
        </Form.Row>
        <br />
        <Form.Row>
        </Form.Row>

        <h4 className="text-dark font-weight-bold py-4">2nd Project</h4>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Project Name </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserProj2Name)}
              value={userProj2Name}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Project Link </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => handleChange(e, setUserProj2Link)}
              value={userProj2Link}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          {/* <FormGroup as={Col} sm={12} md={4}> */}
          <FormLabel> Project description</FormLabel>
          <FormControl
            as="textarea"
            onChange={(e) => handleChange(e, setUserProj2Description)}
            value={userProj2Description}
            required
          />
        </Form.Row>
        <br />
        <Button
          variant="dark"
          type="button"
          as={Col}
          sm={12}
          className="py-3 my-3"
          onClick={handleUserResumeData}
        >
          Generate CV
        </Button>
      </Form>
    </Container>
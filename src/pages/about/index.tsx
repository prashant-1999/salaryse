import React from "react";
import Header from "../../components/Header/index";
import FiftyMil from "../../components/fiftyMil/index";
import { Button, Img, List, Text } from "components";
import Footer from "../../components/Footer/Footer";
import "../../styles/custom.css";
const WebsitePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-notosans items-center justify-start mx-auto w-full">
        <Header className="border-b border-solid border-white-A700_33 flex md:gap-10 items-center justify-between px-20 md:px-5 py-4 w-full" />

        <div
          className="bg-cover bg-no-repeat flex flex-col h-[540px] items-center justify-start p-[120px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group4.png')" }}
        >
          {/* about us text */}
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1040px] mx-auto my-16 w-full">
            <Text
              className="md:text-5xl text-6xl text-white-A700 tracking-[-1.20px] w-auto"
              size="txtNotoSansBold60"
            >
              <span className="text-white-A700 font-notosans text-left font-bold">
                About Salary
              </span>
              <span className="text-lime-A200 font-notosans text-left font-bold">
                Se
              </span>
            </Text>
            <Text
              className="leading-[30.00px] max-w-[1040px] md:max-w-full text-white-A700 text-xl"
              size="txtNotoSansRegular20"
            >
              At SalarySe, we are building a full stack financial platform that
              will help more than 50 million salaried employees in India spend,
              save, invest and plan their salaries smartly.
            </Text>
          </div>
        </div>

        {/* meet the founders */}
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1040px] mx-auto md:px-5 w-full founder">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <Text
              className="md:text-5xl text-6xl text-white-A700 tracking-[-1.20px] w-auto"
              size="txtNotoSansBold60"
            >
              Meet the founders
            </Text>
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtNotoSansRegular20"
            >
              Masterminds behind our journey
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            {/* founder 1 */}
            <div className="md:h-[363px] h-[200px] pt-2.5 relative w-full founder">
              {/* founder card */}
              <div className="relative  md:h-[363px] h-[350px]  ">
                {/*founder desc  */}
                <div className="absolute bg-black-900_33 border-2 border-solid border-white-A700_33 bottom-[0] flex flex-col  items-start justify-end mx-auto p-6 sm:px-5 rounded-[24px] w-full">
                  <Text
                    className="mt-[153px] text-white-A700 text-xl"
                    size="txtNotoSansBold20"
                  >
                    Mohit Gorisariya
                  </Text>

                  {/* linkedin */}
                  {/* <div className="social--link">
                    
                    <Text
                      className=" text-lime-A200 "
                      size="txtNotoSansBold16LimeA200"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className=""
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div> */}
                  <a href="https://www.linkedin.com/in/mohit-gorisariya-77b48215/" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-row gap-2   mt-12 w-auto ">
                    <Text
                      className="text-base text-center text-lime-A200 w-auto"
                      size="txtNotoSansBold16"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className="h-6 w-6 social--link"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  </a>
                  
                </div>
                {/* founder image */}
                <div className="relative bg-black-900    mx-auto rounded-[40px]  w-[85%] image--card">
                  <Img
                    className="founder--image"
                    src="images/mohit.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              {/* white frames */}
              <Img
                className="absolute h-[52px]  mx-auto top-[2%]"
                src="images/img_frame632266.svg"
                alt="frame632266"
              />
            </div>

            <div className="md:h-[363px] h-[460px] pt-2.5 relative w-full founder">
              {/* founder card */}
              <div className="relative  md:h-[363px] h-[350px]  ">
                {/*founder desc  */}
                <div className="absolute bg-black-900_33 border-2 border-solid border-white-A700_33 bottom-[0] flex flex-col  items-start justify-end mx-auto p-6 sm:px-5 rounded-[24px] w-full">
                  <Text
                    className="mt-[153px] text-white-A700 text-xl"
                    size="txtNotoSansBold20"
                  >
                    Saumeet Nanda
                  </Text>

                  {/* linkedin */}
                  {/* <div className="social--link">
                    
                    <Text
                      className=" text-lime-A200 "
                      size="txtNotoSansBold16LimeA200"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className=""
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div> */}
                  <a href="https://www.linkedin.com/in/saumeet-nanda-93104ba2/" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-row gap-2   mt-12 w-auto ">
                    <Text
                      className="text-base text-center text-lime-A200 w-auto"
                      size="txtNotoSansBold16"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className="h-6 w-6 social--link"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  </a>
                </div>
                {/* founder image */}
                <div className="relative bg-black-900    mx-auto rounded-[40px]  w-[85%] image--card">
                  <Img
                    className="founder--image"
                    src="images/saumeet.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              {/* white frames */}
              <Img
                className="absolute h-[52px]  mx-auto top-[2%]"
                src="images/img_frame632266.svg"
                alt="frame632266"
              />
            </div>
            <div className="md:h-[363px] h-[460px] pt-2.5 relative w-full founder">
              {/* founder card */}
              <div className="relative  md:h-[363px] h-[350px]  ">
                {/*founder desc  */}
                <div className="absolute bg-black-900_33 border-2 border-solid border-white-A700_33 bottom-[0] flex flex-col  items-start justify-end mx-auto p-6 sm:px-5 rounded-[24px] w-full">
                  <Text
                    className="mt-[153px] text-white-A700 text-xl"
                    size="txtNotoSansBold20"
                  >
                    Piyush Bagaria
                  </Text>

                  {/* linkedin */}
                  {/* <div className="social--link">
                    
                    <Text
                      className=" text-lime-A200 "
                      size="txtNotoSansBold16LimeA200"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className=""
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div> */}
                  <a href="https://www.linkedin.com/in/piyushbagaria/" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-row gap-2   mt-12 w-auto ">
                    <Text
                      className="text-base text-center text-lime-A200 w-auto"
                      size="txtNotoSansBold16"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className="h-6 w-6 social--link"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  </a>
                </div>
                {/* founder image */}
                <div className="relative bg-black-900    mx-auto rounded-[40px]  w-[85%] image--card">
                  <Img
                    className="founder--image"
                    src="images/piyush.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              {/* white frames */}
              <Img
                className="absolute h-[52px]  mx-auto top-[2%]"
                src="images/img_frame632266.svg"
                alt="frame632266"
              />
            </div>
            {/* founder 2 */}
            {/* <div className="md:h-[363px] h-[460px] pt-2.5 relative w-full">
              <div className="absolute bottom-[0] md:h-[363px] h-[428px] inset-x-[0] mx-auto w-full">
                <div className="absolute bg-black-900_33 border-2 border-solid border-white-A700_33 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-6 sm:px-5 rounded-[24px] w-full">
                  <Text
                    className="mt-[153px] text-white-A700 text-xl"
                    size="txtNotoSansBold20"
                  >
                    Mohit Gorisariya
                  </Text>
                  <Text
                    className="leading-[24.00px] mt-3.5 text-base text-white-A700_99 w-full"
                    size="txtNotoSansRegular16"
                  >
                    Previously at BCG, 10+ years of experience
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[170px] mt-12 w-auto">
                    <Text
                      className="text-base text-center text-lime-A200 w-auto"
                      size="txtNotoSansBold16LimeA200"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="absolute bg-black-900 flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[40px] top-[0] w-[85%]">
                  <Img
                    className="h-[214px] md:h-auto object-cover rounded-[40px] w-full"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[52px] inset-x-[0] mx-auto top-[2%]"
                src="images/img_frame632266_white_a700.svg"
                alt="frame632266"
              />
            </div> */}
            {/* founder 3 */}
            {/* <div className="md:h-[363px] h-[460px] pt-2.5 relative w-full">
              <div className="absolute bottom-[0] md:h-[363px] h-[428px] inset-x-[0] mx-auto w-full">
                <div className="absolute bg-black-900_33 border-2 border-solid border-white-A700_33 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-6 sm:px-5 rounded-[24px] w-full">
                  <Text
                    className="mt-[153px] text-white-A700 text-xl"
                    size="txtNotoSansBold20"
                  >
                    Mohit Gorisariya
                  </Text>
                  <Text
                    className="leading-[24.00px] mt-3.5 text-base text-white-A700_99 w-full"
                    size="txtNotoSansRegular16"
                  >
                    Previously at BCG, 10+ years of experience
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[170px] mt-12 w-auto">
                    <Text
                      className="text-base text-center text-lime-A200 w-auto"
                      size="txtNotoSansBold16LimeA200"
                    >
                      Linkedin
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="absolute bg-black-900 flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[40px] top-[0] w-[85%]">
                  <Img
                    className="h-[214px] md:h-auto object-cover rounded-[40px] w-full"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[52px] inset-x-[0] mx-auto top-[2%]"
                src="images/img_frame632266.svg"
                alt="frame632266"
              />
            </div> */}
          </List>
        </div>

        {/* btm card */}
        <FiftyMil />

        <Text
          className="mt-[102px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
          size="txtNotoSansBold30"
        >
          We are Hiring!
        </Text>
        <div className="h-[60px] md:h-[78px] mt-[18px] md:px-5 relative w-2/5 sm:w-full">
          <Text
            className="leading-[30.00px] m-auto text-center text-white-A700 text-xl w-full"
            size="txtNotoSansRegular20"
          >
            <span className="text-white-A700 font-notosans font-normal">
            Hiring across Product, Design and Tech.{" "}
            </span>
          <a href="https://forms.gle/cbUS5BipeCwP1VP78" target="_blank" rel="noopener noreferrer">
          <span className="text-cyan-300 font-notosans font-normal">
              Reach out to us{"  "}
              <Img
                className="inline bottom-[5%] h-5 right-[21%] w-5"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </span>
            </a>
            
          </Text>
        </div>

        {/* footer */}
        <Footer className="bg-black-900 border-solid border-t border-white-A700_33 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default WebsitePage;

import React from "react";
import "../../styles/custom.css";
import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import Footer from "../../components/Footer/Footer";
import FiftyMil from "../../components/fiftyMil/index";

import LandingFeaturebanner from "components/LandingFeaturebanner/index";

const landingPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-notosans items-start justify-start mx-auto w-full window">
        <div className="flex flex-col items-center w-full">
          {/* header */}
          <Header className="border-b border-solid border-white-A700_33 flex md:gap-10 items-center justify-between px-20 md:px-5 py-4 w-full" />

          <div className="md:h-[1031px] h-[1044px] md:px-5 relative w-full">
            <div className="md:h-[1031px] h-[1044px] m-auto w-full">
              {/* pattern */}
              <div className="absolute h-[1031px] inset-[0] justify-center m-auto w-full">
                {/* <div className="absolute bg-gradient  h-[580px] right-[16%] rounded-[50%] top-[7%] w-[580px]"></div> */}
                <Img
                  className="absolute h-[1031px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_rectangle1447.png"
                  alt="rectangle1447"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[548px] inset-x-[0] items-center justify-start mx-auto p-24 md:px-10 sm:px-5 top-[0] w-full"
                  style={{ backgroundImage: "url('images/img_group4.png')" }}
                >
                  <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[860px] mb-[67px] w-full">
                    <div className="flex flex-col gap-2  max-w-[860px] w-full">
                      <Text
                        className="md:text-5xl text-7xl text-center text-white-A700 tracking-[-1.44px] w-auto"
                        size="txtNotoSansBold72"
                      >
                        Unleash the
                      </Text>
                      <Text
                        className="md:text-5xl text-7xl text-center text-lime-A200 tracking-[-1.44px] w-auto"
                        size="txtNotoSansBold72LimeA200"
                      >
                        <span className="text-lime-A200 font-notosans font-bold">
                          power of your{" "}
                        </span>
                        <span className="text-lime-A200 font-notosans font-bold">
                          Salary
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtNotoSansRegular20"
                    >
                      <span className="text-white-A700 font-notosans font-normal">
                        With India’s first UPI powered Financial Wellbeing
                        platform{" "}
                      </span>
                      <span className="text-white-A700 font-notosans font-bold">
                        SalarySe
                      </span>
                    </Text>
                  </div>
                </div>
              </div>

              {/* phone images */}
            </div>
            <div className="absolute bottom-[0]  inset-x-[0] mx-auto w-[53%] md:w-full phone--container">
              <Img
                className=" w-[70%] phone--center"
                src="images/phones.png"
                alt="maskgroup_Two"
              />
            </div>
            <div className="absolute   bottom-[0]  inset-x-[0] items-center justify-end mx-auto   ticker--container">
              <LandingFeaturebanner className="bg-black-900 border-solid border-white-A700_33 border-y  pl-[26px] py-[26px] " />
            </div>
          </div>
        </div>

        {/* feature list */}
        <div className="flex feature--container">
          <List
            className="flex flex-col gap-0.5  feature--list"
            orientation="vertical"
          >
            {/* upi */}
            <div className=" card">
              <div className="  card--container">
                <div className="flex flex-col gap-10 ">
                  {/* upi text head */}
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-lime-A200 tracking-[-1.20px] w-auto"
                      size="txtNotoSansBold60LimeA200"
                    >
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        UPI{" "}
                      </span>
                      <span className="text-white-A700 font-notosans text-left font-bold">
                        Salary
                      </span>
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        Se
                      </span>
                    </Text>
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtNotoSansRegular20"
                    >
                      Unlock the UPI experience designed to suite your needs
                    </Text>
                  </div>
                  {/* upi desc text */}
                  <div className="bg-gradient2  border-2 border-solid flex flex-col gap-12 items-start justify-start lime_A200_indigo_A700_01_border sm:px-5 px-6 py-12 rounded-[12px]  sm:w-full">
                    {/* line 1 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star1_2.svg"
                        alt="starOne"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Upto 2%{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          Rewards on every transaction
                        </Text>
                      </div>
                    </div>
                    {/* line 2 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_2.svg"
                        alt="starTwo"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Upto 10%{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          Rewards on SalarySe merchant club
                        </Text>
                      </div>
                    </div>
                    {/* line 3 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_3.svg"
                        alt="starTwo_One"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Credit on UPI
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[550px] md:max-w-full text-white-A700 text-xl"
                          size="txtNotoSansRegular20"
                        >
                          Enjoy this power – pay at month end, Convert to easy
                          EMIs{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box  rectangle">
                <Img
                  className="invest--image"
                  src="images/upi_crop.png"
                  alt="group179"
                />
              </div>
            </div>

            {/* invest */}
            <div className=" card">
              <div className="box  rectangle">
                <Img
                  className="invest--image"
                  src="images/invest.png"
                  alt="group179"
                />
              </div>
              <div className="  card--container">
                <div className="flex flex-col gap-10 ">
                  {/* upi text head */}
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-lime-A200 tracking-[-1.20px] w-auto"
                      size="txtNotoSansBold60LimeA200"
                    >
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        Invest{" "}
                      </span>
                      <span className="text-white-A700 font-notosans text-left font-bold">
                        Salary
                      </span>
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        Se
                      </span>
                    </Text>
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtNotoSansRegular20"
                    >
                      Leapfrog to the next phase of your life
                    </Text>
                  </div>
                  {/* upi desc text */}
                  <div className="bg-gradient2  border-2 border-solid flex flex-col gap-12 items-start justify-start lime_A200_indigo_A700_01_border sm:px-5 px-6 py-12 rounded-[12px]  sm:w-full">
                    {/* line 1 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star1_2.svg"
                        alt="starOne"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Upto 9%{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          Assured returns
                        </Text>
                      </div>
                    </div>
                    {/* line 2 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_2.svg"
                        alt="starTwo"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          100% Secured{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          Investments – RBI approved
                        </Text>
                      </div>
                    </div>
                    {/* line 3 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_3.svg"
                        alt="starTwo_One"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          100 times
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[470px] md:max-w-full text-white-A700 text-xl"
                          size="txtNotoSansRegular20"
                        >
                          Wealth generation - be a part of SS Savings club{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* credit */}
            <div className=" card">
              <div className="   card--container">
                <div className="flex flex-col gap-10 ">
                  {/* upi text head */}
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-lime-A200 tracking-[-1.20px] w-auto"
                      size="txtNotoSansBold60LimeA200"
                    >
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        Credit{" "}
                      </span>
                      <span className="text-white-A700 font-notosans text-left font-bold">
                        Salary
                      </span>
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        Se
                      </span>
                    </Text>
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtNotoSansRegular20"
                    >
                      Never wait to get what you want
                    </Text>
                  </div>
                  <div className="bg-gradient2  border-2 border-solid flex flex-col gap-12 items-start justify-start lime_A200_indigo_A700_01_border sm:px-5 px-6 py-12 rounded-[12px]  sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star1_2.svg"
                        alt="starOne"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Money at fingertips{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          Get cash in 5 mins whenever you want
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_2.svg"
                        alt="starTwo"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Save 20%{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          On interest cost
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_3.svg"
                        alt="starTwo_One"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Pay when you want
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[470px] md:max-w-full text-white-A700 text-xl"
                          size="txtNotoSansRegular20"
                        >
                          Convert into easy EMIs as per your choice{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Img
                  className="h-[616px] sm:h-auto object-cover rounded-[12px] w-[412px] md:w-full"
                  src="images/img_frame632289.png"
                  alt="frame632289"
                /> */}
              </div>
              <div className="box rectangle  ">
                <Img
                  className="invest--image "
                  src="images/credit.png"
                  alt="group179"
                />
              </div>
            </div>

            {/* save */}
            <div className=" card">
              <div className="box  rectangle">
                <Img
                  className="invest--image"
                  src="images/invest.png"
                  alt="group179"
                />
              </div>
              <div className="  card--container">
                <div className="flex flex-col gap-10 ">
                  {/* upi text head */}
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-lime-A200 tracking-[-1.20px] w-auto"
                      size="txtNotoSansBold60LimeA200"
                    >
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        Save{" "}
                      </span>
                      <span className="text-white-A700 font-notosans text-left font-bold">
                        Salary
                      </span>
                      <span className="text-lime-A200 font-notosans text-left font-bold">
                        Se
                      </span>
                    </Text>
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtNotoSansRegular20"
                    >
                      Save while you spend
                    </Text>
                  </div>
                  {/* upi desc text */}
                  <div className="bg-gradient2  border-2 border-solid flex flex-col gap-12 items-start justify-start lime_A200_indigo_A700_01_border sm:px-5 px-6 py-12 rounded-[12px]  sm:w-full">
                    {/* line 1 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star1_2.svg"
                        alt="starOne"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Upto 25%{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          Savings across 300+ brands
                        </Text>
                      </div>
                    </div>
                    {/* line 2 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_2.svg"
                        alt="starTwo"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Best offers{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtNotoSansRegular20"
                        >
                          On the brands you love
                        </Text>
                      </div>
                    </div>
                    {/* line 3 */}
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full desc--line">
                      <Img
                        className="h-8 rounded-[1px] w-8"
                        src="images/img_star2_3.svg"
                        alt="starTwo_One"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                          size="txtNotoSansBold30"
                        >
                          Deal of the day
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[470px] md:max-w-full text-white-A700 text-xl"
                          size="txtNotoSansRegular20"
                        >
                          Double your happiness with our “Deal of the Day”{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        {/* btm card + footer */}
        <div className="flex flex-col md:gap-10 gap-[120px] items-center w-full">
          <FiftyMil />
          <div className="flex flex-col h-14 md:h-auto items-center justify-start md:px-5 w-auto">
            <Text
              className="text-lime-A200 text-xl w-auto"
              size="txtNotoSansBold20LimeA200"
            >
              We are coming soon
            </Text>
          </div>
          <Footer className="bg-black-900 border-solid border-t border-white-A700_33 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default landingPage;

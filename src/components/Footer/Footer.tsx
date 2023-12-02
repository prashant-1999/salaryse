import React from "react";

import { Img, Text } from "components";
import { Link } from "react-router-dom";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start mx-auto pt-20 w-auto">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1040px] w-full">
              <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-center p-4 w-auto">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.80px] w-auto"
                    size="txtNotoSansBlack40"
                  >
                    <span className="text-white-A700 font-notosans text-left font-black">
                      Salary
                    </span>
                    <span className="text-lime-A200 font-notosans text-left font-black">
                      Se
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start px-4 w-auto sm:w-full">
                  <Text
                    className="text-base text-white-A700_7f w-auto"
                    size="txtNotoSansRegular16WhiteA7007f"
                  >
                    Ⓒ 2023 Critical Path Technologies Private Limited
                  </Text>
                  <Text
                    className="text-base text-white-A700_7f w-auto"
                    size="txtNotoSansRegular16WhiteA7007f"
                  >
                    GST: 06AAKCC6358CIP
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-row gap-20 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-center p-4 w-auto">
                    <Text
                      className="text-base text-center text-white-A700_cc tracking-[-0.32px] w-auto"
                      size="txtNotoSansBold16WhiteA700cc"
                    >
                      Company
                    </Text>
                  </div>
                  <Link to="/aboutUs">
                    <div className="flex flex-col items-center justify-center p-4 w-auto">
                      <Text
                        className="text-base text-white-A700_cc w-auto"
                        size="txtNotoSansRegular16WhiteA700cc"
                      >
                        About us
                      </Text>
                    </div>
                  </Link>

                  <a
                    href="https://forms.gle/xPNW561zMYCdYEkM9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col items-center justify-center p-4 w-auto">
                      <Text
                        className="text-base text-white-A700_cc w-auto"
                        size="txtNotoSansRegular16WhiteA700cc"
                      >
                        Contact us
                      </Text>
                    </div>
                  </a>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-center p-4 w-auto">
                    <Text
                      className="text-base text-center text-white-A700_cc tracking-[-0.32px] w-auto"
                      size="txtNotoSansBold16WhiteA700cc"
                    >
                      Resources
                    </Text>
                  </div>
                  <a
                    href="https://salaryse.com/PrivacyPolicy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col items-center justify-center p-4 w-auto">
                      <Text
                        className="text-base text-white-A700_cc w-auto"
                        size="txtNotoSansRegular16WhiteA700cc"
                      >
                        Privacy Policy
                      </Text>
                    </div>
                  </a>

                  {/* <div className="flex flex-col items-center justify-center p-4 w-auto">
                    <Text
                      className="text-base text-white-A700_cc w-auto"
                      size="txtNotoSansRegular16WhiteA700cc"
                    >
                      Terms and Conditions
                    </Text>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="border-solid border-t border-white-A700_33 flex flex-col gap-5 items-start justify-center max-w-[1040px] pt-10 px-4 w-full">
            <Text
              className="text-base text-white-A700_7f w-auto"
              size="txtNotoSansRegular16WhiteA7007f"
            >
              Our Banking and Lending partners
            </Text>
            <div className="flex flex-row gap-8 items-center justify-start w-auto grayscale">
              {/* <div className="flex flex-col items-center justify-start w-[36%]">
                <Img
                  className="h-6 md:h-auto object-cover w-full"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
              </div> */}
              <div className="flex flex-col items-center justify-start w-[90px]">
                <Img
                  className="h-[34px] md:h-auto object-cover w-full"
                  src="images/img_image5.png"
                  alt="imageFive"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[70px]">
                <Img
                  className="h-[30px] md:h-auto object-cover w-[66px] sm:w-full"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
            </div>
          </div>
          <div className="border-solid border-t border-white-A700_33 flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1040px] px-4 py-10 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[468px] sm:w-full">
              <Text
                className="text-base text-white-A700_7f w-auto"
                size="txtNotoSansRegular16WhiteA7007f"
              >
                Registered address:
              </Text>
              <Text
                className="text-base text-white-A700_7f w-auto"
                size="txtNotoSansRegular16WhiteA7007f"
              >
                2nd floor, Plot No 1956, Sector 57, Gurugram, Haryana, 122001
              </Text>
            </div>
            <div className="flex flex-row gap-16 items-start justify-start w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700_7f w-auto"
                  size="txtNotoSansRegular16WhiteA7007f"
                >
                  Contact No:
                </Text>
                <Text
                  className="text-base text-white-A700_7f w-auto"
                  size="txtNotoSansRegular16WhiteA7007f"
                >
                  +91-9818889429
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700_7f w-auto"
                  size="txtNotoSansRegular16WhiteA7007f"
                >
                  Email:
                </Text>
                <Text
                  className="text-base text-white-A700_7f w-auto"
                  size="txtNotoSansRegular16WhiteA7007f"
                >
                  contact@salaryse.com
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

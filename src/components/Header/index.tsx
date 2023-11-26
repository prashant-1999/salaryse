import React from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
 
  return (
    <>
      <div className="bg-black-900 flex flex-col font-notosans items-center justify-start mx-auto w-full">
        <header className="border-b border-solid border-white-A700_33 flex md:gap-10 items-center justify-between px-20 md:px-5 py-4 w-full">
          <Link to="/">
            <Text
              className="text-base text-white-A700 tracking-[-0.32px] w-auto"
              size="txtNotoSansBlack16"
            >
              <span className="text-white-A700 font-notosans text-left font-black">
                Salary
              </span>
              <span className="text-lime-A200 font-notosans text-left font-black">
                Se
              </span>
            </Text>
          </Link>

          <div className="flex flex-row gap-10 items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-center p-4 w-auto">
              <Link to="/aboutUs">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtNotoSansBold16"
                >
                  About us
                </Text>
              </Link>
            </div>
            <a
              href="https://forms.gle/xPNW561zMYCdYEkM9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="cursor-pointer font-bold min-w-[117px] text-base text-center"
                color="white_A700"
                variant="outline"
                
              >
                Contact us
              </Button>
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;

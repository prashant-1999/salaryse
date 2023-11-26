import React from "react";
import '../../styles/custom.css'
import { Img, List, Text } from "components";

type landingFeaturebannerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "upitext"
  | "investtext"
  | "credittext"
  | "savetext"
> &
  Partial<{
    upitext: string;
    investtext: string;
    credittext: string;
    savetext: string;
  }>;

const landingFeaturebanner: React.FC<landingFeaturebannerProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center mt-[3px] w-[97%] ">
          <List
            className=" gap-16   ticker-container"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-12 items-center justify-start  ticker">
              <Img
                className="h-8 rounded-[1px] w-8 ticker-item"
                src="images/img_star4.svg"
                alt="starFour"
              />
              <Text
                className="bg-clip-text bg-gradient   sm:text-[10px] md:text-[10px] text-transparent tracking-[-0.96px] banner--text ticker-item"
                size="txtNotoSansSemiBold48"
              >
                {props?.upitext}
              </Text>
              
              <Img
                className="h-8 rounded-[1px] w-8 ticker-item"
                src="images/img_star1.svg"
                alt="starOne"
              />
              <Text
                className="bg-clip-text bg-gradient   sm:text-[38px] md:text-[44px] text-transparent tracking-[-0.96px] banner--text ticker-item"
                size="txtNotoSansSemiBold48"
              >
                {props?.investtext}
              </Text>

              <Img
                className="h-8 rounded-[1px] w-8 ticker-item"
                src="images/img_star2.svg"
                alt="starTwo"
              />
              <Text
                className="bg-clip-text bg-gradient   sm:text-[38px] md:text-[44px] text-transparent tracking-[-0.96px] banner--text ticker-item"
                size="txtNotoSansSemiBold48"
              >
                {props?.credittext}
              </Text>

              <Img
                className="h-8 rounded-[1px] w-8 ticker-item"
                src="images/img_star3.svg"
                alt="starThree"
              />
              <Text
                className="bg-clip-text bg-gradient   sm:text-[38px] md:text-[44px] text-transparent tracking-[-0.96px] banner--text ticker-item" 
                size="txtNotoSansSemiBold48"
              >
                {props?.savetext}
              </Text>
            </div>
            
          </List>
        </div>
      </div>
    </>
  );
};

landingFeaturebanner.defaultProps = {
  upitext: "UPI",
  investtext: "Invest",
  credittext: "Credit",
  savetext: "Save"
}

export default landingFeaturebanner;

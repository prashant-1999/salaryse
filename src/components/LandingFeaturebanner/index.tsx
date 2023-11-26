import React, { useEffect, useState } from "react";
import { Img, List, Text } from "components";
import '../../styles/custom.css'

type LandingFeatureBannerProps = Omit<
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

const LandingFeatureBanner: React.FC<LandingFeatureBannerProps> = (props) => {
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerData = [
    { key: 'upitext', label: 'UPI', imgSrc: 'images/img_star4.svg' },
    { key: 'investtext', label: 'Invest', imgSrc: 'images/img_star1.svg' },
    { key: 'credittext', label: 'Credit', imgSrc: 'images/img_star2.svg' },
    { key: 'savetext', label: 'Save', imgSrc: 'images/img_star3.svg' },
  ];

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setTickerIndex((prevIndex) => (prevIndex + 1) % tickerData.length);
    }, 100); // Adjust the interval as needed

    return () => clearInterval(tickerInterval);
  }, [tickerData.length]);

  return (
    <div className={props.className}>
      <div className="flex flex-col items-center justify-center mt-[3px] w-[97%] ">
        <List className="gap-16 " orientation="horizontal">
          <div className="flex flex-row gap-10 items-center justify-start ">
            {tickerData.map((ticker, index) => (
              <div
                key={index}
                className={` ${
                  tickerIndex === index ? 'left-0' : '-left-full'
                }`}
                style={{
                  transition: 'transform 1s ease',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Img
                  className="h-8 rounded-[1px] w-8"
                  src={ticker.imgSrc}
                  alt={ticker.label}
                />
                <Text
                  className="bg-clip-text bg-gradient sm:text-[10px] md:text-[10px] text-transparent tracking-[-0.96px] banner--text"
                  size="txtNotoSansSemiBold48"
                >
                  {ticker.label}
                </Text>
              </div>
            ))}
          </div>
        </List>
      </div>
    </div>
  );
};

LandingFeatureBanner.defaultProps = {
  upitext: "UPI",
  investtext: "Invest",
  credittext: "Credit",
  savetext: "Save",
};

export default LandingFeatureBanner;

import React from "react";
import { Button, Img, Text } from "components";
import '../../styles/custom.css'
function index() {
  return (
  
      <div className="bg-black-900 border-2 border-solid border-white-A700_33 flex md:flex-col flex-row md:gap-10 gap-20 max-w-[1040px] mx-auto pl-[72px] pt-[20px] md:px-5 rounded-[12px] w-full">
        <Text
          className="sm:flex-1 leading-[72.00px] md:text-3xl text-6xl text-white-A700 tracking-[-1.20px] w-[34%] sm:w-full"
          size="txtNotoSansBold60"
        >
          #50 Million Salaried Champions
        </Text>
        <div className="h-72 md:h-[205px] relative w-[59%] md:w-full btm-container">
        <Img
            className="absolute bottom-[0] h-[205px] right-[0] btm-pattern"
            src="images/pattern.png"
            alt="frame632259"
          />
          <Text
            className="absolute leading-[30.00px] left-[0] text-white-A700 text-xl top-[0] w-[88%] sm:w-full join--desc"
            size="txtNotoSansRegular20"
          >
            Our mission is to empower salaried employees and help them achieve financial freedom. We partner with employers to make this mission successful.
             Join us officially and become 1 in 50 million.
          </Text>
          <a href="https://forms.gle/xPNW561zMYCdYEkM9" target="_blank" rel="noopener noreferrer">
          <Button  className="absolute bottom-[30%] cursor-pointer font-bold left-[0] text-base text-center w-[216px] join-button">
            Join Us
          </Button>
          </a>
          
        </div>
        
      </div>
  
  );
}

export default index;

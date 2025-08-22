import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import crt from "../assets/images/Group 2.png";
import Heading from "./Heading";
import ft from "../assets/images/Group 9969.png";

const Footer = () => {
  return (
    <>
      <div className="bg-footer py-[100px]">
        <Container>
          <Flex className={"justify-between "}>
            <div className="">
              <Image imgSrc={crt} />

              <Heading
                text={
                  "There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form."
                }
                className={
                  "text-[16px] font-medium  font-inter text-text w-[300px] mt-5 "
                }
                as="p"
              />

              <Image imgSrc={ft} className={"mt-5"} />
            </div>

            <div className="text-text  ">
              <h6 className="text-[18px] font-inter font-bold ">Features</h6>
              <ul className="text-[16px] mt-2">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="text-text mb-[45px]">
              <h6 className="text-[18px] font-inter font-bold ">Products</h6>
              <ul className="text-[16px] mt-2">
                <li>Task Management</li>
                <li>Company growth</li>
                <li>Time tracking</li>
              </ul>
            </div>
            <div className="text-text mb-[20px] ">
              <h6 className="text-[18px] font-inter font-bold">Support</h6>
              <ul className="text-[16px] mt-2">
                <li>Customer service</li>
                <li>Accessibility</li>
                <li>Service</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className=" text-text mb-[70px] ">
              <h6 className="text-[18px] font-inter font-bold">Contact</h6>
              <ul className="text-[16px] mt-2">
                <li>524 Broadway , </li>
                <li>NYC +1 777 - 978 - 5570</li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;

import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../image'
import p1 from "../../assets/images/P1.png"
import p2 from "../../assets/images/Portfolio 2.png"
import p3 from "../../assets/images/Portfolio 3.png"
import p4 from "../../assets/images/Portfolio 4.png"
import p5 from "../../assets/images/Portfolio 5.png"
import p6 from "../../assets/images/Portfolio 6.png"
import p7 from "../../assets/images/Portfolio 7.png"
import p8 from "../../assets/images/Portfolio 8.png"


const Portfolio = () => {
  return (
    <>
        <div className={"py-[100px]"}></div>
        <Container>
        <Heading text={"Our Portfolio"} className={"text-[40px] font-bold font-inter text-menuC text-center"} as="h3" />
        <Heading text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 text-center w-[542px] m-auto mt-5"} as="p" />
            <Flex className={"justify-between mt-10 rounded-10 flex-wrap gap-y-7"}>
            <div className=" ">
            
            <Image imgSrc={p1}/>
            
            </div>
            <div className=" ">
            
            <Image imgSrc={p2}/>
            
            </div>

            <div className=" ">
            
            <Image imgSrc={p3}/>
            
            </div>

            <div className="">
            
            <Image imgSrc={p4}/>
            
            </div>

            <div className="">
            
            <Image imgSrc={p5}/>
            
            </div>

            <div className="">
            
            <Image imgSrc={p6}/>
            
            </div>
            <div className="">
            
            <Image imgSrc={p7}/>
            
            </div>
            <div className="">
            
            <Image imgSrc={p8}/>
            
            </div>

            </Flex>
        </Container>
    </>
  )
}

export default Portfolio


import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Image from './image'
import n1 from "../assets/images/Blog 1.png"
import n2 from "../assets/images/Blog 2.png"
import n3 from "../assets/images/Blog 3.png"

const News = () => {
  return (
    <>
        <div className="py-[100px] pb-[50px]"></div>
        <Container>
        <Heading text={"Our Letest News"} className={"text-[40px] font-bold font-inter text-menuC text-center"} as="h3"/>
        <Heading text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 text-center w-[542px] m-auto mt-5"} as="p" />
            
            <Flex className={"justify-between mt-10  mb-20"}>
            <div className="">
                <Image imgSrc={n1}/>
            </div>

            <div className="">
                <Image imgSrc={n2}/>
            </div>

            <div className="">
                <Image imgSrc={n3}/>
            </div>
            
            

            </Flex>
        </Container>
    </>
  )
}

export default News
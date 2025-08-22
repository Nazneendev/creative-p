import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Image from './Image'
import r1 from "../assets/images/Review 1.png"
import r2 from "../assets/images/Review 2.png"
import r3 from "../assets/images/Review 3.png"

const Testimonial = () => {
  return (
    <>
        <div className="py-[100px]"></div>
        <Container>
            <Heading text={"We Care About Our Customer Experience Too"} className={"text-[40px] font-bold font-inter text-menuC w-[603px] "} as="h3"/>
            <Heading text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70  w-[542px]  mt-5"} as="p"/>

            <Flex className={" mt-10 "}>
                <div className="w-[400px] h-[425px]">
                    <Image imgSrc={r1}/>
                </div>
                <div className="w-[400px] h-[425px]">
                    <Image imgSrc={r2}/>
                </div>
                <div className="w-[400px] h-[425px]">
                    <Image imgSrc={r3}/>
                </div>



            </Flex>
        </Container>
    </>
  )
}

export default Testimonial
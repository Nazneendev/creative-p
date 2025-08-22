import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Image from './image'
import t1 from "../assets/images/Team Member 1.png"
import t2 from "../assets/images/Team Member 2.png"
import t3 from "../assets/images/Team Member 3.png"

const TeamMember = () => {
  return (
    <>
        <div className="py-[100px]"></div>
        <Container>
            <Heading text={"Our Expert Team Member"} className={"text-[40px] font-bold font-inter text-menuC text-center"} as="h3"/>
            <Heading text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 text-center w-[542px] m-auto mt-5"} as="p"/>
            <Flex className={"justify-between mt-10"}>
                <div className="">
                <Image imgSrc={t1}/>


                </div>
                <div className="">
                <Image imgSrc={t2}/>

                </div>
                <div className="">
                    <Image imgSrc={t3}/>
                </div>
            </Flex>

        </Container>
    </>
  )
}

export default TeamMember
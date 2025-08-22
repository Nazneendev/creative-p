import React from 'react'
import Container from './Container'
import Heading from './Heading'

import Flex from './Flex'
import ServiceOneIcon from './icons/serviceOneIcon'
import ServiceTwo from './icons/ServiceTwo'
import ServiceThreeIcon from './icons/ServiceThreeIcon'

const Service = () => {
  return (
    <>
        <div className="py-[100px]"></div>
        <Container>
            <Heading text={"Our Services"} className={"text-[40px] font-bold font-inter text-menuC text-center"} as="h3"/>
            <Heading text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 text-center w-[542px] m-auto mt-5"} as="p" />
          
          <Flex className={"mt-10 justify-between flex-wrap gap-y-8"}>
          <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-10 group hover:shadow-2xl">
          <ServiceOneIcon className={"group-hover:fill-primary group-hover:stroke-white"}
            
          />
          <Heading as="h3" text={"UI/UX Design"} className={"font-inter font-bold text-menuC text-[25px] py-6"}/>
          <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 w-[274px]"}/>
           

          </div>
          <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-10 group hover:shadow-2xl">
          <ServiceTwo className={"group-hover:fill-primary group-hover:stroke-white"}/>
         
          <Heading as="h3" text={"Web Development"} className={"font-inter font-bold text-menuC text-[25px] py-6"}/>
          <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 w-[274px]"}/>
           

          </div>
          <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-10 group hover:shadow-2xl">
         <ServiceTwo className={"group-hover:fill-primary group-hover:stroke-white"}/>
          <Heading as="h3" text={"Graphic Design"} className={"font-inter font-bold text-menuC text-[25px] py-6"}/>
          <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 w-[274px]"}/>
           

          </div>
          <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-10 group hover:shadow-2xl">
         
         <ServiceThreeIcon className={"group-hover:fill-primary group-hover:stroke-white"}/>
          <Heading as="h3" text={"Digital Marketing"} className={"font-inter font-bold text-menuC text-[25px] py-6"}/>
          <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 w-[274px]"}/>
           

          </div>
          <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-10 group hover:shadow-2xl">
          <ServiceOneIcon className={"group-hover:fill-primary group-hover:stroke-white"}
            
          />
          <Heading as="h3" text={"UI/UX Design"} className={"font-inter font-bold text-menuC text-[25px] py-6"}/>
          <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 w-[274px]"}/>
           

          </div>
          <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-10 group hover:shadow-2xl">
          <ServiceOneIcon className={"group-hover:fill-primary group-hover:stroke-white"}
            
          />
          <Heading as="h3" text={"UI/UX Design"} className={"font-inter font-bold text-menuC text-[25px] py-6"}/>
          <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter leading-7 text-menuC opacity-70 w-[274px]"}/>
           

          </div>
         
          </Flex>
        </Container>  
          </>
  )
}

export default Service


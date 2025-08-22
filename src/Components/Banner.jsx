import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import Image from './image'
import illu from '../assets/illu.png'


const Banner = () => {
  return (
    <div className="bg-primary py-[180px]">
        <Container>
            <Flex className={'justify-between'}>
                <div className="w-[542px] ">
                <h1 className={'font-bold font-inter  text-[65px] leading-20 text-white'}>We Are Digital Product Design Agency</h1>
                <p className={'font-inter text-[16px] leading-7 py-6 text-white'}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                <Button className={'bg-white text-primary'} btnText={"Get Started"}/>
               
                </div>
                <div className="">
                <Image imgSrc={illu}/>
               
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Banner






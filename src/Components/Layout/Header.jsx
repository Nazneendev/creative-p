import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import Button from '../Button'

const Header = () => {
  return (
    <>
        <div className=" py-7">
        <Container>
            <Flex className={"justify-between"}>
                <div className="">
                    <Image imgSrc={Logo}/>
                </div>
                <div className="">
                    <ul>
                        <li className='inline-block  px-6 text-[18px] font-medium font-inter text-menuC hover:text-primary'>Home</li>
                        <li className='inline-block px-6 text-[18px] font-medium font-inter text-menuC hover:text-primary'>About</li>
                        <li className='inline-block px-6 text-[18px] font-medium font-inter text-menuC hover:text-primary'>Service</li>
                        <li className='inline-block px-6 text-[18px] font-medium font-inter text-menuC hover:text-primary'>Blog</li>
                        <li className='inline-block px-6 text-[18px] font-medium font-inter text-menuC hover:text-primary'>Contact</li>
                    </ul>
                </div>
                <div className="">
                    <Button className={'bg-primary text-white'} btnText={'Contact Us'}/>
                </div>
            </Flex>
        </Container>

        </div>
    </>
  )
}

export default Header

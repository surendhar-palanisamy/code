import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Brush from '../../public/brush.png'
import Brain from '../../public/brain.png'
import User from '../../public/user.png'
import { BsBrush } from "react-icons/bs";
function Navbar() {
    return (
        <HStack justify={'space-between'}>

            {/* <Image height={100} width={200} src={Sign} /> */}
            <Text fontSize={'3xl'} fontWeight={'medium'} textColor={'#8A2BE2'} fontFamily={'cursive'}>Suren</Text>
            <HStack gap={3} fontWeight={'bold'} fontSize={'xl'}>
                <HStack >
                    <Image height={20} width={20} src={Brush} />
                    <Text>Projects</Text>
                </HStack>
                <HStack>
                    <Image height={20} width={20} src={Brain} />
                    <Text>Skills</Text>
                </HStack>
                <HStack>
                    <Image height={20} width={20} src={User} />
                    <Text>Contact</Text>
                </HStack>
            </HStack>

        </HStack>
    )
}

export default Navbar
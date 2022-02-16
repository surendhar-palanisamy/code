import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import IndexBrand from './Brand/IndexBrand'
import IndexCTA from './CTA/IndexCTA'
import IndexFeautre from './Feautres/IndexFeautre'
import IndexHeader from './Header/IndexHeader'
import NavbarIndex from './Navbar/NavbarIndex'
import IndexPossibility from './Possibility/IndexPossibility'
import IndexWhatGp from './What is Gpt3/IndexWhatGp'

function MainIndex() {
    return (
        <Box
            pl={['2', '2', '2', '20']}
            pr={['6', '6', '6', '20']}
            py={['8', '8', '8', '8']}
            bgGradient='linear(to-r, #01254A, #021932, #040D19)'>
            <NavbarIndex />
            <Box pl={'8'}> <IndexHeader /></Box>
            <Box pl={'8'} pt='8'>  <IndexBrand /></Box>
            <Box pl={'8'} pt='8'>  <IndexWhatGp /></Box>
            <Box pl={'8'} pt='8'>  <IndexFeautre /></Box>
            <Box pl={'8'} pt='8'>  <IndexPossibility /></Box>
            <Box pl={'8'} pt='8'>  <IndexCTA /></Box>

        </Box>
    )
}

export default MainIndex
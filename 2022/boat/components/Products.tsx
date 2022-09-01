import { Box, HStack, Stack, Text,Image, VStack, Grid } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'

function Products({products}:any) {
  // console.log(products[2]['slug'].current,'from product component')
  return (
    <VStack >
      <Text align={'center'}>Best Seller Products</Text>
    <Grid  templateColumns='repeat(4, 1fr)' columnGap={5} >
    {
      products.map((product:any)=>{
        return (
        <Box sx={{
          transition:' 0.4s ease-in-out',
          '&:hover':{transform:'scale(1.08)',cursor:'pointer'}, 
        }}  key={product['slug'].current}>
          {/* {product['slug'].current}<br/> */}
         
          {/* <Image src={`${urlFor( product.image[0])}`} height={700} width={700}/> */}
       <Box bgColor={'blackAlpha.100'} height={'40'} width={'40'}><Image src={`${urlFor( product.image[0])}`}/></Box>
       <Text fontWeight={'semibold'}>{product.name}</Text>
       <Text fontWeight={'bold'}>${product.price}</Text>

        </Box>) 
      })}
    </Grid>
          </VStack>
  )
}

export default Products
import { Box, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { characters } from '../client/queries'
const Home: NextPage = () => {

  const { data } = useQuery(characters)
  return (
    <div >
      <Head>
        <title>Rick and morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Button>hi</Button>

      </Box>
    </div>
  )
}

export default Home
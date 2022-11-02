import Head from 'next/head'
import Image from 'next/image'
import HeroIndex from '../components/Hero/HeroIndex'
import NavIndex from '../components/Navbar/NavIndex'
import HooBank from '../public/HooBank.png'

export default function Home() {
  return (
    <div >
      <Head>
        <title>HooBank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" sizes="32x32" href="/HooBank.png" />
      </Head>
      <div className='bg-[#00040F]'>
        <div className=' px-20 pt-5'>
          <NavIndex />
        </div>
        <div className='px-20'>
          <HeroIndex />
        </div>
      </div>

    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'

//pages
import Body from './components/navBar'


export default function Home() {
  return (
    
    <div>
   <Body/>
   <h1>Hi i am index</h1>

   <Link href="/components/questions"><button type="button" class="btn btn-primary"></button></Link>

   </div>
  )
}

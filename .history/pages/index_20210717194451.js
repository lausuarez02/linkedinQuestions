import Head from 'next/head'
import Link from 'next/link'

//pages
import Body from './components/navBar'


export default function Home() {
  return (
    <div>
   <Body/>
   <h1>Hi i am index</h1>

   <Link><button type="button" class="btn btn-primary"></button></Link>
   <button type="button" class="btn btn-primary">Primary</button>
   </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'

//pages
import Body from './components/navBar'


export default function Home() {
  return (
    
    <div style={{  backgroundColor : 'green',
    color : 'white',
    height : '100%'}}>
      <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossorigin="anonymous" 
/>

<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"></script>
</Head>
<div style={{ height: "100%",
  background: "red"}}>
<Body/>
   <h1>Hi i am index</h1>

   <Link href="/components/questions"><button type="button" class="btn btn-primary">Questions</button></Link>



   </div>
  )
}

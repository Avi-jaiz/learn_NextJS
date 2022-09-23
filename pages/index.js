import Link from "next/link";

export default function HomePage()
{
   return(
    <div className="homePage">
<h1>The home page!!</h1>
<ul>
    <li><Link href='/news/first_page'>First</Link></li>
    <li><Link href='/news/Second_page'>Second</Link></li>
    
</ul>
    </div>
   )
}


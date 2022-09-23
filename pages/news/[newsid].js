import {useRouter} from 'next/router';



export default function AnotherPage()
{ 
    const router = useRouter();
    console.log(router)

const clickHandler=()=>
{
    router.query.newsid
}

   return(
    <div className="homePage">
<h1>This is another page!! {router.query.newsid}</h1>
<button onClick={clickHandler}>Click</button>
    </div>
   )
}

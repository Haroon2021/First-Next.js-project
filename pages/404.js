import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // redirect someone to the homepge if 3 seconds gone 
            router.push('/')
        },3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>The mr men page you found does not exist</h1>
            <h2>Below is a link to the homepage</h2>
            <p><Link href = '/'>Link here</Link></p>
        </div>
     );
}
 
export default NotFound;
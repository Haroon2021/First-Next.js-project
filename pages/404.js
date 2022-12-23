import Link from 'next/link'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>The mr men page you found does not exist</h1>
            <h2>Below is a link to the hopepage</h2>
            <p><Link href = '/'>Link here</Link></p>
        </div>
     );
}
 
export default NotFound;
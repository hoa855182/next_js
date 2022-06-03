import Image from 'next/image';
import Link from 'next/link';


export default function YourComponent(){
    return(
        <div>
            <Image
                src="/images/profile.jpg"
                height={100}
                width={100}
                alt="Your Name"
            />
            <h2>
                <Link href="/">
                    <a className="title">Back to home</a>
                </Link>
            </h2>
        </div>
    )
};
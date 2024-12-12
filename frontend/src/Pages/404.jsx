import { Link } from "react-router-dom"

export default function NotFound() {

    return (
        <>
            <div className="h-[100vh] text-white bg-black flex flex-col justify-center items-center">
                <h1 className="text-center monoton-regular text-8xl">404</h1>
                <p className="text-2xl">Page Not Found</p>
                <Link to="/" className="btn mt-10 w-1/2"><button>Home</button></Link>
            </div>
        </> 
    )
}
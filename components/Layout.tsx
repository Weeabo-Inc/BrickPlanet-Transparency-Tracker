import Link from "next/link"


export default function Layout({ children } : any) {
    return (
        <div>
            <div className="bg-black p-1">
                <div className="flex items-center container xl:w-2/4 mx-auto justify-between">
                    <Link href="/">
                        <a className="text-white border-white font-extrabold p-1 border-2 text-2xl">
                            BTT
                        </a>
                    </Link>
                    <Link href="https://discord.gg/cubash">
                        <a className="text-white p-2 text-xs">
                            Join <span className="font-bold">Cubash</span> <li className="fa fa-arrow-right"></li>
                        </a>
                    </Link>
                </div>
            </div>
            <div className=" p-1 border-b border-gray-200">
                <div className="md:container mx-auto lg:w-2/4 md:flex justify-around items-center gap-2">
                    <div className="md:flex gap-4 items-center text-center justify-between text-[1rem] grid content-center w-max mx-auto justify-self-center text-gray-400 ">
                        <Link href="/">
                            <a className="font-semibold text-blue-500">
                                Data Policies
                            </a>

                        </Link>
                        <Link href="/">
                            <a className="hover:text-black">
                                Home
                            </a>

                        </Link>
                           <Link href="/">
                            <a className="hover:text-black">
                                Trust Level
                            </a>

                        </Link>            <Link href="/">
                            <a className="hover:text-black">
                                Privacy News
                            </a>

                        </Link>
                        <Link href="/">
                            <a className="font-bold text-black">
                                About Us
                            </a>

                        </Link>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
        <footer className="bg-white/10 border-navbar w-full border p-4 h-full rounded-t-[7rem] flex flex-col items-center justify-center">
            <Link
                href="/"
                className="group flex pb-20 items-center justify-normal lg:justify-center gap-x-2.5"

            >
                <Image src='/logo-gamezop.png' alt="gamezop logo" height={150} width={100} className="" />
            </Link>
            <div className="flex gap-3 flex-col  w-11/12 pb-4">
                <p >
                    Gamezop is a plug-and-play gaming platform that any app or website can integrate to bring casual gaming for its users. Gamezop also operates Quizzop, a quizzing platform, that digital products can add as a trivia section.
                </p>
                <p>
                    Over 5,000 products from more than 70 countries have integrated Gamezop and Quizzop. These include Amazon, Samsung Internet, Snap, Tata Play, AccuWeather, Paytm, Gulf News, and Branch.
                </p>
                <p>
                    Games and trivia increase user engagement significantly within all kinds of apps and websites, besides opening a new stream of advertising revenue. Gamezop and Quizzop take 30 minutes to integrate and can be used for free: both by the products integrating them and end users
                </p>
                <p>
                    If you wish to add games and trivia to your product, write to us on: partnerships@gamezop.com
                </p>
                <p>
                    For more information, please visit: business.gamezop.com
                </p>
                <p>
                    © 2023 Advergame Technologies Pvt. Ltd. (&quot;ATPL&quot;). Gamezop ® & Quizzop ® are registered trademarks of ATPL.
                </p>
            </div>
        </footer >
    )
}

export default Footer
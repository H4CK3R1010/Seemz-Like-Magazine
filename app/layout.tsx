import Link from "next/link";
import "./globals.css";


export const metadata = {

title: "Seemz Like...",
description: "For kids, By kids"

};



export default function RootLayout({

children,

}: {

children: React.ReactNode;

}) {


return (

<html lang="en">

<body>


<nav>


<Link href="/">
Home
</Link>


<Link href="/about">
About
</Link>


<Link href="/pricing">
Pricing
</Link>


<Link href="/donate">
Donate
</Link>


<Link href="/contact">
Contact
</Link>


</nav>


{children}


</body>

</html>

);

}

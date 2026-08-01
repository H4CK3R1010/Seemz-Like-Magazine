import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";


export const metadata: Metadata = {

  title: "Seemz Like...",

  description: "For kids, By kids."

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


</nav>


{children}


</body>

</html>

);

}

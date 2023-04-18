import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500 font-bold text-5xl p-4">NETPLIX</h1>
      <Link href="/movies">Movies</Link>
    </div>
  );
}

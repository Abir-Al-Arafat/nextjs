import Image from "next/image";
import Link from "next/link";
import Products from "./components/Products";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main>
      <Link href="/users">Users</Link>
      <Products />
    </main>
  );
}

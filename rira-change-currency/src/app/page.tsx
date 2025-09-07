import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>welcome</div>
      <Link href={"/currency"}>main route</Link>
    </>
  );
}

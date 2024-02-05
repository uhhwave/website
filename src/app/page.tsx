"use client"
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [imgUrl, setImgUrl] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  async function fetchImage() {
    const res = await fetch('https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');
    const data = await res.json();
    setImgUrl((prevUrl) => prevUrl === data[0] ? prevUrl : data[0]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-thin font-white">hi~</h1>
      {isVisible && (
        <Button variant={"secondary"} onClick={() => { fetchImage(); setIsVisible(false) }}>
          poosh 4 fun
        </Button>
      )}
      {imgUrl && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Link href={"/dash"}><Image className="rounded-xl" key={imgUrl} src={imgUrl} alt="Shibe" width={600} height={600} loading="eager" priority /></Link>
        </div>
      )}
      <ModeToggle />
    </main>
  );
}

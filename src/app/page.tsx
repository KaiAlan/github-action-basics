// import Image from "next/image";
'use client'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center p-24">
      <div className="flex flex-col justify-center items-center w-4/5 h-4/5 border-2 border-white">
        <h1 className="font-bold text-white text-2xl">Card</h1>
        <button
        className="w-1/3 h-10 bg-blue-500 rounded-xl text-white"
        onClick={() => alert('You clicked me xd !')}
        >Click me!</button>
      </div>
    </main>
  );
}

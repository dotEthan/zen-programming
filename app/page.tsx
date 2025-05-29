import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300 mx-auto">
      <div className="w-screen px-4 mx-auto flex flex-col items-center">
        <div className='m-4'>
          <h1 className="text-5xl font-bold">Zenful Programming</h1>
        <p className="mt-4 text-xl">Welcome to the journey of mindful coding</p>
        </div>
        <div className="w-full mt-20 flex flex-row items-center justify-around">
          <div className="max-w-[500]">After spending too long trying to compile and learn all the aspects to ramp up my coding skills, I thought why not just create my own resource for everything I am learning.</div>
          <div className="w-80">
            <Image src="/splash.webp" alt="Image of person meditating" width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            We are a team of developers who are passionate about creating
            high-quality tutorials and courses for the community.
          </p>
          <p className="mb-4">
            Our mission is to help developers learn new skills and improve their
            coding skills.
          </p>
        </div>

        <div className="md:w-1/2 max-w-[500px]">
          <div className="relative aspect-square w-full">
          <Image
              src="https://picsum.photos/500/500" 
              alt="Team placeholder"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
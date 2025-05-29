import type { TutorialLayoutProps } from "@/app/types/tutorials";


export default function TutorialLayout({ title, children }: TutorialLayoutProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <div>
        {children}
      </div>
    </div>
  );
}
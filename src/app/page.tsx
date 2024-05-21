import Image from "next/image";
import { LifecycleLogger } from "./LifecycleLogger";
import { Button } from "./Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      <LifecycleLogger />
      <Button />
    </main>
  );
}

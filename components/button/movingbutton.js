import Link from "next/link";

export default function AnimatedButton() {
  return (
    <div className="animate-moveAndPause flex items-center justify-center">
      <Link
        href="#contact"
        className=" bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Get in Touch
      </Link>
    </div>
  );
}

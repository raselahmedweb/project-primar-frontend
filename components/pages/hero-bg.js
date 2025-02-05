export default function HeroBg() {
  return (
    <div className="flex items-center justify-center h-screen bg-hero-bg absolute top-0 w-full -z-10">
      <video
        className="-z-10 absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/herobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

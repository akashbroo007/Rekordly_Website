export default function Head() {
  return (
    <>
      <style>{`
        .text-glow {
          text-shadow: 0 0 40px rgba(104, 238, 154, 0.3);
        }

        .bg-glow {
          background: radial-gradient(circle at center, rgba(104, 238, 154, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
        }
      `}</style>
    </>
  );
}

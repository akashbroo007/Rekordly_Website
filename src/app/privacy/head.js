export default function Head() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #3f3f46;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
}

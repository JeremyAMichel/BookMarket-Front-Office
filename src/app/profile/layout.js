export default function ProfileLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-background to-accents-1 p-4">
      {children}
    </div>
  );
}

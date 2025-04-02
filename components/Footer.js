export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Morgan Design. All rights reserved.</p>
          <p className="mt-2">Designed and built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    );
  }
  
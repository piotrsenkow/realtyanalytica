// components/Header.tsx
import Image from 'next/image';

function Header() {
  return (
    <header className='flex justify-center bg-gray-600'>
      <nav className="flex justify-center items-center pt-16">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </div>
        {/* Other nav items */}
        {/* ... */}
      </nav>
    </header>
  );
}

export default Header;

import Link from 'next/link';

const LinkedButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href}>
      <div className="rounded-lg border-2 border-gray-600 px-3 py-1 text-gray-600 transition-all duration-300 hover:border-blue-500 hover:text-blue-600">
        <p className="text-center text-tiny font-semibold">{text}</p>
      </div>
    </Link>
  );
};

export default LinkedButton;

import Image from 'next/image';
import Link from 'next/link';

const MatrixCard = ({
  id,
  title,
  highlights,
  link,
  bgImage,
}: {
  id: number;
  title: string;
  image?: string;
  highlights: { title: string; icon: string }[];
  link: string;
  logo: string;
  bgImage?: string;
}) => {
  const dynamicClass: string =
    id % 2 === 0
      ? 'bg-gradient-to-l max-md:bg-gradient-to-b'
      : 'bg-gradient-to-r max-md:bg-gradient-to-b';

  return (
    <Link
      className=" z-10 flex w-full flex-col items-center justify-between rounded-lg bg-transparent hover:z-20"
      href={link}
    >
      <div
        className={`flex w-fit flex-col items-center justify-end 
      ${dynamicClass} w-full rounded-lg border-2 border-gray-200 bg-transparent shadow-lg transition-all duration-1000 hover:scale-105 hover:shadow-xl 
      `}
      >
        {
          <Image
            src={bgImage ?? ''}
            alt={title}
            width={1920}
            height={720}
            className=" size-full rounded-lg object-cover"
          />
        }
        <div className="absolute flex w-fit-available flex-row items-center justify-around !max-w-full">
          <div className="absolute flex z-0 size-full bg-white opacity-45 w-full" />
          {highlights.map((highlight: { title: string; icon: string }) => (
            <div
              key={highlight.title}
              className="z-10 flex w-fit-available flex-col items-center justify-center gap-0 py-2 opacity-100 transition-all duration-500 hover:scale-110 hover:z-30"
            >
              <Image
                src={highlight.icon}
                alt={highlight.title}
                width={64}
                height={64}
              />
              <p className="text-center text-xs font-semibold text-black">{highlight.title}</p>
            </div>
          ))}
          <div />
        </div>
      </div>
    </Link>
  );
};

export default MatrixCard;

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
        <div className="absolute flex w-fit-available !max-w-full flex-row items-center justify-around">
          <div className="absolute z-0 flex size-full justify-between bg-white opacity-45" />
          {highlights.map((highlight: { title: string; icon: string }) => (
            <div
              key={highlight.title}
              className="z-10 flex w-fit-available flex-col items-center justify-center gap-0 px-4 py-2 opacity-100 transition-all duration-500 hover:z-30 hover:scale-110"
            >
              <Image
                src={highlight.icon}
                alt={highlight.title}
                width={64}
                height={64}
                className="max-lg:max-w-12 max-md:max-w-10 max-sm:w-12"
              />
              <p className="max-w-fit text-wrap text-center text-xs font-semibold text-black">
                {highlight.title}
              </p>
            </div>
          ))}
          <div />
        </div>
      </div>
    </Link>
  );
};

export default MatrixCard;

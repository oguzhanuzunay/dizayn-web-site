import Image from 'next/image';
import Link from 'next/link';

const MatrixCard = ({
  id,
  title,
  image,
  highlights,
  link,
  logo,
  background,
  bgImage,
}: {
  id: number;
  title: string;
  image?: string;
  highlights: { title: string; icon: string }[];
  link: string;
  logo: string;
  background: string;
  bgImage: string;
}) => {
  const dynamicClass: string =
    id % 2 === 0
      ? 'bg-gradient-to-l max-md:bg-gradient-to-b'
      : 'bg-gradient-to-r max-md:bg-gradient-to-b';

  return (
    <Link
      className=" z-10 flex w-full flex-col items-center justify-between rounded-xl bg-transparent"
      href={link}
    >
      <div
        className={`flex w-fit flex-col items-center justify-end 
      ${dynamicClass} h-64 w-full rounded-lg border-2 border-gray-200 bg-transparent shadow-lg transition-all duration-1000 hover:scale-95 hover:shadow-xl 
      `}
      >
        {
          <Image
            src={bgImage}
            alt={title}
            width={1920}
            height={720}
            className=" size-full rounded-xl object-cover"
          />
        }
        {/* logo ? (
          <Image
            src={logo}
            alt={title}
            width={180}
            height={180}
          />
        ) : (
          <h3 className="mb-3 text-2xl font-bold text-black">{title}</h3>
        ) */}
        {/*
        <Image
          src={image}
          alt={title}
          width={180}
          height={180}
        />
*/}
        <div className="absolute flex w-fit-available flex-row items-center justify-between">
          <div className="absolute z-0 size-full bg-white opacity-45 " />
          {highlights.map((highlight: { title: string; icon: string }) => (
            <div
              key={highlight.title}
              className="z-10 flex w-full flex-col items-center justify-center gap-1 p-2 opacity-100 transition-all duration-500 hover:scale-110"
            >
              <Image
                src={highlight.icon}
                alt={highlight.title}
                width={64}
                height={64}
              />
              <p className="text-center text-tiny font-semibold text-black">{highlight.title}</p>
            </div>
          ))}
          <div />
        </div>
      </div>
    </Link>
  );
};

export default MatrixCard;

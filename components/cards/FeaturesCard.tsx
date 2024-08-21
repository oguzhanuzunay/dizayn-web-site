import Image from 'next/image';

const FeaturesCard = ({
  src,
  alt,
  size,
  title,
  description,
}: {
  src: string;
  alt: string;
  size: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex size-[250px] flex-col items-center justify-center gap-2 rounded-lg border-2 border-blue-300 p-5 transition-all duration-300 hover:scale-110 hover:border-4">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />

      <div className="flex flex-col gap-2">
        <p className="text-center text-lg font-semibold">{title}</p>
        <p className="text-center text-xs">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;

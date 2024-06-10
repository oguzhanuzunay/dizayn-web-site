'use client';
import Header from '@/components/Header';
import { SectionWrapper } from '@/hoc';
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react';

const Products = () => {
  return (
    <div>
      <Header text="Üst Yapı" />

      <div className="m-auto mb-5 mt-[-30px] w-1/2">
        <Image
          className="max-h-[150px] w-full object-cover"
          src="/logo/dizaynUp.png"
          alt="Dizayn up logo"
          width={500}
          height={150}
        />
      </div>

      <div className="grid max-w-full grid-cols-12 grid-rows-2 gap-2 px-8">
        <Card className="col-span-12 h-[300px] sm:col-span-4">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-yellow-500">
              Dizayn UP (ÜSTÜN TEKNOLOJİ)
            </p>
            <h4 className="text-large font-semibold text-black ">Stream the Acme event</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 size-full object-contain"
            src="/productImages/product-1.png"
          />
        </Card>
        <Card className="col-span-12 h-[300px] sm:col-span-4">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-yellow-500">
              Dizayn UP (ÜSTÜN TEKNOLOJİ)
            </p>
            <h4 className="text-large font-medium text-white">Contribute to the planet</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 size-full object-cover"
            src="https://nextui.org/images/card-example-3.jpeg"
          />
        </Card>
        <Card className="col-span-12 h-[300px] sm:col-span-4">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white&lsquo;/60">Supercharged</p>
            <h4 className="text-large font-medium text-white">Creates beauty like a beast</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 size-full object-cover"
            src="https://nextui.org/images/card-example-2.jpeg"
          />
        </Card>
        <Card
          isFooterBlurred
          className="col-span-12 h-[300px] w-full sm:col-span-5"
        >
          <CardHeader className="absolute top-1 z-10 flex-col items-start">
            <p className="text-tiny font-bold uppercase text-white/60">New</p>
            <h4 className="text-2xl font-medium text-black">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 size-full -translate-y-6 scale-125 object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
            <div>
              <p className="text-tiny text-black">Available soon.</p>
              <p className="text-tiny text-black">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="col-span-12 h-[300px] w-full sm:col-span-7"
        >
          <CardHeader className="absolute top-1 z-10 flex-col items-start">
            <p className="text-tiny font-bold uppercase text-white/60">Your day your way</p>
            <h4 className="text-xl font-medium text-white/90">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 size-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
            <div className="flex grow items-center gap-2">
              <Image
                alt="Breathing app icon"
                className="h-11 w-10 rounded-full bg-black"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button
              radius="full"
              size="sm"
            >
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SectionWrapper(Products, 'urunler');

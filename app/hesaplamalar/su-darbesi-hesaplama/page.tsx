'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { SectionWrapper } from '@/hoc';
import { calculate } from '@/lib/calculations';
import { useState } from 'react';

const SuDarbesiHesaplama = () => {
  const [boruCinsi, setBoruCinsi] = useState(0);
  const [icCap, setIcCap] = useState(0);
  const [anmaCapı, setAnmaCapı] = useState(0); 
  const [anmaBasinci, setAnmaBasinci] = useState(0);
  const [etKalınlıgı, setEtKalınlıgı] = useState(0);
  const [debi, setDebi] = useState(0);
  const [islBas, setIslBas] = useState(0);

  const [hizD, setHizD] = useState(0);
  const [dp, setDp] = useState(0);
  const [hmax, setHmax] = useState(0);
  const [hmin, setHmin] = useState(0);

  const handleBoruChange = (value: number) => {
    setHizD(0);
    setDp(0);
    setHmax(0);
    setHmin(0);
    setBoruCinsi(value);

    if (Number(debi) !== 0 && Number(islBas) !== 0) {
      const result = calculate.suDarbesi(debi, islBas, boruCinsi);
      setHizD(Number(result.hizD));
      setDp(Number(result.dp));
      setHmax(Number(result.hmax));
      setHmin(Number(result.hmin));
    }
  };

  const staticValues = {
    pipeType: [
      { value: 377, label: 'PE100' },
      { value: 33.3, label: 'PVC' },
      { value: 0.5, label: 'ÇELİK' },
      { value: 1, label: 'FONT' },
    ],
    nominalDiameter: [
      20, 25, 32, 40, 50, 63, 75, 90, 110, 125, 140, 160, 180, 200, 225, 250, 280, 315, 355, 400,
      450, 500, 560, 630, 710, 800, 900, 1000, 1200, 1400, 1600,
    ],
    pn: ['PN-1', 'PN-2', 'PN-3', 'PN-4', 'PN-5', 'PN-6', 'PN-7', 'PN-8', 'PN-9', 'PN-10'],
  };

  return (
    <Card className="m-5 mx-auto rounded-md p-5 shadow-md">
      <Label htmlFor="boruCinsi">Borunun Cinsi:</Label>
      <Select onValueChange={handleBoruChange}>
        <SelectTrigger
          id="boruCinsi"
          className="w-full"
        >
          <SelectValue placeholder="Boru Cinsi seçiniz" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="bg-white">
            <SelectLabel>Boru Cinsi</SelectLabel>
            {staticValues.pipeType.map((item: { value: number; label: string }) => (
              <SelectItem
                key={item.value.toString()}
                value={item.value.toString()}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {boruCinsi === 377 ? (
        <>
          <Label
            htmlFor=""
            className="mt-4"
          >
            Anma Çapı:
          </Label>
          <Select
            value={anmaCapı}
            onValueChange={(value) => setAnmaCapı(Number(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Boru Cinsi:" />
            </SelectTrigger>
            <SelectContent id="boruCinsi">
              <SelectGroup className="bg-white">
                <SelectLabel>PN değeri</SelectLabel>
                {staticValues.nominalDiameter.map((item) => (
                  <SelectItem
                    key={item.toString()}
                    value={item.toString()}
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Label
            htmlFor=""
            className="mt-4"
          >
            Anma Basıncı(PN):
          </Label>
          <Select
            value={anmaBasinci}
            onValueChange={(value) => setAnmaBasinci(Number(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Boru Cinsi:" />
            </SelectTrigger>
            <SelectContent id="boruCinsi">
              <SelectGroup className="bg-white">
                <SelectLabel>PN değeri</SelectLabel>
                {staticValues.nominalDiameter.map((item) => (
                  <SelectItem
                    key={item.toString()}
                    value={item.toString()}
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      ) : (
        <></>
      )}

      <Label htmlFor="icCap">İç Çap:</Label>
      <Input
        id="icCap"
        value={icCap}
        onChange={(e) => setIcCap(Number(e.target.value))}
        onKeyUp={handleBoruChange}
      />

      <Label htmlFor="etKal">Et Kalınlığı:</Label>
      <Input
        id="etKal"
        value={etKalınlıgı}
        onChange={(e) => setEtKalınlıgı(Number(e.target.value))}
        onKeyUp={handleBoruChange}
      />

      <Label htmlFor="debi">Debi:</Label>
      <Input
        id="debi"
        value={debi}
        onChange={(e) => setDebi(Number(e.target.value))}
        onKeyUp={handleBoruChange}
      />

      <Label
        htmlFor="islBas"
        className="mt-4"
      >
        İşletme Basıncı:
      </Label>
      <Input
        id="islBas"
        value={islBas}
        onChange={(e) => setIslBas(Number(e.target.value))}
        onKeyUp={handleBoruChange}
      />

      <Button
        className="mt-4 bg-blue-500 hover:text-teal-200"
        onClick={handleBoruChange}
      >
        Hesapla
      </Button>

      <div className="mt-3 flex flex-row items-center justify-around">
        <div>Hız: {hizD} m/s</div>
        <div>Dp: {dp} mSS</div>
        <div>Hmax: {hmax} mSS</div>
        <div>Hmin: {hmin} mSS</div>
      </div>
    </Card>
  );
};

export default SectionWrapper(SuDarbesiHesaplama, 'Su Darbesi Hesaplama');

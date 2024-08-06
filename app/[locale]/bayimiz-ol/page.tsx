import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { becomeOurDealerSchema } from '@/lib/validation';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { citiesData } from '@/database/allCities';
import { useTranslations } from 'next-intl';
import { styles } from '@/hoc/styles';

interface BayimizOlProps {
  companyName: string;
  fullName: string;
  phone: string;
  eMail: string;
  city: string;
  annualRevenue: string;
  numberOfSubDealers: string;
  numberOfProjectsWorkedOn: string;
  subject: string;
  explanation: string;
  buttonText: string;
}

const formText: BayimizOlProps = {
  companyName: 'Firma Adı*',
  fullName: 'Ad Soyad*',
  phone: 'Tel',
  eMail: 'E-mail*',
  city: 'Şehir*',
  annualRevenue: 'Yıllık Tahmini Cironuz',
  numberOfSubDealers: 'Alt Bayi Sayınız:',
  numberOfProjectsWorkedOn: 'Çalışılan Proje Sayısı',
  subject: 'Konu',
  explanation: 'Açıkla',
  buttonText: 'Gönder',
};

const BayimizOl = () => {
  const t = useTranslations('BayimizOl');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const form = useForm<z.infer<typeof becomeOurDealerSchema>>({
    resolver: zodResolver(becomeOurDealerSchema),
    defaultValues: {
      companyName: '',
      fullName: '',
      phone: '',
      eMail: '',
      city: '',
      annualRevenue: 0,
      numberOfSubDealers: 0,
      numberOfProjectsWorkedOn: 0,
      subject: '',
      explanation: '',
    },
  });

  function onSubmit(values: z.infer<typeof becomeOurDealerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className={`${styles.paddingX} relative z-0 mx-auto max-w-7xl`}>
      <div className="mb-5 flex h-5 w-full items-center bg-gray-500 p-5">
        <h2 className="font-spaceGrotesk text-2xl font-semibold text-white">{t('title')}</h2>
      </div>

      <div className="py-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-sm:space-y-3"
          >
            <div className="flex flex-1 flex-row items-end justify-between gap-10">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }: { field: any }) => (
                  <FormItem className="w-full">
                    <FormLabel>{formText.companyName}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }: { field: any }) => (
                  <FormItem className="w-full">
                    <FormLabel>{formText.fullName}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-1 flex-row items-end justify-between gap-10">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }: { field: any }) => (
                  <FormItem className="w-full">
                    <FormLabel>{formText.phone}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eMail"
                render={({ field }: { field: any }) => (
                  <FormItem className="w-full">
                    <FormLabel>{formText.eMail}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-1 flex-row items-end justify-between gap-10">
              {/* çalıştığından emin değilim */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>{formText.eMail}</FormLabel>
                    <FormControl>
                      <Popover
                        open={open}
                        onOpenChange={setOpen}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                          >
                            {value
                              ? citiesData.find((city) => city.cityName === value)?.cityName
                              : 'Şehir Seçin...'}
                            <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] bg-white p-0">
                          <Command>
                            <CommandInput
                              placeholder="Şehir seç..."
                              className="h-9"
                              {...field}
                            />
                            <CommandList>
                              <CommandEmpty>{t('notFound')}</CommandEmpty>
                              <CommandGroup>
                                {citiesData.map((city) => (
                                  <CommandItem
                                    key={city.plateNumber}
                                    value={city.cityName}
                                    onSelect={(currentValue) => {
                                      setValue(currentValue === value ? '' : currentValue);
                                      setOpen(false);
                                    }}
                                  >
                                    {city.cityName}
                                    <CheckIcon
                                      className={cn(
                                        'ml-auto h-4 w-4',
                                        value === city.cityName ? 'opacity-100' : 'opacity-0',
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="annualRevenue"
                render={({ field }: { field: any }) => (
                  <FormItem className="w-full">
                    <FormLabel>{formText.annualRevenue}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-1 flex-row items-end justify-between gap-10">
              <FormField
                control={form.control}
                name="numberOfSubDealers"
                render={({ field }: { field: any }) => (
                  <FormItem className="w-full">
                    <FormLabel>{formText.numberOfSubDealers}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfProjectsWorkedOn"
                render={({ field }: { field: any }) => (
                  <FormItem className="w-full">
                    <FormLabel>{formText.numberOfProjectsWorkedOn}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }: { field: any }) => (
                <FormItem className="w-full">
                  <FormLabel>{formText.subject}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="explanation"
              render={({ field }: { field: any }) => (
                <FormItem className="w-full">
                  <FormLabel>{formText.explanation}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('messagePlaceholder')}
                      id="message-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="h-12 w-full bg-black text-white"
              type="submit"
            >
              {formText.buttonText}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BayimizOl;

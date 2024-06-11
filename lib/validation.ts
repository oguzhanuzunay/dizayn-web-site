import * as z from 'zod';

export const becomeOurDealerSchema = z.object({
  companyName: z
    .string({
      required_error: 'Lütfen şirket adınızı giriniz.',
    })
    .min(5, 'Şirket adı en az 5 karakter olmalıdır.')
    .max(130, 'Şirket adı en fazla 130 karakter olmalıdır.'),
  fullName: z
    .string({ required_error: 'Lütfen adınızı ve soyadınızı giriniz.' })
    .min(5, 'Adınız ve soyadınız en az 5 karakter olmalıdır.')
    .max(50, 'Adınız ve soyadınız en fazla 50 karakter olmalıdır.'),
  phone: z.string({ required_error: 'Lütfen telefon numaranızı giriniz.' }).min(10).max(15),
  eMail: z.string({ required_error: 'Lütfen e-posta adresinizi giriniz.' }).email(),
  city: z.string({ required_error: 'Lütfen şehir seçiniz.' }).min(5).max(15),
  annualRevenue: z.number().min(1000).max(50000000),
  numberOfSubDealers: z.number().min(0).max(99),
  numberOfProjectsWorkedOn: z
    .number({ required_error: 'Lütfen çalıştığınız proje sayısını giriniz.' })
    .min(0)
    .max(99),
  subject: z.string({ required_error: 'Lütfen konuyu belirtiniz.' }).min(5).max(50),
  explanation: z.string({ required_error: 'Lütfen açıklama yapınız.' }).min(20).max(500),
});

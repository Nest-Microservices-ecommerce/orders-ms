import { IsString, IsUrl } from 'class-validator';

export class PaidOrderDto {
  @IsString()
  stripePaymentId: string;
  @IsString()
  orderId: string;
  @IsString()
  @IsUrl()
  receiptUrl: string;
}

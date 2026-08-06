export class CreateAddressDto {
  label!: string;
  phone!: string;
  line1!: string;
  line2?: string;
  city!: string;
  state!: string;
  pincode!: string;
  isDefault?: boolean;
}
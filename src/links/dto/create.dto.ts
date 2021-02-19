import { IsUrl, Length } from 'class-validator';

export class CreateDto {
  // ：http://localhost:XXXX/xxx 会被认为不是 URL address
  // @IsUrl()

  @Length(1, 2000)
  longUrl: string;
}

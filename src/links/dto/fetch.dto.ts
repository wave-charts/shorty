import { IsUrl, Length } from 'class-validator';

export class FetchDto {
  @IsUrl()
  @Length(1, 2000)
  shortUrl: string;
}

import {
  IsOptional,
  IsEmail,
  IsString,
  Length,
  IsUrl,
  Min,
  Max,
  IsInt,
  Matches,
  IsNotEmpty,
} from 'class-validator'

export class UpdateClubDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Matches(/(?!^\d+$)^./, {
    message: 'The name cant be a only numeric',
  })
  @Matches(/.*\S.*/, {
    message: 'the name cant be only withespaces',
  })
  name?: string

  @IsOptional()
  @IsString()
  shortName?: string

  @IsOptional()
  @IsString()
  @Length(3, 3)
  tla?: string

  @IsOptional()
  @IsString()
  area?: string

  @IsOptional()
  @IsUrl()
  crestUrl?: string

  @IsOptional()
  @IsString()
  address?: string

  @IsOptional()
  @IsString()
  phone?: string

  @IsOptional()
  @IsUrl()
  website?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString()
  clubColors?: string

  @IsOptional()
  @IsString()
  venue?: string

  @IsOptional()
  @IsInt({
    message: 'active value must be 1 (active) or 0 (inactive)',
  })
  @Min(0, {
    message: 'active value must be 1 (active) or 0 (inactive)',
  })
  @Max(1, {
    message: 'active value must be 1 (active) or 0 (inactive)',
  })
  active?: 0 | 1
}

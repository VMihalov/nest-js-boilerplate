import { Exclude, Type, Transform } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ObjectId } from 'mongodb';
import { RolesEnum } from '@decorators/roles.decorator';

export class Data {
  @Transform((value) => value.toString(), { toPlainOnly: true })
  _id: ObjectId = new ObjectId();

  role: RolesEnum = RolesEnum.user;

  verified: boolean = false;

  @Exclude()
  email: string = '';

  @Exclude()
  password: string = '';
}

export default class UserResponseEntity {
  @ValidateNested({ each: true })
  @Type(() => Data)
  data?: [{
    _id: ObjectId;

    role: string;

    verified: false;

    email: string;

    password: string;
  }] = [{
    _id: new ObjectId(),

    role: '',

    verified: false,

    email: '',

    password: '',
  }]
}

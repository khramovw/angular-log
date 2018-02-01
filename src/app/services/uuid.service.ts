import { Injectable } from '@angular/core';

@Injectable()
export class UuidService {

  constructor() { }

  generate() {
    return 'xxxxxxxx-xxxx-4xxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r: (r & 0x3 | 0x8);
      return v.toString(16);
    })
  }
}
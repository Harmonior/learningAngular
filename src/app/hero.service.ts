import {Injectable } from '@angular/core';
import { Hero} from './hero';
import { HEROES} from './mock-heroes';

@Injectable()   // 用来创建一个服务
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes =>
      heroes.find(hero => hero.id === id));
    // 只找第一个符合的，返回符合条件的第一个值
  }
}

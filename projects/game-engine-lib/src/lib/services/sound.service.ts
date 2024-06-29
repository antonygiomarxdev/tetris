import { Injectable } from "@angular/core";
import { Zoundfx } from "ng-zzfx";

@Injectable({
  providedIn: "root",
})
export class SoundService {
  private playSoundFn = Zoundfx.start(0.2);

  constructor() {}

  public initSound() {
    this.playSoundFn = Zoundfx.start(0.2);
  }

  public playSound(sound: number[]) {
    this.playSoundFn(sound);
  }
}

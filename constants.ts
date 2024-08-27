import { WeaponType } from "./types";

// #region : common
export const weaponTypeToWeaponName: { [weaponType in WeaponType]: string } = {
  [WeaponType.LongSword]: "태도",
  [WeaponType.Bow]: "활",
  [WeaponType.GreatSword]: "대검",
  [WeaponType.Hammer]: "해머",
  [WeaponType.SwordShield]: "한손검",
  [WeaponType.Lance]: "랜스",
  [WeaponType.GunLance]: "건랜스",
  [WeaponType.ChargeBlade]: "차지액스",
  [WeaponType.LightBowgun]: "라이트보우건",
};
export const statusSneakAttackLvList = [0, 1, 2, 3, 4, 5];
// #endregion : common

// #region : blast
export const teostraBlastPowderLvList = [0, 1, 2, 3];
export const blastAttackLvList = [0, 1, 2, 3, 4, 5];
// #endregion : blast

// #region : sleep
export const sleepAttackLvList = [0, 1, 2, 3, 4, 5];
// #endregion : sleep

// #region : sleep
export const poisonAttackLvList = [0, 1, 2, 3, 4, 5];
// #endregion : sleep

// #region : paralysis
export const paralysisAttackLvList = [0, 1, 2, 3, 4, 5];
// #endregion : paralysis

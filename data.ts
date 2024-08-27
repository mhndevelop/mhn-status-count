// #region : imports
import {
  MonsterName,
  MonsterStatusResistanceData,
  WeaponType,
  WeaponTypeStatusCoef,
  WeaponTypeHitsPerSecond,
  MonsterHPData,
} from "./types";
// #endregion : imports

// #region : monster common data
export const monsterNames: MonsterName[] = [
  "도스쟈그라스",
  "쿠루루야크",
  "푸케푸케",
  "푸케푸케 아종",
  "볼보로스",
  "도스기르오스",
  "토비카가치",
  "파오우르무",
  "파오우르무 아종",
  "쥬라토도스",
  "안쟈나프",
  "리오레이아",
  "리오레이아 아종",
  "레이기에나",
  "디아블로스",
  "디아블로스 아종",
  "리오레우스",
  "리오레우스 아종",
  "라도발킨",
  "버프바로",
  "벨리오로스",
  "진오우거",
  "치치야크",
  "오도가론",
  "이블죠",
  "바살모스",
  "푸루푸루",
  "타마미츠네",
];

export const monsterHPdata: MonsterHPData = {
  도스쟈그라스: {
    "8": 32080,
    "9": 67780,
    "10": 139120,
  },
  쿠루루야크: {
    "8": 30580,
    "9": 64560,
    "10": 132480,
  },
  푸케푸케: {
    "8": 30580,
    "9": 64560,
    "10": 132480,
  },
  "푸케푸케 아종": {
    "8": 56450,
    "9": 121150,
    "10": 215800,
  },
  볼보로스: {
    "8": 23560,
    "9": 49950,
    "10": 99160,
  },
  도스기르오스: {
    "8": 33680,
    "9": 71340,
    "10": 141680,
  },
  토비카가치: {
    "8": 31960,
    "9": 74240,
    "10": 143340,
  },
  파오우르무: {
    "8": 38600,
    "9": 74920,
    "10": 148760,
  },
  "파오우르무 아종": {
    "8": 42250,
    "9": 90300,
    "10": 166660,
  },
  쥬라토도스: {
    "8": 25720,
    "9": 54680,
    "10": 105600,
  },
  안쟈나프: {
    "8": 39040,
    "9": 83240,
    "10": 156880,
  },
  리오레이아: {
    "8": 38240,
    "9": 81520,
    "10": 153640,
  },
  "리오레이아 아종": {
    "8": 42920,
    "9": 91720,
    "10": 169300,
  },
  레이기에나: {
    "8": 45080,
    "9": 96520,
    "10": 174880,
  },
  디아블로스: {
    "8": 41420,
    "9": 88670,
    "10": 160600,
  },
  "디아블로스 아종": {
    "8": 55250,
    "9": 112080,
    "10": 187700,
  },
  리오레우스: {
    "8": 43720,
    "9": 93600,
    "10": 169520,
  },
  "리오레우스 아종": {
    "8": 49020,
    "9": 105300,
    "10": 187600,
  },
  라도발킨: {
    "8": 31940,
    "9": 67760,
    "10": 134600,
  },
  버프바로: {
    "8": 23880,
    "9": 46360,
    "10": 92080,
  },
  벨리오로스: {
    "8": 35040,
    "9": 74720,
    "10": 140840,
  },
  진오우거: {
    "8": 45100,
    "9": 95250,
    "10": 177700,
  },
  치치야크: {
    "8": 30500,
    "9": 64500,
    "10": 132450,
  },
  오도가론: {
    "8": 29300,
    "9": 57000,
    "10": 113300,
  },
  이블죠: {
    "8": 55800,
    "9": 118900,
    "10": 224150,
  },
  바살모스: {
    "8": 23600,
    "9": 45200,
    "10": 99200,
  },
  푸루푸루: {
    "8": 30300,
    "9": 64000,
    "10": 127500,
  },
  타마미츠네: {
    "8": 44400,
    "9": 94000,
    "10": 174600,
  },
};
// #endregion : monster common data

// #region : monster resistance data
export const monsterBlastInitialResistanceData: MonsterStatusResistanceData = {
  도스쟈그라스: {
    "8": 731,
    "9": 844,
    "10": 936,
  },
  쿠루루야크: {
    "8": 1462,
    "9": 1688,
    "10": 1872,
  },
  푸케푸케: {
    "8": 1462,
    "9": 1688,
    "10": 1872,
  },
  "푸케푸케 아종": {
    "8": 1522,
    "9": 1757,
    "10": 1949,
  },
  볼보로스: {
    "8": 731,
    "9": 844,
    "10": 946,
  },
  도스기르오스: {
    "8": 1512,
    "9": 1746,
    "10": 1891,
  },
  토비카가치: {
    "8": 1512,
    "9": 1746,
    "10": 1911,
  },
  파오우르무: {
    "8": 731,
    "9": 844,
    "10": 946,
  },
  "파오우르무 아종": {
    "8": 1512,
    "9": 1746,
    "10": 1891,
  },
  쥬라토도스: {
    "8": 3059,
    "9": 3528,
    "10": 3821,
  },
  안쟈나프: {
    "8": 3094,
    "9": 3452,
    "10": 3860,
  },
  리오레이아: {
    "8": 3094,
    "9": 3452,
    "10": 3860,
  },
  "리오레이아 아종": {
    "8": 3129,
    "9": 3523,
    "10": 3899,
  },
  레이기에나: {
    "8": 1574,
    "9": 1818,
    "10": 1969,
  },
  디아블로스: {
    "8": 1574,
    "9": 1818,
    "10": 1969,
  },
  "디아블로스 아종": {
    "8": 1574,
    "9": 1818,
    "10": 1969,
  },
  리오레우스: {
    "8": 3156,
    "9": 3521,
    "10": 3938,
  },
  "리오레우스 아종": {
    "8": 3200,
    "9": 3596,
    "10": 3976,
  },
  라도발킨: {
    "8": 756,
    "9": 869,
    "10": 946,
  },
  버프바로: {
    "8": 765,
    "9": 878,
    "10": 946,
  },
  벨리오로스: {
    "8": 1512,
    "9": 1746,
    "10": 10,
  },
  진오우거: {
    "8": 1574,
    "9": 1818,
    "10": 1949,
  },
  치치야크: {
    "8": 1462,
    "9": 1694,
    "10": 1872,
  },
  오도가론: {
    "8": 1530,
    "9": 1767,
    "10": 1891,
  },
  이블죠: {
    "8": 1558,
    "9": 1800,
    "10": 1930,
  },
  바살모스: {
    "8": 1512,
    "9": 1746,
    "10": 1891,
  },
  푸루푸루: {
    "8": 1512,
    "9": 1746,
    "10": 1891,
  },
  타마미츠네: {
    "8": 1512,
    "9": 1746,
    "10": 1891,
  },
};

export const monsterSleepInitialResistanceData: MonsterStatusResistanceData = {
  도스쟈그라스: {
    "8": 2559,
    "9": 2953,
    "10": 3275,
  },
  쿠루루야크: {
    "8": 3655,
    "9": 4219,
    "10": 4680,
  },
  푸케푸케: {
    "8": 2559,
    "9": 2953,
    "10": 3276,
  },
  "푸케푸케 아종": {
    "8": 3814,
    "9": 4403,
    "10": 4874,
  },
  볼보로스: {
    "8": 3780,
    "9": 4265,
    "10": 4728,
  },
  도스기르오스: {
    "8": 2646,
    "9": 2986,
    "10": 3310,
  },
  토비카가치: {
    "8": 3780,
    "9": 4311,
    "10": 4777,
  },
  파오우르무: {
    "8": 3824,
    "9": 4265,
    "10": 4728,
  },
  "파오우르무 아종": {
    "8": 4971,
    "9": 5605,
    "10": 6210,
  },
  쥬라토도스: {
    "8": 4971,
    "9": 5605,
    "10": 6210,
  },
  안쟈나프: {
    "8": 3868,
    "9": 4357,
    "10": 4825,
  },
  리오레이아: {
    "8": 3868,
    "9": 4357,
    "10": 4825,
  },
  "리오레이아 아종": {
    "8": 3912,
    "9": 4403,
    "10": 4874,
  },
  레이기에나: {
    "8": 3956,
    "9": 4450,
    "10": 4922,
  },
  디아블로스: {
    "8": 3956,
    "9": 4450,
    "10": 4922,
  },
  "디아블로스 아종": {
    "8": 4087,
    "9": 4542,
    "10": 4970,
  },
  리오레우스: {
    "8": 3956,
    "9": 4450,
    "10": 4922,
  },
  "리오레우스 아종": {
    "8": 4000,
    "9": 4496,
    "10": 4970,
  },
  라도발킨: {
    "8": 4914,
    "9": 5545,
    "10": 6147,
  },
  버프바로: {
    "8": 3824,
    "9": 4265,
    "10": 4728,
  },
  벨리오로스: {
    "8": 3824,
    "9": 4265,
    "10": 4728,
  },
  진오우거: {
    "8": 3868,
    "9": 4311,
    "10": 4874,
  },
  치치야크: {
    "8": 3655,
    "9": 4219,
    "10": 4680,
  },
  오도가론: {
    "8": 3824,
    "9": 4265,
    "10": 4728,
  },
  이블죠: {
    "8": 3868,
    "9": 4357,
    "10": 4825,
  },
  바살모스: {
    "8": 2646,
    "9": 2953,
    "10": 3310,
  },
  푸루푸루: {
    "8": 3780,
    "9": 4265,
    "10": 4728,
  },
  타마미츠네: {
    "8": 3956,
    "9": 4450,
    "10": 4922,
  },
};

export const monsterPoisonInitialResistanceData: MonsterStatusResistanceData = {
  도스쟈그라스: {
    "8": 3655,
    "9": 4219,
    "10": 4680,
  },
  쿠루루야크: {
    "8": 4752,
    "9": 5485,
    "10": 6084,
  },
  푸케푸케: {
    "8": 7310,
    "9": 8438,
    "10": 9360,
  },
  "푸케푸케 아종": {
    "8": 3956,
    "9": 4403,
    "10": 4874,
  },
  볼보로스: {
    "8": 3780,
    "9": 4265,
    "10": 4728,
  },
  도스기르오스: {
    "8": 4914,
    "9": 5545,
    "10": 6147,
  },
  토비카가치: {
    "8": 3780,
    "9": 4311,
    "10": 4777,
  },
  파오우르무: {
    "8": 4971,
    "9": 5545,
    "10": 6147,
  },
  "파오우르무 아종": {
    "8": 4971,
    "9": 5605,
    "10": 6210,
  },
  쥬라토도스: {
    "8": 4971,
    "9": 5605,
    "10": 6210,
  },
  안쟈나프: {
    "8": 5028,
    "9": 5664,
    "10": 6273,
  },
  리오레이아: {
    "8": 7736,
    "9": 8715,
    "10": 9650,
  },
  "리오레이아 아종": {
    "8": 7823,
    "9": 8807,
    "10": 9747,
  },
  레이기에나: {
    "8": 2769,
    "9": 3115,
    "10": 3445,
  },
  디아블로스: {
    "8": 5142,
    "9": 5784,
    "10": 6399,
  },
  "디아블로스 아종": {
    "8": 5313,
    "9": 5904,
    "10": 6462,
  },
  리오레우스: {
    "8": 7911,
    "9": 8899,
    "10": 9844,
  },
  "리오레우스 아종": {
    "8": 7999,
    "9": 8991,
    "10": 9941,
  },
  라도발킨: {
    "8": 4914,
    "9": 5545,
    "10": 6147,
  },
  버프바로: {
    "8": 4971,
    "9": 5545,
    "10": 6147,
  },
  벨리오로스: {
    "8": 4971,
    "9": 5545,
    "10": 6147,
  },
  진오우거: {
    "8": 5085,
    "9": 5724,
    "10": 6336,
  },
  치치야크: {
    "8": 3655,
    "9": 4219,
    "10": 4680,
  },
  오도가론: {
    "8": 7648,
    "9": 8530,
    "10": 9457,
  },
  이블죠: {
    "8": 2707,
    "9": 3050,
    "10": 3378,
  },
  바살모스: {
    "8": 3780,
    "9": 4219,
    "10": 4728,
  },
  푸루푸루: {
    "8": 2646,
    "9": 2986,
    "10": 3310,
  },
  타마미츠네: {
    "8": 3956,
    "9": 4450,
    "10": 4922,
  },
};

export const monsterParalysisInitialResistanceData: MonsterStatusResistanceData =
  {
    도스쟈그라스: {
      "8": 3655,
      "9": 4219,
      "10": 4680,
    },
    쿠루루야크: {
      "8": 3655,
      "9": 4219,
      "10": 4680,
    },
    푸케푸케: {
      "8": 3655,
      "9": 4219,
      "10": 4680,
    },
    "푸케푸케 아종": {
      "8": 3956,
      "9": 4403,
      "10": 4874,
    },
    볼보로스: {
      "8": 3780,
      "9": 4265,
      "10": 4728,
    },
    도스기르오스: {
      "8": 4914,
      "9": 5545,
      "10": 6147,
    },
    토비카가치: {
      "8": 3780,
      "9": 4311,
      "10": 4777,
    },
    파오우르무: {
      "8": 3824,
      "9": 4265,
      "10": 4728,
    },
    "파오우르무 아종": {
      "8": 3868,
      "9": 4357,
      "10": 4825,
    },
    쥬라토도스: {
      "8": 3824,
      "9": 4311,
      "10": 4777,
    },
    안쟈나프: {
      "8": 3868,
      "9": 4357,
      "10": 4825,
    },
    리오레이아: {
      "8": 3868,
      "9": 4357,
      "10": 4825,
    },
    "리오레이아 아종": {
      "8": 3912,
      "9": 4403,
      "10": 4874,
    },
    레이기에나: {
      "8": 3956,
      "9": 4450,
      "10": 4922,
    },
    디아블로스: {
      "8": 2796,
      "9": 3115,
      "10": 3445,
    },
    "디아블로스 아종": {
      "8": 2861,
      "9": 3179,
      "10": 3479,
    },
    리오레우스: {
      "8": 3956,
      "9": 4450,
      "10": 4922,
    },
    "리오레우스 아종": {
      "8": 4000,
      "9": 4496,
      "10": 4970,
    },
    라도발킨: {
      "8": 3780,
      "9": 4265,
      "10": 4728,
    },
    버프바로: {
      "8": 3824,
      "9": 4265,
      "10": 4728,
    },
    벨리오로스: {
      "8": 3956,
      "9": 4450,
      "10": 4922,
    },
    진오우거: {
      "8": 5085,
      "9": 5724,
      "10": 6336,
    },
    치치야크: {
      "8": 4752,
      "9": 5485,
      "10": 6084,
    },
    오도가론: {
      "8": 2677,
      "9": 2986,
      "10": 3310,
    },
    이블죠: {
      "8": 3868,
      "9": 4357,
      "10": 4825,
    },
    바살모스: {
      "8": 3780,
      "9": 4219,
      "10": 4728,
    },
    푸루푸루: {
      "8": 4914,
      "9": 5545,
      "10": 6147,
    },
    타마미츠네: {
      "8": 3956,
      "9": 4450,
      "10": 4922,
    },
  };
// #endregion : monster registance data

// #region : weapon data
export const weaponTypeBlastCoef: WeaponTypeStatusCoef = {
  [WeaponType.LongSword]: 1.4,
  [WeaponType.Bow]: 0.6,
  [WeaponType.GreatSword]: 2.0,
  [WeaponType.Hammer]: 1.6,
  [WeaponType.SwordShield]: 1.0,
  [WeaponType.Lance]: 1.3,
  [WeaponType.GunLance]: 0,
  [WeaponType.ChargeBlade]: 1.3,
  [WeaponType.LightBowgun]: 0,
};

export const weaponTypeSleepCoef: WeaponTypeStatusCoef = {
  [WeaponType.LongSword]: 0,
  [WeaponType.Bow]: 1.0,
  [WeaponType.GreatSword]: 2.0,
  [WeaponType.Hammer]: 1.6,
  [WeaponType.SwordShield]: 1.0,
  [WeaponType.Lance]: 1.3,
  [WeaponType.GunLance]: 0,
  [WeaponType.ChargeBlade]: 0,
  [WeaponType.LightBowgun]: 3.0,
};

export const weaponTypePoisonCoef: WeaponTypeStatusCoef = {
  [WeaponType.LongSword]: 1.4,
  [WeaponType.Bow]: 1.0,
  [WeaponType.GreatSword]: 2.0,
  [WeaponType.Hammer]: 1.6,
  [WeaponType.SwordShield]: 1.0,
  [WeaponType.Lance]: 1.3,
  [WeaponType.GunLance]: 1.5,
  [WeaponType.ChargeBlade]: 1.3,
  [WeaponType.LightBowgun]: 0,
};

export const weaponTypeParalysisCoef: WeaponTypeStatusCoef = {
  [WeaponType.LongSword]: 0,
  [WeaponType.Bow]: 1.0,
  [WeaponType.GreatSword]: 2.0,
  [WeaponType.Hammer]: 1.6,
  [WeaponType.SwordShield]: 1.0,
  [WeaponType.Lance]: 0,
  [WeaponType.GunLance]: 1.5,
  [WeaponType.ChargeBlade]: 1.3,
  [WeaponType.LightBowgun]: 0,
};

export const poisonWeaponHitsPerSecond: WeaponTypeHitsPerSecond = {
  [WeaponType.SwordShield]: [
    {
      name: "swordShieldNormal",
      text: "평타 위주",
      hps: 1.3, // 100 / 75
    },
    {
      name: "swordShieldBackDashFallBash",
      text: "백대시 폴배시",
      hps: 1.07, // 80 / 75
    },
  ],
  [WeaponType.LongSword]: [
    {
      name: "longBladeNormalAndSheath",
      text: "평타 및 특수납도",
      hps: 1, // 75 / 75
    },
    {
      name: "longBladeNormal",
      text: "평타 위주",
      hps: 1, // 75 / 75
    },
  ],
  [WeaponType.Bow]: [
    {
      name: "bowPoison3ChargingSpreadLv4",
      text: "독활 3차징 확산4렙",
      hps: 2.08, // 156 / 75
    },
  ],
  [WeaponType.GreatSword]: [
    {
      name: "greatSwordFastTackle",
      text: "빠른 태클 반복",
      hps: 0.47, // 35 / 75
    },
    {
      name: "greatSwordCharging",
      text: "모아베기",
      hps: 0.32, // 24 / 75
    },
    {
      name: "greatSwordPerfectEvadeAttack",
      text: "저스트 회피 공격",
      hps: 0.32, // 24 / 75
    },
  ],
  [WeaponType.Hammer]: [
    {
      name: "hammerNormal",
      text: "평타 위주",
      hps: 0.67, // 50 / 75
    },
    {
      name: "hammerCharging",
      text: "차지 위주",
      hps: 0.47, // 35 / 75
    },
  ],
  [WeaponType.Lance]: [
    {
      name: "lanceDash",
      text: "돌진 위주",
      hps: 1.17, // 88 / 75
    },
    {
      name: "lanceNormalCounter",
      text: "평타 및 카운터 찌르기 위주",
      hps: 0.87, // 65 / 75
    },
  ],
  [WeaponType.GunLance]: [
    {
      name: "gunLanceSlash",
      text: "참격 위주",
      hps: 0.8, // 60 / 75
    },
    {
      name: "gunLanceWyrmstakeCannon",
      text: "용항포 위주",
      hps: 1.07, // 80 / 75
    },
    {
      name: "gunLanceSlashAndShelling",
      text: "참격반 포격반",
      hps: 0.67, // 50 / 75
    },
    {
      name: "gunLanceFullBurst",
      text: "풀버스트 위주",
      hps: 0.6, // 45 / 75
    },
  ],
  [WeaponType.ChargeBlade]: [
    {
      name: "chargeBladeGuardPointAmpedDischarge",
      text: "가포 고출력",
      hps: 0.47, // 35 / 75
    },
    {
      name: "chargeBladeSuperAmpedDischarge",
      text: "초고출력 위주",
      hps: 0.6, // 45 / 75
    },
    {
      name: "chargeBladeAxeModeNormal",
      text: "도끼모드 평타 위주",
      hps: 0.67, // 50 / 75
    },
    {
      name: "chargeBladeOnlySwordMode",
      text: "오직 검모드 평타",
      hps: 0.87, // 65 / 75
    },
  ],
  [WeaponType.LightBowgun]: [
    {
      name: "",
      text: "",
      hps: 0, // 60 / 75
    },
  ],
};

export const blastWeaponHitsPerSecond: WeaponTypeHitsPerSecond = {
  [WeaponType.SwordShield]: [
    {
      name: "swordShieldNormal",
      text: "평타 위주",
      hps: 1.3, // 100 / 75
    },
    {
      name: "swordShieldBackDashFallBash",
      text: "백대시 폴배시",
      hps: 1.07, // 80 / 75
    },
  ],
  [WeaponType.LongSword]: [
    {
      name: "longBladeNormalAndSheath",
      text: "평타 및 특수납도",
      hps: 1, // 75 / 75
    },
    {
      name: "longBladeNormal",
      text: "평타 위주",
      hps: 1, // 75 / 75
    },
  ],
  [WeaponType.Bow]: [
    {
      name: "bowTeostra1ChargingPierceLv2",
      text: "테오활 1차징 관통2렙",
      hps: 3, // 225 / 75
    },
    {
      name: "bowTeostra2ChargingRapidLv4",
      text: "테오활 2차징 연사4렙",
      hps: 2.13, // 160 / 75
    },
    {
      name: "bowTeostra3ChargingSpreadLv4",
      text: "테오활 3차징 확산4렙",
      hps: 2.08, // 156 / 75
    },
  ],
  [WeaponType.GreatSword]: [
    {
      name: "greatSwordFastTackle",
      text: "빠른 태클 반복",
      hps: 0.47, // 35 / 75
    },
    {
      name: "greatSwordCharging",
      text: "모아베기",
      hps: 0.32, // 24 / 75
    },
    {
      name: "greatSwordPerfectEvadeAttack",
      text: "저스트 회피 공격",
      hps: 0.32, // 24 / 75
    },
  ],
  [WeaponType.Hammer]: [
    {
      name: "hammerNormal",
      text: "평타 위주",
      hps: 0.67, // 50 / 75
    },
    {
      name: "hammerCharging",
      text: "차지 위주",
      hps: 0.47, // 35 / 75
    },
  ],
  [WeaponType.Lance]: [
    {
      name: "lanceDash",
      text: "돌진 위주",
      hps: 1.17, // 88 / 75
    },
    {
      name: "lanceNormalCounter",
      text: "평타 및 카운터 찌르기 위주",
      hps: 0.87, // 65 / 75
    },
  ],
  [WeaponType.GunLance]: [
    {
      name: "",
      text: "",
      hps: 0,
    },
  ],
  [WeaponType.ChargeBlade]: [
    {
      name: "chargeBladeGuardPointAmpedDischarge",
      text: "가포 고출력",
      hps: 0.47, // 35 / 75
    },
    {
      name: "chargeBladeSuperAmpedDischarge",
      text: "초고출력 위주",
      hps: 0.6, // 45 / 75
    },
    {
      name: "chargeBladeAxeModeNormal",
      text: "도끼모드 평타 위주",
      hps: 0.67, // 50 / 75
    },
    {
      name: "chargeBladeOnlySwordMode",
      text: "오직 검모드 평타",
      hps: 0.87, // 65 / 75
    },
  ],
  [WeaponType.LightBowgun]: [
    {
      name: "",
      text: "",
      hps: 0,
    },
  ],
};

export const sleepWeaponHitsPerSecond: WeaponTypeHitsPerSecond = {
  [WeaponType.SwordShield]: [
    {
      name: "swordShieldNormal",
      text: "평타 위주",
      hps: 1.3, // 100 / 75
    },
    {
      name: "swordShieldBackDashFallBash",
      text: "백대시 폴배시",
      hps: 1.07, // 80 / 75
    },
  ],
  [WeaponType.LongSword]: [
    {
      name: "",
      text: "",
      hps: 0,
    },
  ],
  [WeaponType.Bow]: [
    {
      name: "bowBlackPao1ChargingSpreadLv3",
      text: "파오아종활 2차징 확산3렙",
      hps: 2.67, // 200 / 75
    },
    {
      name: "bowBlackPao1ChargingSpreadLv4",
      text: "파오아종활 3차징 확산4렙",
      hps: 2.08, // 156 / 75
    },
  ],
  [WeaponType.GreatSword]: [
    {
      name: "greatSwordFastTackleAwakenAttack",
      text: "빠른 태클 반복후 수면참",
      hps: 0.47, // 35 / 75
    },
    {
      name: "greatSwordCharging",
      text: "모아베기",
      hps: 0.32, // 24 / 75
    },
    {
      name: "greatSwordPerfectEvadeAttack",
      text: "저스트 회피 공격",
      hps: 0.32, // 24 / 75
    },
  ],
  [WeaponType.Hammer]: [
    {
      name: "hammerNormal",
      text: "평타 위주",
      hps: 0.67, // 50 / 75
    },
    {
      name: "hammerCharging",
      text: "차지 위주",
      hps: 0.47, // 35 / 75
    },
  ],
  [WeaponType.Lance]: [
    {
      name: "lanceDash",
      text: "돌진 위주",
      hps: 1.17, // 88 / 75
    },
    {
      name: "lanceNormalCounter",
      text: "평타 및 카운터 찌르기 위주",
      hps: 0.87, // 65 / 75
    },
  ],
  [WeaponType.GunLance]: [
    {
      name: "",
      text: "",
      hps: 0,
    },
  ],
  [WeaponType.ChargeBlade]: [
    {
      name: "",
      text: "",
      hps: 0,
    },
  ],
  [WeaponType.LightBowgun]: [
    {
      name: "lightBowgunManySleepAmmo",
      text: "수면탄 저회장전 많음(5~6회)",
      hps: 0.4, // (12+18) / 75
    },
    {
      name: "lightBowgunNormalSleepAmmo",
      text: "수면탄 저회장전 보통(3~4회)",
      hps: 0.32, // (15+9) / 75
    },
    {
      name: "lightBowgunFewSleepAmmo",
      text: "수면탄 저회장전 적음(0~2회)",
      hps: 0.24, // 18 / 75
    },
  ],
};

export const paralysisWeaponHitsPerSecond: WeaponTypeHitsPerSecond = {
  [WeaponType.SwordShield]: [
    {
      name: "swordShieldNormal",
      text: "평타 위주",
      hps: 1.3, // 100 / 75
    },
    {
      name: "swordShieldBackDashFallBash",
      text: "백대시 폴배시",
      hps: 1.07, // 80 / 75
    },
  ],
  [WeaponType.LongSword]: [
    {
      name: "",
      text: "",
      hps: 0,
    },
  ],
  [WeaponType.Bow]: [
    {
      name: "",
      text: "",
      hps: 0,
    },
  ],
  [WeaponType.GreatSword]: [
    {
      name: "greatSwordFastTackle",
      text: "빠른 태클 반복",
      hps: 0.47, // 35 / 75
    },
    {
      name: "greatSwordCharging",
      text: "모아베기",
      hps: 0.32, // 24 / 75
    },
    {
      name: "greatSwordPerfectEvadeAttack",
      text: "저스트 회피 공격",
      hps: 0.32, // 24 / 75
    },
  ],
  [WeaponType.Hammer]: [
    {
      name: "hammerNormal",
      text: "평타 위주",
      hps: 0.67, // 50 / 75
    },
    {
      name: "hammerCharging",
      text: "차지 위주",
      hps: 0.47, // 35 / 75
    },
  ],
  [WeaponType.Lance]: [
    {
      name: "",
      text: "",
      hps: 0, // 88 / 75
    },
  ],
  [WeaponType.GunLance]: [
    {
      name: "gunLanceSlash",
      text: "참격 위주",
      hps: 0.8, // 60 / 75
    },
    {
      name: "gunLanceWyrmstakeCannon",
      text: "용항포 위주",
      hps: 1.07, // 80 / 75
    },
    {
      name: "gunLanceSlashAndShelling",
      text: "참격반 포격반",
      hps: 0.67, // 50 / 75
    },
    {
      name: "gunLanceFullBurst",
      text: "풀버스트 위주",
      hps: 0.6, // 45 / 75
    },
  ],
  [WeaponType.ChargeBlade]: [
    {
      name: "chargeBladeGuardPointAmpedDischarge",
      text: "가포 고출력",
      hps: 0.47, // 35 / 75
    },
    {
      name: "chargeBladeSuperAmpedDischarge",
      text: "초고출력 위주",
      hps: 0.6, // 45 / 75
    },
    {
      name: "chargeBladeAxeModeNormal",
      text: "도끼모드 평타 위주",
      hps: 0.67, // 50 / 75
    },
    {
      name: "chargeBladeOnlySwordMode",
      text: "오직 검모드 평타",
      hps: 0.87, // 65 / 75
    },
  ],
  [WeaponType.LightBowgun]: [
    {
      name: "",
      text: "",
      hps: 0, // 60 / 75
    },
  ],
};
// #endregion : weapon data

// #region : common status data
export const statusSneakAttackLvProbabilityIncrease = {
  "0": 0,
  "1": 10,
  "2": 20,
  "3": 30,
  "4": 40,
  "5": 100,
};
// #endregion : common status data

// #region : blast
export const blastMultiplier = 1.3;

export const teostraBlastPowderLvProbabilityIncrease = {
  "0": 0,
  "1": 15,
  "2": 30,
  "3": 45,
};

export const blastAttackLvIncrease = {
  "0": 0,
  "1": 50,
  "2": 75,
  "3": 100,
  "4": 125,
  "5": 150,
};
// #endregion : blast

// #region : sleep
export const sleepAttackLvIncrease = {
  "0": 0,
  "1": 50,
  "2": 75,
  "3": 100,
  "4": 125,
  "5": 150,
};

export const lightBowgunSleepValueByGrade = {
  "5": 150,
  "6": 180,
  "7": 195,
  "8": 210,
  "9": 225,
  "10": 240,
};

export const lightBowGunSleepHitsCoef = 0.28; // 21 / 75
// #endregion : sleep

// #region : poison
export const poisonAttackLvIncrease = {
  "0": 0,
  "1": 50,
  "2": 75,
  "3": 100,
  "4": 125,
  "5": 150,
};
// #endregion : poison

// #region : poison
export const paralysisAttackLvIncrease = {
  "0": 0,
  "1": 50,
  "2": 75,
  "3": 100,
  "4": 125,
  "5": 150,
};
// #endregion : poison

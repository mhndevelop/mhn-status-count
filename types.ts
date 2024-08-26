export enum NavItem {
  Blast = "blast",
  Sleep = "sleep",
  Poison = "poison",
}

export enum WeaponType {
  LongSword = "longSword",
  Bow = "bow",
  GreatSword = "greatSword",
  Hammer = "hammer",
  SwordShield = "swordShield",
  Lance = "lance",
  GunLance = "gunLance",
  ChargeBlade = "chargeBlade",
  LightBowgun = "lightBowgun",
}

export type MonsterName =
  | "도스쟈그라스"
  | "쿠루루야크"
  | "푸케푸케"
  | "푸케푸케 아종"
  | "볼보로스"
  | "도스기르오스"
  | "토비카가치"
  | "파오우르무"
  | "파오우르무 아종"
  | "쥬라토도스"
  | "안쟈나프"
  | "리오레이아"
  | "리오레이아 아종"
  | "레이기에나"
  | "디아블로스"
  | "디아블로스 아종"
  | "리오레우스"
  | "리오레우스 아종"
  | "라도발킨"
  | "버프바로"
  | "벨리오로스"
  | "진오우거"
  | "치치야크"
  | "오도가론"
  | "이블죠"
  | "바살모스"
  | "푸루푸루"
  | "타마미츠네";

export type MonsterStatusResistanceData = {
  [monsterName in MonsterName]: {
    "8": number;
    "9": number;
    "10": number;
  };
};

export type MonsterHPData = {
  [monsterName in MonsterName]: {
    "8": number;
    "9": number;
    "10": number;
  };
};

export type WeaponTypeStatusCoef = {
  [weaponType in WeaponType]: number;
};

export type WeaponTypeHitsPerSecond = {
  [weaponType in WeaponType]: number;
};

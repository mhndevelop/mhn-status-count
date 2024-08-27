"use client";

// #region : imports
import {
  poisonAttackLvList,
  statusSneakAttackLvList,
  weaponTypeToWeaponName,
} from "@/constants";
import {
  poisonAttackLvIncrease,
  monsterPoisonInitialResistanceData,
  monsterNames,
  statusSneakAttackLvProbabilityIncrease,
  weaponTypePoisonCoef,
  poisonWeaponHitsPerSecond,
  monsterHPdata,
} from "@/data";
import { MonsterName, WeaponType } from "@/types";
import { generatePoisonResistValue } from "@/utils";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
// #endregion : imports

// #region : types
interface Inputs {
  weaponType: WeaponType;
  playStyle: string;
  poisonValue: number;
  monsterGrade: "8" | "9" | "10";
  monsterName: MonsterName;
  statusSneakAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
  poisonAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
  huntingTime: number;
}
// #endregion : types

// #region : styled components
const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  & button {
    width: 100%;
    height: 32px;
  }
`;

const FormSection = styled.section`
  display: flex;
  align-items: center;
  & label {
    width: 120px;
  }
  & input {
    min-width: 160px;
    min-height: 24px;
    padding: 4px;
  }
  & select {
    min-width: 160px;
    min-height: 24px;
    padding-left: 2px;
  }
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  & dl {
    width: fit-content;
  }
  & dl > dt {
    display: inline;
    margin-right: 4px;
  }
  & dl > dd {
    display: inline;
  }
`;
// #endregion : styled components

export default function Page() {
  // #region : states
  const [cumulativePoisonValue, setCumulativePoisonValue] = useState(0);
  const [poisonCount, setPoisonCount] = useState(0);
  const [poisonDamage, setPoisonDamage] = useState(0);
  // #endregion : states

  // #region : react hook form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      weaponType: WeaponType.LongSword,
      huntingTime: 75,
    },
  });
  // #endregion : react hook form

  // #region : handlers
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("------------------------------------------------------");
    console.log("------------------------계산시작------------------------");
    console.log("------------------------------------------------------");
    const coef = weaponTypePoisonCoef[watch("weaponType")];
    const poisonValue = watch("poisonValue");
    const targetHitsPerSecondIndex = poisonWeaponHitsPerSecond[
      watch("weaponType")
    ].findIndex((item) => item.name === watch("playStyle"));
    const hitsPerSecond =
      poisonWeaponHitsPerSecond[watch("weaponType")][targetHitsPerSecondIndex]
        .hps;
    const numberOfHits = Math.floor(watch("huntingTime") * hitsPerSecond);
    const totalPoisonProbabilityIncrease = Math.min(
      100,
      statusSneakAttackLvProbabilityIncrease[watch("statusSneakAttackLv")]
    );
    const poisonAttackIncrease =
      poisonAttackLvIncrease[watch("poisonAttackLv")];
    const totalPoisonValue = +poisonValue + +poisonAttackIncrease;
    const coefAppliedTotalPoisonValue = Math.floor(totalPoisonValue * coef);
    const numberOfPoisonHits = Math.floor(
      numberOfHits * (Math.min(100, 33 + totalPoisonProbabilityIncrease) / 100)
    );
    const estimatedCumulativeValue =
      coefAppliedTotalPoisonValue * numberOfPoisonHits;
    setCumulativePoisonValue(estimatedCumulativeValue);

    const targetMonsterInitialPoisonResistanceValue =
      monsterPoisonInitialResistanceData[watch("monsterName")][
        watch("monsterGrade")
      ];
    let currentPoisonOccurs = 0;
    let currentCumulativePoisonValue = 0;

    for (let index = 0; index < numberOfPoisonHits; index++) {
      const currentPoisonResist = generatePoisonResistValue(
        targetMonsterInitialPoisonResistanceValue,
        currentPoisonOccurs
      );
      console.log(`이전의 독 판정까지 독은 ${currentPoisonOccurs}번 발생`);
      console.log(`무기 공격 독 판정 ${index + 1}번 발생`);
      console.log(`현재 몬스터 독 내성치: ${currentPoisonResist}`);
      const diffBtwCurrentPoisonResistanceAndCurrentCumulativePoison =
        currentPoisonResist -
        currentCumulativePoisonValue -
        coefAppliedTotalPoisonValue;
      console.log(
        `현재 몬스터 내성치 - 이전 독 축적치 - 이번 독 판정값: ${diffBtwCurrentPoisonResistanceAndCurrentCumulativePoison}`
      );
      if (diffBtwCurrentPoisonResistanceAndCurrentCumulativePoison <= 0) {
        currentPoisonOccurs++;
        currentCumulativePoisonValue = 0;
        console.log("독 터져서 독 누적치 초기화");
        console.log(`이제 독 ${currentPoisonOccurs}번 발생`);
      } else {
        currentCumulativePoisonValue += coefAppliedTotalPoisonValue;
        console.log(
          `방금 독 판정 이후 현재까지 누적된 이번 회차의 독 누적치: ${currentCumulativePoisonValue}`
        );
      }
    }
    console.log(`${currentPoisonOccurs}번 독 가능`);
    setPoisonCount(currentPoisonOccurs);

    const totalDamage =
      Math.floor(
        monsterHPdata[watch("monsterName")][watch("monsterGrade")] * 0.1
      ) * currentPoisonOccurs;
    setPoisonDamage(totalDamage);
    console.log("----------------------------------------------------");
    console.log("------------------------계산끝------------------------");
    console.log("----------------------------------------------------");
    console.log("\n");
    console.log("\n");
  };
  // #endregion : handlers

  // #region : effects
  useEffect(() => {
    setValue(
      "playStyle",
      poisonWeaponHitsPerSecond[watch("weaponType")][0].name
    );
  }, [watch("weaponType")]);
  // #endregino : effects

  return (
    <div>
      <Container>
        <Title>독최몇</Title>
        <div id="container">
          <FormSC onSubmit={handleSubmit(onSubmit)}>
            <FormSection>
              <label htmlFor="weapon-type">무기 종류</label>
              <select {...register("weaponType")} id="weapon-type">
                {Object.keys(weaponTypeToWeaponName).map((weaponType) => {
                  if (weaponType === WeaponType["LightBowgun"]) {
                    return null;
                  } else {
                    return (
                      <option
                        value={weaponType}
                        key={`weapon-type-${weaponType}`}
                      >
                        {weaponTypeToWeaponName[weaponType as WeaponType]}
                      </option>
                    );
                  }
                })}
              </select>
            </FormSection>
            <FormSection>
              <label htmlFor="play-style">플레이 스타일</label>
              <select {...register("playStyle")} id="play-style">
                {watch("weaponType") &&
                  poisonWeaponHitsPerSecond[watch("weaponType")].map(
                    (playStyle) => (
                      <option
                        value={playStyle.name}
                        key={`play-style-${playStyle.name}`}
                      >
                        {playStyle.text}
                      </option>
                    )
                  )}
              </select>
            </FormSection>
            <FormSection>
              <label htmlFor="poison-value">독 속성치</label>
              <input
                {...register("poisonValue")}
                type="number"
                id="poison-value"
                placeholder="무기 독 속성 수치 입력"
              />
            </FormSection>
            <FormSection>
              <label htmlFor="monster-grade">몬스터 등급</label>
              <select {...register("monsterGrade")} id="monster-grade">
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </FormSection>
            <FormSection>
              <label htmlFor="monster-name">몬스터 이름</label>
              <select {...register("monsterName")} id="monster-name">
                {monsterNames.map((monsterName) => (
                  <option
                    value={monsterName}
                    key={`monster-name-${monsterName}`}
                  >
                    {monsterName}
                  </option>
                ))}
              </select>
            </FormSection>
            <FormSection>
              <label htmlFor="status-sneak-attack-lv">기습 [상태이상]</label>
              <select
                {...register("statusSneakAttackLv")}
                id="status-sneak-attack-lv"
              >
                {statusSneakAttackLvList.map((level) => (
                  <option value={level} key={`status-sneak-attack-lv-${level}`}>
                    {level}
                  </option>
                ))}
              </select>
            </FormSection>
            <FormSection>
              <label htmlFor="poison-attack-lv">독속성 강화</label>
              <select {...register("poisonAttackLv")} id="poison-attack-lv">
                {poisonAttackLvList.map((level) => (
                  <option value={level} key={`poison-attack-lv-${level}`}>
                    {level}
                  </option>
                ))}
              </select>
            </FormSection>
            <FormSection>
              <label htmlFor="hunting-time">사냥시간(초)</label>
              <input
                {...register("huntingTime")}
                id="hunting-time"
                placeholder="초 단위로 입력"
                type="number"
                min="0"
                max="150"
              />
            </FormSection>
            {errors.weaponType && <span>무기 종류를 골라야함</span>}
            <button type="submit">계산 ㄱㄱ</button>
          </FormSC>
          <Result>
            <dl>
              <dt>총 독 누적치:</dt>
              <dd>{cumulativePoisonValue}</dd>
            </dl>
            <dl>
              <dt>기대 독 횟수:</dt>
              <dd>{poisonCount}번</dd>
            </dl>
            <dl>
              <dt>몬스터 체력:</dt>
              <dd>
                {monsterHPdata?.[watch("monsterName")]?.[watch("monsterGrade")]
                  ? monsterHPdata?.[watch("monsterName")]?.[
                      watch("monsterGrade")
                    ]
                  : 0}
              </dd>
            </dl>
            <dl>
              <dt>총 독 데미지:</dt>
              <dd>{poisonDamage}</dd>
            </dl>
            <dl>
              <dt>독 데미지 비율:</dt>
              <dd>{10 * poisonCount}%</dd>
            </dl>
          </Result>
        </div>
      </Container>
    </div>
  );
}

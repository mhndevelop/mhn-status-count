"use client";

// #region : imports
import {
  paralysisAttackLvList,
  statusSneakAttackLvList,
  weaponTypeToWeaponName,
} from "@/constants";
import {
  paralysisAttackLvIncrease,
  monsterParalysisInitialResistanceData,
  monsterNames,
  statusSneakAttackLvProbabilityIncrease,
  weaponTypeParalysisCoef,
  paralysisWeaponHitsPerSecond,
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
  paralysisValue: number;
  monsterGrade: "8" | "9" | "10";
  monsterName: MonsterName;
  statusSneakAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
  paralysisAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
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
  const [cumulativeParalysisValue, setCumulativeParalysisValue] = useState(0);
  const [paralysisCount, setParalysisCount] = useState(0);
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
      weaponType: WeaponType.SwordShield,
      huntingTime: 75,
    },
  });
  // #endregion : react hook form

  // #region : handlers
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("------------------------------------------------------");
    console.log("------------------------계산시작------------------------");
    console.log("------------------------------------------------------");
    const coef = weaponTypeParalysisCoef[watch("weaponType")];
    const paralysisValue = watch("paralysisValue");
    const targetHitsPerSecondIndex = paralysisWeaponHitsPerSecond[
      watch("weaponType")
    ].findIndex((item) => item.name === watch("playStyle"));
    const hitsPerSecond =
      paralysisWeaponHitsPerSecond[watch("weaponType")][
        targetHitsPerSecondIndex
      ].hps;
    const numberOfHits = Math.floor(watch("huntingTime") * hitsPerSecond);
    const totalParalysisProbabilityIncrease = Math.min(
      100,
      statusSneakAttackLvProbabilityIncrease[watch("statusSneakAttackLv")]
    );
    const paralysisAttackIncrease =
      paralysisAttackLvIncrease[watch("paralysisAttackLv")];
    const totalParalysisValue = +paralysisValue + +paralysisAttackIncrease;
    const coefAppliedTotalParalysisValue = Math.floor(
      totalParalysisValue * coef
    );
    const numberOfParalysisHits = Math.floor(
      numberOfHits *
        (Math.min(100, 33 + totalParalysisProbabilityIncrease) / 100)
    );
    const estimatedCumulativeValue =
      coefAppliedTotalParalysisValue * numberOfParalysisHits;
    setCumulativeParalysisValue(estimatedCumulativeValue);

    const targetMonsterInitialParalysisResistanceValue =
      monsterParalysisInitialResistanceData[watch("monsterName")][
        watch("monsterGrade")
      ];
    let currentParalysisOccurs = 0;
    let currentCumulativeParalysisValue = 0;

    for (let index = 0; index < numberOfParalysisHits; index++) {
      const currentParalysisResist = generatePoisonResistValue(
        targetMonsterInitialParalysisResistanceValue,
        currentParalysisOccurs
      );
      console.log(
        `이전의 마비 판정까지 마비는 ${currentParalysisOccurs}번 발생`
      );
      console.log(`무기 공격 마비 판정 ${index + 1}번 발생`);
      console.log(`현재 몬스터 마비 내성치: ${currentParalysisResist}`);
      const diffBtwCurrentParalysisResistanceAndCurrentCumulativeParalysis =
        currentParalysisResist -
        currentCumulativeParalysisValue -
        coefAppliedTotalParalysisValue;
      console.log(
        `현재 몬스터 내성치 - 이전 마비 축적치 - 이번 마비 판정값: ${diffBtwCurrentParalysisResistanceAndCurrentCumulativeParalysis}`
      );
      if (diffBtwCurrentParalysisResistanceAndCurrentCumulativeParalysis <= 0) {
        currentParalysisOccurs++;
        currentCumulativeParalysisValue = 0;
        console.log("마비 터져서 마비 누적치 초기화");
        console.log(`이제 마비 ${currentParalysisOccurs}번 발생`);
      } else {
        currentCumulativeParalysisValue += coefAppliedTotalParalysisValue;
        console.log(
          `방금 마비 판정 이후 현재까지 누적된 이번 회차의 마비 누적치: ${currentCumulativeParalysisValue}`
        );
      }
    }
    console.log(`${currentParalysisOccurs}번 마비 가능`);
    setParalysisCount(currentParalysisOccurs);

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
      paralysisWeaponHitsPerSecond[watch("weaponType")][0].name
    );
  }, [watch("weaponType")]);
  // #endregino : effects

  return (
    <div>
      <Container>
        <Title>맙최몇</Title>
        <div id="container">
          <FormSC onSubmit={handleSubmit(onSubmit)}>
            <FormSection>
              <label htmlFor="weapon-type">무기 종류</label>
              <select {...register("weaponType")} id="weapon-type">
                {Object.keys(weaponTypeToWeaponName).map((weaponType) => {
                  if (
                    weaponType === WeaponType["LongSword"] ||
                    weaponType === WeaponType["Bow"] ||
                    weaponType === WeaponType["Lance"] ||
                    weaponType === WeaponType["LightBowgun"]
                  ) {
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
                  paralysisWeaponHitsPerSecond[watch("weaponType")].map(
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
              <label htmlFor="paralysis-value">마비 속성치</label>
              <input
                {...register("paralysisValue")}
                type="number"
                id="paralysis-value"
                placeholder="무기 마비 속성 수치 입력"
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
              <label htmlFor="paralysis-attack-lv">마비속성 강화</label>
              <select
                {...register("paralysisAttackLv")}
                id="paralysis-attack-lv"
              >
                {paralysisAttackLvList.map((level) => (
                  <option value={level} key={`paralysis-attack-lv-${level}`}>
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
              <dt>총 마비 누적치:</dt>
              <dd>{cumulativeParalysisValue}</dd>
            </dl>
            <dl>
              <dt>기대 마비 횟수:</dt>
              <dd>{paralysisCount}번</dd>
            </dl>
          </Result>
        </div>
      </Container>
    </div>
  );
}

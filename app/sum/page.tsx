"use client";

// #region : imports
import {
  sleepAttackLvList,
  statusSneakAttackLvList,
  weaponTypeToWeaponName,
} from "@/constants";
import {
  sleepAttackLvIncrease,
  monsterSleepInitialResistanceData,
  monsterNames,
  statusSneakAttackLvProbabilityIncrease,
  weaponTypeSleepCoef,
  weaponTypeHitsPerSecond,
  lightBowgunSleepValueByGrade,
  lightBowGunSleepHitsCoef,
} from "@/data";
import { MonsterName, WeaponType } from "@/types";
import { generateSleepResistValue } from "@/utils";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
// #endregion : imports

// #region : types
interface Inputs {
  weaponType: WeaponType;
  sleepValue: number;
  lightBowgunGrade: "5" | "6" | "7" | "8" | "9" | "10";
  monsterGrade: "8" | "9" | "10";
  monsterName: MonsterName;
  statusSneakAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
  sleepAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
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
  const [cumulativeSleepValue, setCumulativeSleepValue] = useState(0);
  const [sleepCount, setSleepCount] = useState(0);
  // #endregion : states

  // #region : react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  // #endregion : react hook form

  // #region : handlers
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("------------------------------------------------------");
    console.log("------------------------계산시작------------------------");
    console.log("------------------------------------------------------");
    const coef = weaponTypeSleepCoef[watch("weaponType")];
    const sleepValue =
      watch("weaponType") !== WeaponType.LightBowgun
        ? watch("sleepValue")
        : lightBowgunSleepValueByGrade[watch("lightBowgunGrade")];
    const numberOfHits =
      watch("weaponType") !== WeaponType.LightBowgun
        ? watch("huntingTime") * weaponTypeHitsPerSecond[watch("weaponType")]
        : Math.floor(watch("huntingTime") * lightBowGunSleepHitsCoef);
    const totalSleepProbabilityIncrease = Math.min(
      100,
      statusSneakAttackLvProbabilityIncrease[watch("statusSneakAttackLv")]
    );
    const sleepAttackIncrease = sleepAttackLvIncrease[watch("sleepAttackLv")];
    const totalSleepValue = +sleepValue + +sleepAttackIncrease;
    const coefAppliedTotalSleepValue = Math.floor(totalSleepValue * coef);
    const numberOfSleepHits =
      watch("weaponType") !== WeaponType.LightBowgun
        ? Math.floor(
            numberOfHits *
              (Math.min(100, 33 + totalSleepProbabilityIncrease) / 100)
          )
        : numberOfHits;
    const estimatedCumulativeValue =
      coefAppliedTotalSleepValue * numberOfSleepHits;
    setCumulativeSleepValue(estimatedCumulativeValue);

    const targetMonsterInitialSleepResistanceValue =
      monsterSleepInitialResistanceData[watch("monsterName")][
        watch("monsterGrade")
      ];
    let currentSleepOccurs = 0;
    let currentCumulativeSleepValue = 0;

    for (let index = 0; index < numberOfSleepHits; index++) {
      const currentSleepResist = generateSleepResistValue(
        targetMonsterInitialSleepResistanceValue,
        currentSleepOccurs
      );
      console.log(`이전의 수면 판정까지 수면은 ${currentSleepOccurs}번 발생`);
      console.log(`무기 공격 수면 판정 ${index + 1}번 발생`);
      console.log(`현재 몬스터 수면 내성치: ${currentSleepResist}`);
      const diffBtwCurrentSleepResistanceAndCurrentCumulativeSleep =
        currentSleepResist -
        currentCumulativeSleepValue -
        coefAppliedTotalSleepValue;
      console.log(
        `현재 몬스터 내성치 - 이전 수면 축적치 - 이번 수면 판정값: ${diffBtwCurrentSleepResistanceAndCurrentCumulativeSleep}`
      );
      if (diffBtwCurrentSleepResistanceAndCurrentCumulativeSleep <= 0) {
        currentSleepOccurs++;
        currentCumulativeSleepValue = 0;
        console.log("수면 터져서 수면 누적치 초기화");
        console.log(`이제 수면 ${currentSleepOccurs}번 발생`);
      } else {
        currentCumulativeSleepValue += coefAppliedTotalSleepValue;
        console.log(
          `방금 수면 판정 이후 현재까지 누적된 이번 회차의 수면 누적치: ${currentCumulativeSleepValue}`
        );
      }
    }
    console.log(`${currentSleepOccurs}번 수면 가능`);
    setSleepCount(currentSleepOccurs);
    console.log("----------------------------------------------------");
    console.log("------------------------계산끝------------------------");
    console.log("----------------------------------------------------");
    console.log("\n");
    console.log("\n");
  };
  // #endregion : handlers

  return (
    <div>
      <Container>
        <Title>숨최몇</Title>
        <div id="container">
          <FormSC onSubmit={handleSubmit(onSubmit)}>
            <FormSection>
              <label htmlFor="weapon-type">무기 종류</label>
              <select {...register("weaponType")} id="weapon-type">
                {Object.keys(weaponTypeToWeaponName).map((weaponType) => {
                  if (
                    weaponType === WeaponType["ChargeBlade"] ||
                    weaponType === WeaponType["LongSword"]
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
            {watch("weaponType") !== WeaponType.LightBowgun && (
              <FormSection>
                <label htmlFor="sleep-value">수면 속성치</label>
                <input
                  {...register("sleepValue")}
                  type="number"
                  id="sleep-value"
                  placeholder="무기 수면 속성 수치 입력"
                />
              </FormSection>
            )}
            {watch("weaponType") === WeaponType.LightBowgun && (
              <FormSection>
                <label htmlFor="light-bowgun-grade">보우건 무기 등급</label>
                <select
                  {...register("lightBowgunGrade")}
                  id="light-bowgun-grade"
                >
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </FormSection>
            )}
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
            {watch("weaponType") !== WeaponType["LightBowgun"] && (
              <FormSection>
                <label htmlFor="status-sneak-attack-lv">기습 [상태이상]</label>
                <select
                  {...register("statusSneakAttackLv")}
                  id="status-sneak-attack-lv"
                >
                  {statusSneakAttackLvList.map((level) => (
                    <option
                      value={level}
                      key={`status-sneak-attack-lv-${level}`}
                    >
                      {level}
                    </option>
                  ))}
                </select>
              </FormSection>
            )}
            <FormSection>
              <label htmlFor="sleep-attack-lv">수면속성 강화</label>
              <select {...register("sleepAttackLv")} id="sleep-attack-lv">
                {sleepAttackLvList.map((level) => (
                  <option value={level} key={`sleep-attack-lv-${level}`}>
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
              <dt>총 수면 누적치:</dt>
              <dd>{cumulativeSleepValue}</dd>
            </dl>
            <dl>
              <dt>기대 수면 횟수:</dt>
              <dd>{sleepCount}번</dd>
            </dl>
          </Result>
        </div>
      </Container>
    </div>
  );
}

"use client";

// #region : imports
import {
  blastAttackLvList,
  statusSneakAttackLvList,
  teostraBlastPowderLvList,
  weaponTypeToWeaponName,
} from "@/constants";
import {
  blastAttackLvIncrease,
  blastMultiplier,
  blastWeaponHitsPerSecond,
  monsterBlastInitialResistanceData,
  monsterHPdata,
  monsterNames,
  statusSneakAttackLvProbabilityIncrease,
  teostraBlastPowderLvProbabilityIncrease,
  weaponTypeBlastCoef,
} from "@/data";
import { MonsterName, WeaponType } from "@/types";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
// #endregion : imports

// #region : types
interface Inputs {
  weaponType: WeaponType;
  playStyle: string;
  blastValue: number;
  monsterGrade: "8" | "9" | "10";
  monsterName: MonsterName;
  teostraBlastPowerLv: "0" | "1" | "2" | "3";
  statusSneakAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
  blastAttackLv: "0" | "1" | "2" | "3" | "4" | "5";
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
  const [cumulativeBlastValue, setCumulativeBlastValue] = useState(0);
  const [blastCount, setBlastCount] = useState(0);
  const [blastDamage, setBlastDamage] = useState(0);
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
    const coef = weaponTypeBlastCoef[watch("weaponType")];
    const blastValue = watch("blastValue");
    const targetHitsPerSecondIndex = blastWeaponHitsPerSecond[
      watch("weaponType")
    ].findIndex((item) => item.name === watch("playStyle"));
    const hitsPerSecond =
      blastWeaponHitsPerSecond[watch("weaponType")][targetHitsPerSecondIndex]
        .hps;
    const numberOfHits = Math.floor(watch("huntingTime") * hitsPerSecond);
    const totalBlastProbabilityIncrease = Math.min(
      100,
      teostraBlastPowderLvProbabilityIncrease[watch("teostraBlastPowerLv")] +
        statusSneakAttackLvProbabilityIncrease[watch("statusSneakAttackLv")]
    );
    const blastAttackIncrease = blastAttackLvIncrease[watch("blastAttackLv")];
    const totalBlastValue = +blastValue + +blastAttackIncrease;
    const coefAppliedTotalBlastValue = Math.floor(totalBlastValue * coef);
    const numberOfBlastHits = Math.floor(
      numberOfHits * (Math.min(100, 33 + totalBlastProbabilityIncrease) / 100)
    );

    const estimatedCumulativeValue =
      coefAppliedTotalBlastValue * numberOfBlastHits;
    setCumulativeBlastValue(estimatedCumulativeValue);

    const targetMonsterInitialBlastResistanceValue =
      monsterBlastInitialResistanceData[watch("monsterName")][
        watch("monsterGrade")
      ];
    let currentBlastOccurs = 0;
    let currentCumulativeBlastValue = 0;

    for (let index = 0; index < numberOfBlastHits; index++) {
      const currentBlastResist = Math.floor(
        targetMonsterInitialBlastResistanceValue *
          Math.pow(blastMultiplier, currentBlastOccurs)
      );
      console.log(`이전의 폭파 판정까지 폭파는 ${currentBlastOccurs}번 터짐`);
      console.log(`무기 공격 폭파 판정 ${index + 1}번 발생`);
      console.log(`현재 몬스터 폭파 내성치: ${currentBlastResist}`);
      const diffBtwCurrentBlastResistanceAndCurrentCumulativeBlast =
        currentBlastResist -
        currentCumulativeBlastValue -
        coefAppliedTotalBlastValue;
      console.log(
        `현재 몬스터 내성치 - 이전 폭파 축적치 - 이번 폭파 판정값: ${diffBtwCurrentBlastResistanceAndCurrentCumulativeBlast}`
      );
      if (diffBtwCurrentBlastResistanceAndCurrentCumulativeBlast <= 0) {
        currentBlastOccurs++;
        currentCumulativeBlastValue = 0;
        console.log("폭파 터져서 폭파 누적치 초기화");
        console.log(`이제 폭파 ${currentBlastOccurs}번 터짐`);
      } else {
        currentCumulativeBlastValue += coefAppliedTotalBlastValue;
        console.log(
          `방금 폭파 판정 이후 현재까지 누적된 이번 회차의 폭파 누적치: ${currentCumulativeBlastValue}`
        );
      }
    }
    console.log(`${currentBlastOccurs}번 폭파 가능`);
    setBlastCount(currentBlastOccurs);
    const totalDamage =
      Math.floor(
        monsterHPdata[watch("monsterName")][watch("monsterGrade")] * 0.05
      ) * currentBlastOccurs;
    setBlastDamage(totalDamage);
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
      blastWeaponHitsPerSecond[watch("weaponType")][0].name
    );
  }, [watch("weaponType")]);
  // #endregino : effects

  return (
    <div>
      <Container>
        <Title>폭최몇</Title>
        <div id="container">
          <FormSC onSubmit={handleSubmit(onSubmit)}>
            <FormSection>
              <label htmlFor="weapon-type">무기 종류</label>
              <select {...register("weaponType")} id="weapon-type">
                {Object.keys(weaponTypeToWeaponName).map((weaponType) => {
                  if (
                    weaponType === WeaponType["LightBowgun"] ||
                    weaponType === WeaponType["GunLance"]
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
                  blastWeaponHitsPerSecond[watch("weaponType")].map(
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
              <label htmlFor="blast-value">폭파 속성치</label>
              <input
                {...register("blastValue")}
                type="number"
                id="blast-value"
                placeholder="무기 폭파 속성 수치 입력"
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
              <label htmlFor="teostra-blast-powder-lv">염왕룡의 폭파분진</label>
              <select
                {...register("teostraBlastPowerLv")}
                id="teostra-blast-powder-lv"
              >
                {teostraBlastPowderLvList.map((level) => (
                  <option
                    value={level}
                    key={`teostra-blast-powder-lv-${level}`}
                  >
                    {level}
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
              <label htmlFor="blast-attack-lv">폭파속성 강화</label>
              <select {...register("blastAttackLv")} id="blast-attack-lv">
                {blastAttackLvList.map((level) => (
                  <option value={level} key={`blast-attack-lv-${level}`}>
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
              <dt>총 폭파 누적치:</dt>
              <dd>{cumulativeBlastValue}</dd>
            </dl>
            <dl>
              <dt>기대 폭파 횟수:</dt>
              <dd>{blastCount}번</dd>
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
              <dt>총 폭파 데미지:</dt>
              <dd>{blastDamage}</dd>
            </dl>
            <dl>
              <dt>폭파 데미지 비율:</dt>
              <dd>{5 * blastCount}%</dd>
            </dl>
          </Result>
        </div>
      </Container>
    </div>
  );
}

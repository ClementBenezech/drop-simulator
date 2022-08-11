import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as React from "react";
import { SpeedUnit } from "../../App";
import * as S from "./InputWithLabel.style"

export type NotSpeedUnit = {
    abbreviation: string;
    multiplier: number;
}

export type InputWithLabelProps = {
    icon: IconProp,
    label: string,
    value: number,
    min: number,
    max: number,
    unit: SpeedUnit | NotSpeedUnit,
    onChange: (value: string) => void;



}
const InputWithLabel = ({ icon, label, value, onChange, min, max, unit }: InputWithLabelProps) => {

    // Calculating the current value of the input in the current unit. 
    const currentValueInCurrentUnit = Math.round(value * unit.multiplier)

    return (

        <S.InputContainer >
            <S.StyledIcon icon={icon} />
            <S.SliderAndLabelContainer>
                <S.StyledLabel>{label}</S.StyledLabel>
                <S.StyledInput min={min} max={max} value={value} onChange={(event) => onChange(event.target.value)} type="range"></S.StyledInput>
            </S.SliderAndLabelContainer>
            <S.StyledValue>{`${currentValueInCurrentUnit} ${unit.abbreviation}`}</S.StyledValue>
        </S.InputContainer >)
}

export default InputWithLabel



import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as React from "react";
import * as S from "./InputWithLabel.style"

export type InputWithLabelProps = {
    icon: IconProp,
    label: string,
    value: number,
    min: number,
    max: number,
    unit: string,
    onChange: (value: string) => void;



}
const InputWithLabel = ({ icon, label, value, onChange, min, max, unit }: InputWithLabelProps) => {
    return (

        <S.InputContainer >


            <S.StyledIcon icon={icon} />
            <S.SliderAndLabelContainer>
                <S.StyledLabel>{label}</S.StyledLabel>
                <S.StyledInput min={min} max={max} value={value} onChange={(event) => onChange(event.target.value)} type="range"></S.StyledInput>
            </S.SliderAndLabelContainer>

            <S.StyledValue>{`${value} ${unit}`}</S.StyledValue>
        </S.InputContainer >)
}

export default InputWithLabel



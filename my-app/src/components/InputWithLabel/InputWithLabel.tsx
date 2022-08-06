import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import * as S from "./InputWithLabel.style"

export type InputWithLabelProps = {
    icon: IconProp,
    label: string,
    value: number,
    onChange: (value: string) => void;


}
const InputWithLabel = ({ icon, label, value, onChange }: InputWithLabelProps) => {
    return (

        <S.InputContainer >
            <S.StyledIcon icon={icon} />
            <S.StyledLabel>{label}</S.StyledLabel>
            <S.StyledEditIcon icon={faPen} />
            <S.StyledInput value={value} onChange={(event) => onChange(event.target.value)} type="text"></S.StyledInput>
        </S.InputContainer >)
}

export default InputWithLabel



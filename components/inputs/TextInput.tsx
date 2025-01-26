import { FormLabel, Grid2, OutlinedInput, styled } from '@mui/material'

const FormGrid = styled(Grid2)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

type TextInputProps = {
    name: string,
    placeholder: string,
    label: string
}

const TextInput = ({name, placeholder, label}: TextInputProps) => {
    return (
        <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor={name} required>
                {label}
            </FormLabel>
            <OutlinedInput
                id={name}
                name={name}
                type="name"
                placeholder={placeholder}
                size="small"
            />
        </FormGrid>
    )
}

export default TextInput
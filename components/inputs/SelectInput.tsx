import { FormLabel, Grid2, MenuItem, OutlinedInput, Select, styled } from '@mui/material'
import SelectInput from '@mui/material/Select/SelectInput';

const FormGrid = styled(Grid2)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

type SelectInputProps = {
    name: string,
    placeholder: string,
    label: string
}

const SelectInputC = ({ name, placeholder, label }: SelectInputProps) => {
    return (
        <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor={name} required>
                {label}
            </FormLabel>
            <Select
                name={name}
                input={<OutlinedInput />}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormGrid>
    )
}

export default SelectInputC
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { OutlinedInput } from '@mui/material';

export default function AssignSelect({ initialValue, handleAssign }: { initialValue: string | null, handleAssign: (salesperson: string) => void }) {
    const [person, setPerson] = React.useState(initialValue || '');

    const handleChange = (event: SelectChangeEvent) => {
        setPerson(event.target.value);
        handleAssign(event.target.value)
    };

    return (
        <div>
            <FormControl>
                {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={person}
                    onChange={handleChange}
                    // autoWidth
                    displayEmpty
                    sx={{
                        width: '120px',
                        '& > div': { padding: '8.5px 14px', color: person ? 'text.primary' : 'text.disabled' }
                    }}
                    input={<OutlinedInput sx={{
                        color: person ? 'text.primary' : 'text.disabled',
                        '& > div': { padding: '8.5px 14px' }
                    }} />}
                >
                    <MenuItem disabled value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'person_1'}>Person 1</MenuItem>
                    <MenuItem value={'person_2'}>Person 2</MenuItem>
                    <MenuItem value={'person_3'}>Person 3</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
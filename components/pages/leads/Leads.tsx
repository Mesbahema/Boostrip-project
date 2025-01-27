'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLeads } from '@/libs/hooks/useLeads';
import inquiryOptions from '@/items/inquiryOptions';
import { Skeleton, styled } from '@mui/material';
import AssignSelect from './AssignSelect';
import { useAssignSalesperson } from '@/libs/hooks/useAssignSalesperson';
import { useEffect } from 'react';

const StyledSkeleton = styled(Skeleton)({
  height: '40px',
})


export default function Leads() {
  const { data, isLoading, refetch, isFetching, isRefetching } = useLeads()

  const loadings = [0, 0, 0]

  const { mutate, isPending, isSuccess } = useAssignSalesperson();

  const handleAssign = (salesperson: string, leadId: string ) => {
    mutate({ leadId, assignedSalesperson: salesperson });
  };

  useEffect(() => {
    if(isSuccess) refetch()
  }, [isSuccess])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Assigned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(isLoading || isPending || isFetching || isRefetching) ? loadings.map((item, key) => (
            <TableRow key={key}>
              <TableCell ><StyledSkeleton /></TableCell>
              <TableCell ><StyledSkeleton /></TableCell>
              <TableCell ><StyledSkeleton /></TableCell>
              <TableCell ><StyledSkeleton /></TableCell>
            </TableRow>)): data?.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{inquiryOptions.find(item => item.value === row.source)?.label}</TableCell>
              <TableCell>
                <AssignSelect
                  handleAssign={(salesperson: string) => handleAssign(salesperson, row.id)}
                  initialValue={row.assignedSalesperson}
                />
                {/* {row.assignedSalesperson} */}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

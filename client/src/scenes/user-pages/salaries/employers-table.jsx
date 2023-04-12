import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function createData(
  name: string,
  calories: number,
  fat: number,
) {
  return { name, calories, fat};
}

const rows = [
  createData('General HealthCare Resources', 159, 6.0),
  createData('IMCS Group', 237, 9.0, ),
  createData('Cross Country Healthcare', 262, 16.0, ),
  createData('George Washington University Hospital', 305, 3.7, ),
  createData('Houston Methodist', 356, 16.0,),
];

export default function EmployersTable() {
  const theme = useTheme();
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const h5 = theme.typography.h5;
  const h3bold = theme.typography.h3bold;
  const h5bold = theme.typography.h5bold;
  const h6bold = theme.typography.h6bold;
  return (
    <Box sx={{ marginTop: theme.spacing(6)}}>
      <Box sx={{  marginLeft: "10%", marginRight:"10%",  }}>
        <Typography
          sx={{ 
            fontSize: h3bold,
            color: darkBlue, 
          }}>
        Top Paying Agencies and Employers
        </Typography>
        <Typography
            sx={{
              fontSize: h5,
              color: darkGray,
              my: 3,
              mt: 1
            }}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas arcu vitae ipsum volutpat mattis. 
          Sed pulvinar pretium luctus. Sed ut enim in ipsum elementum ultricies id eu justo. 
          </Typography>
        </Box>
        <Box sx={{  marginLeft: "10%", marginRight:"10%"}}>
        <TableContainer component={Paper} elevation={9} >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: h5bold, color: darkBlue}} > State</TableCell>
            <TableCell sx={{fontSize: h5bold, color: darkBlue}} align="center">Average Hourly Salary</TableCell>
            <TableCell sx={{fontSize: h5bold, color: darkBlue}} align="center">Maximum Hourly Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row" sx={{fontSize: h6bold}} > 
                {row.name}
              </TableCell>
              <TableCell sx={{fontSize: h6bold}} align="center">{row.calories}</TableCell>
              <TableCell sx={{fontSize: h6bold}} align="center">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </Box>
  );
}

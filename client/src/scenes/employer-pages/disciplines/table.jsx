import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, IconButton, Pagination } from '@mui/material';
import { useTheme } from '@emotion/react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function createData(
  index: number,
  discipline: string,
  specialties: number,
) {
  return { index, discipline, specialties};
}

const disciplines = [
    { index: 1, discipline: "Nurse Practitioner", specialties: 14 },
    { index: 2, discipline: "CMA", specialties: 9 },
    { index: 3, discipline: "Nurse Practitioner", specialties: 1 },
    { index: 4, discipline: "Physician Assistant", specialties: 12 },
    { index: 5, discipline: "Registered Nurse", specialties: 20 },
    { index: 6, discipline: "Medical Technologist", specialties: 6 },
    { index: 7, discipline: "Pharmacist", specialties: 8 },
    { index: 8, discipline: "Physical Therapist", specialties: 10 },
    { index: 9, discipline: "Occupational Therapist", specialties: 7 },
    { index: 10, discipline: "Speech-Language Pathologist", specialties: 5 },
    { index: 11, discipline: "Social Worker", specialties: 3 },
    { index: 12, discipline: "Clinical Psychologist", specialties: 4 },
    { index: 13, discipline: "Dietitian/Nutritionist", specialties: 2 },
    { index: 14, discipline: "Respiratory Therapist", specialties: 5 },
    { index: 15, discipline: "Radiologic Technologist", specialties: 4 },
    { index: 16, discipline: "Emergency Medical Technician", specialties: 1 },
  ];

export default function DesciplinesTable() {
  const theme = useTheme();
  const navigate = useNavigate();
  const lighterBlue = theme.palette.neutral.light;
  const darkGray = theme.palette.neutral.dark;
  const mainBlue = theme.palette.primary.main;
  const h5bold = theme.typography.h5bold;
  const h6bold = theme.typography.h6bold;

  const [page, setPage] = useState(1);
  const entriesPerPage = 10;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const displayedDisciplines = disciplines.slice(startIndex, endIndex);
  

  return (
    <Box sx={{ marginTop: theme.spacing(4), backgroundColor: "#FFFFFF", borderRadius: "20px"}}>
    <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: h5bold, color: mainBlue}} align="center"> No.</TableCell>
            <TableCell sx={{fontSize: h5bold, color: mainBlue}} align="center">Disciplines</TableCell>
            <TableCell sx={{fontSize: h5bold, color: mainBlue}} align="center">Specialties</TableCell>
            <TableCell sx={{fontSize: h5bold, color: mainBlue}} align="center">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody sx={{p:2}}>
        {displayedDisciplines.map((row) => (
            <TableRow key={row.index} >
            <TableCell component="th" scope="row" sx={{fontSize: h6bold, color: darkGray}}  align="center" > 
                {row.index}
            </TableCell>
            <TableCell sx={{fontSize: h6bold, color: darkGray,}} align="center">{row.discipline}</TableCell>
            <TableCell sx={{fontSize: h6bold, color: darkGray}} align="center">{row.specialties} Specialties</TableCell>
            <TableCell sx={{fontSize: h6bold, color: darkGray}} align="center">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ p: 0.5 }}>
                    <IconButton onClick={() => navigate("/expanded-facility")} size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, borderRadius: '4px', '&:hover': {backgroundColor: lighterBlue, color: "#103d49",}, display: 'flex', justifyContent: 'center' }}>
                    <OpenInFullIcon/>
                    </IconButton>
                </Box>
                <Box sx={{ p: 0.5 }}>
                    <IconButton onClick={() => navigate("/edit-facility")} size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, borderRadius: '4px', '&:hover': {backgroundColor: lighterBlue, color: "#103d49",}, display: 'flex', justifyContent: 'center' }}>
                    <ModeEditIcon/>
                    </IconButton>
                </Box>
                <Box sx={{ p: 0.5 }}>
                    <IconButton size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, borderRadius: '4px', '&:hover': {backgroundColor: lighterBlue, color: "#103d49",}, display: 'flex', justifyContent: 'center' }}>
                    <DeleteRoundedIcon/>
                    </IconButton>
                </Box>
                </Box>
            </TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
    <Pagination
          color="primary"
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
}

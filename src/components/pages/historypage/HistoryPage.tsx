import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWithPagination from './pagination/Pagination';

const theme = createTheme();

const HistoryPage: any = () => {
return(
    <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<h1>TESTING TEXT HISTORY PAGE</h1>
<TableWithPagination/>
        </Container>
);
    };

export default HistoryPage;


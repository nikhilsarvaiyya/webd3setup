import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SectionHeading from '../headings/section-heading';


export default function TablePage(props) {


    return (
        <Box sx={{ height: 400, width: '100%', mt: 1, mb:8 }}>
            <SectionHeading heading={props.heading} />
            
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}


import { Grid } from '@mui/material';
import ImageList from '../assets/json/ImageList.json'
import CardPage from "../component/cards/basic-card";
import TablePage from "../component/tables/Table";
import userList from '../assets/json/usersList.json'
import MasonryPage from '../component/widgets/Masonry';
import TimelinePage from '../component/widgets/Timeline';
import TestimonialPage from '../component/widgets/Testimonial';
import SectionHeading from '../component/headings/section-heading';


const columns = [
    { field: 'image', headerName: 'Image' },
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'First Name' },
    { field: 'lastName', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'phone', headerName: 'Phone' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'birthDate', headerName: 'Birth Date' },
    { field: 'age', headerName: 'Age' },
];

const rows = userList.users;

export default function Home() {
    return (
        <div >
            <TimelinePage heading="How it Goes" />
            <SectionHeading heading="Dummy Cards" />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                {ImageList?.slice(0, 6).map((item,i) => <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
                    <CardPage item={item} />
                </Grid>
                )}
            </Grid>
            <TablePage rows={rows} columns={columns} heading="User Table Priyanshu" />
            <TestimonialPage list={rows} heading="What they said!" />
            <MasonryPage heading="Gallery" imageList={ImageList} />

        </div>
    );
}

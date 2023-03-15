

import { Grid } from '@mui/material';
import ImageList from '../assets/json/ImageList.json'
import CardPage from "../component/cards/basic-card";
import SectionHeading from '../component/headings/section-heading';

export default function Home() {
    return (
        <div >
            <SectionHeading heading="Dummy Cards"/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                {ImageList?.slice(0, 6).map((item) => <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardPage item={item} />
                </Grid>
                )}
            </Grid>
         </div>
    );
}

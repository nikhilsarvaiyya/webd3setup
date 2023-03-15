import * as React from 'react';
import Carousel from 'react-material-ui-carousel'

import { Box } from '@mui/system';
import SectionHeading from '../headings/section-heading';


export default function TestimonialPage(props) {
    return (

        <Box  >
            <SectionHeading heading={props.heading} />

            <Carousel className='bg-slate-50 rounded-lg' >
                {
                    props.list?.slice(0, 5)?.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </Box>

    )
}

function Item(props) {
    return (
        <div className="pt-3 pb-2 text-center bg-slate-50 rounded-lg" elevation={0} >
            {/* <Avatar
                 alt="Remy Sharp"
                 src={props.item.img}
                 sx={{ width: 56, height: 56 , textAlign:'center'}}
             /> */}
            <h2>{props.item.firstName}</h2>
            <p>{props.item.firstName} {props.item.lastName}</p>
        </div>



    )
}
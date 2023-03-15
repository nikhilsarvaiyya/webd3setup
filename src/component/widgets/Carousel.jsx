
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/system';
export default function CarouselPage(props) {
    return (
        <Box  >
            <Carousel
                NextIcon={<ArrowForwardIosIcon />}
                PrevIcon={<ArrowBackIosNewIcon />}
                indicators={props.indicators && true}

            >
                {
                    props.arrayList?.map((item, i) =>
                        <Item
                            key={i}
                            item={item}
                            height={props.height} />)
                }
            </Carousel>
        </Box>
    );
}

function Item(props) {
    return (
        <img style={{
            width: "100%",
            height: props.height + "px",
            objectFit: "cover"
        }}
            src={props.item?.img}
            alt={props.item?.img} />
    )
}

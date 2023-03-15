import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import SectionHeading from '../headings/section-heading';

export default function ImageMasonry(props) {
  return (
    <Box sx={{  minHeight: 829 }}>
      <SectionHeading heading={props.heading} />
     
      <Masonry columns={5} spacing={1}>
        {props.imageList?.map((item, index) => (
          <div key={index}>
            
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

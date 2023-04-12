// import { Typography } from '@mui/material';
// import React from 'react';

// export default function Header() {
//   return (
//        <>
//             <Typography
//                 variant='h1'
//                 component='h2'
//                 color= 'white'
//             >
//                 TripMyDream
//             </Typography>
//        </>
//   );
// }
import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant='h1'
        component='h2'
        color='white'
        onClick={() => navigate('/tripmydream')}
      >
        TripMyDream
      </Typography>
    </>
  );
}

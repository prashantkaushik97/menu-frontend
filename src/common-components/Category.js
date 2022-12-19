import React from 'react'
import CategoryCard from './category-card/CategoryCard'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Category() {
  const [spacing, setSpacing] = React.useState(2);

  return (
    <div><Grid sx={{ flexGrow: 1 }} container spacing={2}>
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2,4,5,6,7].map((value) => (
          <Grid key={value} item>
            
              <CategoryCard/>
          </Grid>
        ))}
      </Grid>
    </Grid>
   
  </Grid></div>
  )
}

export default Category
import { useEffect, useState } from "react";
import { getFrontPageStory } from "../Api/apiCalls";
import CardDisplay from "../Helpers/CardDisplay";
import Grid from '@mui/material/Grid';

const FrontPage = () => {
  const [data, setData] = useState(false);

  const getStory = async () => {
    const result = await getFrontPageStory();
    console.log("🚀 ~ file: FrontPage.js:9 ~ getStory ~ result", result);
    setData(result.hits);
  };

  useEffect(() => {
    getStory();
  }, []);

  return (
    <div>
      <h1>Front page</h1>
      {data &&
        <Grid container spacing={4} sx={{ m: 1 }}>
          {data.map((items) => {
            return (
              <Grid item xs={4} key={items.created_at}>
                <CardDisplay items={items} />
              </Grid>
            )
          })}
        </Grid>
      }

    </div >
  );
};

export default FrontPage;

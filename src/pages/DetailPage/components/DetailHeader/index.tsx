/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import CircularProgressbar from '../../../../components/CircularProgressbar';
import { Video } from '../../../../utils/types';
import './detail.css';

type DetailHeaderProps = {
  video: Video;
};

function DetailHeader({ video }: DetailHeaderProps) {
  function getYear() {
    return video?.release_date ? new Date(video?.release_date) : new Date();
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: 510,
        backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${video?.backdrop_path}')`,
        borderBottom: '1px solid rgba(31.5, 31.5, 31.5, 1)',
        backgroundPosition: 'left calc((50vw - 170px) - 340px) top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Grid container justifyContent="center" sx={{ px: 10, py: 4 }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: 'block',
                minWidth: '300px',
                width: '300px',
                height: '450px',
                position: 'relative',
                top: 0,
                left: 0,
              }}
            >
              <Box
                sx={{
                  display: 'block',
                  minWidth: '300px',
                  width: '300px',
                  height: '450px',
                  position: 'relative',
                  top: 0,
                  left: 0,
                }}
              >
                <img
                  className="imgDetail"
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${video?.poster_path}`}
                  alt={`video ${video?.id}`}
                  style={{ width: '100%' }}
                />
              </Box>
            </Grid>
            <Grid xs={12} md={8} item sx={{ color: 'white' }}>
              <Stack>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: { md: 2 } }}>
                  {video?.original_title} <span style={{ color: 'grey' }}>({getYear().getFullYear()})</span>
                </Typography>
                <Typography variant="subtitle1" sx={{ ml: { md: 2 }, mb: 2 }}>
                  {getYear().toLocaleDateString()} {video?.genres?.map((g) => g.name).toString()}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <CircularProgressbar percentage={video?.vote_average || 0} classes="single-chart-normal" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ ml: { md: 2 }, mb: 2 }}>
                    {video?.tagline}
                  </Typography>
                  <Typography variant="h5" sx={{ ml: { md: 2 } }}>
                    Overview
                  </Typography>
                  <Typography variant="body1" sx={{ ml: { md: 2 }, mb: 2 }}>
                    {video?.overview}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default DetailHeader;

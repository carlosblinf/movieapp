/* eslint-disable react-hooks/rules-of-hooks */
import { Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from '../../store/services/video';
import Spinner from '../../components/Spinner';
import DetailHeader from './components/DetailHeader';
import DetailBody from './components/DetailBody';

function DetailPage() {
  const { id } = useParams();
  if (id === undefined) return null;

  const { data: video, isLoading } = useGetVideoQuery(id);

  if (isLoading) return <Spinner />;
  if (video === undefined) return null;

  return (
    <Paper>
      <DetailHeader video={video} />
      <DetailBody />
    </Paper>
  );
}

export default DetailPage;

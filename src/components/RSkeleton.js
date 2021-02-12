import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';

export default function RSkeleton(props) {
  return (
    <SkeletonTheme color="gray" highlightColor="#444">
      <Skeleton width={window.screen.width<600?80:200} height={window.screen.width<600?8:12}/>
  </SkeletonTheme>
  );
}

import React from 'react';
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';

export default function RSkeleton(props) {
  return (
    <SkeletonTheme color="gray" highlightColor="#444">
      <Skeleton count={props.count} width={props.width?props.width:window.screen.width<600?80:200} height={window.screen.width<600?8:12}/>
  </SkeletonTheme>
  );
}

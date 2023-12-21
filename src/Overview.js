import React from 'react';
import { useRecoilValue } from 'recoil';
import listCountState from './recoil/listCountState';

const Overview = () => {
  const listCount = useRecoilValue(listCountState);
  const { newList, inProgressList, completedList } = listCount
  return (
    <div className='overview'>
      <div>
        <label>New List:</label>
        <span>
          {newList.number}
          <i>({newList.percent})</i>
        </span>
      </div>
      <div>
        <label>In-Progress List:</label>
        <span>
          {inProgressList.number}
          <i>({inProgressList.percent})</i>
        </span>
      </div>
      <div>
        <label>Completed List:</label>
        <span>
          {completedList.number}
          <i>({completedList.percent})</i>
        </span>
      </div>
    </div>
  );
};

export default Overview;
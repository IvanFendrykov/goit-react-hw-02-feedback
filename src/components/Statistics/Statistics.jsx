import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSmile, AiOutlineMeh, AiOutlineFrown } from 'react-icons/ai';
import { MdSummarize, MdPercent } from 'react-icons/md';
import { StaticList, DescrStatistics } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StaticList>
      <li>
        <DescrStatistics>
          <AiOutlineSmile size="14" />
          Good: <span>{good}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <AiOutlineMeh size="14" />
          Neutral: <span>{neutral}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <AiOutlineFrown size="14" />
          Bad: <span>{bad}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdSummarize size="14" />
          Total: <span>{total}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdPercent size="14" />
          Positive feedback: <span>{positivePercentage}%</span>
        </DescrStatistics>
      </li>
    </StaticList>
  ) : (
    <Notification msg="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

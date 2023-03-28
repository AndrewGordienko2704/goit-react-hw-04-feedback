import React from 'react';
import PropTypes from 'prop-types';
import { Option, OptionList } from './FeedbackOptions.styled';


const options = ['good', 'neutral', 'bad'];
export function FeedbackOptions ({ addFeedback }) {
  return (
    <OptionList>
      {options.map(option => {
        return (
          <Option key={option} type="button" onClick={() => addFeedback(option)}>
            {option}
          </Option>
        );
      })}
    </OptionList>
  );
};



FeedbackOptions.propTypes = {
  options: PropTypes.array,
   addFeedback: PropTypes.func,
};
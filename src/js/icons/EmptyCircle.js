import React from 'react';

import Icon from '../Icon';

const EmptyCircle = props => (
  <Icon a11yTitle='EmptyCircle' {...props}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g stroke='#000000' strokeWidth='2'><path d='M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 Z' /></g></g>
  </Icon>
);

export default EmptyCircle;

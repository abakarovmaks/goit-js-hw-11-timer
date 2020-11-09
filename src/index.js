import './css/common.scss';
import CountdownTimer from './js/timer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020, 23:59:59'),
});

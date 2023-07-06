import './style.css';

type Props = {
  percentage: number;
  // eslint-disable-next-line react/require-default-props
  classes?: string;
};

function CircularProgressbar({ percentage = 100, classes }: Props) {
  const correctPercentage = percentage < 10 ? percentage * 10 : percentage;

  function getColor(perc: number) {
    if (perc < 40) return 'red';
    if (perc < 70) return 'yellow';
    return 'green';
  }

  return (
    <div className={`single-chart ${classes}`}>
      <svg viewBox="0 0 36 36" className={`circular-chart circular-chart-normal ${getColor(correctPercentage)}`}>
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${correctPercentage}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">
          {correctPercentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgressbar;

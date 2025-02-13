interface Props {
  stepTitle: string;
  stepNumber: number
}

export default function StepHeader({stepTitle, stepNumber}: Props) {
  return (<div className="step__header">
    <h2 className="step__title">{stepTitle}</h2>
    <label htmlFor="progress-bar" className="step__progressbar-label">Stage 1/3</label>
    <progress className="step__progressbar" max={3} value={stepNumber} id="progress-bar"></progress>
  </div>)
}

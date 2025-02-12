interface Props {
  stageTitle: string;
  stageNumber: number
}

export default function StepHeader({stageTitle, stageNumber}: Props) {
  return (<div className="step__header">
    <h2 className="step__title">{stageTitle}</h2>
    <label htmlFor="progress-bar" className="step__progressbar-label">Stage 1/3</label>
    <progress className="step__progressbar" max={3} value={stageNumber} id="progress-bar"></progress>
  </div>)
}

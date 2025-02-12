interface Props {
  stageTitle: string;
  stageNumber: number
}

export default function StageHeader({stageTitle, stageNumber}: Props) {
  return (<div className="stage__header">
    <h2 className="stage__title">{stageTitle}</h2>
    <label htmlFor="progress-bar" className="stage__progressbar-label">Stage 1/3</label>
    <progress className="stage__progressbar" max={3} value={stageNumber} id="progress-bar"></progress>
  </div>)
}

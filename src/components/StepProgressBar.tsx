interface ProgressBarProps {
  progress: number
}

const StepProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const steps = 4
  const stepWidth = 100 / steps
  const stepProgress = (progress % stepWidth) / stepWidth
  const activeSteps = Math.floor(progress / stepWidth)

  return (
    <div style={{ display: 'flex' }}>
      {Array.from({ length: steps }, (_, index) => {
        const fillRatio = index < activeSteps ? 1 : index === activeSteps ? stepProgress : 0

        return (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '84px',
              height: '8px',
              borderRadius: '15px',
              background: '#B9B9B9',
              boxShadow: '0px 0px 50px 1px rgba(0, 0, 0, 0.25)',
              marginRight: index === steps - 1 ? '0' : '9px',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${fillRatio * 100}%`,
                height: '100%',
                background: '#191919',
                borderRadius: '15px',
              }}
            ></div>
          </div>
        )
      })}
    </div>
  )
}

export default StepProgressBar

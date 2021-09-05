import { useRef } from 'react'
import useWindowDimensions from 'hooks/useWindowDimensions'
import useElementDimensions from 'hooks/useElementDimensions'

const ContentArea = () => {
  const componentRef = useRef()
  const { width } = useWindowDimensions()
  const { width: w } = useElementDimensions(componentRef)

  return (
    <div
      ref={componentRef}
      style={{ backgroundColor: '#cfe8fc', height: '130vh' }}
    >
      <p>Screen Width: {width}</p>
      <p>Element Width: {w}</p>
    </div>
  )
}

export default ContentArea

import React, { useRef, useState } from 'react'
import {
  arrow,
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions
} from '@floating-ui/react'

interface Props {
  Children: React.ReactNode
  referenceElement: React.ReactNode
  style?: string
}
export default function Floating({ Children, referenceElement, style }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(0), flip(), shift()],
    whileElementsMounted: autoUpdate
  })
  const hover = useHover(context, {
    handleClose: safePolygon()
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return (
    <>
      <div className={style} ref={refs.setReference} {...getReferenceProps()}>
        {referenceElement} {/* Render phần tử reference ở đây */}
      </div>
      <FloatingPortal>
        {isOpen && (
          <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            <div className='bg-white' id='arrow'>
              {Children}
            </div>
          </div>
        )}
      </FloatingPortal>
    </>
  )
}

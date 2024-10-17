import classNames from 'classnames'

interface Props {
  star: number
  title: string
  cur?: number
  isCur: boolean
  size?: number
}
export default function Starts(props: Props) {
  const { star, title, cur, isCur, size } = props
  const sizeStart = size || 6
  const curValue = cur || 0
  const percent = (curValue - Math.floor(curValue)) * 100
  const svgColor = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className={classNames(`size-${sizeStart}`, 'text-orange')}
    >
      <path
        fillRule='evenodd'
        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z'
        clipRule='evenodd'
      />
    </svg>
  )
  const svgNone = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className={classNames(`size-${sizeStart}`, 'text-white')}
    >
      <path
        stroke='orange'
        fillRule='evenodd'
        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z'
        clipRule='evenodd'
      />
    </svg>
  )

  const svgRadien = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className={classNames(`size-${sizeStart}`, 'text-orange')}
    >
      <defs>
        <linearGradient id='grad'>
          <stop offset={`${percent}%`} stopColor='rgb(238, 77, 45)' />
          <stop offset={`${percent}%`} stopColor='white' />
        </linearGradient>
      </defs>
      <path
        stroke='orange'
        fill='url(#grad)' // Áp dụng gradient vào path
        fillRule='evenodd'
        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z'
        clipRule='evenodd'
      />
    </svg>
  )

  const svgs = []

  if (!isCur && !Number.isInteger(cur)) {
    for (let i = 0; i < 5; i++) {
      if (i <= star) {
        // svgs.push()
        svgs.push(<span key={i + title}>{svgColor}</span>)
      }
      if (i > star) {
        svgs.push(<span key={i + title}>{svgNone}</span>)
      }
    }
  }

  if (isCur && cur) {
    const current = Math.floor(cur)
    for (let i = 0; i < 5; i++) {
      if (i < current) {
        svgs.push(<span key={i + title}>{svgColor}</span>)
      }
      if (i === current && isCur) {
        svgs.push(<span key={i + title}>{svgRadien}</span>)
      }
      if (i > current) {
        svgs.push(<span key={i + title}>{svgNone}</span>)
      }
    }
  }
  return <div className='flex gap-1 items-center'> {svgs}</div>
}

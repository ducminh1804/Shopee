
export default function SortProductList() {
  return (
    <div className='flex justify-between items-center p-5 bg-white'>
      <div className='flex justify-between gap-4 items-center'>
        <div className='title'>Sắp xếp theo</div>
        <div className='option flex gap-7'>
          <button className='p-2 rounded text-black bg-white active:bg-orange active:text-white'>lien quan</button>
          <button className='p-2 bg-orange rounded'>moi nhat</button>
          <button className='p-2 bg-orange rounded'>ban chay</button>
          <select name='cars' id='cars'>
            <option value='saab'>Giá</option>
            <option value='opel'>Giá: Thấp đến cao</option>
            <option value='audi'>Giá: Cao đến thấp</option>
          </select>
        </div>
      </div>
      <div className='pagination flex items-center gap-2'>
        <div>1/17</div>
        <div className='p-2 bg-gray-500'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5'>
            <path
              fill-rule='evenodd'
              d='M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
              clip-rule='evenodd'
            />
          </svg>
        </div>
        <div className='p-2 bg-gray-500'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5'>
            <path
              fill-rule='evenodd'
              d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
              clip-rule='evenodd'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

const AllocationTables = () => {
  return (
    <div className='text-white border bg-cards1 overflow-auto mb-16 border-slate-300 rounded-lg'>
      <table className='w-full md:min-w-full min-w-[600px] '>
        <thead>
          <tr className='bo border-b border-slate-300 '>
            <th className='text-left p-3 pl-9 border-r'>Total</th>
            <th className='text-left p-3 pl-9 border-r'>Percentage</th>
            <th className='text-right '></th>
          </tr>
        </thead>
        <tbody className='text-slate-300 font-[300]'>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Circulation
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Private Placement
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>10, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>10, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Public Placement{' '}
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Marketing Fees
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>20, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>20, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>Team</td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>22, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>22, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Community
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>10, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>10, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              AI Funds
            </td>
          </tr>{' '}
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>15, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>15, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Official Direct
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>5, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Platform Rewards{' '}
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>3, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>3, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Advisor{' '}
            </td>
          </tr>
          <tr className='bo border-b border-slate-300 '>
            <td className=' p-2 pl-9 border-r'>0</td>
            <td className=' p-2 pl-9 border-r'>0</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>
              Destruction
            </td>
          </tr>
          <tr className=''>
            <td className=' p-2 pl-9 border-r'>100, 000, 000</td>
            <td className=' p-2 pl-9 border-r'>100, 000, 000</td>
            <td className=' p-2 pl-9 text-right font-bold text-white'>Total</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllocationTables;

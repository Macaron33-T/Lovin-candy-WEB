import './ProfileElement.css';

export default function ProfileElementD () {
  return (
    <div className="element-d">
      <div>
        <h2 className='mt-25 text-center text-4xl font-[Jua]'>HOT HIT ITEMS!!</h2>
      </div>
      <div>
        <ul className='flex gap-20 mt-10 justify-center'>
          <li>
            <img src="/assets/candy-cane.png" alt="Candy Cane" className='w-32 h-32'/>
            Candy Cane</li>
          <li>Chocolate Bar</li>
          <li>Gummy Bears</li>
          <li>Lollipop</li>
          <li>Jelly Beans</li>
        </ul>
      </div>
    </div>
  )
}
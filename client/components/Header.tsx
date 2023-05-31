const Header = () => {
    return (<div className='flex justify-between items-center w-full bg-white'>
        <div className='font-bold text-2xl p-4'>Milestone</div>
        <div className='text-blue-400 p-4'>
            <a className="mr-4" href="/login">Login</a>
            <a href='/logout'>Register</a>
        </div>
    </div>)
}

  export default Header;
  
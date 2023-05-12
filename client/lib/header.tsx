export default function Header({ loggedIn }: { loggedIn: boolean }) {
    /*
    Boolean prop 'loggedIn' allows for same header component 
        to be used across site
    */
    return (
        <>
            {loggedIn ? (
                <header className="flex justify-between items-center w-full bg-white">
                    <div className="font-bold text-2xl p-4">Milestoned</div>
                    <div className="text-blue-400 p-4">
                        <a href="/logout">Logout</a>
                    </div>
                </header>
            ) : (
                <header className="flex justify-between items-center w-full bg-white">
                    <div className="font-bold text-2xl p-4">Milestoned</div>
                    <div className="text-blue-400 p-4">
                        <a className="mr-4" href="/login">
                            Login
                        </a>
                        <a href="/register">Register</a>
                    </div>
                </header>
            )}
        </>
    );
}

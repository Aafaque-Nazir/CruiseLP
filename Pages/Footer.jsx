

function Footer() {
  return (
    <div>
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} CruiseShip. All rights reserved.
            </p>
            <p className="text-xs mt-2 tracking-wide">
                Aafaque Nazir
            </p>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer

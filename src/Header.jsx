

const Header =  ({Student}) => {
   return(
    <>
    <table className="table" border="" >
        <thead>
            <tr>
                <th>Name</th>
                <th>roll</th>
                <th>isActive</th>
                <th>Class</th>
                <th>Area</th>
                <th>Address</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {Student.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.roll}</td>
                    <td>{item.isActive ? 'true' : 'false'}</td>
                    <td>{item.Class}</td>
                    <td>{item.Area}</td>
                    <td>{item.Address}</td>
                    <td>{item.Age}</td>
                    <td>{item.Gender}</td>
                    
                </tr>

            ))}
        </tbody>
    </table>
    </>
   )
}

export default Header;
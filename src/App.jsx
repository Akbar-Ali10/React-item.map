import './App.css'
import Header from './Header'
import Login from './Login';

function App() {

  const Student = [
    {
      name: "Akbar",
      roll: "1",
      isActive: "True",
      Class: "12",
      Area: "Korangi",
      Address: "L-143",
      Age:"17",
      Gender:"Male"
    },
    {
      name: "Ali",
      roll: "2",
      isActive: "True",
      Class: "12",
      Area: "Korangi",
      Address: "L-123",
      Age:"18",
      Gender:"Male"
    },
    {
      name: "Hussain",
      roll: "3",
      isActive: "True",
      Class: "12",
      Area: "Korangi",
      Address: "L-243",
      Age:"17",
      Gender:"Male"
    },
    {
      name: "Ahmed",
      roll: "4",
      isActive: "True",
      Class: "12",
      Area: "Korangi",
      Address: "L-443",
      Age:"17",
      Gender:"Male"
    },
    {
      name: "Own",
      roll: "7",
      isActive: "True",
      Class: "12",
      Area: "Korangi",
      Address: "L-843",
      Age:"17",
      Gender:"Male"
    },
    {
      name: "Raza",
      roll: "12",
      isActive: "True",
      Class: "9",
      Area: "Korangi",
      Address: "L-743",
      Age:"14",
      Gender:"Male"
    },
    {
      name: "Nasrullah",
      roll: "23",
      isActive: "True",
      Class: "10",
      Area: "DHA",
      Address: "R-343",
      Age:"16",
      Gender:"Male"
    },


  ]

  return (
    <>
      {/* <Header Student={Student} /> */}
      <Login/>

    </>
  )
}

export default App;

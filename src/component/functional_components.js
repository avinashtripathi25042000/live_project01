import React from "react"

export function FunctionalComponent() {
  return <h1><center>SingUp</center></h1>

}
export function Detalis() {
  return (
    <div style={boxStyle}><center>
      <form>
        <table>
          <tr>
            <th>
              <label for="fname">First Name  </label>
            </th>
            <input type="text" id="fname" name="fname"></input></tr>
            <tr>
            <th>
              <label for="lname">Last Name  </label></th>
            <input type="text" id="lname" name="lname"></input>
          </tr>
          <tr><th>
            <label for="email"> Email </label></th>
            <input type="text" id="email" name="email" placeholder="abc@gmail.com"></input>
          </tr>
          <tr><th>
            <label for="phnum">Phone Number  </label></th>
            <input type="text" id="phnum" name="phnum" placeholder="+91 1234567890"></input>
          </tr>
        </table>
      </form>
    </center>
    </div>);
}
const boxStyle = {
  border: 'solid black',
  backgroundColor: "#87CEEB",
  padding: "20px 120px 20px 120px",
  borderRadius: "300px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
};
export function Hello() {
  return ("hello");
}

/*Write you JS code here. Solve the problem described under the prices section.
 */



function ComputePrice() {
  var output1 = document.getElementById("input1").value;

  var output2 = document.getElementById("input2").value;

  var result = document.getElementById("#lbl");

  if ((output1 && output2) == "" || output1 < 0 || output2 < 0) {
    result.innerHTML = "Please enter valid numbers";
    return;
  }

  result.innerHTML = output1 * 8 + output2 * 5;
}

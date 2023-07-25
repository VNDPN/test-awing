import "./App.css";
import AppTest from "./component/AppTest.tsx";
// Bài 2. Tìm chi phí tối thiểu để làm cho các phần tử trong mảng bằng nhau.
function findMinCost(nums, cost) {
  const n = nums.length;

  // Tìm giá trị lớn nhất và nhỏ nhất trong mảng nums
  let minVal = nums[0];
  let maxVal = nums[0];
  for (let i = 1; i < n; i++) {
    minVal = Math.min(minVal, nums[i]);
    maxVal = Math.max(maxVal, nums[i]);
  }

  // Tính tổng chi phí để đưa từng phần tử về giá trị lớn nhất hoặc giá trị nhỏ nhất
  let minCostToMax = 0;
  let minCostToMin = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === maxVal) {
      minCostToMin += cost[i];
    } else if (nums[i] === minVal) {
      minCostToMax += cost[i];
    }
  }

  // Chọn giá trị lớn nhất hoặc nhỏ nhất mà có tổng chi phí nhỏ nhất
  return Math.min(minCostToMax, minCostToMin);
}

// Test ví dụ 1
const nums1 = [1, 3, 5, 2];
const cost1 = [2, 3, 1, 14];
console.log(findMinCost(nums1, cost1)); // Output: 8

// Test ví dụ 2
const nums2 = [2, 2, 2, 2];
const cost2 = [4, 2, 8, 1, 3];
console.log(findMinCost(nums2, cost2)); // Output: 0

// Bài 1. Viết 1 ứng dụng nhỏ bằng React

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test By : Đồng Phúc Nguyễn (VN_DPN)</p>
        <a
          className="App-link"
          href="https://www.facebook.com/vndpn9x"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Contact
        </a>
        <a
          className="App-link"
          href="tel:0354099955"
          target="_blank"
          rel="noopener noreferrer"
        >
          0354099955
        </a>
      </header>
      <AppTest></AppTest>
    </div>
  );
}

export default App;

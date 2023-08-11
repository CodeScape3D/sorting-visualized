import React from "react";
import { Component } from "react";
import HomeNavbar from "./HomeNavbar";
import SortVisualizer from "./SortVisualizer";
import BubbleSort, { BubbleSortLegend } from "./../algorithms/BubbleSort";
import SelectionSort, {
  SelectionSortLegend,
} from "./../algorithms/SelectionSort";
import InsertionSort, {
  InsertionSortLegend,
} from "./../algorithms/InsertionSort";
import MergeSort, { MergeSortLegend } from "./../algorithms/MergeSort";
import QuickSort, { QuickSortLegend } from "./../algorithms/QuickSort";
import HeapSort, { HeapSortLegend } from "./../algorithms/HeapSort";
import ShellSort, { ShellSortLegend } from "./../algorithms/ShellSort";
import ThreeWayQuickSort, {
  ThreeWayQuickSortLegend,
} from "./../algorithms/ThreeWayQuickSort";
import CocktailSort, {
  CocktailSortLegend,
} from "./../algorithms/CocktailSort";

class Home extends Component {
  state = {
    array: [],
    arraySize: 5,
    stepHistory: [],
    algorithm: "Bubble Sort",
  };

  ALG = {
    "Bubble Sort": BubbleSort,
    "Selection Sort": SelectionSort,
    "Insertion Sort": InsertionSort,
    "Merge Sort": MergeSort,
    "Quick Sort": QuickSort,
    "Heap Sort": HeapSort,
    "Shell Sort": ShellSort,
    "Cocktail Sort": CocktailSort,
    "ThreeWayQuick Sort": ThreeWayQuickSort,
  };

  ALG_MAP = {
    "Bubble Sort": BubbleSortLegend,
    "Selection Sort": SelectionSortLegend,
    "Insertion Sort": InsertionSortLegend,
    "Merge Sort": MergeSortLegend,
    "Quick Sort": QuickSortLegend,
    "Heap Sort": HeapSortLegend,
    "Shell Sort": ShellSortLegend,
    "Cocktail Sort": CocktailSortLegend,
    "ThreeWayQuick Sort": ThreeWayQuickSortLegend,
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        stepHistory: [],
      },
      this.createRecord
    );
  };

  handleAlgorithmChange = (e) => {
    function syncGenCall() {
      this.generateRandomArray()
    }
    let alg = e.target.value + " Sort";
    this.setState({ algorithm: alg }, syncGenCall);
  };

  handleArraySizeChange = (e) => {
    function syncGenCall() {
      this.generateRandomArray()
    }

    let arrLen = Number(e.target.value);
    arrLen = arrLen > 500 ? 500 : arrLen;
    arrLen = arrLen < 0 ? 3 : arrLen;
    this.setState({ arraySize: arrLen }, syncGenCall);
  };

  createRecord = () => {
    const numbers = [...this.state.array];
    const sort = this.ALG[this.state.algorithm];
    if (sort) {
      const stepHistory = sort(numbers);
      this.setState({ stepHistory });
    }
  };

  render() {
    const colorKey = this.ALG_MAP[this.state.algorithm];
    return (
      <div>
        <HomeNavbar
          onGenerateRandomArray={this.generateRandomArray}
          algorithm={this.state.algorithm}
          onAlgorithmChange={this.handleAlgorithmChange}
          arraySize={this.state.arraySize}
        ></HomeNavbar>

        <p>Seleccionado: <code>{this.state.algorithm}</code></p>

        <SortVisualizer
          array={this.state.array}
          stepHistory={this.state.stepHistory}
          colorKey={colorKey}
          algorithm={this.state.algorithm}
          onArraySizeChange={this.handleArraySizeChange}
        ></SortVisualizer>
      </div>
    );
  }
}

export default Home;
